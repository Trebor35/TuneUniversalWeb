import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Music2 } from "lucide-react";
import { getInstrumentTunerContent, instrumentToTunerSlug } from "@/lib/content/instrumentTuners";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildToolsIndexMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { instrumentIds } from "@/lib/tools/toolConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolNavigation } from "@/components/layout/ToolNavigation";

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

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: dictionary.nav.tools, url: `${siteUrl}/${locale}/tools` }
        ])}
      />
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">TuneUniversal</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{dictionary.nav.tools}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{dictionary.meta.description}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">{dictionary.common.otherTools}</h2>
        <div className="mt-4">
          <ToolNavigation locale={locale} dictionary={dictionary} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">{instrumentSectionLabels[locale]}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {instrumentIds.map((instrument) => {
            const content = getInstrumentTunerContent(locale, instrument);
            return (
              <Link
                key={instrument}
                href={`/${locale}/tools/${instrumentToTunerSlug(instrument)}`}
                className="group flex min-h-24 items-start gap-3 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft"
              >
                <span className="mt-1 shrink-0 rounded-md bg-mint/10 p-2 text-mint">
                  <Music2 size={18} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{content.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-ink/68">{content.description}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
