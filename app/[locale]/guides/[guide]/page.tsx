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
  isGuideSlug,
  type GuideSlug
} from "@/lib/content/guides";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocaleFallbacks, getContentLocale, isLocale, locales, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { buildGuideMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, guideSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string; guide: string }> };

const guideContinueLabels: Record<
  Locale,
  { allGuides: string; allTools: string; continueLearning: string; continueLearningDescription: string; tuningHub: string }
> = withLocaleFallbacks({
  ar: { allGuides: "?? ??????", allTools: "?? ???????", continueLearning: "???? ??????", continueLearningDescription: "?? ??? ?????? ????? ???????? ?????? ??? ?????? ??????? ?? ??? ???? ?????? ??????.", tuningHub: "???? ???????" },
  de: { allGuides: "Alle Guides", allTools: "Alle Tools", continueLearning: "Sinnvoll weitermachen", continueLearningDescription: "Von hier aus kannst du direkt zum passenden Tool, zu ?hnlichen Guides oder zum Tuning-Hub wechseln.", tuningHub: "Tuning-Hub" },
  en: { allGuides: "All guides", allTools: "All tools", continueLearning: "Continue from here", continueLearningDescription: "Use this page as a bridge to the practical tool, closely related guides and the matching tuning hub.", tuningHub: "Tuning hub" },
  es: { allGuides: "Todas las gu?as", allTools: "Todas las herramientas", continueLearning: "Seguir desde aqu?", continueLearningDescription: "Desde esta p?gina puedes pasar directamente a la herramienta, a otras gu?as ?tiles y al hub de afinaciones.", tuningHub: "Hub de afinaciones" },
  fr: { allGuides: "Tous les guides", allTools: "Tous les outils", continueLearning: "Continuer depuis ici", continueLearningDescription: "Cette page relie l'explication, l'outil pratique, les guides proches et le hub des accordages.", tuningHub: "Hub des accordages" },
  it: { allGuides: "Tutte le guide", allTools: "Tutti i tool", continueLearning: "Continua da qui", continueLearningDescription: "Da questa pagina puoi passare subito al tool pratico, ad altre guide utili e all'hub delle accordature collegate.", tuningHub: "Hub accordature" },
  ja: { allGuides: "???????", allTools: "???????", continueLearning: "???????", continueLearningDescription: "???????????????????????????????????", tuningHub: "????????" },
  ko: { allGuides: "?? ???", allTools: "?? ??", continueLearning: "??? ??", continueLearningDescription: "? ???? ?? ??, ?? ???, ?? ??? ???? ?? ??? ???.", tuningHub: "?? ??" },
  pt: { allGuides: "Todos os guias", allTools: "Todas as ferramentas", continueLearning: "Continue daqui", continueLearningDescription: "Use esta p?gina para seguir para a ferramenta pr?tica, guias relacionados e o hub de afina??es.", tuningHub: "Hub de afina??es" },
  ru: { allGuides: "??? ?????", allTools: "??? ???????????", continueLearning: "???? ??????? ??????", continueLearningDescription: "? ???? ???????? ????? ????? ??????? ? ????????????? ???????????, ????????? ?????? ? ???? ??????.", tuningHub: "??? ??????" },
  zh: { allGuides: "????", allTools: "????", continueLearning: "?????", continueLearningDescription: "??????????????????????????????", tuningHub: "????" }
} satisfies Record<BaseLocale, { allGuides: string; allTools: string; continueLearning: string; continueLearningDescription: string; tuningHub: string }>);
const relatedTuningHeadings: Record<Locale, string> = withLocaleFallbacks({
  ar: "????? ??????",
  de: "Verwandte Stimmungen",
  en: "Related tunings",
  es: "Afinaciones relacionadas",
  fr: "Accordages li?s",
  it: "Accordature correlate",
  ja: "????????",
  ko: "?? ??",
  pt: "Afina??es relacionadas",
  ru: "????????? ?????",
  zh: "????"
} satisfies Record<BaseLocale, string>);
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
> = withLocaleFallbacks({
  ar: { commonMistakes: "????? ?????", frequency: "??????", note: "??????", notesTable: "???? ??????? ????????", openTool: "???? ??????", relatedGuides: "???? ??????", relatedTools: "????? ??????", stringLabel: "??? / ????" },
  de: { commonMistakes: "H?ufige Fehler", frequency: "Frequenz", note: "Note", notesTable: "Saiten- und Notentabelle", openTool: "Tool ?ffnen", relatedGuides: "Verwandte Guides", relatedTools: "Verwandte Tools", stringLabel: "Saite / Position" },
  en: { commonMistakes: "Common mistakes", frequency: "Frequency", note: "Note", notesTable: "String and note table", openTool: "Open tool", relatedGuides: "Related guides", relatedTools: "Related tools", stringLabel: "String / position" },
  es: { commonMistakes: "Errores comunes", frequency: "Frecuencia", note: "Nota", notesTable: "Tabla de cuerdas y notas", openTool: "Abrir herramienta", relatedGuides: "Gu?as relacionadas", relatedTools: "Herramientas relacionadas", stringLabel: "Cuerda / posici?n" },
  fr: { commonMistakes: "Erreurs courantes", frequency: "Fr?quence", note: "Note", notesTable: "Tableau des cordes et notes", openTool: "Ouvrir l'outil", relatedGuides: "Guides li?s", relatedTools: "Outils li?s", stringLabel: "Corde / position" },
  it: { commonMistakes: "Errori comuni", frequency: "Frequenza", note: "Nota", notesTable: "Tabella corde e note", openTool: "Apri il tool", relatedGuides: "Guide correlate", relatedTools: "Tool correlati", stringLabel: "Corda / posizione" },
  ja: { commonMistakes: "??????", frequency: "???", note: "??", notesTable: "?????", openTool: "??????", relatedGuides: "?????", relatedTools: "?????", stringLabel: "? / ??" },
  ko: { commonMistakes: "?? ?? ??", frequency: "???", note: "?", notesTable: "?? ? ?", openTool: "?? ??", relatedGuides: "?? ???", relatedTools: "?? ??", stringLabel: "? / ??" },
  pt: { commonMistakes: "Erros comuns", frequency: "Frequ?ncia", note: "Nota", notesTable: "Tabela de cordas e notas", openTool: "Abrir ferramenta", relatedGuides: "Guias relacionados", relatedTools: "Ferramentas relacionadas", stringLabel: "Corda / posi??o" },
  ru: { commonMistakes: "?????? ??????", frequency: "???????", note: "????", notesTable: "??????? ????? ? ???", openTool: "??????? ??????????", relatedGuides: "????????? ???????????", relatedTools: "????????? ???????????", stringLabel: "?????? / ???????" },
  zh: { commonMistakes: "????", frequency: "??", note: "??", notesTable: "?????", openTool: "????", relatedGuides: "????", relatedTools: "????", stringLabel: "? / ??" }
} satisfies Record<BaseLocale, {
  commonMistakes: string;
  frequency: string;
  note: string;
  notesTable: string;
  openTool: string;
  relatedGuides: string;
  relatedTools: string;
  stringLabel: string;
}>);
const guideIntentLabels: Record<
  Locale,
  {
    questionsDescription: string;
    questionsTitle: string;
    searchesDescription: string;
    searchesTitle: string;
  }
