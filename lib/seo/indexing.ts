import { locales, type Locale } from "@/lib/i18n/locales";

/**
 * Sections of the site, in the sense Google cares about: a group of pages that share
 * one body of editorial copy.
 */
export type ContentSection = "home" | "tools" | "tunings" | "guides" | "songs" | "static";

/**
 * Locales whose guide and song copy is still served from the English source.
 *
 * The UI chrome, the tool pages, both hubs and the static pages have native copy for
 * these locales (see the `extended*` maps across lib/content and components/layout),
 * but `getGuideContent` and `songsUi` still fall back to English. A page whose article
 * text is in the wrong language is worth less than no page at all: Google reads it as a
 * near-duplicate of the English original and answers with "crawled, currently not
 * indexed". Those pages stay live and keep passing link equity, but they are marked
 * noindex and kept out of the sitemap until the copy is translated.
 *
 * Remove a locale from this list as soon as its guide and song copy lands.
 */
export const untranslatedArticleLocales: Locale[] = ["nl", "pl", "tr", "cs", "sv", "hi", "no"];

const untranslatedSections: ContentSection[] = ["guides", "songs"];

export function sectionForPath(path: string): ContentSection {
  const [, , section] = path.split("/");
  if (!section) return "home";
  if (section === "tools") return "tools";
  if (section === "tunings") return "tunings";
  if (section === "guides") return "guides";
  if (section === "songs") return "songs";
  return "static";
}

/** True when `locale` has native copy for `section`. */
export function hasNativeCopy(locale: Locale, section: ContentSection): boolean {
  if (!untranslatedArticleLocales.includes(locale)) return true;
  return !untranslatedSections.includes(section);
}

export function isIndexable(locale: Locale, section: ContentSection): boolean {
  return hasNativeCopy(locale, section);
}

/**
 * `noindex, follow` for pages we do not want in the index yet: Google drops them from
 * results but keeps crawling through to the tools and hubs they link to.
 */
export function robotsFor(locale: Locale, section: ContentSection) {
  if (isIndexable(locale, section)) return undefined;
  return {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true }
  } as const;
}

/**
 * `/{locale}` and `/{locale}/tools` render the same component and produced byte-identical
 * HTML under two self-referencing canonicals. `/{locale}` wins: it is the shortest URL,
 * it is where the header logo points and it is the one in the sitemap.
 */
export function canonicalPathForToolsIndex(locale: Locale) {
  return `/${locale}`;
}

/** Sitemap priority, highest for the pages the site is actually trying to rank. */
export function sitemapPriority(path: string): number {
  const section = sectionForPath(path);
  const depth = path.split("/").length - 2;
  if (section === "home") return 1;
  if (section === "static") return 0.3;
  if (section === "tools") {
    if (depth === 0) return 0.9;
    return /\/tools\/(guitar|bass|ukulele|violin|piano)-tuner$/.test(path) ? 0.9 : 0.8;
  }
  if (section === "tunings") return 0.7;
  if (section === "guides") return depth === 0 ? 0.7 : 0.6;
  return depth === 0 ? 0.6 : 0.5;
}

export function sitemapChangeFrequency(path: string): "weekly" | "monthly" | "yearly" {
  const section = sectionForPath(path);
  if (section === "home") return "weekly";
  if (section === "static") return "yearly";
  return "monthly";
}

export function isKnownLocaleSet(value: readonly string[]): value is readonly Locale[] {
  return value.every((item) => locales.includes(item as Locale));
}
