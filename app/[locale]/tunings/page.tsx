import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Music2 } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuideContent } from "@/lib/content/guides";
import { getTuningHubGroups, tuningHubContent } from "@/lib/content/tuningHub";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocaleFallbacks, isLocale, locales, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { buildTuningHubMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string }> };

const tuningBridgeLabels: Record<
  Locale,
  {
    continueLearning: string;
    continueLearningDescription: string;
    allGuides: string;
    allTools: string;
    songs: string;
    relatedTools: string;
  }
> = withLocaleFallbacks({
  ar: { continueLearning: "واصل من هنا", continueLearningDescription: "انتقل من صفحات الضبط مباشرة إلى الأدوات العملية والأدلة وصفحات التدريب الموسيقي.", allGuides: "كل الأدلة", allTools: "كل الأدوات", songs: "المقطوعات", relatedTools: "أدوات مرتبطة" },
  de: { continueLearning: "Hier sinnvoll weitergehen", continueLearningDescription: "Gehe von den Stimmungsseiten direkt zu den passenden Tools, Guides und Übungsseiten weiter.", allGuides: "Alle Guides", allTools: "Alle Tools", songs: "Songs", relatedTools: "Passende Tools" },
  en: { continueLearning: "Continue from here", continueLearningDescription: "Move from tuning pages straight into the practical tools, related guides and song practice pages.", allGuides: "All guides", allTools: "All tools", songs: "Songs", relatedTools: "Related tools" },
  es: { continueLearning: "Sigue desde aquí", continueLearningDescription: "Pasa de las páginas de afinación a las herramientas prácticas, guías relacionadas y páginas de práctica.", allGuides: "Todas las guías", allTools: "Todas las herramientas", songs: "Canciones", relatedTools: "Herramientas relacionadas" },
  fr: { continueLearning: "Continuer depuis ici", continueLearningDescription: "Passez des pages d’accordages aux outils pratiques, aux guides associés et aux pages d’entraînement.", allGuides: "Tous les guides", allTools: "Tous les outils", songs: "Morceaux", relatedTools: "Outils liés" },
  it: { continueLearning: "Continua da qui", continueLearningDescription: "Dalle pagine accordature puoi passare subito ai tool pratici, alle guide correlate e alle pagine per esercitarti.", allGuides: "Tutte le guide", allTools: "Tutti i tool", songs: "Spartiti", relatedTools: "Tool correlati" },
  ja: { continueLearning: "次に見るページ", continueLearningDescription: "チューニングページから実用ツール、関連ガイド、練習用ページへすぐ移動できます。", allGuides: "すべてのガイド", allTools: "すべてのツール", songs: "曲集", relatedTools: "関連ツール" },
  ko: { continueLearning: "여기서 계속", continueLearningDescription: "튜닝 페이지에서 실전 도구, 관련 가이드, 연습용 곡 페이지로 바로 이동할 수 있습니다.", allGuides: "모든 가이드", allTools: "모든 도구", songs: "곡 모음", relatedTools: "관련 도구" },
  pt: { continueLearning: "Continue daqui", continueLearningDescription: "Passe das páginas de afinação para ferramentas práticas, guias relacionados e páginas de prática.", allGuides: "Todos os guias", allTools: "Todas as ferramentas", songs: "Músicas", relatedTools: "Ferramentas relacionadas" },
  ru: { continueLearning: "Куда перейти дальше", continueLearningDescription: "Со страниц строев можно сразу перейти к практическим инструментам, связанным гайдам и страницам для упражнений.", allGuides: "Все гайды", allTools: "Все инструменты", songs: "Песни", relatedTools: "Связанные инструменты" },
  zh: { continueLearning: "从这里继续", continueLearningDescription: "你可以从调弦页面直接进入实用工具、相关指南和练习曲目页面。", allGuides: "全部指南", allTools: "全部工具", songs: "曲目", relatedTools: "相关工具" }
} satisfies Record<BaseLocale, {
  continueLearning: string;
  continueLearningDescription: string;
  allGuides: string;
  allTools: string;
  songs: string;
  relatedTools: string;
}>);

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  return buildTuningHubMetadata(rawLocale);
}

export default async function TuningsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const content = tuningHubContent[locale];
  const groups = getTuningHubGroups(locale);
  const dictionary = await getDictionary(locale);
  const labels = tuningBridgeLabels[locale];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd data={faqItemsSchema(content.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: content.title, url: `${siteUrl}/${locale}/tunings` }
        ])}
      />

      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">TuneUniversal</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{content.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{content.description}</p>

      <section className="mt-6 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-7 text-ink/72">{content.intro}</p>
      </section>

      <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="text-2xl font-bold">{labels.continueLearning}</h2>
        <p className="mt-3 leading-7 text-ink/72">{labels.continueLearningDescription}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link href={`/${locale}/tools`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
            {labels.allTools}
          </Link>
          <Link href={`/${locale}/guides`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
            {labels.allGuides}
          </Link>
          <Link href={`/${locale}/songs`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
            {labels.songs}
          </Link>
        </div>
      </section>

      <AdSlot className="mt-8" />

      <section className="mt-8">
        <h2 className="text-2xl font-bold">{labels.relatedTools}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(["guitar-tuner", "bass-tuner", "ukulele-tuner"] as const).map((tool) => (
            <Link
              key={tool}
              href={`/${locale}/tools/${tool}`}
              className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint"
            >
              <p className="font-bold">{dictionary.tools[tool].title}</p>
              <p className="mt-2 leading-7 text-ink/72">{dictionary.tools[tool].description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8 space-y-10">
        {groups.map((group) => (
          <section key={group.title}>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-black">{group.title}</h2>
              <p className="mt-2 leading-7 text-ink/68">{group.description}</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.guides.map((guide) => {
                const guideContent = getGuideContent(locale, guide);
                return (
                  <Link
                    key={guide}
                    href={`/${locale}/guides/${guide}`}
                    className="group flex min-h-0 items-start gap-3 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft sm:min-h-32"
                  >
                    <span className="mt-1 shrink-0 rounded-md bg-mint/10 p-2 text-mint">
                      <Music2 size={18} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words text-lg font-bold">{guideContent.title}</span>
                      <span className="mt-1 block break-words text-sm leading-6 text-ink/68">{guideContent.description}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-3">
          {content.faq.map((item) => (
            <details key={item.question} className="rounded-lg border border-line bg-white p-4">
              <summary className="cursor-pointer font-semibold">{item.question}</summary>
              <p className="mt-3 leading-7 text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <AdSlot className="mt-8" />
    </main>
  );
}