> = withLocaleFallbacks({
  ar: { questionsDescription: "????? ????? ??????? ?????? ??? ??? ??????.", questionsTitle: "????? ??????", searchesDescription: "????? ?????? ????? ???? ??? ??????.", searchesTitle: "????? ?????" },
  de: { questionsDescription: "Kurze Anschlussfragen, die direkt nach diesem Guide sinnvoll sind.", questionsTitle: "N?chste Fragen", searchesDescription: "Interne Seiten, die dieses Thema gut erg?nzen.", searchesTitle: "Verwandte Seiten" },
  en: { questionsDescription: "Short follow-up questions that make the next step clearer.", questionsTitle: "Related questions", searchesDescription: "Internal pages that naturally extend this guide.", searchesTitle: "Related searches" },
  es: { questionsDescription: "Preguntas breves para continuar despu?s de esta gu?a.", questionsTitle: "Preguntas relacionadas", searchesDescription: "P?ginas internas que ampl?an este tema de forma natural.", searchesTitle: "B?squedas relacionadas" },
  fr: { questionsDescription: "Petites questions utiles pour continuer apr?s ce guide.", questionsTitle: "Questions associ?es", searchesDescription: "Pages internes qui prolongent naturellement ce sujet.", searchesTitle: "Recherches associ?es" },
  it: { questionsDescription: "Domande rapide che aiutano a capire cosa fare subito dopo questa guida.", questionsTitle: "Domande correlate", searchesDescription: "Pagine interne che estendono in modo naturale il tema di questa guida.", searchesTitle: "Ricerche correlate" },
  ja: { questionsDescription: "??????????????????", questionsTitle: "??????", searchesDescription: "????????????????????", searchesTitle: "????" },
  ko: { questionsDescription: "? ??? ??? ?? ??? ? ?????.", questionsTitle: "?? ??", searchesDescription: "? ??? ????? ???? ?? ???????.", searchesTitle: "?? ??" },
  pt: { questionsDescription: "Perguntas curtas para continuar logo ap?s este guia.", questionsTitle: "Perguntas relacionadas", searchesDescription: "P?ginas internas que ampliam este assunto de forma natural.", searchesTitle: "Pesquisas relacionadas" },
  ru: { questionsDescription: "???????? ???????, ??????? ???????? ?????? ????????? ??? ????? ????? ?????.", questionsTitle: "????????? ???????", searchesDescription: "?????????? ????????, ??????? ??????????? ????????? ??? ????.", searchesTitle: "????????? ??????" },
  zh: { questionsDescription: "????????????????", questionsTitle: "????", searchesDescription: "????????????????????", searchesTitle: "????" }
} satisfies Record<BaseLocale, {
  questionsDescription: string;
  questionsTitle: string;
  searchesDescription: string;
  searchesTitle: string;
}>);

