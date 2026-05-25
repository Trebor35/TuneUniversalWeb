import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { staticPageSlugs, type StaticPageSlug } from "@/lib/content/staticPages";
import { toolSlugs, type ToolSlug } from "@/lib/tools/toolConfig";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tuneuniversal.vercel.app";

export function buildAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  const cleanPath = path ? `/${path.replace(/^\//, "")}` : "";
  return {
    canonical: `/${locale}${cleanPath}`,
    languages: Object.fromEntries(locales.map((item) => [item, `/${item}${cleanPath}`]))
  };
}

export function buildHomeMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
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

export function allLocalizedUrls() {
  return locales.flatMap((locale) => [
    ...toolSlugs.map((tool) => `/${locale}/tools/${tool}`),
    ...staticPageSlugs.map((page) => `/${locale}/${page}`)
  ]);
}
