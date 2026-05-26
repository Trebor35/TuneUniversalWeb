import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import type { GuideContent, GuideSlug } from "@/lib/content/guides";
import type { StaticPageSlug } from "@/lib/content/staticPages";
import type { ToolSlug } from "@/lib/tools/toolConfig";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

export function websiteSchema(locale: Locale, dictionary: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TuneUniversal",
    inLanguage: locale,
    url: `${siteUrl}/${locale}`,
    description: dictionary.meta.description
  };
}

export function toolSchema(locale: Locale, tool: ToolSlug, dictionary: Dictionary) {
  const content = dictionary.tools[tool];
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: content.title,
    applicationCategory: "MusicApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    inLanguage: locale,
    url: `${siteUrl}/${locale}/tools/${tool}`,
    description: content.description
  };
}

export function faqSchema(tool: ToolSlug, dictionary: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dictionary.tools[tool].faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function staticPageSchema(
  locale: Locale,
  page: StaticPageSlug,
  content: { description: string; title: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: content.title,
    inLanguage: locale,
    url: `${siteUrl}/${locale}/${page}`,
    description: content.description,
    isPartOf: {
      "@type": "WebSite",
      name: "TuneUniversal",
      url: siteUrl
    }
  };
}

export function guideSchema(locale: Locale, guide: GuideSlug, content: GuideContent) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: content.title,
    inLanguage: locale,
    url: `${siteUrl}/${locale}/guides/${guide}`,
    description: content.description,
    step: content.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step
    })),
    isPartOf: {
      "@type": "WebSite",
      name: "TuneUniversal",
      url: siteUrl
    }
  };
}
