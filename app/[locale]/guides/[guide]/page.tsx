import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  alternativeTuningGuideSlugs,
  getGuideContent,
  guideIndexContent,
  guideSlugs,
  isGuideSlug
} from "@/lib/content/guides";
import {
  getGuideFollowUpQuestions,
  getGuideSearchIntentTargets,
  searchIntentLabels,
  type SearchIntentTarget
} from "@/lib/content/internalLinking";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildGuideMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, guideSchema } from "@/lib/seo/schema";
import { tuningHubContent } from "@/lib/content/tuningHub";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string; guide: string }> };

const guideContinueLabels: Record<
  Locale,
  { allGuides: string; allTools: string; continueLearning: string; continueLearningDescription: string; tuningHub: string }
> = {
  ar: { allGuides: "كل الأدلة", allTools: "كل الأدوات", continueLearning: "واصل التعلّم", continueLearningDescription: "من هذه الصفحة يمكنك الانتقال مباشرة إلى الأداة العملية أو إلى أدلة وضبطات مرتبطة.", tuningHub: "مركز الضبطات" },
  de: { allGuides: "Alle Guides", allTools: "Alle Tools", continueLearning: "Sinnvoll weitermachen", continueLearningDescription: "Von hier aus kannst du direkt zum passenden Tool, zu ähnlichen Guides oder zum Tuning-Hub wechseln.", tuningHub: "Tuning-Hub" },
  en: { allGuides: "All guides", allTools: "All tools", continueLearning: "Continue from here", continueLearningDescription: "Use this page as a bridge to the practical tool, closely related guides and the matching tuning hub.", tuningHub: "Tuning hub" },
  es: { allGuides: "Todas las guías", allTools: "Todas las herramientas", continueLearning: "Seguir desde aquí", continueLearningDescription: "Desde esta página puedes pasar directamente a la herramienta, a otras guías útiles y al hub de afinaciones.", tuningHub: "Hub de afinaciones" },
  fr: { allGuides: "Tous les guides", allTools: "Tous les outils", continueLearning: "Continuer depuis ici", continueLearningDescription: "Cette page relie l'explication, l'outil pratique, les guides proches et le hub des accordages.", tuningHub: "Hub des accordages" },
  it: { allGuides: "Tutte le guide", allTools: "Tutti i tool", continueLearning: "Continua da qui", continueLearningDescription: "Da questa pagina puoi passare subito al tool pratico, ad altre guide utili e all’hub delle accordature collegate.", tuningHub: "Hub accordature" },
  ja: { allGuides: "すべてのガイド", allTools: "すべてのツール", continueLearning: "次に見るページ", continueLearningDescription: "このページから実践ツール、関連ガイド、チューニングハブへ移動できます。", tuningHub: "チューニングハブ" },
  ko: { allGuides: "모든 가이드", allTools: "모든 도구", continueLearning: "여기서 계속", continueLearningDescription: "이 페이지는 실전 도구, 관련 가이드, 튜닝 허브로 이어주는 다리 역할을 합니다.", tuningHub: "튜닝 허브" },
  pt: { allGuides: "Todos os guias", allTools: "Todas as ferramentas", continueLearning: "Continue daqui", continueLearningDescription: "Use esta página para seguir para a ferramenta prática, guias relacionados e o hub de afinações.", tuningHub: "Hub de afinações" },
  ru: { allGuides: "Все гайды", allTools: "Все инструменты", continueLearning: "Куда перейти дальше", continueLearningDescription: "С этой страницы можно сразу перейти к практическому инструменту, связанным гайдам и хабу строев.", tuningHub: "Хаб строев" },
  zh: { allGuides: "全部指南", allTools: "全部工具", continueLearning: "从这里继续", continueLearningDescription: "这页可以把你直接带到实用工具、相关指南以及对应的调弦中心。", tuningHub: "调弦中心" }
};

