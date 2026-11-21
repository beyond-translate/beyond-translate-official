const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Absolute URL for an internal path. External URLs, protocol-relative URLs and hash links are left untouched.
 * Using this instead of a relative link keeps navigation working when a preview server serves the base path
 * without a trailing slash, as `astro preview` does.
 */
export function withBase(path: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) {
    return path;
  }
  const clean = path.replace(/^\.\//, '').replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}
