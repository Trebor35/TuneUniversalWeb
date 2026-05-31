import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Music2 } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuideContent } from "@/lib/content/guides";
import { getTuningHubGroups, tuningHubContent } from "@/lib/content/tuningHub";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildTuningHubMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string }> };

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

      <AdSlot className="mt-8" />

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