type GuideFollowUp = {
  answer: string;
  href: string;
  label: string;
  question: string;
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
  const contentLocale = getContentLocale(locale);
  const guideSlug = rawGuide as (typeof guideSlugs)[number];
  const dictionary = await getDictionary(locale);
  const content = getGuideContent(locale, guideSlug);
  const ui = guideUi[locale];
  const indexContent = guideIndexContent[contentLocale];
  const intentLabels = guideIntentLabels[locale];
  const tool = dictionary.tools[content.tool];
  const toolHref = `/${locale}/${content.targetPath ?? `tools/${content.tool}`}`;
  const toolTitle = content.targetTitle ?? tool.title;
  const toolDescription = content.targetDescription ?? tool.description;
  const continueLabels = guideContinueLabels[locale];
  const relatedTuningGuides: GuideSlug[] = (content.relatedGuides ?? []).filter((guide): guide is GuideSlug =>
    alternativeTuningGuideSlugs.includes(guide as (typeof alternativeTuningGuideSlugs)[number])
  );
  const relatedPracticeGuides: GuideSlug[] = (content.relatedGuides ?? []).filter(
    (guide): guide is GuideSlug => !relatedTuningGuides.includes(guide as GuideSlug)
  );
  const relatedSearchGuides: GuideSlug[] = [...relatedPracticeGuides, ...relatedTuningGuides]
    .filter((guide, index, source) => source.indexOf(guide) === index)
    .slice(0, 4);
  const followUpQuestions: GuideFollowUp[] = [
    {
      answer:
        locale === "it"
          ? "Dopo questa guida, il passo piu utile e aprire il tool pratico per applicare subito le note o l'accordatura."
          : "After reading this guide, the most useful next step is to open the practical tool and apply the notes or tuning right away.",
      href: toolHref,
      label: toolTitle,
      question:
        locale === "it"
          ? "Qual e il passo pratico successivo?"
          : "What is the next practical step?"
    },
    {
      answer:
        locale === "it"
          ? "Vale la pena confrontare anche altre guide o accordature vicine, cosi capisci piu rapidamente cosa usare davvero."
          : "It is worth comparing nearby guides or tunings so you can decide faster what to use in real practice.",
      href: `/${locale}/guides`,
      label: continueLabels.allGuides,
      question:
        locale === "it"
          ? "Conviene confrontare anche altre varianti?"
          : "Should you compare nearby variants too?"
    }
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <JsonLd data={guideSchema(locale, guideSlug, content)} />
      {content.faq?.length ? <JsonLd data={faqItemsSchema(content.faq)} /> : null}
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: indexContent.title, url: `${siteUrl}/${locale}/guides` },
          { name: content.title, url: `${siteUrl}/${locale}/guides/${guideSlug}` }
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

      {relatedSearchGuides.length ? (
        <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-bold">{intentLabels.searchesTitle}</h2>
          <p className="mt-3 leading-7 text-ink/72">{intentLabels.searchesDescription}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedSearchGuides.map((guide) => {
              const resolved = getGuideContent(locale, guide);
              return (
                <Link
                  key={guide}
                  href={`/${locale}/guides/${guide}`}
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
            {followUpQuestions.map((item) => (
              <article key={item.question} className="rounded-lg border border-line bg-mint/4 p-4">
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-2 leading-7 text-ink/72">{item.answer}</p>
                <Link className="mt-3 inline-flex text-sm font-semibold text-mint hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </article>
            ))}
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
