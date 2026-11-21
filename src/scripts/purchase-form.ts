import { purchaseConfig, type PaymentMethodId } from '@/config/purchase';
import { getPurchaseStrings } from '@/i18n/purchase';
import {
  fillTemplate,
  isTerminalFailure,
  isValidEmail,
  isValidTransactionNumber,
  normalizeEmail,
  normalizeTransactionNumber,
  submitOrder,
  type OrderResult,
} from '@/lib/purchase';

interface TurnstileApi {
  render(container: HTMLElement, options: Record<string, unknown>): string | undefined;
  reset(widgetId?: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_LOAD_TIMEOUT_MS = 10_000;

function find<T extends Element>(root: ParentNode, selector: string): T | null {
  return root.querySelector<T>(selector);
}

/** The page markup is static; a missing required element means the script and the form are out of sync. */
function must<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing purchase form element: ${selector}`);
  return element;
}

function selectText(element: HTMLElement): void {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

/**
 * Wire the purchase form: inline validation, Turnstile, submission, and the result panels.
 * The request itself lives in `submitOrder`; this module only owns DOM state.
 */
export function initPurchaseForm(): void {
  const foundForm = find<HTMLFormElement>(document, '[data-purchase-form]');
  if (!foundForm) return;
  const form = foundForm;

  const copy = getPurchaseStrings(form.dataset.locale);

  const formWrap = must<HTMLElement>(document, '[data-form-wrap]');
  const emailInput = must<HTMLInputElement>(form, '[data-field-email]');
  const emailConfirmInput = must<HTMLInputElement>(form, '[data-field-email-confirm]');
  const transactionInput = must<HTMLInputElement>(form, '[data-field-transaction]');
  const methodFieldset = must<HTMLFieldSetElement>(form, '[data-method-fieldset]');
  const submitButton = must<HTMLButtonElement>(form, '[data-submit]');
  const formProblem = must<HTMLElement>(form, '[data-form-problem]');
  const transactionHint = must<HTMLElement>(form, '[data-transaction-hint]');
  const turnstileContainer = must<HTMLElement>(form, '[data-turnstile]');
  const turnstileStatus = must<HTMLElement>(form, '[data-turnstile-status]');
  const turnstileFallback = must<HTMLElement>(form, '[data-turnstile-fallback]');

  const successPanel = must<HTMLElement>(document, '[data-result-success]');
  const successBody = must<HTMLElement>(document, '[data-success-body]');
  const successEmail = must<HTMLElement>(document, '[data-success-email]');
  const problemPanel = must<HTMLElement>(document, '[data-result-problem]');
  const problemTitle = must<HTMLElement>(document, '[data-problem-title]');
  const problemBody = must<HTMLElement>(document, '[data-problem-body]');
  const copyStatus = find<HTMLElement>(document, '[data-copy-status]');

  const fieldErrors = {
    email: must<HTMLElement>(form, '[data-error="email"]'),
    emailConfirm: must<HTMLElement>(form, '[data-error="emailConfirm"]'),
    method: must<HTMLElement>(form, '[data-error="method"]'),
    transaction: must<HTMLElement>(form, '[data-error="transaction"]'),
  };

  let submitting = false;
  let widgetId: string | null = null;
  let turnstileFailed = false;

  function selectedMethod(): PaymentMethodId | null {
    const checked = find<HTMLInputElement>(form, 'input[name="payment-method"]:checked');
    return checked ? (checked.value as PaymentMethodId) : null;
  }

  function clearFieldError(key: keyof typeof fieldErrors, control: HTMLElement): void {
    const error = fieldErrors[key];
    error.hidden = true;
    error.textContent = '';
    control.removeAttribute('aria-invalid');
  }

  function setFieldError(key: keyof typeof fieldErrors, message: string, control: HTMLElement): void {
    const error = fieldErrors[key];
    error.hidden = false;
    error.textContent = message;
    control.setAttribute('aria-invalid', 'true');
  }

  function validate(): boolean {
    for (const [key, control] of [
      ['email', emailInput],
      ['emailConfirm', emailConfirmInput],
      ['transaction', transactionInput],
    ] as const) {
      clearFieldError(key, control);
    }
    clearFieldError('method', methodFieldset);

    const invalidControls: HTMLElement[] = [];
    const invalid = (key: keyof typeof fieldErrors, message: string, control: HTMLElement): void => {
      setFieldError(key, message, control);
      invalidControls.push(control);
    };

    const email = normalizeEmail(emailInput.value);
    if (email === '') invalid('email', copy.form.requiredEmail, emailInput);
    else if (!isValidEmail(email)) invalid('email', copy.form.invalidEmail, emailInput);

    const confirmation = normalizeEmail(emailConfirmInput.value);
    if (confirmation === '') invalid('emailConfirm', copy.form.requiredEmail, emailConfirmInput);
    else if (!isValidEmail(confirmation)) invalid('emailConfirm', copy.form.invalidEmail, emailConfirmInput);
    else if (confirmation !== email) invalid('emailConfirm', copy.form.emailMismatch, emailConfirmInput);

    if (selectedMethod() === null) invalid('method', copy.form.requiredMethod, methodFieldset);

    const transaction = normalizeTransactionNumber(transactionInput.value);
    if (transaction === '') invalid('transaction', copy.form.requiredTransaction, transactionInput);
    else if (!isValidTransactionNumber(transaction))
      invalid('transaction', copy.form.invalidTransaction, transactionInput);

    invalidControls[0]?.focus();
    return invalidControls.length === 0;
  }

  function showFormProblem(message: string): void {
    formProblem.textContent = message;
    formProblem.hidden = false;
    formProblem.focus();
  }

  function hideFormProblem(): void {
    formProblem.hidden = true;
    formProblem.textContent = '';
  }

  function showResultPanel(panel: HTMLElement): void {
    formWrap.hidden = true;
    panel.hidden = false;
    panel.focus();
  }

  function showProblem(title: string, body: string): void {
    problemTitle.textContent = title;
    problemBody.textContent = body;
    showResultPanel(problemPanel);
  }

  function handleResult(result: OrderResult, email: string): void {
    if (result.status === 'submitted') {
      successBody.textContent = fillTemplate(copy.success.body, { email });
      successEmail.textContent = email;
      showResultPanel(successPanel);
      return;
    }

    if (result.status === 'alreadySubmitted') {
      showProblem(copy.already.title, copy.errors.alreadySubmitted);
      return;
    }

    if (isTerminalFailure(result.failure)) {
      showProblem(copy.form.problemTitle, copy.errors[result.failure]);
      return;
    }

    showFormProblem(copy.errors[result.failure]);
  }

  function humanToken(): string {
    const response = find<HTMLInputElement>(turnstileContainer, 'input[name="cf-turnstile-response"]');
    return response?.value.trim() ?? '';
  }

  function markTurnstileFailed(): void {
    if (turnstileFailed) return;
    turnstileFailed = true;
    turnstileStatus.textContent = copy.form.turnstileFailed;
    turnstileStatus.hidden = false;
    turnstileFallback.hidden = false;
  }

  function renderTurnstile(): boolean {
    const api = window.turnstile;
    if (!api) return false;
    try {
      widgetId =
        api.render(turnstileContainer, {
          sitekey: purchaseConfig.turnstile.siteKey,
          theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
          callback: () => {
            if (formProblem.textContent === copy.form.missingToken) hideFormProblem();
          },
        }) ?? null;
      turnstileStatus.hidden = true;
      turnstileFallback.hidden = true;
      return true;
    } catch {
      markTurnstileFailed();
      return true;
    }
  }

  function resetTurnstile(): void {
    if (widgetId !== null && window.turnstile) {
      try {
        window.turnstile.reset(widgetId);
      } catch {
        // A widget that cannot be reset is replaced on the next page load; the token is already used.
      }
    }
  }

  emailInput.addEventListener('input', () => clearFieldError('email', emailInput));
  emailConfirmInput.addEventListener('input', () => clearFieldError('emailConfirm', emailConfirmInput));
  transactionInput.addEventListener('input', () => clearFieldError('transaction', transactionInput));
  methodFieldset.addEventListener('change', () => {
    clearFieldError('method', methodFieldset);
    const method = selectedMethod();
    transactionHint.textContent = method ? copy.form.transactionHints[method] : '';
    transactionHint.hidden = method === null;
  });

  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-copy-address]')) {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const address = button.dataset.copyAddress ?? '';
      let message = copy.payment.copied;
      try {
        await navigator.clipboard.writeText(address);
      } catch {
        const code = button.closest('[data-address]')?.querySelector('code');
        if (code) selectText(code);
        message = copy.payment.copyFailed;
      }
      if (copyStatus) copyStatus.textContent = message;
      if (message === copy.payment.copied) {
        button.textContent = message;
        window.setTimeout(() => {
          button.textContent = copy.payment.copy;
        }, 2000);
      }
    });
  }

  const script = document.getElementById('purchase-turnstile-script');
  script?.addEventListener('error', () => markTurnstileFailed());

  let turnstileStarted = false;

  function startTurnstile(): void {
    if (turnstileStarted) return;
    turnstileStarted = true;
    if (!renderTurnstile()) {
      const startedAt = Date.now();
      const timer = window.setInterval(() => {
        if (renderTurnstile() || Date.now() - startedAt >= TURNSTILE_LOAD_TIMEOUT_MS) {
          window.clearInterval(timer);
          if (widgetId === null) markTurnstileFailed();
        }
      }, 150);
    }
  }

  // The order form lives in a dialog; render Turnstile only once it is visible, since a hidden
  // container gives the widget nothing to size against.
  const orderDialog = document.getElementById('buy-order-dialog');
  if (orderDialog) {
    orderDialog.addEventListener('bt:dialog-open', startTurnstile, { once: true });
  } else {
    startTurnstile();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (submitting) return;

    hideFormProblem();
    if (!validate()) return;

    const method = selectedMethod();
    if (method === null) return;

    const token = humanToken();
    if (token === '') {
      showFormProblem(copy.form.missingToken);
      turnstileContainer.focus();
      return;
    }

    const email = normalizeEmail(emailInput.value);
    submitting = true;
    submitButton.disabled = true;
    submitButton.textContent = copy.form.submitting;

    void submitOrder(
      {
        email,
        offering: purchaseConfig.offeringId,
        paymentMethod: method,
        transactionNumber: normalizeTransactionNumber(transactionInput.value),
        humanToken: token,
      },
      {
        network: (url, init) => fetch(url, init),
        primary: purchaseConfig.api.primary,
        backup: purchaseConfig.api.backup,
        orderPath: purchaseConfig.api.orderPath,
        timeoutMs: purchaseConfig.api.timeoutMs,
      },
    )
      .catch((): OrderResult => ({ status: 'failure', failure: 'unavailable' }))
      .then((result) => handleResult(result, email))
      .finally(() => {
        resetTurnstile();
        submitting = false;
        submitButton.disabled = false;
        submitButton.textContent = copy.form.submit;
      });
  });
}
