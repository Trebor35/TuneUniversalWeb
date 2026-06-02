import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Music2 } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { ToolNavigation } from "@/components/layout/ToolNavigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { getInstrumentTunerContent, instrumentToTunerSlug } from "@/lib/content/instrumentTuners";
import { hubEnhancements } from "@/lib/content/seoEnhancements";
import { tuningHubContent } from "@/lib/content/tuningHub";
import { toolsHubContent } from "@/lib/content/toolsHub";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildToolsIndexMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema } from "@/lib/seo/schema";
import { instrumentIds, type Instrument } from "@/lib/tools/toolConfig";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string }> };

const heroPlatformCopy: Record<
  Locale,
  {
    categories: { href: string; label: string }[];
    summary: string;
    trustLine: string;
  }
> = {
  ar: {
    categories: [
      { href: "#tune-instruments", label: "أجهزة ضبط" },
      { href: "#rhythm-and-bpm", label: "ميترونومات" },
      { href: "#rhythm-and-bpm", label: "أدوات صوتية" },
      { href: "#chords-and-theory", label: "أدوات موسيقية مساعدة" }
    ],
    summary: "منصة موسيقية متعددة اللغات للضبط والإيقاع وقياس الصوت والعمل على الأكوردات من أي جهاز.",
    trustLine: "مجاني • عبر الإنترنت • بدون تثبيت"
  },
  de: {
    categories: [
      { href: "#tune-instruments", label: "Stimmgeräte" },
      { href: "#rhythm-and-bpm", label: "Metronome" },
      { href: "#rhythm-and-bpm", label: "Audiotools" },
      { href: "#chords-and-theory", label: "Musik-Utilities" }
    ],
    summary: "Eine mehrsprachige Musikplattform zum Stimmen, Üben von Rhythmus, Messen von Audio und Arbeiten mit Akkorden auf jedem Gerät.",
    trustLine: "Kostenlos • Online • Keine Installation"
  },
  en: {
    categories: [
      { href: "#tune-instruments", label: "Tuners" },
      { href: "#rhythm-and-bpm", label: "Metronomes" },
      { href: "#rhythm-and-bpm", label: "Audio Tools" },
      { href: "#chords-and-theory", label: "Music Utilities" }
    ],
    summary: "A multilingual music platform for tuning, rhythm practice, audio checks and chord work on any device.",
    trustLine: "Free • Online • No installation"
  },
  es: {
    categories: [
      { href: "#tune-instruments", label: "Afinadores" },
      { href: "#rhythm-and-bpm", label: "Metrónomos" },
      { href: "#rhythm-and-bpm", label: "Herramientas de audio" },
      { href: "#chords-and-theory", label: "Utilidades musicales" }
    ],
    summary: "Una plataforma musical multilingüe para afinar, practicar ritmo, medir audio y trabajar acordes desde cualquier dispositivo.",
    trustLine: "Gratis • Online • Sin instalación"
  },
  fr: {
    categories: [
      { href: "#tune-instruments", label: "Accordeurs" },
      { href: "#rhythm-and-bpm", label: "Métronomes" },
      { href: "#rhythm-and-bpm", label: "Outils audio" },
      { href: "#chords-and-theory", label: "Utilitaires musicaux" }
    ],
    summary: "Une plateforme musicale multilingue pour l'accordage, le rythme, les contrôles audio et le travail des accords sur tout appareil.",
    trustLine: "Gratuit • En ligne • Sans installation"
  },
  it: {
    categories: [
      { href: "#tune-instruments", label: "Accordatori" },
      { href: "#rhythm-and-bpm", label: "Metronomi" },
      { href: "#rhythm-and-bpm", label: "Strumenti Audio" },
      { href: "#chords-and-theory", label: "Utility Musicali" }
    ],
    summary: "Una piattaforma musicale multilingua per accordare, studiare il ritmo, misurare l'audio e lavorare sugli accordi da qualsiasi dispositivo.",
    trustLine: "Gratuiti • Online • Nessuna installazione"
  },
  ja: {
    categories: [
      { href: "#tune-instruments", label: "チューナー" },
      { href: "#rhythm-and-bpm", label: "メトロノーム" },
      { href: "#rhythm-and-bpm", label: "オーディオツール" },
      { href: "#chords-and-theory", label: "音楽ユーティリティ" }
    ],
    summary: "あらゆるデバイスで使える、多言語対応のチューニング、リズム練習、音声チェック、コード作業向け音楽プラットフォームです。",
    trustLine: "無料 • オンライン • インストール不要"
  },
  ko: {
    categories: [
      { href: "#tune-instruments", label: "튜너" },
      { href: "#rhythm-and-bpm", label: "메트로놈" },
      { href: "#rhythm-and-bpm", label: "오디오 도구" },
      { href: "#chords-and-theory", label: "음악 유틸리티" }
    ],
    summary: "모든 기기에서 조율, 리듬 연습, 오디오 체크, 코드 작업을 할 수 있는 다국어 음악 플랫폼입니다.",
    trustLine: "무료 • 온라인 • 설치 불필요"
  },
  pt: {
    categories: [
      { href: "#tune-instruments", label: "Afinadores" },
      { href: "#rhythm-and-bpm", label: "Metrónomos" },
      { href: "#rhythm-and-bpm", label: "Ferramentas de áudio" },
      { href: "#chords-and-theory", label: "Utilitários musicais" }
    ],
    summary: "Uma plataforma musical multilíngue para afinação, prática de ritmo, medições de áudio e trabalho com acordes em qualquer dispositivo.",
    trustLine: "Grátis • Online • Sem instalação"
  },
  ru: {
    categories: [
      { href: "#tune-instruments", label: "Тюнеры" },
      { href: "#rhythm-and-bpm", label: "Метрономы" },
      { href: "#rhythm-and-bpm", label: "Аудиоинструменты" },
      { href: "#chords-and-theory", label: "Музыкальные утилиты" }
    ],
    summary: "Многоязычная музыкальная платформа для настройки, работы с ритмом, проверки звука и транспонирования аккордов на любом устройстве.",
    trustLine: "Бесплатно • Онлайн • Без установки"
  },
  zh: {
    categories: [
      { href: "#tune-instruments", label: "调音器" },
      { href: "#rhythm-and-bpm", label: "节拍器" },
      { href: "#rhythm-and-bpm", label: "音频工具" },
      { href: "#chords-and-theory", label: "音乐实用工具" }
    ],
    summary: "一个多语言音乐平台，可在任何设备上完成调音、节奏练习、音频检测和和弦处理。",
    trustLine: "免费 • 在线 • 无需安装"
  }
};

