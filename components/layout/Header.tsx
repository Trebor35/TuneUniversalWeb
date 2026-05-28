import Link from "next/link";
import { AudioLines } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { LanguageSwitcher } from "./LanguageSwitcher";

const aboutLabels: Record<Locale, string> = {
  it: "Chi siamo",
  en: "About",
  fr: "À propos",
  de: "Über uns",
  es: "Acerca de",
  pt: "Sobre",
  zh: "关于",
  ru: "О проекте",
  ja: "概要",
  ko: "소개",
  ar: "حول"
};

const guidesLabels: Record<Locale, string> = {
  ar: "أدلة",
  de: "Anleitungen",
  en: "Guides",
  es: "Guías",
  fr: "Guides",
  it: "Guide",
  ja: "ガイド",
  ko: "가이드",
  pt: "Guias",
  ru: "Руководства",
  zh: "指南"
};

const songsLabels: Record<Locale, string> = {
  ar: "مقطوعات",
  de: "Noten",
  en: "Songs",
  es: "Canciones",
  fr: "Partitions",
  it: "Spartiti",
  ja: "楽譜",
  ko: "악보",
  pt: "Partituras",
  ru: "Ноты",
  zh: "乐谱"
};

export function Header({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/88 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-4">
        <Link href={`/${locale}/tools/guitar-tuner`} className="inline-flex min-w-0 items-center gap-2 font-bold">
          <span className="shrink-0 rounded-md bg-ink p-2 text-white">
            <AudioLines size={18} aria-hidden />
          </span>
          <span className="truncate">TuneUniversal</span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <Link href={`/${locale}/about`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white md:inline-flex">
            {aboutLabels[locale]}
          </Link>
          <Link href={`/${locale}/guides`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white md:inline-flex">
            {guidesLabels[locale]}
          </Link>
          <Link href={`/${locale}/songs`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white lg:inline-flex">
            {songsLabels[locale]}
          </Link>
          <Link href={`/${locale}/tools`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white sm:inline-flex">
            {dictionary.nav.tools}
          </Link>
          <LanguageSwitcher locale={locale} label={dictionary.nav.language} />
        </div>
      </div>
    </header>
  );
}
