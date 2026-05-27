import type { Metadata } from "next";
import { instrumentTunerSlugs, type InstrumentTunerContent } from "@/lib/content/instrumentTuners";
import { locales, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { guideIndexContent, guideSlugs, type GuideContent, type GuideSlug } from "@/lib/content/guides";
import { staticPageSlugs, type StaticPageSlug } from "@/lib/content/staticPages";
import { toolSlugs, type ToolSlug } from "@/lib/tools/toolConfig";
import { homeKeywords, toolKeywords } from "@/lib/seo/keywords";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

export function buildAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  const cleanPath = path ? `/${path.replace(/^\//, "")}` : "";
  return {
    canonical: `/${locale}${cleanPath}`,
    languages: {
      ...Object.fromEntries(locales.map((item) => [item, `/${item}${cleanPath}`])),
      "x-default": `/en${cleanPath}`
    }
  };
}

export function buildHomeMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: homeKeywords[locale],
    alternates: buildAlternates(locale),
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildToolMetadata(locale: Locale, tool: ToolSlug, dictionary: Dictionary): Metadata {
  const content = dictionary.tools[tool];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: toolKeywords[locale][tool],
    alternates: buildAlternates(locale, `tools/${tool}`),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/tools/${tool}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function buildInstrumentTunerMetadata(locale: Locale, slug: string, content: InstrumentTunerContent): Metadata {
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[locale]],
    alternates: buildAlternates(locale, `tools/${slug}`),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/tools/${slug}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function buildStaticPageMetadata(
  locale: Locale,
  page: StaticPageSlug,
  content: { description: string; title: string }
): Metadata {
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    alternates: buildAlternates(locale, page),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/${page}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function buildGuideIndexMetadata(locale: Locale): Metadata {
  const content = guideIndexContent[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...homeKeywords[locale], "music guides", "tuning guide", "metronome guide", "BPM guide"],
    alternates: buildAlternates(locale, "guides"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/guides`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildGuideMetadata(locale: Locale, guide: GuideSlug, content: GuideContent): Metadata {
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...toolKeywords[locale][content.tool], ...homeKeywords[locale]],
    alternates: buildAlternates(locale, `guides/${guide}`),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/guides/${guide}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function allLocalizedUrls() {
  const allToolPaths = Array.from(new Set([...toolSlugs, ...instrumentTunerSlugs]));
  return locales.flatMap((locale) => [
    ...allToolPaths.map((tool) => `/${locale}/tools/${tool}`),
    `/${locale}/guides`,
    ...guideSlugs.map((guide) => `/${locale}/guides/${guide}`),
    ...staticPageSlugs.map((page) => `/${locale}/${page}`)
  ]);
}
