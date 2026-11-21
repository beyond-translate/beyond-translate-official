import { describe, expect, it, vi } from 'vitest';

import {
  fillTemplate,
  isTerminalFailure,
  isValidEmail,
  isValidTransactionNumber,
  normalizeEmail,
  normalizeTransactionNumber,
  submitOrder,
  type OrderSubmissionOptions,
} from '../src/lib/purchase';

const PRIMARY = 'https://api.example.test';
const BACKUP = 'https://api-backup.example.test';
const ORDER_PATH = '/v1/beyond-translate/site/orders';
const ORDER_URL = `${PRIMARY}${ORDER_PATH}`;
const BACKUP_URL = `${BACKUP}${ORDER_PATH}`;

const INPUT = {
  email: 'buyer@example.test',
  offering: 'pro',
  paymentMethod: 'alipay',
  transactionNumber: '2026111900012345',
  humanToken: 'turnstile-token',
} as const;

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function options(network: OrderSubmissionOptions['network']): OrderSubmissionOptions {
  return {
    network,
    primary: PRIMARY,
    backup: BACKUP,
    orderPath: ORDER_PATH,
    timeoutMs: 50,
  };
}

describe('purchase input normalization', () => {
  it('trims and lowercases the purchase email', () => {
    expect(normalizeEmail('  Buyer@Example.TEST ')).toBe('buyer@example.test');
    expect(normalizeEmail('buyer@example.test')).toBe('buyer@example.test');
  });

  it('validates the normalized purchase email', () => {
    expect(isValidEmail(' Buyer@Example.TEST ')).toBe(true);
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('   ')).toBe(false);
    expect(isValidEmail('buyer')).toBe(false);
    expect(isValidEmail('buyer@example')).toBe(false);
    expect(isValidEmail('buyer @example.test')).toBe(false);
    expect(isValidEmail(`${'a'.repeat(242)}@example.test`)).toBe(false);
    expect(isValidEmail(`${'a'.repeat(241)}@example.test`)).toBe(true);
  });

  it('removes all whitespace from the transaction number', () => {
    expect(normalizeTransactionNumber('  2026 1119\n0001\t2345 ')).toBe('2026111900012345');
  });

  it('accepts 6 to 66 letters, digits, underscores and hyphens as a transaction number', () => {
    expect(isValidTransactionNumber('123456')).toBe(true);
    expect(isValidTransactionNumber('abcd_EF-12')).toBe(true);
    expect(isValidTransactionNumber(' 123 456 ')).toBe(true);
    expect(isValidTransactionNumber('12345')).toBe(false);
    expect(isValidTransactionNumber('a'.repeat(67))).toBe(false);
    expect(isValidTransactionNumber('a'.repeat(66))).toBe(true);
    expect(isValidTransactionNumber('1234.56')).toBe(false);
    expect(isValidTransactionNumber('交易单号1234')).toBe(false);
  });

  it('fills named placeholders in user-facing copy', () => {
    expect(fillTemplate('{method} · {amount}', { method: '支付宝', amount: '¥8.53' })).toBe('支付宝 · ¥8.53');
    expect(fillTemplate('{unknown} stays', {})).toBe('{unknown} stays');
  });

  it('marks only configuration failures as terminal', () => {
    expect(isTerminalFailure('originNotAllowed')).toBe(true);
    expect(isTerminalFailure('notOnSale')).toBe(true);
    expect(isTerminalFailure('invalidRequest')).toBe(false);
    expect(isTerminalFailure('rateLimited')).toBe(false);
    expect(isTerminalFailure('unavailable')).toBe(false);
  });
});

