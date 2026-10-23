/**
 * Resolves an asset path to a relative URL compatible with any base path or sub-directory deployment
 * (e.g. GitHub Pages at /unit-table-util/ or local dev server at /).
 */
export function normalizeAssetUrl(src: string | null | undefined): string {
  if (!src) return '';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
    return src;
  }
  // Strip leading slash or dot-slash
  const clean = src.replace(/^\.?\//, '');
  return `./${clean}`;
}
