export function getLocalizedHref(path: string, locale: string): string {
  return `/${locale}${path === "/" ? "" : path}`;
} 