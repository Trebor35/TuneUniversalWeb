import { locales, type Locale } from "@/lib/i18n/locales";
import { toolSlugs, type ToolSlug } from "@/lib/tools/toolConfig";

/**
 * Sections of the site, in the sense Google cares about: a group of pages that share
 * one body of editorial copy.
 */
export type ContentSection = "home" | "tools" | "tunings" | "guides" | "songs" | "static";

/**
 * What the site asks Google to index.
 *
 * Between August and October 2026 the indexed page count fell from 217 to 1 while all
 * 2299 URLs were crawled successfully: no manual action, sitemap read without error,
 * title and canonical and hreflang all in <head>. 90 days of Search Console data show 0
 * clicks, 172 impressions and an average position of 57. That is not a technical
 * obstacle, it is Google declining to index a site that looks mass-produced — 121 pages
 * multiplied by 19 locales, most of them generated from templates.
 *
 * So the site now submits only the part that is a genuine product rather than generated
 * text: the interactive tools, in the locales with the largest audience for them. Roughly
 * 45 URLs instead of 2299.
 *
 * Everything else stays live and reachable, marked `noindex, follow` — users and internal
 * link equity are unaffected, Google is simply no longer asked to rank it. Widen these
 * two lists to bring pages back; nothing else needs to change.
 */
export const indexedLocales: Locale[] = ["en", "it", "de", "es", "fr"];

/** The eight interactive tools. The other 20 tuner URLs are the same tool with a preset. */
export const indexedToolSlugs: readonly ToolSlug[] = toolSlugs;

export function sectionForPath(path: string): ContentSection {
  const [, , section] = path.split("/");
  if (!section) return "home";
  if (section === "tools") return "tools";
  if (section === "tunings") return "tunings";
  if (section === "guides") return "guides";
  if (section === "songs") return "songs";
  return "static";
}

/** The single source of truth for whether a URL is offered to search engines. */
export function isIndexablePath(path: string): boolean {
  const [, locale, section, slug] = path.split("/");
  if (!indexedLocales.includes(locale as Locale)) return false;
  if (!section) return true;
  // `/{locale}/tools` renders the same component as `/{locale}` and canonicalises to it.
  if (section === "tools" && !slug) return true;
  if (section === "tools") return indexedToolSlugs.includes(slug as ToolSlug);
  return false;
}

/**
 * `noindex, follow` keeps a page out of results while Google still crawls through it to
 * the tools it links to, so internal link equity is preserved.
 */
export function robotsForPath(path: string) {
  if (isIndexablePath(path)) return undefined;
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
  if (section === "home") return 1;
  return /\/tools\/(guitar|bass|ukulele)-tuner$/.test(path) ? 0.9 : 0.8;
}

export function sitemapChangeFrequency(path: string): "weekly" | "monthly" | "yearly" {
  return sectionForPath(path) === "home" ? "weekly" : "monthly";
}

export function isKnownLocaleSet(value: readonly string[]): value is readonly Locale[] {
  return value.every((item) => locales.includes(item as Locale));
}
