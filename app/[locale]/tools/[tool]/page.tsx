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
import { PitchGenerator } from "@/components/tools/PitchGenerator";
import { SoundLevelMeter } from "@/components/tools/SoundLevelMeter";
import { TapBpm } from "@/components/tools/TapBpm";
import { UkuleleTuner } from "@/components/tools/UkuleleTuner";
import {
  alternativeTuningGuideSlugs,
  getGuideContent,
  guideIndexContent,
  guidesForInstrument,
  guidesForTool
} from "@/lib/content/guides";
import {
  clusterSectionLabels,
  getToolClusterGuides,
  getToolFollowUpQuestions,
  getToolSearchIntentTargets,
  searchIntentLabels,
  type SearchIntentTarget
} from "@/lib/content/internalLinking";
import {
  getInstrumentTunerContent,
  instrumentFromTunerSlug,
  instrumentTunerSlugs
} from "@/lib/content/instrumentTuners";
import { getToolSeoEnhancement } from "@/lib/content/seoEnhancements";
import { tuningHubContent } from "@/lib/content/tuningHub";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildInstrumentTunerMetadata, buildToolMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, instrumentTunerSchema, toolSchema } from "@/lib/seo/schema";
import { isToolSlug, toolSlugs, tunerTools, type Instrument, type ToolSlug } from "@/lib/tools/toolConfig";

