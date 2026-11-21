import {
  PAYMENT_METHOD_IDS,
  purchaseConfig,
  type PaymentMethodConfig,
  type PaymentMethodId,
  type PurchaseConfig,
} from '../config/purchase';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HTTPS_ORIGIN = /^https:\/\/[^/]+$/;
const OFFERING = /^[a-z0-9][a-z0-9-]*$/;
const CNY_PRICE = /^¥\d+(?:\.\d{1,2})?$/;
const USDT_PRICE = /^\d+(?:\.\d{1,2})?\s+USDT$/;
// Production keys start with `0x`; Cloudflare's test keys start with `1x`, `2x` or `3x`.
const SITE_KEY = /^(?:0x|[123]x)[0-9A-Za-z_-]{16,}$/;
const ALIPAY_PAYLOAD = /^https?:\/\//;
const WECHAT_PAYLOAD = /^wxp:\/\//;
const TRC20_ADDRESS = /^T[1-9A-HJ-NP-Za-km-z]{33}$/;
const ERC20_ADDRESS = /^0x[0-9a-fA-F]{40}$/;

type PaymentMethodValidator = (method: PaymentMethodConfig) => string[];

function validateUsdt(
  method: PaymentMethodConfig,
  id: 'usdt-trc20' | 'usdt-erc20',
  addressPattern: RegExp,
  network: 'TRC20' | 'ERC20',
): string[] {
  const errors: string[] = [];
  if (!addressPattern.test(method.payload)) errors.push(`paymentMethods.${id}.payload`);
  if (!addressPattern.test(method.address ?? '')) errors.push(`paymentMethods.${id}.address`);
  if (method.network !== network) errors.push(`paymentMethods.${id}.network`);
  if (method.payload !== method.address) errors.push(`paymentMethods.${id}.addressMatchesPayload`);
  return errors;
}

const PAYMENT_METHOD_VALIDATORS: Record<PaymentMethodId, PaymentMethodValidator> = {
  alipay: (method) => (ALIPAY_PAYLOAD.test(method.payload) ? [] : ['paymentMethods.alipay.payload']),
  wechat: (method) => (WECHAT_PAYLOAD.test(method.payload) ? [] : ['paymentMethods.wechat.payload']),
  'usdt-trc20': (method) => validateUsdt(method, 'usdt-trc20', TRC20_ADDRESS, 'TRC20'),
  'usdt-erc20': (method) => validateUsdt(method, 'usdt-erc20', ERC20_ADDRESS, 'ERC20'),
};

/**
 * Return every required value that is missing or malformed. The list is empty for a complete config.
 * This runs at build time only; it is never imported by the browser.
 */
export function findMissingPurchaseConfig(config: PurchaseConfig = purchaseConfig, currentOrigin?: string): string[] {
  const missing: string[] = [];

  if (!OFFERING.test(config.offeringId)) missing.push('offeringId');
  if (!EMAIL.test(config.supportEmail)) missing.push('supportEmail');
  if (!Number.isInteger(config.reviewHours) || config.reviewHours <= 0) missing.push('reviewHours');
  if (!CNY_PRICE.test(config.price.cny)) missing.push('price.cny');
  if (!USDT_PRICE.test(config.price.usdt)) missing.push('price.usdt');
  if (!SITE_KEY.test(config.turnstile.siteKey)) missing.push('turnstile.siteKey');

  for (const key of ['primary', 'backup'] as const) {
    if (!HTTPS_ORIGIN.test(config.api[key])) missing.push(`api.${key}`);
  }
  if (!config.api.orderPath.startsWith('/')) missing.push('api.orderPath');
  if (!Number.isInteger(config.api.timeoutMs) || config.api.timeoutMs <= 0) missing.push('api.timeoutMs');
  if (!currentOrigin || !config.siteOrigins.includes(currentOrigin)) missing.push('siteOrigins');

  const seen = new Set<string>();
  for (const method of config.paymentMethods) {
    if (seen.has(method.id)) missing.push(`paymentMethods.${method.id} (duplicate)`);
    seen.add(method.id);
    if (!(PAYMENT_METHOD_IDS as readonly string[]).includes(method.id)) {
      missing.push(`paymentMethods.${method.id} (unknown)`);
      continue;
    }
    if (!method.enabled) continue;
    missing.push(...PAYMENT_METHOD_VALIDATORS[method.id](method));
  }
  if (!config.paymentMethods.some((method) => method.enabled)) missing.push('paymentMethods (none enabled)');

  return missing;
}

/** Fail a build that enables sales while the configuration is incomplete. */
export function assertPurchaseConfig(config: PurchaseConfig = purchaseConfig, currentOrigin?: string): void {
  if (!config.enabled) return;
  const missing = findMissingPurchaseConfig(config, currentOrigin);
  if (missing.length > 0) {
    throw new Error(`[purchase] Sales are enabled but the config is incomplete: ${missing.join(', ')}. See AGENTS.md.`);
  }
}
