import Link from "next/link";
import { AudioLines } from "lucide-react";
import {
  alternativeTuningGuideSlugs,
  getGuideContent,
  instrumentGuideSlugs,
  utilityGuideSlugs,
  type GuideSlug
} from "@/lib/content/guides";
import { getInstrumentTunerContent, instrumentToTunerSlug } from "@/lib/content/instrumentTuners";
import { publicDomainSongs, publicDomainSongSlugs } from "@/lib/content/publicDomainSongs";
import { getStaticPageContent } from "@/lib/content/staticPages";
import { tuningHubContent } from "@/lib/content/tuningHub";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { instrumentIds, type ToolSlug } from "@/lib/tools/toolConfig";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu, type MobileNavGroup } from "./MobileMenu";

const aboutLabels: Record<Locale, string> = {
  ar: "حول",
  de: "Über uns",
  en: "About",
  es: "Acerca de",
  fr: "À propos",
  it: "Chi siamo",
  ja: "概要",
  ko: "소개",
  pt: "Sobre",
  ru: "О проекте",
  zh: "关于"
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

const primaryToolMenu: ToolSlug[] = ["guitar-tuner", "bass-tuner", "metronome", "tap-bpm", "sound-level-meter"];

const menuLabels: Record<
  Locale,
  { instrumentGuides: string; instrumentTuners: string; menu: string; pages: string; tuningGuides: string }
> = {
  ar: { instrumentGuides: "أدلة الآلات", instrumentTuners: "موالفات الآلات", menu: "القائمة", pages: "الصفحات", tuningGuides: "أدلة الضبط" },
  de: { instrumentGuides: "Instrumenten-Guides", instrumentTuners: "Instrumenten-Tuner", menu: "Menü", pages: "Seiten", tuningGuides: "Stimmungs-Guides" },
  en: { instrumentGuides: "Instrument guides", instrumentTuners: "Instrument tuners", menu: "Menu", pages: "Pages", tuningGuides: "Tuning guides" },
  es: { instrumentGuides: "Guías de instrumentos", instrumentTuners: "Afinadores", menu: "Menú", pages: "Páginas", tuningGuides: "Guías de afinación" },
  fr: { instrumentGuides: "Guides instruments", instrumentTuners: "Accordeurs", menu: "Menu", pages: "Pages", tuningGuides: "Guides d'accordage" },
  it: { instrumentGuides: "Guide strumenti", instrumentTuners: "Accordatori strumenti", menu: "Menu", pages: "Pagine", tuningGuides: "Guide accordature" },
  ja: { instrumentGuides: "楽器ガイド", instrumentTuners: "楽器チューナー", menu: "メニュー", pages: "ページ", tuningGuides: "チューニングガイド" },
  ko: { instrumentGuides: "악기 가이드", instrumentTuners: "악기 튜너", menu: "메뉴", pages: "페이지", tuningGuides: "튜닝 가이드" },
  pt: { instrumentGuides: "Guias de instrumentos", instrumentTuners: "Afinadores", menu: "Menu", pages: "Páginas", tuningGuides: "Guias de afinação" },
  ru: { instrumentGuides: "Гайды по инструментам", instrumentTuners: "Тюнеры", menu: "Меню", pages: "Страницы", tuningGuides: "Гайды по строям" },
  zh: { instrumentGuides: "乐器指南", instrumentTuners: "乐器调音器", menu: "菜单", pages: "页面", tuningGuides: "调弦指南" }
};

function buildMobileGroups(locale: Locale, dictionary: Dictionary): MobileNavGroup[] {
  const labels = menuLabels[locale];
  const tuningGuideSlugs: GuideSlug[] = [...alternativeTuningGuideSlugs, ...utilityGuideSlugs];

  return [
    {
      title: labels.pages,
      links: [
        { href: `/${locale}`, label: "TuneUniversal" },
        { href: `/${locale}/tools`, label: dictionary.nav.tools },
        { href: `/${locale}/tunings`, label: tuningHubContent[locale].title },
        { href: `/${locale}/guides`, label: guidesLabels[locale] },
        { href: `/${locale}/songs`, label: songsLabels[locale] },
        { href: `/${locale}/about`, label: getStaticPageContent(locale, "about").title },
        { href: `/${locale}/privacy-policy`, label: getStaticPageContent(locale, "privacy-policy").title },
        { href: `/${locale}/cookie-policy`, label: getStaticPageContent(locale, "cookie-policy").title }
      ]
    },
    {
      title: dictionary.nav.tools,
      links: primaryToolMenu.map((tool) => ({
        href: `/${locale}/tools/${tool}`,
        label: dictionary.tools[tool].title
      }))
    },
    {
      title: labels.instrumentTuners,
      links: instrumentIds.map((instrument) => ({
        href: `/${locale}/tools/${instrumentToTunerSlug(instrument)}`,
        label: getInstrumentTunerContent(locale, instrument).title
      }))
    },
    {
      title: labels.instrumentGuides,
      links: instrumentGuideSlugs.map((guide) => ({
        href: `/${locale}/guides/${guide}`,
        label: getGuideContent(locale, guide).title
      }))
    },
    {
      title: labels.tuningGuides,
      links: tuningGuideSlugs.map((guide) => ({
        href: `/${locale}/guides/${guide}`,
        label: getGuideContent(locale, guide).title
      }))
    },
    {
      title: songsLabels[locale],
      links: publicDomainSongSlugs.map((song) => ({
        href: `/${locale}/songs/${song}`,
        label: publicDomainSongs[song].title
      }))
    }
  ];
}

export function Header({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const mobileGroups = buildMobileGroups(locale, dictionary);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/88 backdrop-blur">
      <div className="mx-auto max-w-6xl lg:hidden">
        <div className="flex items-center gap-3 px-3 py-3">
          <MobileMenu groups={mobileGroups} label={menuLabels[locale].menu} />
          <Link href={`/${locale}/tools/guitar-tuner`} className="inline-flex min-w-0 flex-1 items-center gap-2 font-bold">
            <span className="shrink-0 rounded-md bg-ink p-2 text-white">
              <AudioLines size={18} aria-hidden />
            </span>
            <span className="whitespace-nowrap text-base font-black">TuneUniversal</span>
          </Link>
        </div>
        <div className="flex justify-end border-t border-line/70 px-3 py-2">
          <LanguageSwitcher
            locale={locale}
            label={dictionary.nav.language}
            className="w-full justify-between sm:w-auto"
            selectClassName="w-full max-w-full"
          />
        </div>
      </div>

      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-3 px-4 py-3 lg:flex">
        <Link href={`/${locale}/tools/guitar-tuner`} className="inline-flex min-w-0 items-center gap-2 font-bold">
          <span className="shrink-0 rounded-md bg-ink p-2 text-white">
            <AudioLines size={18} aria-hidden />
          </span>
          <span className="whitespace-nowrap">TuneUniversal</span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <Link href={`/${locale}/about`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white md:inline-flex">
            {aboutLabels[locale]}
          </Link>
          <Link href={`/${locale}/guides`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white md:inline-flex">
            {guidesLabels[locale]}
          </Link>
          <Link href={`/${locale}/tunings`} className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white lg:inline-flex">
            {tuningHubContent[locale].title}
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
