/**
 * Public purchase settings. Everything here is shipped to the browser, so it must never contain a
 * secret. Sales stay off until the extension is listed and the operator supplies the missing payment
 * payloads; the build-time guard in `purchase-guard.ts` refuses to build an enabled but incomplete config.
 */

export const PAYMENT_METHOD_IDS = ['alipay', 'wechat', 'usdt-trc20', 'usdt-erc20'] as const;

export type PaymentMethodId = (typeof PAYMENT_METHOD_IDS)[number];

export interface PaymentMethodConfig {
  id: PaymentMethodId;
  enabled: boolean;
  /** Encoded into the build-time QR code. Empty until the operator supplies the generic code. */
  payload: string;
  /** Shown and copied for USDT; the same value as the payload. */
  address?: string;
  network?: 'TRC20' | 'ERC20';
}

export interface PurchaseConfig {
  enabled: boolean;
  offeringId: string;
  supportEmail: string;
  reviewHours: number;
  price: { cny: string; usdt: string };
  api: {
    primary: string;
    backup: string;
    orderPath: string;
    timeoutMs: number;
  };
  turnstile: { siteKey: string };
  siteOrigins: readonly string[];
  paymentMethods: readonly PaymentMethodConfig[];
}

export const purchaseConfig: PurchaseConfig = {
  enabled: true,
  offeringId: 'pro',
  supportEmail: 'xianghongai@gmail.com',
  reviewHours: 24,
  price: { cny: '¥8.53', usdt: '3.58 USDT' },
  api: {
    primary: 'https://univo-api.xinlu.ink',
    backup: 'https://univo-api-backup.xinlu.ink',
    orderPath: '/v1/beyond-translate/site/orders',
    timeoutMs: 15_000,
  },
  turnstile: { siteKey: '0x4AAAAAAGFRi0QIpsF4sJX_' },
  siteOrigins: ['https://beyond-translate.xinlu.ink', 'https://beyond-translate.github.io'],
  paymentMethods: [
    { id: 'alipay', enabled: true, payload: 'https://qr.alipay.com/fkx15240arbfbwyfpkeeve5' },
    { id: 'wechat', enabled: true, payload: 'wxp://f2f0hMYBrl7-kCwFLvgF5VoSDgYbeVBprWOShfXVXMpy6O0' },
    {
      id: 'usdt-trc20',
      enabled: true,
      payload: 'TYxhMZN2FW6BUvHTyGDLc4Lbr5mRPCWFbd',
      address: 'TYxhMZN2FW6BUvHTyGDLc4Lbr5mRPCWFbd',
      network: 'TRC20',
    },
    {
      id: 'usdt-erc20',
      enabled: true,
      payload: '0x40ac31e6a8e1f3f6aa732b7e5b4d37251449dd1d',
      address: '0x40ac31e6a8e1f3f6aa732b7e5b4d37251449dd1d',
      network: 'ERC20',
    },
  ],
};
