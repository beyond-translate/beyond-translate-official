import { describe, expect, it } from 'vitest';

import { purchaseConfig } from '../src/config/purchase';
import { getLanding, landingLocale, landingStrings, type LandingLocale } from '../src/i18n/landing';
import { purchasePath } from '../src/i18n/purchase';

const LOCALES: readonly LandingLocale[] = ['zh-CN', 'zh-Hant', 'en'];

function objectPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => objectPaths(item, `${prefix}[${index}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => objectPaths(child, prefix ? `${prefix}.${key}` : key));
  }
  return prefix ? [prefix] : [];
}

function emptyStrings(value: unknown, path = ''): string[] {
  if (typeof value === 'string') {
    return value.trim() === '' ? [path] : [];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => emptyStrings(item, `${path}[${index}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => emptyStrings(child, path ? `${path}.${key}` : key));
  }
  return [];
}

describe('landing copy', () => {
  it('maps the Starlight language tags to the landing dictionaries', () => {
    expect(landingLocale('zh-CN')).toBe('zh-CN');
    expect(landingLocale('zh-Hant')).toBe('zh-Hant');
    expect(landingLocale('zh-TW')).toBe('zh-Hant');
    expect(landingLocale('en')).toBe('en');
    expect(landingLocale(undefined)).toBe('en');
    expect(getLanding('en')).toBe(landingStrings.en);
  });

  it('has the same object shape in every language', () => {
    const reference = objectPaths(landingStrings['zh-CN']);
    for (const locale of LOCALES) {
      expect(objectPaths(landingStrings[locale])).toEqual(reference);
    }
  });

  it('has no empty copy in any language', () => {
    for (const locale of LOCALES) {
      expect(emptyStrings(landingStrings[locale])).toEqual([]);
    }
  });

  it('keeps purchase prices and paths out of the landing copy', () => {
    for (const locale of LOCALES) {
      const copy = JSON.stringify(landingStrings[locale]);
      expect(copy, locale).not.toContain(purchaseConfig.price.cny);
      expect(copy, locale).not.toContain(purchaseConfig.price.usdt);
      expect(copy, locale).not.toContain(purchasePath(locale));
    }
  });

  it('has the same list lengths where the layout expects them', () => {
    const reference = landingStrings['zh-CN'];
    for (const locale of LOCALES) {
      const strings = landingStrings[locale];
      expect(strings.services.stats).toHaveLength(reference.services.stats.length);
      expect(strings.services.chips).toHaveLength(reference.services.chips.length);
      expect(strings.privacy.items).toHaveLength(reference.privacy.items.length);
      expect(strings.faq.items).toHaveLength(reference.faq.items.length);
      expect(strings.footer.groups).toHaveLength(reference.footer.groups.length);
      for (const [index, group] of strings.footer.groups.entries()) {
        expect(group.links).toHaveLength(reference.footer.groups[index]!.links.length);
      }
    }
  });
});