const groupAnchorIds = ["tune-instruments", "rhythm-and-bpm", "chords-and-theory"] as const;

const featuredInstrumentIds: Instrument[] = ["guitar", "bass"];
const featuredInstrumentSet = new Set<Instrument>(featuredInstrumentIds);
const homeInstrumentIds: Instrument[] = [
  ...featuredInstrumentIds,
  ...instrumentIds.filter((instrument) => !featuredInstrumentSet.has(instrument))
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dictionary = await getDictionary(rawLocale);
  return buildToolsIndexMetadata(rawLocale, dictionary);
}

export default async function ToolsIndexPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);
  const hub = toolsHubContent[locale];
  const hero = heroPlatformCopy[locale];
  const tuningsLabel = tuningHubContent[locale].title;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: hub.title, url: `${siteUrl}/${locale}/tools` }
        ])}
      />
      <JsonLd data={faqItemsSchema(hub.faq)} />
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">{hub.title}</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">TuneUniversal</h1>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {hero.categories.map((category) => (
          <Link
            key={`${category.href}-${category.label}`}
            href={category.href}
            className="group flex items-center gap-3 rounded-lg border border-line bg-mint/5 px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:border-mint hover:bg-white"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint/12 text-mint">
              <Check size={17} aria-hidden />
            </span>
            <span className="font-semibold text-ink">{category.label}</span>
            <span className="ml-auto text-ink/35 transition group-hover:translate-x-0.5 group-hover:text-mint">
              <ArrowRight size={18} aria-hidden />
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-ink/70">{hero.summary}</p>
      <section className="mt-6 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="font-semibold text-ink">{hero.trustLine}</p>
        <p className="mt-2 leading-7 text-ink/72">{hubEnhancements[locale].tools}</p>
      </section>

      <AdSlot className="mt-8" />

      <section className="mt-8 grid gap-4 rounded-lg border border-line bg-ink p-5 text-white shadow-soft sm:p-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">Chromatic tuner</p>
          <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">{hub.chromaticTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{hub.chromaticBody}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href={`/${locale}/tools/guitar-tuner`}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-mint px-5 py-3 text-center font-bold text-ink transition hover:bg-mintSoft"
          >
            {hub.chromaticCta}
          </Link>
          <Link
            href={`/${locale}/tunings`}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-center font-bold text-white transition hover:bg-white/10"
          >
            {tuningsLabel}
          </Link>
        </div>
      </section>

      <div className="mt-8 grid gap-8">
        {hub.groups.map((group, index) => (
          <section key={group.title} id={groupAnchorIds[index]} className="scroll-mt-28">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <p className="mt-2 text-base leading-7 text-ink/68">{group.description}</p>
            </div>
            <div className="mt-4">
              {group.tools.includes("guitar-tuner") ? (
                <nav className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3" aria-label={group.title}>
                  {homeInstrumentIds.map((instrument) => {
                    const content = getInstrumentTunerContent(locale, instrument);
                    return (
                      <Link
                        key={instrument}
                        href={`/${locale}/tools/${instrumentToTunerSlug(instrument)}`}
                        className="group flex min-h-0 items-start gap-3 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft sm:min-h-24"
                      >
                        <span className="mt-1 shrink-0 rounded-md bg-mint/10 p-2 text-mint">
                          <Music2 size={18} aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block break-words font-semibold">{content.title}</span>
                          <span className="mt-1 block break-words text-sm leading-6 text-ink/68">{content.description}</span>
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              ) : (
                <ToolNavigation locale={locale} dictionary={dictionary} tools={group.tools} />
              )}
            </div>
          </section>
        ))}
      </div>

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot className="mt-8 hidden lg:flex" />

      <AdSlot className="mt-8" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold">{dictionary.common.faq}</h2>
        <div className="mt-4 grid gap-3">
          {hub.faq.map((item) => (
            <details key={item.question} className="rounded-lg border border-line bg-white p-5">
              <summary className="cursor-pointer text-lg font-bold">{item.question}</summary>
              <p className="mt-3 leading-7 text-ink/68">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
