import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Music2 } from "lucide-react";
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
import { instrumentIds } from "@/lib/tools/toolConfig";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string }> };

const instrumentSectionLabels: Record<Locale, string> = {
  ar: "موالفات الآلات",
  de: "Instrumenten-Tuner",
  en: "Instrument tuners",
  es: "Afinadores de instrumentos",
  fr: "Accordeurs d'instruments",
  it: "Accordatori per strumento",
  ja: "楽器チューナー",
  ko: "악기 튜너",
  pt: "Afinadores de instrumentos",
  ru: "Тюнеры для инструментов",
  zh: "乐器调音器"
};

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
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">TuneUniversal</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{hub.title}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">{hub.description}</p>
      <section className="mt-6 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-7 text-ink/72">{hubEnhancements[locale].tools}</p>
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
        {hub.groups.map((group) => (
          <section key={group.title}>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold">{group.title}</h2>
              <p className="mt-2 text-base leading-7 text-ink/68">{group.description}</p>
            </div>
            <div className="mt-4">
              <ToolNavigation locale={locale} dictionary={dictionary} tools={group.tools} />
            </div>
          </section>
        ))}
      </div>

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot className="mt-8 hidden lg:flex" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold">{instrumentSectionLabels[locale]}</h2>
        <p className="mt-2 max-w-3xl text-base leading-7 text-ink/68">{hub.instrumentIntro}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {instrumentIds.map((instrument) => {
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
        </div>
      </section>

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
