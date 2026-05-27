import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuideContent, guideIndexContent, guideSlugs } from "@/lib/content/guides";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildGuideIndexMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

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
  const dictionary = await getDictionary(locale);
  const content = guideIndexContent[locale];

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

      <AdSlot className="mt-8" />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guideSlugs.map((guide) => {
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

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 hidden max-w-xl lg:flex" />
      <AdSlot className="mt-8 hidden lg:flex" />
    </main>
  );
}
