import "server-only";
import { defaultLocale, isLocale, type Locale } from "./locales";

export type ToolDictionary = {
  title: string;
  description: string;
  howItWorks: string[];
  faq: { question: string; answer: string }[];
};

export type Dictionary = {
  localeName: string;
  meta: { title: string; description: string };
  nav: { home: string; tools: string; language: string };
  hero: { eyebrow: string; title: string; description: string; cta: string };
  home: { toolHeading: string; faqHeading: string; howHeading: string };
  tool: {
    detectedNote: string;
    frequency: string;
    cents: string;
    flat: string;
    sharp: string;
    inTune: string;
    requestMic: string;
    stopMic: string;
    micError: string;
    micPermissionDenied?: string;
    micNotFound?: string;
    micNotSupported?: string;
    micNeedsSecureContext?: string;
    bpm: string;
    start: string;
    stop: string;
    reset: string;
    tap: string;
    history: string;
    meter: string;
    inputChords: string;
    semitones: string;
    outputChords: string;
  };
  tools: Record<string, ToolDictionary>;
  common: { howItWorks: string; faq: string; otherTools: string };
};

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  it: () => import("@/dictionaries/it.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
  de: () => import("@/dictionaries/de.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  pt: () => import("@/dictionaries/pt.json").then((m) => m.default),
  zh: () => import("@/dictionaries/zh.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
  ja: () => import("@/dictionaries/ja.json").then((m) => m.default),
  ko: () => import("@/dictionaries/ko.json").then((m) => m.default),
  ar: () => import("@/dictionaries/ar.json").then((m) => m.default)
};

export async function getDictionary(locale: string | undefined): Promise<Dictionary> {
  const key = isLocale(locale) ? locale : defaultLocale;
  return loaders[key]();
}
