import type { PaymentMethodId } from '../config/purchase';

/** The failure kinds the purchase form can show. Kept as a value so the dictionary tests can cover every one. */
export const ORDER_FAILURES = [
  'invalidRequest',
  'originNotAllowed',
  'humanCheckFailed',
  'notOnSale',
  'methodUnavailable',
  'alreadySubmitted',
  'rateLimited',
  'serverError',
  'unavailable',
  'invalidResponse',
] as const;

export type OrderFailure = (typeof ORDER_FAILURES)[number];

/**
 * Failures that end the flow: the form is hidden instead of left open for another attempt.
 * An already submitted payment is a separate result status, not a failure.
 */
const TERMINAL_FAILURES: readonly OrderFailure[] = ['originNotAllowed', 'notOnSale'];

export function isTerminalFailure(failure: OrderFailure): boolean {
  return TERMINAL_FAILURES.includes(failure);
}

export const EMAIL_MAX_LENGTH = 254;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TRANSACTION = /^[A-Za-z0-9_-]{6,66}$/;

/** Trim and lowercase so whitespace or case differences cannot break activation. */
export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

export function isValidEmail(raw: string): boolean {
  const email = normalizeEmail(raw);
  return email.length > 0 && email.length <= EMAIL_MAX_LENGTH && EMAIL.test(email);
}

/** Remove all whitespace; payment apps often show the number in groups. */
export function normalizeTransactionNumber(raw: string): string {
  return raw.replace(/\s+/g, '');
}

export function isValidTransactionNumber(raw: string): boolean {
  return TRANSACTION.test(normalizeTransactionNumber(raw));
}

/** Fill `{name}` placeholders used by the purchase dictionary. Unknown placeholders stay visible. */
export function fillTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

export interface OrderInput {
  email: string;
  offering: string;
  paymentMethod: PaymentMethodId;
  transactionNumber: string;
  humanToken: string;
}

export type OrderFailureKind = Exclude<OrderFailure, 'alreadySubmitted'>;

export type OrderResult =
  { status: 'submitted' } | { status: 'alreadySubmitted' } | { status: 'failure'; failure: OrderFailureKind };

export type OrderNetwork = (url: string, init: RequestInit) => Promise<Response>;

export interface OrderSubmissionOptions {
  network: OrderNetwork;
  primary: string;
  backup: string;
  orderPath: string;
  timeoutMs: number;
}

const REJECTION_CODES: Record<string, OrderFailureKind> = {
  human_verification_failed: 'humanCheckFailed',
  offering_not_on_sale: 'notOnSale',
  payment_method_unavailable: 'methodUnavailable',
};

type AttemptOutcome = { retry: boolean; result: OrderResult };

function outcome(result: OrderResult): AttemptOutcome {
  return { retry: false, result };
}

function retryable(result: OrderResult): AttemptOutcome {
  return { retry: true, result };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

const UNREADABLE = Symbol('unreadable');

async function readJson(response: Response): Promise<unknown | typeof UNREADABLE> {
  try {
    return await response.json();
  } catch {
    return UNREADABLE;
  }
}

async function requestWithTimeout(
  network: OrderNetwork,
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_resolve, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(new DOMException('Aborted', 'AbortError'));
    }, timeoutMs);
  });

  try {
    return await Promise.race([network(url, { ...init, signal: controller.signal }), timeout]);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * One attempt against one host.
 * Retryable outcomes are the ones where the request may not have been processed: transport errors, timeouts, unreadable responses, and gateway errors.
 * Everything the license service itself answered is final and must not be replayed.
 */
async function attempt(options: OrderSubmissionOptions, base: string, input: OrderInput): Promise<AttemptOutcome> {
  let response: Response;
  try {
    response = await requestWithTimeout(
      options.network,
      `${base}${options.orderPath}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(input),
        credentials: 'omit',
      },
      options.timeoutMs,
    );
  } catch {
    return retryable({ status: 'failure', failure: 'unavailable' });
  }

  const status = response.status;

  if (status === 200) {
    const body = await readJson(response);
    if (body === UNREADABLE) return retryable({ status: 'failure', failure: 'invalidResponse' });
    return isRecord(body) && body.ok === true
      ? outcome({ status: 'submitted' })
      : outcome({ status: 'failure', failure: 'invalidResponse' });
  }

  if (status === 502 || status === 503 || status === 504) {
    return retryable({ status: 'failure', failure: 'serverError' });
  }

  if (status === 400) return outcome({ status: 'failure', failure: 'invalidRequest' });
  if (status === 403) return outcome({ status: 'failure', failure: 'originNotAllowed' });
  if (status === 429) return outcome({ status: 'failure', failure: 'rateLimited' });
  if (status >= 500) return outcome({ status: 'failure', failure: 'serverError' });

  if (status === 422) {
    const body = await readJson(response);
    const code = isRecord(body) && typeof body.code === 'string' ? body.code : '';
    if (code === 'payment_already_processed') return outcome({ status: 'alreadySubmitted' });
    const failure = REJECTION_CODES[code];
    return outcome({ status: 'failure', failure: failure ?? 'invalidResponse' });
  }

  return outcome({ status: 'failure', failure: 'invalidResponse' });
}

/**
 * Submit a normalized order.
 * Tries the primary host, then the backup host once, and only for outcomes where replaying cannot duplicate an order.
 * Resolves to a discriminated result; it never throws for a failed request.
 */
export async function submitOrder(input: OrderInput, options: OrderSubmissionOptions): Promise<OrderResult> {
  const primary = await attempt(options, options.primary, input);
  if (!primary.retry) return primary.result;

  const backup = await attempt(options, options.backup, input);
  return backup.result;
}
