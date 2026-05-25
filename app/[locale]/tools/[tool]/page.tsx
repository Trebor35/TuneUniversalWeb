import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChordTransposer } from "@/components/tools/ChordTransposer";
import { AdSlot } from "@/components/ads/AdSlot";
import { BassTuner } from "@/components/tools/BassTuner";
import { GuitarTuner } from "@/components/tools/GuitarTuner";
import { Metronome } from "@/components/tools/Metronome";
import { TapBpm } from "@/components/tools/TapBpm";
import { UkuleleTuner } from "@/components/tools/UkuleleTuner";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolNavigation } from "@/components/layout/ToolNavigation";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { buildToolMetadata } from "@/lib/seo/metadata";
import { faqSchema, toolSchema } from "@/lib/seo/schema";
import { isToolSlug, tunerTools, type ToolSlug } from "@/lib/tools/toolConfig";

type PageProps = { params: Promise<{ locale: string; tool: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, tool: rawTool } = await params;
  if (!isLocale(rawLocale) || !isToolSlug(rawTool)) return {};
  const dictionary = await getDictionary(rawLocale);
  return buildToolMetadata(rawLocale, rawTool, dictionary);
}

function ToolComponent({ tool, dictionary }: { tool: ToolSlug; dictionary: Awaited<ReturnType<typeof getDictionary>> }) {
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
  }
}

export default async function ToolPage({ params }: PageProps) {
  const { locale: rawLocale, tool: rawTool } = await params;
  if (!isLocale(rawLocale) || !isToolSlug(rawTool)) notFound();
  const locale = rawLocale as Locale;
  const tool = rawTool as ToolSlug;
  const dictionary = await getDictionary(locale);
  const content = dictionary.tools[tool];
  const relatedTools: ToolSlug[] = tunerTools.includes(tool as (typeof tunerTools)[number])
    ? ["metronome", "tap-bpm", "chord-transposer"]
    : ["guitar-tuner", "metronome", "tap-bpm", "chord-transposer"].filter((slug) => slug !== tool) as ToolSlug[];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <JsonLd data={toolSchema(locale, tool, dictionary)} />
      <JsonLd data={faqSchema(tool, dictionary)} />
      <AdSlot className="mb-8" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,920px)_340px] lg:gap-10">
        <article className="min-w-0 space-y-8 sm:space-y-10">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint sm:text-sm sm:tracking-[0.18em]">TuneUniversal</p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{content.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{content.description}</p>
          </header>
          <ToolComponent tool={tool} dictionary={dictionary} />
          <AdSlot variant="mobileBanner" className="lg:hidden" />
          <AdSlot className="hidden lg:flex" />
          <section>
            <h2 className="text-2xl font-bold">{dictionary.common.howItWorks}</h2>
            <ol className="mt-4 grid gap-3">
              {content.howItWorks.map((item) => (
                <li key={item} className="rounded-lg border border-line bg-white p-4">{item}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-bold">{dictionary.common.faq}</h2>
            <div className="mt-4 grid gap-3">
              {content.faq.map((item) => (
                <details key={item.question} className="rounded-lg border border-line bg-white p-4">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="mt-3 leading-7 text-ink/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
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