const relatedTuningHeadings: Record<Locale, string> = {
  ar: "ضبطات مرتبطة",
  de: "Verwandte Stimmungen",
  en: "Related tunings",
  es: "Afinaciones relacionadas",
  fr: "Accordages liés",
  it: "Accordature correlate",
  ja: "関連チューニング",
  ko: "관련 튜닝",
  pt: "Afinações relacionadas",
  ru: "Связанные строи",
  zh: "相关调弦"
};

const guideUi: Record<
  Locale,
  {
    commonMistakes: string;
    frequency: string;
    note: string;
    notesTable: string;
    openTool: string;
    relatedGuides: string;
    relatedTools: string;
    stringLabel: string;
  }
> = {
  ar: { commonMistakes: "أخطاء شائعة", frequency: "التردد", note: "النغمة", notesTable: "جدول الأوتار والنغمات", openTool: "افتح الأداة", relatedGuides: "أدلة مرتبطة", relatedTools: "أدوات مرتبطة", stringLabel: "وتر / خانة" },
  de: { commonMistakes: "Häufige Fehler", frequency: "Frequenz", note: "Note", notesTable: "Saiten- und Notentabelle", openTool: "Tool öffnen", relatedGuides: "Verwandte Guides", relatedTools: "Verwandte Tools", stringLabel: "Saite / Position" },
  en: { commonMistakes: "Common mistakes", frequency: "Frequency", note: "Note", notesTable: "String and note table", openTool: "Open tool", relatedGuides: "Related guides", relatedTools: "Related tools", stringLabel: "String / position" },
  es: { commonMistakes: "Errores comunes", frequency: "Frecuencia", note: "Nota", notesTable: "Tabla de cuerdas y notas", openTool: "Abrir herramienta", relatedGuides: "Guías relacionadas", relatedTools: "Herramientas relacionadas", stringLabel: "Cuerda / posición" },
  fr: { commonMistakes: "Erreurs courantes", frequency: "Fréquence", note: "Note", notesTable: "Tableau des cordes et notes", openTool: "Ouvrir l'outil", relatedGuides: "Guides liés", relatedTools: "Outils liés", stringLabel: "Corde / position" },
  it: { commonMistakes: "Errori comuni", frequency: "Frequenza", note: "Nota", notesTable: "Tabella corde e note", openTool: "Apri il tool", relatedGuides: "Guide correlate", relatedTools: "Tool correlati", stringLabel: "Corda / posizione" },
  ja: { commonMistakes: "よくあるミス", frequency: "周波数", note: "音名", notesTable: "弦と音の表", openTool: "ツールを開く", relatedGuides: "関連ガイド", relatedTools: "関連ツール", stringLabel: "弦 / 位置" },
  ko: { commonMistakes: "자주 하는 실수", frequency: "주파수", note: "음", notesTable: "현과 음 표", openTool: "도구 열기", relatedGuides: "관련 가이드", relatedTools: "관련 도구", stringLabel: "줄 / 위치" },
  pt: { commonMistakes: "Erros comuns", frequency: "Frequência", note: "Nota", notesTable: "Tabela de cordas e notas", openTool: "Abrir ferramenta", relatedGuides: "Guias relacionados", relatedTools: "Ferramentas relacionadas", stringLabel: "Corda / posição" },
  ru: { commonMistakes: "Частые ошибки", frequency: "Частота", note: "Нота", notesTable: "Таблица струн и нот", openTool: "Открыть инструмент", relatedGuides: "Связанные руководства", relatedTools: "Связанные инструменты", stringLabel: "Струна / позиция" },
  zh: { commonMistakes: "常见错误", frequency: "频率", note: "音名", notesTable: "弦与音名表", openTool: "打开工具", relatedGuides: "相关指南", relatedTools: "相关工具", stringLabel: "弦 / 位置" }
};

