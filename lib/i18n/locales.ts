export const locales = ["it", "en", "fr", "de", "es", "pt", "zh", "ru", "ja", "ko", "ar"] as const;

export type Locale = (typeof locales)[number];

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
  ar: "العربية"
};

export const rtlLocales: Locale[] = ["ar"];

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getTextDirection(locale: Locale) {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export function localeFromName(name: string): Locale {
  return locales.find((locale) => localeNames[locale] === name) ?? defaultLocale;
}
