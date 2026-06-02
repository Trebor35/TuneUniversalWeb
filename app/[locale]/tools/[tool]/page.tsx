import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { ToolNavigation } from "@/components/layout/ToolNavigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { BassTuner } from "@/components/tools/BassTuner";
import { ChordTransposer } from "@/components/tools/ChordTransposer";
import { GuitarTuner } from "@/components/tools/GuitarTuner";
import { Metronome } from "@/components/tools/Metronome";
import { SoundLevelMeter } from "@/components/tools/SoundLevelMeter";
import { TapBpm } from "@/components/tools/TapBpm";
import { UkuleleTuner } from "@/components/tools/UkuleleTuner";
import { getGuideContent, guidesForTool } from "@/lib/content/guides";
import {
  getInstrumentTunerContent,
  instrumentFromTunerSlug,
  instrumentTunerSlugs
} from "@/lib/content/instrumentTuners";
import { getToolSeoEnhancement } from "@/lib/content/seoEnhancements";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildInstrumentTunerMetadata, buildToolMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, instrumentTunerSchema, toolSchema } from "@/lib/seo/schema";
import { isToolSlug, toolSlugs, tunerTools, type Instrument, type ToolSlug } from "@/lib/tools/toolConfig";

type PageProps = { params: Promise<{ locale: string; tool: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const guideHeadings: Record<Locale, string> = {
  ar: "أدلة ذات صلة",
  de: "Verwandte Anleitungen",
  en: "Related guides",
  es: "Guías relacionadas",
  fr: "Guides associés",
  it: "Guide correlate",
  ja: "関連ガイド",
  ko: "관련 가이드",
  pt: "Guias relacionados",
  ru: "Связанные руководства",
  zh: "相关指南"
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Array.from(new Set([...toolSlugs, ...instrumentTunerSlugs])).map((tool) => ({ locale, tool }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, tool: rawTool } = await params;
  if (!isLocale(rawLocale)) return {};

  if (isToolSlug(rawTool)) {
    const dictionary = await getDictionary(rawLocale);
    return buildToolMetadata(rawLocale, rawTool, dictionary);
  }

  const instrument = instrumentFromTunerSlug(rawTool);
  if (!instrument) return {};
  return buildInstrumentTunerMetadata(rawLocale, rawTool, getInstrumentTunerContent(rawLocale, instrument));
}

function ToolComponent({
  dictionary,
  instrument,
  locale,
  tool
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  instrument?: Instrument;
  locale: Locale;
  tool?: ToolSlug;
}) {
  if (instrument) return <GuitarTuner dictionary={dictionary} instrument={instrument} />;

  switch (tool) {
    case "guitar-tuner":
      return <GuitarTuner dictionary={dictionary} />;
    case "bass-tuner":
      return <BassTuner dictionary={dictionary} />;
    case "ukulele-tuner":
      return <UkuleleTuner dictionary={dictionary} />;
    case "metronome":
      return <Metronome dictionary={dictionary} />;
    case "tap-bpm":
      return <TapBpm dictionary={dictionary} />;
    case "chord-transposer":
      return <ChordTransposer dictionary={dictionary} />;
    case "sound-level-meter":
      return <SoundLevelMeter dictionary={dictionary} locale={locale} />;
    default:
      return null;
  }
}

export default async function ToolPage({ params }: PageProps) {
  const { locale: rawLocale, tool: rawTool } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);
  const coreTool = isToolSlug(rawTool) ? (rawTool as ToolSlug) : null;
  const instrument = coreTool ? null : instrumentFromTunerSlug(rawTool);

  if (!coreTool && !instrument) notFound();

  const instrumentContent = instrument ? getInstrumentTunerContent(locale, instrument) : null;
  const content = coreTool ? dictionary.tools[coreTool] : instrumentContent!;
  const seoEnhancement = coreTool ? getToolSeoEnhancement(locale, coreTool) : null;
  const faqContent = seoEnhancement ? [...content.faq, ...seoEnhancement.faqs] : content.faq;
  const relatedTools: ToolSlug[] =
    coreTool && !tunerTools.includes(coreTool as (typeof tunerTools)[number])
      ? (["guitar-tuner", "metronome", "tap-bpm", "chord-transposer"].filter((slug) => slug !== coreTool) as ToolSlug[])
      : ["metronome", "tap-bpm", "chord-transposer", "sound-level-meter"];
  const relatedGuides = coreTool ? guidesForTool(coreTool) : [];

  return (
    <main className="mx-auto w-full max-w-7xl overflow-hidden px-2 py-8 sm:px-4 sm:py-10">
      {coreTool ? <JsonLd data={toolSchema(locale, coreTool, dictionary)} /> : null}
      {instrumentContent ? <JsonLd data={instrumentTunerSchema(locale, rawTool, instrumentContent)} /> : null}
      {coreTool ? <JsonLd data={faqItemsSchema(faqContent)} /> : <JsonLd data={faqItemsSchema(content.faq)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: dictionary.nav.tools, url: `${siteUrl}/${locale}/tools` },
          { name: content.title, url: `${siteUrl}/${locale}/tools/${rawTool}` }
        ])}
      />
      <AdSlot className="mb-8" />
      <div className="grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,920px)_340px] lg:gap-10">
        <article className="w-full min-w-0 space-y-8 sm:space-y-10">
          <header className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint sm:text-sm sm:tracking-[0.18em]">TuneUniversal</p>
            <h1 className="mt-3 max-w-full break-words text-2xl font-black leading-tight sm:text-5xl">{content.title}</h1>
            <p className="mt-4 max-w-2xl break-words text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{content.description}</p>
          </header>
          <div className="w-full min-w-0 max-w-full overflow-hidden">
            <ToolComponent tool={coreTool ?? undefined} instrument={instrument ?? undefined} dictionary={dictionary} locale={locale} />
          </div>
          <AdSlot variant="mobileBanner" className="lg:hidden" />
          <AdSlot className="hidden lg:flex" />
          <section>
            <h2 className="text-2xl font-bold">{dictionary.common.howItWorks}</h2>
            <ol className="mt-4 grid gap-3">
              {content.howItWorks.map((item) => (
                <li key={item} className="rounded-lg border border-line bg-white p-4">
                  {item}
                </li>
              ))}
            </ol>
          </section>
          <AdSlot variant="mobileBanner" className="lg:hidden" />
          <AdSlot className="hidden lg:flex" />
          {seoEnhancement ? (
            <section>
              <h2 className="text-2xl font-bold">{guideHeadings[locale]}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {seoEnhancement.sections.map((section) => (
                  <article key={section.title} className="rounded-lg border border-line bg-white p-4 shadow-soft">
                    <h3 className="text-lg font-bold">{section.title}</h3>
                    <p className="mt-2 leading-7 text-ink/72">{section.body}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
          {relatedGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">{guideHeadings[locale]}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedGuides.map((guide) => {
                  const guideContent = getGuideContent(locale, guide);
                  return (
                    <Link
                      key={guide}
                      className="rounded-lg border border-line bg-white p-4 transition hover:border-mint hover:shadow-soft"
                      href={`/${locale}/guides/${guide}`}
                    >
                      <span className="block font-semibold">{guideContent.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-ink/68">{guideContent.description}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          <section>
            <h2 className="text-2xl font-bold">{dictionary.common.faq}</h2>
            <div className="mt-4 grid gap-3">
              {faqContent.map((item) => (
                <details key={item.question} className="rounded-lg border border-line bg-white p-4">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="mt-3 leading-7 text-ink/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
          <AdSlot className="mb-2 mt-2" />
        </article>
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="rectangle" className="mb-6 hidden lg:flex" />
          <h2 className="mb-4 text-xl font-bold">{dictionary.common.otherTools}</h2>
          <ToolNavigation locale={locale} dictionary={dictionary} tools={relatedTools} variant="sidebar" />
        </aside>
      </div>
    </main>
  );
}