export function generateStaticParams() {
  return locales.flatMap((locale) => guideSlugs.map((guide) => ({ locale, guide })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, guide: rawGuide } = await params;
  if (!isLocale(rawLocale) || !isGuideSlug(rawGuide)) return {};
  return buildGuideMetadata(rawLocale, rawGuide, getGuideContent(rawLocale, rawGuide));
}

export default async function GuidePage({ params }: PageProps) {
  const { locale: rawLocale, guide: rawGuide } = await params;
  if (!isLocale(rawLocale) || !isGuideSlug(rawGuide)) notFound();

  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);
  const content = getGuideContent(locale, rawGuide);
  const ui = guideUi[locale];
  const indexContent = guideIndexContent[locale];
  const intentLabels = searchIntentLabels[locale];
  const tool = dictionary.tools[content.tool];
  const toolHref = `/${locale}/${content.targetPath ?? `tools/${content.tool}`}`;
  const toolTitle = content.targetTitle ?? tool.title;
  const toolDescription = content.targetDescription ?? tool.description;
  const continueLabels = guideContinueLabels[locale];
  const searchTargets = getGuideSearchIntentTargets(rawGuide);
  const followUpQuestions = getGuideFollowUpQuestions(locale, rawGuide);
  const relatedTuningGuides = (content.relatedGuides ?? []).filter((guide) =>
    alternativeTuningGuideSlugs.includes(guide as (typeof alternativeTuningGuideSlugs)[number])
  );
  const relatedPracticeGuides = (content.relatedGuides ?? []).filter((guide) => !relatedTuningGuides.includes(guide));

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
          ? indexContent.description
          : target.slug === "tunings"
            ? tuningHubContent[locale].description
            : target.slug === "songs"
              ? dictionary.nav.home
              : dictionary.hero.description,
      href: `/${locale}/${target.slug}`,
      title:
        target.slug === "guides"
          ? indexContent.title
          : target.slug === "tunings"
            ? tuningHubContent[locale].title
            : target.slug === "songs"
              ? dictionary.nav.home
              : dictionary.nav.tools
    };
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <JsonLd data={guideSchema(locale, rawGuide, content)} />
      {content.faq?.length ? <JsonLd data={faqItemsSchema(content.faq)} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: indexContent.title, url: `${siteUrl}/${locale}/guides` },
          { name: content.title, url: `${siteUrl}/${locale}/guides/${rawGuide}` }
        ])}
      />
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">TuneUniversal Guide</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{content.title}</h1>
      <p className="mt-4 text-lg leading-8 text-ink/70">{content.description}</p>

      <AdSlot className="mt-8" />

      <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-8 text-ink/75">{content.intro}</p>
        <Link className="mt-5 inline-flex rounded-md bg-ink px-4 py-3 font-bold text-white" href={toolHref}>
          {toolTitle}
        </Link>
      </section>

      <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="text-2xl font-bold">{continueLabels.continueLearning}</h2>
        <p className="mt-3 leading-7 text-ink/72">{continueLabels.continueLearningDescription}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link
            href={toolHref}
            className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white"
          >
            {toolTitle}
          </Link>
          <Link
            href={`/${locale}/guides`}
            className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white"
          >
            {continueLabels.allGuides}
          </Link>
          <Link
            href={`/${locale}/tunings`}
            className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white"
          >
            {continueLabels.tuningHub}
          </Link>
        </div>
      </section>

      {content.noteRows?.length ? (
        <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">{ui.notesTable}</h2>
              <p className="mt-2 leading-7 text-ink/72">{toolDescription}</p>
            </div>
            <Link className="inline-flex rounded-md bg-mint px-4 py-3 font-bold text-white" href={toolHref}>
              {ui.openTool}
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-lg border border-line">
              <thead className="bg-mint/8 text-left">
                <tr>
                  <th className="px-4 py-3 text-sm font-bold text-ink">{ui.stringLabel}</th>
                  <th className="px-4 py-3 text-sm font-bold text-ink">{ui.note}</th>
                  <th className="px-4 py-3 text-sm font-bold text-ink">{ui.frequency}</th>
                </tr>
              </thead>
              <tbody>
                {content.noteRows.map((row) => (
                  <tr key={`${row.label}-${row.note}`} className="odd:bg-white even:bg-mint/4">
                    <td className="border-t border-line px-4 py-3">{row.label}</td>
                    <td className="border-t border-line px-4 py-3 font-semibold">{row.note}</td>
                    <td className="border-t border-line px-4 py-3 text-ink/72">{row.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 hidden max-w-xl lg:flex" />

      <section className="mt-8">
        <h2 className="text-2xl font-bold">{dictionary.common.howItWorks}</h2>
        <ol className="mt-4 grid gap-3">
          {content.steps.map((step, index) => (
            <li key={step} className="rounded-lg border border-line bg-white p-4 leading-7">
              <span className="mr-2 font-black text-mint">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-8 grid gap-5">
        {content.sections.map((section) => (
          <section key={section.title} className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="mt-3 leading-8 text-ink/72">{section.body}</p>
          </section>
        ))}
      </div>

      {content.commonMistakes?.length ? (
        <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-bold">{ui.commonMistakes}</h2>
          <ul className="mt-4 grid gap-3">
            {content.commonMistakes.map((item) => (
              <li key={item} className="rounded-lg border border-line bg-mint/4 p-4 leading-7 text-ink/75">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot className="mt-8 hidden lg:flex" />

      {content.relatedTools?.length ? (
        <section className="mt-8">
          <h2 className="text-2xl font-bold">{ui.relatedTools}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.relatedTools.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint">
                <p className="font-bold">{item.title}</p>
                <p className="mt-2 leading-7 text-ink/72">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-8 rounded-lg border border-line bg-white p-5">
          <h2 className="text-xl font-bold">{dictionary.nav.tools}</h2>
          <p className="mt-2 leading-7 text-ink/72">{toolDescription}</p>
          <Link className="mt-4 inline-flex rounded-md bg-mint px-4 py-3 font-bold text-white" href={toolHref}>
            {toolTitle}
          </Link>
        </section>
      )}

      {searchTargets.length ? (
        <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-bold">{intentLabels.searchesTitle}</h2>
          <p className="mt-3 leading-7 text-ink/72">{intentLabels.searchesDescription}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {searchTargets.map((target) => {
              const resolved = resolveTarget(target);
              return (
                <Link
                  key={`${target.type}-${"slug" in target ? target.slug : target.href}`}
                  href={resolved.href}
                  className="rounded-lg border border-line bg-mint/5 p-4 transition hover:border-mint hover:bg-white"
                >
                  <p className="font-semibold">{resolved.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/68">{resolved.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {followUpQuestions.length ? (
        <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
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
      ) : null}

      {content.faq?.length ? (
        <section className="mt-8">
          <h2 className="text-2xl font-bold">{dictionary.common.faq}</h2>
          <div className="mt-4 grid gap-3">
            {content.faq.map((item) => (
              <details key={item.question} className="rounded-lg border border-line bg-white p-5 shadow-soft">
                <summary className="cursor-pointer text-lg font-bold">{item.question}</summary>
                <p className="mt-3 leading-7 text-ink/72">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {relatedPracticeGuides.length ? (
        <section className="mt-8">
          <h2 className="text-2xl font-bold">{ui.relatedGuides}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedPracticeGuides.map((guide) => {
              const related = getGuideContent(locale, guide);
              return (
                <Link key={guide} href={`/${locale}/guides/${guide}`} className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint">
                  <p className="font-bold">{related.title}</p>
                  <p className="mt-2 leading-7 text-ink/72">{related.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {relatedTuningGuides.length ? (
        <section className="mt-8">
          <h2 className="text-2xl font-bold">{relatedTuningHeadings[locale]}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedTuningGuides.map((guide) => {
              const related = getGuideContent(locale, guide);
              return (
                <Link key={guide} href={`/${locale}/guides/${guide}`} className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint">
                  <p className="font-bold">{related.title}</p>
                  <p className="mt-2 leading-7 text-ink/72">{related.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      <AdSlot className="mt-8" />
    </main>
  );
}
