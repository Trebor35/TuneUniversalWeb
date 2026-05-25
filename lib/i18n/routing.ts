import { defaultLocale, isLocale, type Locale } from "./locales";

export function normalizeLocale(locale: string | undefined): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export function localizedPath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function pathWithoutLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  return isLocale(first) ? `/${rest.join("/")}` : pathname;
}
