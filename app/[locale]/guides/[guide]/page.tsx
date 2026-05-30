import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuideContent, guideIndexContent, guideSlugs, isGuideSlug } from "@/lib/content/guides";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildGuideMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, guideSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string; guide: string }> };

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
  const indexContent = guideIndexContent[locale];
  const tool = dictionary.tools[content.tool];
  const toolHref = `/${locale}/${content.targetPath ?? `tools/${content.tool}`}`;
  const toolTitle = content.targetTitle ?? tool.title;
  const toolDescription = content.targetDescription ?? tool.description;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <JsonLd data={guideSchema(locale, rawGuide, content)} />
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

      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot className="mt-8 hidden lg:flex" />

      <section className="mt-8 rounded-lg border border-line bg-white p-5">
        <h2 className="text-xl font-bold">{dictionary.nav.tools}</h2>
        <p className="mt-2 leading-7 text-ink/72">{toolDescription}</p>
        <Link className="mt-4 inline-flex rounded-md bg-mint px-4 py-3 font-bold text-white" href={toolHref}>
          {toolTitle}
        </Link>
      </section>

      <AdSlot className="mt-8" />
    </main>
  );
}
