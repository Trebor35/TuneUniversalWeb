export const baseLocales = ["it", "en", "fr", "de", "es", "pt", "zh", "ru", "ja", "ko", "ar"] as const;

export const locales = [...baseLocales, "nl", "pl", "tr", "cs", "sv", "pt-BR", "hi", "no"] as const;

export type Locale = (typeof locales)[number];
export type BaseLocale = (typeof baseLocales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
  zh: "简体中文",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
  ar: "العربية",
  nl: "Nederlands",
  pl: "Polski",
  tr: "Türkçe",
  cs: "Čeština",
  sv: "Svenska",
  "pt-BR": "Português (Brasil)",
  hi: "हिन्दी",
  no: "Norsk"
};

export const rtlLocales: Locale[] = ["ar"];

export const localeFallbacks: Record<Locale, BaseLocale> = {
  it: "it",
  en: "en",
  fr: "fr",
  de: "de",
  es: "es",
  pt: "pt",
  zh: "zh",
  ru: "ru",
  ja: "ja",
  ko: "ko",
  ar: "ar",
  nl: "en",
  pl: "en",
  tr: "en",
  cs: "en",
  sv: "en",
  "pt-BR": "pt",
  hi: "en",
  no: "en"
};

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getContentLocale(locale: Locale): BaseLocale {
  return localeFallbacks[locale];
}

export function withLocaleFallbacks<T>(
  baseMap: Record<BaseLocale, T>,
  overrides: Partial<Record<Locale, T>> = {}
): Record<Locale, T> {
  return locales.reduce(
    (accumulator, locale) => {
      accumulator[locale] = overrides[locale] ?? baseMap[getContentLocale(locale)];
      return accumulator;
    },
    {} as Record<Locale, T>
  );
}

export function getTextDirection(locale: Locale) {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export function localeFromName(name: string): Locale {
  return locales.find((locale) => localeNames[locale] === name) ?? defaultLocale;
}
