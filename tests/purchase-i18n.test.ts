import { describe, expect, it } from 'vitest';

import { PAYMENT_METHOD_IDS } from '../src/config/purchase';
import { ORDER_FAILURES } from '../src/lib/purchase';
import { SITE_LANGUAGES } from '../src/i18n/languages';
import {
  getPurchaseStrings,
  helpPath,
  localeHome,
  localePath,
  purchaseLocale,
  purchasePath,
  purchaseStrings,
} from '../src/i18n/purchase';

const LOCALES = SITE_LANGUAGES;

function stringEntries(value: unknown, path = ''): Array<[string, string]> {
  if (typeof value === 'string') {
    return [[path, value]];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => stringEntries(item, `${path}[${index}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => stringEntries(child, path ? `${path}.${key}` : key));
  }
  return [];
}

function objectPaths(value: unknown): string[] {
  return stringEntries(value).map(([path]) => path);
}

function emptyStrings(value: unknown): string[] {
  return stringEntries(value)
    .filter(([, text]) => text.trim() === '')
    .map(([path]) => path);
}

function placeholders(value: unknown): Array<[string, string[]]> {
  return stringEntries(value).map(([path, text]) => [
    path,
    [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).toSorted(),
  ]);
}

describe('purchase copy', () => {
  it('maps the site language tags to the purchase dictionaries', () => {
    expect(purchaseLocale('zh-CN')).toBe('zh-CN');
    expect(purchaseLocale('zh-Hant')).toBe('zh-Hant');
    expect(purchaseLocale('zh-TW')).toBe('zh-Hant');
    expect(purchaseLocale('en')).toBe('en');
    expect(purchaseLocale(undefined)).toBe('en');
    expect(getPurchaseStrings('en')).toBe(purchaseStrings.en);
  });

  it('builds locale-specific purchase and help paths', () => {
    expect(purchasePath(undefined)).toBe('/buy/');
    expect(purchasePath('zh-CN')).toBe('/zh-cn/buy/');
    expect(purchasePath('en')).toBe('/buy/');
    expect(purchasePath('zh-Hant')).toBe('/zh-hant/buy/');
    expect(helpPath(undefined)).toBe('/help/');
    expect(helpPath('zh-CN')).toBe('/zh-cn/help/');
    expect(helpPath('en')).toBe('/help/');
    expect(helpPath('zh-Hant')).toBe('/zh-hant/help/');
    expect(helpPath('ja')).toBe('/ja/help/');
    expect(localeHome('zh-CN')).toBe('/zh-cn/');
    expect(localeHome('ja')).toBe('/ja/');
    expect(localePath('zh-CN', '/help/privacy/')).toBe('/zh-cn/help/privacy/');
    expect(purchasePath('ja')).toBe('/ja/buy/');
    expect(purchasePath('pt')).toBe('/pt/buy/');
  });

  it('has the same object shape in every language', () => {
    const reference = objectPaths(purchaseStrings['zh-CN']);
    for (const locale of LOCALES) {
      expect(objectPaths(purchaseStrings[locale])).toEqual(reference);
    }
  });

  it('has no empty copy in any language', () => {
    for (const locale of LOCALES) {
      expect(emptyStrings(purchaseStrings[locale])).toEqual([]);
    }
  });

  it('uses the same placeholders in every language', () => {
    const reference = placeholders(purchaseStrings['zh-CN']);
    for (const locale of LOCALES) {
      expect(placeholders(purchaseStrings[locale])).toEqual(reference);
    }
  });

  it('has the same step and term counts in every language', () => {
    const reference = purchaseStrings['zh-CN'];
    expect(reference.steps.items).toHaveLength(4);
    expect(reference.terms.items).toHaveLength(5);
    for (const locale of LOCALES) {
      expect(purchaseStrings[locale].steps.items).toHaveLength(reference.steps.items.length);
      expect(purchaseStrings[locale].terms.items).toHaveLength(reference.terms.items.length);
    }
  });

  it('names the support email in the terms', () => {
    for (const locale of LOCALES) {
      expect(
        purchaseStrings[locale].terms.items.some((item) => item.includes('{email}')),
        locale,
      ).toBe(true);
    }
  });

  it('covers every payment method and failure kind in every language', () => {
    for (const locale of LOCALES) {
      expect(Object.keys(purchaseStrings[locale].paymentMethods).toSorted()).toEqual(
        [...PAYMENT_METHOD_IDS].toSorted(),
      );
      expect(Object.keys(purchaseStrings[locale].payment.scan).toSorted()).toEqual([...PAYMENT_METHOD_IDS].toSorted());
      expect(Object.keys(purchaseStrings[locale].form.transactionHints).toSorted()).toEqual(
        [...PAYMENT_METHOD_IDS].toSorted(),
      );
      expect(Object.keys(purchaseStrings[locale].errors).toSorted()).toEqual([...ORDER_FAILURES].toSorted());
    }
  });
});
