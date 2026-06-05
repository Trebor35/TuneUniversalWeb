import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  alternativeTuningGuideSlugs,
  getGuideContent,
  guideIndexContent,
  instrumentGuideSlugs,
  utilityGuideSlugs,
  type GuideSlug
} from "@/lib/content/guides";
import { featuredGuideIndexTools, internalLinkingContent } from "@/lib/content/internalLinking";
import { hubEnhancements } from "@/lib/content/seoEnhancements";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getContentLocale, isLocale, locales, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { buildGuideIndexMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const guideCategoryLabels: Record<BaseLocale, { instrument: string; tuning: string; utility: string }> = {
  ar: { instrument: "أدلة الآلات", tuning: "أدلة الضبط", utility: "أدلة التدريب" },
  de: { instrument: "Instrumenten-Guides", tuning: "Stimmungs-Guides", utility: "Praxis-Guides" },
  en: { instrument: "Instrument guides", tuning: "Tuning guides", utility: "Practice guides" },
  es: { instrument: "Guías de instrumentos", tuning: "Guías de afinación", utility: "Guías de práctica" },
  fr: { instrument: "Guides instruments", tuning: "Guides d'accordage", utility: "Guides de pratique" },
  it: { instrument: "Guide strumenti", tuning: "Guide accordature", utility: "Guide pratica" },
  ja: { instrument: "楽器ガイド", tuning: "チューニングガイド", utility: "練習ガイド" },
  ko: { instrument: "악기 가이드", tuning: "튜닝 가이드", utility: "연습 가이드" },
  pt: { instrument: "Guias de instrumentos", tuning: "Guias de afinação", utility: "Guias de prática" },
  ru: { instrument: "Гайды по инструментам", tuning: "Гайды по строям", utility: "Практические гайды" },
  zh: { instrument: "乐器指南", tuning: "调弦指南", utility: "练习指南" }
};

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  return buildGuideIndexMetadata(rawLocale);
}

export default async function GuidesIndexPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const contentLocale = getContentLocale(locale);
  const dictionary = await getDictionary(locale);
  const content = guideIndexContent[contentLocale];
  const internalLinks = internalLinkingContent[contentLocale].guidesHub;
  const categories: { guides: readonly GuideSlug[]; title: string }[] = [
    { title: guideCategoryLabels[contentLocale].instrument, guides: instrumentGuideSlugs },
    { title: guideCategoryLabels[contentLocale].tuning, guides: alternativeTuningGuideSlugs },
    { title: guideCategoryLabels[contentLocale].utility, guides: utilityGuideSlugs }
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: content.title, url: `${siteUrl}/${locale}/guides` }
        ])}
      />
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">TuneUniversal</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{content.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{content.description}</p>
      <section className="mt-6 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-7 text-ink/72">{hubEnhancements[contentLocale].guides}</p>
      </section>
      <section className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-black">{internalLinks.featuredToolsTitle}</h2>
          <p className="mt-3 leading-7 text-ink/68">{internalLinks.featuredToolsDescription}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {featuredGuideIndexTools.map((tool) => (
              <Link
                key={tool}
                href={`/${locale}/tools/${tool}`}
                className="rounded-lg border border-line bg-mint/5 px-4 py-3 font-semibold transition hover:border-mint hover:bg-white"
              >
                {dictionary.tools[tool].title}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {internalLinks.hubCards.map((card) => (
            <Link
              key={card.href}
              href={`/${locale}/${card.href}`}
              className="group rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint"
            >
              <span className="block text-lg font-bold">{card.title}</span>
              <span className="mt-2 block text-sm leading-6 text-ink/68">{card.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot className="mt-8" />

      <div className="mt-8 space-y-10">
        {categories.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-black">{category.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.guides.map((guide) => {
                const guideContent = getGuideContent(locale, guide);
                const tool = dictionary.tools[guideContent.tool];
                return (
                  <Link
                    key={guide}
                    className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:border-mint"
                    href={`/${locale}/guides/${guide}`}
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-mint">{tool.title}</span>
                    <span className="mt-3 block text-xl font-bold leading-7">{guideContent.title}</span>
                    <span className="mt-3 block text-sm leading-6 text-ink/68">{guideContent.description}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 hidden max-w-xl lg:flex" />
      <AdSlot className="mt-8 hidden lg:flex" />
    </main>
  );
}