type PageProps = { params: Promise<{ locale: string; tool: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const toolPageLabels: Record<
  Locale,
  { allGuides: string; allTools: string; exploreMore: string; exploreMoreDescription: string; relatedTunings: string; tuningHub: string }
> = {
  ar: { allGuides: "كل الأدلة", allTools: "كل الأدوات", exploreMore: "واصل من هنا", exploreMoreDescription: "استخدم هذه الروابط للانتقال بين الأداة، الأدلة العملية ومركز الضبطات المرتبط بها.", relatedTunings: "ضبطات مرتبطة", tuningHub: "مركز الضبطات" },
  de: { allGuides: "Alle Guides", allTools: "Alle Tools", exploreMore: "Hier sinnvoll weitergehen", exploreMoreDescription: "Nutze diese Links, um schnell zwischen Tool, passenden Anleitungen und dem Stimmungs-Hub zu wechseln.", relatedTunings: "Verwandte Stimmungen", tuningHub: "Tuning-Hub" },
  en: { allGuides: "All guides", allTools: "All tools", exploreMore: "Explore the next step", exploreMoreDescription: "Use these links to move between the tool, practical guides and the matching tuning hub.", relatedTunings: "Related tunings", tuningHub: "Tuning hub" },
  es: { allGuides: "Todas las guías", allTools: "Todas las herramientas", exploreMore: "Sigue desde aquí", exploreMoreDescription: "Usa estos enlaces para pasar rápido entre la herramienta, las guías prácticas y el hub de afinaciones.", relatedTunings: "Afinaciones relacionadas", tuningHub: "Hub de afinaciones" },
  fr: { allGuides: "Tous les guides", allTools: "Tous les outils", exploreMore: "Continuer depuis ici", exploreMoreDescription: "Utilisez ces liens pour passer rapidement entre l'outil, les guides pratiques et le hub des accordages.", relatedTunings: "Accordages liés", tuningHub: "Hub des accordages" },
  it: { allGuides: "Tutte le guide", allTools: "Tutti i tool", exploreMore: "Continua da qui", exploreMoreDescription: "Usa questi link per passare velocemente tra il tool, le guide pratiche e l’hub delle accordature collegate.", relatedTunings: "Accordature correlate", tuningHub: "Hub accordature" },
  ja: { allGuides: "すべてのガイド", allTools: "すべてのツール", exploreMore: "次に見るページ", exploreMoreDescription: "このツールから実践ガイドやチューニングハブへ自然に移動できます。", relatedTunings: "関連チューニング", tuningHub: "チューニングハブ" },
  ko: { allGuides: "모든 가이드", allTools: "모든 도구", exploreMore: "다음으로 보기 좋은 페이지", exploreMoreDescription: "이 링크를 통해 현재 도구, 실전 가이드, 관련 튜닝 허브를 자연스럽게 오갈 수 있습니다.", relatedTunings: "관련 튜닝", tuningHub: "튜닝 허브" },
  pt: { allGuides: "Todos os guias", allTools: "Todas as ferramentas", exploreMore: "Continue daqui", exploreMoreDescription: "Use estes links para passar rapidamente entre a ferramenta, os guias práticos e o hub de afinações.", relatedTunings: "Afinações relacionadas", tuningHub: "Hub de afinações" },
  ru: { allGuides: "Все гайды", allTools: "Все инструменты", exploreMore: "Куда перейти дальше", exploreMoreDescription: "Эти ссылки помогают быстро перейти от инструмента к практическим гайдам и к хабу строев.", relatedTunings: "Связанные строи", tuningHub: "Хаб строев" },
  zh: { allGuides: "全部指南", allTools: "全部工具", exploreMore: "下一步可以看这里", exploreMoreDescription: "通过这些链接，可以在当前工具、实用指南和相关调弦中心之间快速切换。", relatedTunings: "相关调弦", tuningHub: "调弦中心" }
};

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
      return <TapBpm dictionary={dictionary} locale={locale} />;
    case "chord-transposer":
      return <ChordTransposer dictionary={dictionary} locale={locale} />;
    case "sound-level-meter":
      return <SoundLevelMeter dictionary={dictionary} locale={locale} />;
    case "pitch-generator":
      return <PitchGenerator locale={locale} />;
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
  const pageLabels = toolPageLabels[locale];
  const clusterLabels = clusterSectionLabels[locale];
  const intentLabels = searchIntentLabels[locale];
  const guideHub = guideIndexContent[locale];
  const tuningHub = tuningHubContent[locale];
  const seoEnhancement = coreTool ? getToolSeoEnhancement(locale, coreTool) : null;
  const heroTitle = seoEnhancement?.heroTitle ?? content.title;
  const heroDescription = seoEnhancement?.heroDescription ?? content.description;
  const faqContent = seoEnhancement ? [...content.faq, ...seoEnhancement.faqs] : content.faq;
  const relatedTools: ToolSlug[] =
    coreTool && !tunerTools.includes(coreTool as (typeof tunerTools)[number])
      ? (["guitar-tuner", "metronome", "tap-bpm", "sound-level-meter", "pitch-generator", "chord-transposer"].filter((slug) => slug !== coreTool) as ToolSlug[])
      : ["metronome", "tap-bpm", "chord-transposer", "sound-level-meter", "pitch-generator"];
  const relatedGuides = coreTool ? guidesForTool(coreTool) : instrument ? guidesForInstrument(instrument) : [];
  const clusterGuides = (coreTool ? getToolClusterGuides(coreTool) : getToolClusterGuides(rawTool)).filter(
    (guide, index, source) => source.indexOf(guide) === index
  );
  const searchTargets = (coreTool ? getToolSearchIntentTargets(coreTool) : getToolSearchIntentTargets(rawTool)).filter(
    (target, index, source) =>
      source.findIndex((item) => item.type === target.type && ("slug" in item ? item.slug === ("slug" in target ? target.slug : "") : item.href === ("href" in target ? target.href : ""))) === index
  );
  const followUpQuestions = coreTool ? getToolFollowUpQuestions(locale, coreTool) : getToolFollowUpQuestions(locale, rawTool);
  const relatedTuningGuides = relatedGuides.filter((guide) =>
    alternativeTuningGuideSlugs.includes(guide as (typeof alternativeTuningGuideSlugs)[number])
  );
  const relatedPracticeGuides = relatedGuides.filter((guide) => !relatedTuningGuides.includes(guide));

  const resolveTarget = (target: SearchIntentTarget) => {
    if (target.type === "guide") {
      const guideContent = getGuideContent(locale, target.slug);
      return {
        description: guideContent.description,
        href: `/${locale}/guides/${target.slug}`,
        title: guideContent.title
      };
    }

    if (target.type === "tool") {
      const toolContent = dictionary.tools[target.slug];
      return {
        description: toolContent.description,
        href: `/${locale}/tools/${target.slug}`,
        title: toolContent.title
      };
    }

    return {
      description:
        target.slug === "guides"
          ? guideHub.description
          : target.slug === "tunings"
            ? tuningHub.description
            : target.slug === "songs"
              ? dictionary.hero.description
              : dictionary.hero.description,
      href: `/${locale}/${target.slug}`,
      title:
        target.slug === "guides"
          ? guideHub.title
          : target.slug === "tunings"
            ? tuningHub.title
            : target.slug === "songs"
              ? dictionary.nav.home
              : dictionary.nav.tools
    };
  };

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
            <h1 className="mt-3 max-w-full break-words text-2xl font-black leading-tight sm:text-5xl">{heroTitle}</h1>
            <p className="mt-4 max-w-2xl break-words text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">{heroDescription}</p>
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
          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{pageLabels.exploreMore}</h2>
            <p className="mt-3 leading-7 text-ink/72">{pageLabels.exploreMoreDescription}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link href={`/${locale}/tools`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {pageLabels.allTools}
              </Link>
              <Link href={`/${locale}/guides`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {pageLabels.allGuides}
              </Link>
              <Link href={`/${locale}/tunings`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {pageLabels.tuningHub}
              </Link>
            </div>
          </section>
          {relatedPracticeGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">{guideHeadings[locale]}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedPracticeGuides.map((guide) => {
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
          {relatedTuningGuides.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold">{pageLabels.relatedTunings}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {relatedTuningGuides.map((guide) => {
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
          {clusterGuides.length > 0 && (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{clusterLabels.toolGuidesTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{clusterLabels.toolGuidesDescription}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {clusterGuides.map((guide) => {
                  const guideContent = getGuideContent(locale, guide);
                  return (
                    <Link
                      key={guide}
                      className="rounded-lg border border-line bg-mint/5 p-4 transition hover:border-mint hover:bg-white"
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
          {searchTargets.length > 0 && (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{intentLabels.searchesTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{intentLabels.searchesDescription}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {searchTargets.map((target) => {
                  const resolved = resolveTarget(target);
                  return (
                    <Link
                      key={`${target.type}-${"slug" in target ? target.slug : target.href}`}
                      className="rounded-lg border border-line bg-mint/5 p-4 transition hover:border-mint hover:bg-white"
                      href={resolved.href}
                    >
                      <span className="block font-semibold">{resolved.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-ink/68">{resolved.description}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          {followUpQuestions.length > 0 && (
            <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <h2 className="text-2xl font-bold">{intentLabels.questionsTitle}</h2>
              <p className="mt-3 leading-7 text-ink/72">{intentLabels.questionsDescription}</p>
              <div className="mt-4 grid gap-3">
                {followUpQuestions.map((item) => {
                  const resolved = item.target ? resolveTarget(item.target) : null;
                  return (
                    <article key={item.question} className="rounded-lg border border-line bg-mint/4 p-4">
                      <h3 className="font-semibold">{item.question}</h3>
                      <p className="mt-2 leading-7 text-ink/72">{item.answer}</p>
                      {resolved ? (
                        <Link className="mt-3 inline-flex text-sm font-semibold text-mint hover:underline" href={resolved.href}>
                          {resolved.title}
                        </Link>
                      ) : null}
                    </article>
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
