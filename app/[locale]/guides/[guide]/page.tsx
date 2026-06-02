import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuideContent, guideIndexContent, guideSlugs, isGuideSlug } from "@/lib/content/guides";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildGuideMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, guideSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string; guide: string }> };

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
  const tool = dictionary.tools[content.tool];
  const toolHref = `/${locale}/${content.targetPath ?? `tools/${content.tool}`}`;
  const toolTitle = content.targetTitle ?? tool.title;
  const toolDescription = content.targetDescription ?? tool.description;

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

      {content.relatedGuides?.length ? (
        <section className="mt-8">
          <h2 className="text-2xl font-bold">{ui.relatedGuides}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.relatedGuides.map((guide) => {
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