describe('order submission', () => {
  it('posts the expected fields to the primary host and reports success', async () => {
    const network = vi.fn<OrderSubmissionOptions['network']>(async () => jsonResponse(200, { ok: true }));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'submitted' });
    expect(network).toHaveBeenCalledTimes(1);
    const [url, init] = network.mock.calls[0]!;
    expect(url).toBe(ORDER_URL);
    expect(init?.method).toBe('POST');
    expect(init?.credentials).toBe('omit');
    expect(JSON.parse(String(init?.body))).toEqual({
      email: 'buyer@example.test',
      offering: 'pro',
      paymentMethod: 'alipay',
      transactionNumber: '2026111900012345',
      humanToken: 'turnstile-token',
    });
  });

  it('maps every documented rejection to its failure kind without touching the backup host', async () => {
    const cases: [status: number, body: unknown, failure: string][] = [
      [400, { ok: false, code: 'invalid_request' }, 'invalidRequest'],
      [403, { ok: false, code: 'origin_not_allowed' }, 'originNotAllowed'],
      [422, { ok: false, code: 'human_verification_failed' }, 'humanCheckFailed'],
      [422, { ok: false, code: 'offering_not_on_sale' }, 'notOnSale'],
      [422, { ok: false, code: 'payment_method_unavailable' }, 'methodUnavailable'],
      [429, { ok: false, code: 'rate_limited' }, 'rateLimited'],
      [500, { ok: false, code: 'internal_error' }, 'serverError'],
    ];

    for (const [status, body, failure] of cases) {
      const network = vi.fn<OrderSubmissionOptions['network']>(async () => jsonResponse(status, body));
      const result = await submitOrder(INPUT, options(network));
      expect(result, `${status} ${JSON.stringify(body)}`).toEqual({ status: 'failure', failure });
      expect(network, `${status} ${JSON.stringify(body)}`).toHaveBeenCalledTimes(1);
      expect(network.mock.calls[0]![0]).toBe(ORDER_URL);
    }
  });

  it('reports an already processed payment separately from failures', async () => {
    const network = vi.fn<OrderSubmissionOptions['network']>(async () =>
      jsonResponse(422, { ok: false, code: 'payment_already_processed' }),
    );

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'alreadySubmitted' });
    expect(network).toHaveBeenCalledTimes(1);
  });

  it('fails over to the backup host after a transport error', async () => {
    const network = vi
      .fn<OrderSubmissionOptions['network']>()
      .mockRejectedValueOnce(new TypeError('fetch failed'))
      .mockResolvedValueOnce(jsonResponse(200, { ok: true }));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'submitted' });
    expect(network.mock.calls.map(([url]) => url)).toEqual([ORDER_URL, BACKUP_URL]);
  });

  it('fails over to the backup host after a gateway error', async () => {
    for (const status of [502, 503, 504]) {
      const network = vi
        .fn<OrderSubmissionOptions['network']>()
        .mockResolvedValueOnce(jsonResponse(status, { ok: false }))
        .mockResolvedValueOnce(jsonResponse(200, { ok: true }));

      const result = await submitOrder(INPUT, options(network));

      expect(result, String(status)).toEqual({ status: 'submitted' });
      expect(
        network.mock.calls.map(([url]) => url),
        String(status),
      ).toEqual([ORDER_URL, BACKUP_URL]);
    }
  });

  it('fails over when the success response is unreadable', async () => {
    const network = vi
      .fn<OrderSubmissionOptions['network']>()
      .mockResolvedValueOnce(new Response('<html>oops</html>', { status: 200 }))
      .mockResolvedValueOnce(jsonResponse(200, { ok: true }));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'submitted' });
    expect(network.mock.calls.map(([url]) => url)).toEqual([ORDER_URL, BACKUP_URL]);
  });

  it('does not fail over when a success response is readable but not ok', async () => {
    const network = vi.fn<OrderSubmissionOptions['network']>(async () => jsonResponse(200, { ok: false }));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'failure', failure: 'invalidResponse' });
    expect(network.mock.calls.map(([url]) => url)).toEqual([ORDER_URL]);
  });

  it('reports an unreachable service after both hosts fail', async () => {
    const network = vi.fn<OrderSubmissionOptions['network']>().mockRejectedValue(new TypeError('fetch failed'));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'failure', failure: 'unavailable' });
    expect(network.mock.calls.map(([url]) => url)).toEqual([ORDER_URL, BACKUP_URL]);
  });

  it('reports a server error when both hosts answer with a gateway error', async () => {
    const network = vi.fn<OrderSubmissionOptions['network']>().mockResolvedValue(jsonResponse(503, { ok: false }));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'failure', failure: 'serverError' });
    expect(network.mock.calls.map(([url]) => url)).toEqual([ORDER_URL, BACKUP_URL]);
  });

  it('reports an invalid response when both hosts answer with unreadable bodies', async () => {
    const network = vi
      .fn<OrderSubmissionOptions['network']>()
      .mockImplementation(async () => new Response('not json', { status: 200 }));

    const result = await submitOrder(INPUT, options(network));

    expect(result).toEqual({ status: 'failure', failure: 'invalidResponse' });
    expect(network).toHaveBeenCalledTimes(2);
  });

  it('does not fail over after a client error or an internal server error', async () => {
    for (const status of [400, 403, 422, 429, 500]) {
      const network = vi.fn<OrderSubmissionOptions['network']>().mockResolvedValue(jsonResponse(status, {}));
      await submitOrder(INPUT, options(network));
      expect(
        network.mock.calls.map(([url]) => url),
        String(status),
      ).toEqual([ORDER_URL]);
    }
  });

  it('times out a host and tries the backup host', async () => {
    const network = vi.fn<OrderSubmissionOptions['network']>((_url, init) => {
      return new Promise<Response>((_resolve, reject) => {
        init?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
      });
    });

    const result = await submitOrder(INPUT, { ...options(network), timeoutMs: 10 });

    expect(result).toEqual({ status: 'failure', failure: 'unavailable' });
    expect(network).toHaveBeenCalledTimes(2);
  });
});
