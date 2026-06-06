import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getStaticPageContent, isStaticPageSlug, staticPageSlugs } from "@/lib/content/staticPages";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { faqItemsSchema, organizationSchema, staticPageSchema } from "@/lib/seo/schema";

type PageProps = { params: Promise<{ locale: string; page: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => staticPageSlugs.map((page) => ({ locale, page })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, page: rawPage } = await params;
  if (!isLocale(rawLocale) || !isStaticPageSlug(rawPage)) return {};
  const content = getStaticPageContent(rawLocale, rawPage);
  return buildStaticPageMetadata(rawLocale, rawPage, content);
}

export default async function StaticPage({ params }: PageProps) {
  const { locale: rawLocale, page: rawPage } = await params;
  if (!isLocale(rawLocale) || !isStaticPageSlug(rawPage)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);
  const content = getStaticPageContent(locale, rawPage);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <JsonLd data={staticPageSchema(locale, rawPage, content)} />
      {rawPage === "about" ? <JsonLd data={organizationSchema(locale)} /> : null}
      {rawPage === "about" && content.faq?.length ? <JsonLd data={faqItemsSchema(content.faq)} /> : null}
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">TuneUniversal</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{content.title}</h1>
      <p className="mt-4 text-lg leading-8 text-ink/70">{content.description}</p>

      <AdSlot className="mt-8" />

      <div className="mt-8 grid gap-5">
        {content.sections.map((section) => (
          <section key={section.title} className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <div className="mt-3 grid gap-3">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="leading-7 text-ink/72">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.items?.length ? (
              <div className="mt-5 grid gap-4">
                {section.items.map((item) => (
                  <div key={item.title} className="rounded-lg border border-line/70 bg-paper/40 p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <div className="mt-2 grid gap-3">
                      {item.body.map((paragraph) => (
                        <p key={paragraph} className="leading-7 text-ink/72">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 hidden max-w-xl lg:flex" />

      <section className="mt-8 rounded-lg border border-line bg-white p-5">
        <h2 className="text-xl font-bold">{dictionary.nav.tools}</h2>
        <p className="mt-2 leading-7 text-ink/72">{dictionary.meta.description}</p>
        {rawPage === "about" && content.ctas?.length ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.ctas.map((cta) => (
              <a
                key={cta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-4 py-3 text-center font-bold text-white transition hover:bg-black"
                href={`/${locale}${cta.href}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        ) : (
          <a className="mt-4 inline-flex rounded-md bg-ink px-4 py-3 font-bold text-white" href={`/${locale}/tools/guitar-tuner`}>
            {dictionary.tools["guitar-tuner"].title}
          </a>
        )}
      </section>

      {rawPage === "about" && content.faq?.length ? (
        <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-4 grid gap-3">
            {content.faq.map((item) => (
              <details key={item.question} className="rounded-lg border border-line bg-white p-4">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-3 leading-7 text-ink/72">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <AdSlot className="mt-8" />
    </main>
  );
}
