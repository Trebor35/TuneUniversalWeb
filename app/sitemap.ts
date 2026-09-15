import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { contentLastModifiedDate } from "@/lib/seo/dates";
import { isIndexable, sectionForPath, sitemapChangeFrequency, sitemapPriority } from "@/lib/seo/indexing";
import { allLocalizedUrls } from "@/lib/seo/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

function localeOf(path: string): Locale {
  return path.split("/")[1] as Locale;
}

function withLocale(path: string, locale: Locale) {
  return path.replace(/^\/[^/]+(?=\/|$)/, `/${locale}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const indexablePaths = allLocalizedUrls().filter((path) => isIndexable(localeOf(path), sectionForPath(path)));

  return indexablePaths.map((path) => {
    const section = sectionForPath(path);
    // hreflang must not point at a page we are asking Google not to index, so the
    // alternates list only the locales that actually have native copy for this section.
    const alternateLocales = locales.filter((locale) => isIndexable(locale, section));
    const localizedUrls = Object.fromEntries(
      alternateLocales.map((locale) => [locale, `${siteUrl}${withLocale(path, locale)}`])
    );

    return {
      url: `${siteUrl}${path}`,
      lastModified: contentLastModifiedDate,
      changeFrequency: sitemapChangeFrequency(path),
      priority: sitemapPriority(path),
      alternates: {
        languages: {
          ...localizedUrls,
          "x-default": `${siteUrl}${withLocale(path, "en")}`
        }
      }
    };
  });
}
