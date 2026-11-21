/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  printWidth: 120,
  singleQuote: true,
  proseWrap: 'preserve',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
