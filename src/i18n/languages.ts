/**
 * Interface languages, in the order the footer menu lists them. English is the source language and the
 * fallback. Help docs are written in English and Chinese; Starlight serves the English body for the
 * other locales. Keep this list in sync with TinyTab's locales.
 */
export const SITE_LANGUAGES = ['en', 'zh-CN', 'zh-Hant', 'ja', 'ko', 'de', 'fr', 'it', 'es', 'pt'] as const;

export type SiteLanguage = (typeof SITE_LANGUAGES)[number];

/** Each language named in itself, as a language menu should show it. */
export const LANGUAGE_NAMES: Record<SiteLanguage, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-Hant': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
};

/** The localStorage value and hreflang tag; Starlight exposes Traditional Chinese as zh-TW. */
export const LANGUAGE_TAGS: Record<SiteLanguage, string> = {
  en: 'en',
  'zh-CN': 'zh-CN',
  'zh-Hant': 'zh-TW',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  it: 'it',
  es: 'es',
  pt: 'pt',
};

/** Route prefix per language; English is served from the root. */
export const LANGUAGE_PREFIXES: Record<SiteLanguage, string> = {
  en: '',
  'zh-CN': 'zh-cn',
  'zh-Hant': 'zh-hant',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  it: 'it',
  es: 'es',
  pt: 'pt',
};

/** The accessible name of the language menu in each language. */
export const LANGUAGE_LABELS: Record<SiteLanguage, string> = {
  en: 'Language',
  'zh-CN': '语言',
  'zh-Hant': '語言',
  ja: '言語',
  ko: '언어',
  de: 'Sprache',
  fr: 'Langue',
  it: 'Lingua',
  es: 'Idioma',
  pt: 'Idioma',
};

/**
 * Maps a Starlight language tag, a stored preference or a browser tag to a site language.
 * Chinese uses the script/region rules; everything else matches the primary subtag.
 */
export function siteLanguage(lang: string | undefined): SiteLanguage {
  const value = String(lang ?? '')
    .trim()
    .toLowerCase();
  if (value.startsWith('zh')) {
    return /^zh-(hant|tw|hk|mo)(-|$)/.test(value) ? 'zh-Hant' : 'zh-CN';
  }
  const primary = value.split('-')[0] ?? '';
  return SITE_LANGUAGES.find((code) => code.toLowerCase() === primary) ?? 'en';
}

/** Home page path for a language, without the Astro base. */
export function languageHome(lang: string | undefined): string {
  const prefix = LANGUAGE_PREFIXES[siteLanguage(lang)];
  return prefix ? `/${prefix}/` : '/';
}

/** Purchase page path for a language, without the Astro base. */
export function languageBuy(lang: string | undefined): string {
  const prefix = LANGUAGE_PREFIXES[siteLanguage(lang)];
  return prefix ? `/${prefix}/buy/` : '/buy/';
}

/** A docs path in the given language. Every locale has a route; untranslated pages fall back to English. */
export function docsPath(lang: string | undefined, path: string): string {
  return localizedPath(lang, path);
}

/** A site path inside the given language's route prefix, for pages every language has. */
export function localizedPath(lang: string | undefined, path: string): string {
  const prefix = LANGUAGE_PREFIXES[siteLanguage(lang)];
  const clean = path.replace(/^\/+/, '');
  return prefix ? `/${prefix}/${clean}` : `/${clean}`;
}
