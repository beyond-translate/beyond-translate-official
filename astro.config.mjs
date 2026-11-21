import { fileURLToPath } from 'node:url';

import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

const site = 'https://beyond-translate.xinlu.ink';
const base = '/';
const repository = 'https://github.com/beyond-translate/beyond-translate-official';
const feedback = 'https://github.com/beyond-translate/feedback/issues';
const ogImage = new URL(`${base}og-image.png`, site).href;

// Runs before paint in every Starlight page. A manual choice wins; otherwise the browser language
// picks a locale on the English root. Explicit locale URLs are never redirected away.
const languagePreferenceScript = `(() => {
  const KEY = 'beyond-translate-lang';
  const LOCALES = {
    '': 'en',
    'zh-cn': 'zh-CN',
    'zh-hant': 'zh-TW',
    ja: 'ja',
    ko: 'ko',
    de: 'de',
    fr: 'fr',
    it: 'it',
    es: 'es',
    pt: 'pt'
  };
  const TAGS = Object.values(LOCALES);
  const normalize = (lang) => {
    const value = String(lang || '').toLowerCase();
    if (value === 'zh-cn' || value === 'zh-sg' || value.startsWith('zh-hans')) return 'zh-CN';
    if (value.startsWith('zh')) return 'zh-TW';
    const primary = value.split('-')[0];
    return TAGS.includes(primary) ? primary : 'en';
  };
  const readStored = () => {
    try {
      const value = localStorage.getItem(KEY);
      return TAGS.includes(value) ? value : null;
    } catch (error) {
      return null;
    }
  };
  const detect = () => {
    const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const item of languages) {
      const tag = String(item || '').toLowerCase();
      if (tag === 'zh-tw' || tag === 'zh-hk' || tag === 'zh-mo' || tag.startsWith('zh-hant')) return 'zh-TW';
      if (tag.startsWith('zh')) return 'zh-CN';
      const primary = tag.split('-')[0];
      if (TAGS.includes(primary)) return primary;
    }
    return null;
  };
  const redirect = (tag) => {
    if (tag === normalize(document.documentElement.lang)) return;
    const link = document.querySelector('link[rel="alternate"][hreflang="' + tag + '"]');
    if (!link) return;
    const target = new URL(link.href, location.origin);
    if (target.pathname + target.search === location.pathname + location.search) return;
    location.replace(target.pathname + target.search + target.hash);
  };
  if (normalize(document.documentElement.lang) === 'en' && !/(^|\\/)404(\\.html|\\/)?$/.test(location.pathname)) {
    const stored = readStored();
    if (stored) redirect(stored);
    else {
      const detected = detect();
      if (detected) redirect(detected);
    }
  }
  document.addEventListener(
    'change',
    (event) => {
      const select = event.target;
      if (!(select instanceof HTMLSelectElement) || !select.closest('starlight-lang-select')) return;
      const first = String(select.value || '').replace(/^\\/+/, '').split('/')[0] || '';
      try {
        localStorage.setItem(KEY, LOCALES[first] || 'en');
      } catch (error) {}
    },
    true
  );
})();`;

export default defineConfig({
  site,
  // The custom domain serves the site at the root; assets and links are built relative to it.
  base,
  // The license service allowlists exact origins, so a dev server on a fallback port cannot submit orders.
  // Keep 4321 authoritative and fail instead of silently moving when it is taken.
  server: { port: 4321 },
  vite: { server: { strictPort: true } },
  integrations: [
    starlight({
      title: 'Beyond Translate',
      description:
        'Beyond Translate 是一款浏览器翻译扩展：划词与整页翻译，按站点记住偏好，生词与译文都能留下，翻译引擎可选 Google、Bing 或自己的模型。',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        // Starlight ships Traditional Chinese UI strings under zh-TW; the route prefix stays /zh-hant/.
        'zh-hant': { label: '繁體中文', lang: 'zh-TW' },
        ja: { label: '日本語', lang: 'ja' },
        ko: { label: '한국어', lang: 'ko' },
        de: { label: 'Deutsch', lang: 'de' },
        fr: { label: 'Français', lang: 'fr' },
        it: { label: 'Italiano', lang: 'it' },
        es: { label: 'Español', lang: 'es' },
        pt: { label: 'Português', lang: 'pt' },
      },
      logo: {
        src: './src/assets/icon.svg',
        alt: 'Beyond Translate',
      },
      favicon: '/favicon.svg',
      social: [{ icon: 'comment', label: 'Feedback', href: feedback }],
      editLink: { baseUrl: `${repository}/edit/main/` },
      customCss: ['./src/styles/theme.css'],
      components: {
        Hero: './src/components/starlight/Hero.astro',
        Header: './src/components/starlight/Header.astro',
        EditLink: './src/components/starlight/EditLink.astro',
      },
      credits: false,
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
          errorOnInvalidHashes: false,
          errorOnFallbackPages: false,
          // Custom Astro pages are outside Starlight's content graph.
          exclude: ({ link }) => /(^|\/)(?:zh-cn\/|zh-hant\/)?buy\/?$/.test(link),
        }),
      ],
      sidebar: [
        {
          label: 'Getting started',
          translations: { 'zh-CN': '开始使用', 'zh-TW': '開始使用' },
          items: [{ slug: 'help' }, { slug: 'help/getting-started' }],
        },
        {
          label: 'Translation services',
          translations: { 'zh-CN': '翻译服务', 'zh-TW': '翻譯服務' },
          items: [
            { slug: 'help/machine-translation' },
            { slug: 'help/machine-translation/google-cloud', label: 'Google Cloud Translation' },
            { slug: 'help/machine-translation/azure', label: 'Azure Translator' },
            {
              slug: 'help/machine-translation/aliyun',
              label: 'Alibaba Cloud MT',
              translations: { 'zh-CN': '阿里云机器翻译', 'zh-TW': '阿里雲機器翻譯' },
            },
            {
              slug: 'help/machine-translation/volcengine',
              label: 'Volcengine MT',
              translations: { 'zh-CN': '火山引擎机器翻译', 'zh-TW': '火山引擎機器翻譯' },
            },
          ],
        },
        {
          label: 'More',
          translations: { 'zh-CN': '其他', 'zh-TW': '其他' },
          items: [{ slug: 'help/faq' }, { slug: 'help/privacy' }],
        },
      ],
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: ogImage } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Beyond Translate' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'Beyond Translate' } },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#fbf8f4',
            media: '(prefers-color-scheme: light)',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#12100e', media: '(prefers-color-scheme: dark)' },
        },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${base}icon-128.png` } },
        { tag: 'script', content: languagePreferenceScript },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
