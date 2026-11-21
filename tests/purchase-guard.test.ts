import { describe, expect, it } from 'vitest';

import { purchaseConfig, type PurchaseConfig } from '../src/config/purchase';
import { assertPurchaseConfig, findMissingPurchaseConfig } from '../src/lib/purchase-guard';

const CURRENT_ORIGIN = 'https://example.test';
const TRC20_ADDRESS = `T${'A'.repeat(33)}`;
const ERC20_ADDRESS = `0x${'a'.repeat(40)}`;

function validConfig(): PurchaseConfig {
  return {
    enabled: true,
    offeringId: 'pro',
    supportEmail: 'support@example.test',
    reviewHours: 24,
    price: { cny: '¥8.53', usdt: '2.35 USDT' },
    api: {
      primary: 'https://api.example.test',
      backup: 'https://api-backup.example.test',
      orderPath: '/v1/beyond-translate/site/orders',
      timeoutMs: 15_000,
    },
    turnstile: { siteKey: '0xTESTTESTTESTTEST' },
    siteOrigins: [CURRENT_ORIGIN],
    paymentMethods: [
      { id: 'alipay', enabled: true, payload: 'https://qr.alipay.test/x' },
      { id: 'wechat', enabled: true, payload: 'wxp://test' },
      { id: 'usdt-trc20', enabled: true, payload: TRC20_ADDRESS, address: TRC20_ADDRESS, network: 'TRC20' },
      { id: 'usdt-erc20', enabled: true, payload: ERC20_ADDRESS, address: ERC20_ADDRESS, network: 'ERC20' },
    ],
  };
}

