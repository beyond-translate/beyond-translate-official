/**
 * Public store listings for the extension. The IDs and slugs are stable and safe to ship to the
 * browser; update this file when a listing moves. The landing page and help docs read these URLs
 * instead of repeating them.
 */
export const storeUrls = {
  chrome: 'https://chromewebstore.google.com/detail/beyond-translate/ihimgeclocmlahdijnakgcglfcijinej',
  edge: 'https://microsoftedge.microsoft.com/addons/detail/beyond-translate/naeehdedaeachnpmfjgblghmfgnkedbh',
  firefox: 'https://addons.mozilla.org/firefox/addon/beyond-translate/',
} as const;

export const storeIds = ['chrome', 'edge', 'firefox'] as const;

export type StoreId = (typeof storeIds)[number];

/** Browser marks used by the store links. Files live in `public/browser/`. */
export const storeLogos: Record<StoreId, string> = {
  chrome: '/browser/chrome.svg',
  edge: '/browser/microsoft-edge.svg',
  firefox: '/browser/firefox.svg',
};