describe('purchase configuration', () => {
  it('ships with sales enabled and a complete production configuration', () => {
    expect(purchaseConfig.enabled).toBe(true);
    expect(findMissingPurchaseConfig(purchaseConfig, 'https://beyond-translate.xinlu.ink')).toEqual([]);
  });

  it('does not block a disabled configuration', () => {
    const config = validConfig();
    config.enabled = false;
    config.offeringId = '';
    config.price.cny = '';
    config.paymentMethods = [];
    expect(() => assertPurchaseConfig(config, CURRENT_ORIGIN)).not.toThrow();
  });

  it('accepts a complete enabled configuration', () => {
    expect(findMissingPurchaseConfig(validConfig(), CURRENT_ORIGIN)).toEqual([]);
    expect(() => assertPurchaseConfig(validConfig(), CURRENT_ORIGIN)).not.toThrow();
  });

  it('accepts Cloudflare test site keys and rejects keys without a known prefix', () => {
    for (const siteKey of ['1x00000000000000000000AA', '2x00000000000000000000AB', '3x00000000000000000000FF']) {
      const config = validConfig();
      config.turnstile.siteKey = siteKey;
      expect(findMissingPurchaseConfig(config, CURRENT_ORIGIN), siteKey).toEqual([]);
    }

    const unprefixed = validConfig();
    unprefixed.turnstile.siteKey = 'AAAAAAAAAAAAAAAAAAAA';
    expect(findMissingPurchaseConfig(unprefixed, CURRENT_ORIGIN)).toContain('turnstile.siteKey');
  });

  it('lists each missing or malformed required value', () => {
    const cases: [field: string, label: string, mutate: (config: PurchaseConfig) => void][] = [
      [
        'offeringId',
        'offeringId (empty)',
        (config) => {
          config.offeringId = '';
        },
      ],
      [
        'offeringId',
        'offeringId (malformed)',
        (config) => {
          config.offeringId = 'PRO X';
        },
      ],
      [
        'supportEmail',
        'supportEmail',
        (config) => {
          config.supportEmail = 'not-an-email';
        },
      ],
      [
        'reviewHours',
        'reviewHours',
        (config) => {
          config.reviewHours = 0;
        },
      ],
      [
        'price.cny',
        'price.cny (empty)',
        (config) => {
          config.price.cny = '';
        },
      ],
      [
        'price.cny',
        'price.cny (malformed)',
        (config) => {
          config.price.cny = '8.53';
        },
      ],
      [
        'price.usdt',
        'price.usdt (REPLACE_ME)',
        (config) => {
          config.price.usdt = 'REPLACE_ME';
        },
      ],
      [
        'price.usdt',
        'price.usdt (malformed)',
        (config) => {
          config.price.usdt = '2.35';
        },
      ],
      [
        'turnstile.siteKey',
        'turnstile.siteKey (empty)',
        (config) => {
          config.turnstile.siteKey = '';
        },
      ],
      [
        'turnstile.siteKey',
        'turnstile.siteKey (malformed)',
        (config) => {
          config.turnstile.siteKey = 'x';
        },
      ],
      [
        'api.primary',
        'api.primary',
        (config) => {
          config.api.primary = 'http://api.example.test/path';
        },
      ],
      [
        'api.backup',
        'api.backup',
        (config) => {
          config.api.backup = 'https://api-backup.example.test/path';
        },
      ],
      [
        'api.orderPath',
        'api.orderPath',
        (config) => {
          config.api.orderPath = 'orders';
        },
      ],
      [
        'api.timeoutMs',
        'api.timeoutMs',
        (config) => {
          config.api.timeoutMs = 0;
        },
      ],
      [
        'siteOrigins',
        'siteOrigins',
        (config) => {
          config.siteOrigins = ['https://other.example.test'];
        },
      ],
      [
        'paymentMethods.alipay.payload',
        'alipay payload (empty)',
        (config) => {
          config.paymentMethods[0]!.payload = '';
        },
      ],
      [
        'paymentMethods.alipay.payload',
        'alipay payload (malformed)',
        (config) => {
          config.paymentMethods[0]!.payload = 'x';
        },
      ],
      [
        'paymentMethods.usdt-trc20.address',
        'trc20 address (empty)',
        (config) => {
          config.paymentMethods[2]!.address = '';
        },
      ],
      [
        'paymentMethods.usdt-trc20.address',
        'trc20 address (malformed)',
        (config) => {
          config.paymentMethods[2]!.address = 'abc';
        },
      ],
      [
        'paymentMethods.usdt-trc20.addressMatchesPayload',
        'trc20 address mismatch',
        (config) => {
          config.paymentMethods[2]!.address = `${TRC20_ADDRESS.slice(0, -1)}B`;
        },
      ],
      [
        'paymentMethods.usdt-erc20.address',
        'erc20 address (malformed)',
        (config) => {
          config.paymentMethods[3]!.address = 'abc';
        },
      ],
      [
        'paymentMethods.usdt-erc20.network',
        'erc20 network mismatch',
        (config) => {
          config.paymentMethods[3]!.network = 'TRC20';
        },
      ],
    ];

    for (const [field, label, mutate] of cases) {
      const config = validConfig();
      mutate(config);
      expect(findMissingPurchaseConfig(config, CURRENT_ORIGIN), label).toContain(field);
    }
  });

  it('rejects duplicate or unknown payment methods', () => {
    const duplicate = validConfig();
    duplicate.paymentMethods = [duplicate.paymentMethods[0]!, { ...duplicate.paymentMethods[0]! }];
    expect(findMissingPurchaseConfig(duplicate, CURRENT_ORIGIN)).toContain('paymentMethods.alipay (duplicate)');

    const unknown = validConfig();
    unknown.paymentMethods = [...unknown.paymentMethods, { id: 'paypal' as never, enabled: true, payload: 'x' }];
    expect(findMissingPurchaseConfig(unknown, CURRENT_ORIGIN)).toContain('paymentMethods.paypal (unknown)');
  });

  it('requires at least one enabled payment method', () => {
    const config = validConfig();
    config.paymentMethods = config.paymentMethods.map((method) => ({ ...method, enabled: false }));
    expect(findMissingPurchaseConfig(config, CURRENT_ORIGIN)).toContain('paymentMethods (none enabled)');
  });

  it('throws a readable error when sales are enabled with missing values', () => {
    const config = validConfig();
    config.turnstile.siteKey = '';
    expect(() => assertPurchaseConfig(config, CURRENT_ORIGIN)).toThrow(/turnstile\.siteKey/);
  });
});
