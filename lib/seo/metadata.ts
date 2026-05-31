import type { Metadata } from "next";
import { instrumentTunerSlugs, type InstrumentTunerContent } from "@/lib/content/instrumentTuners";
import { locales, type Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { guideIndexContent, guideSlugs, type GuideContent, type GuideSlug } from "@/lib/content/guides";
import { publicDomainSongSlugs, songsUi, type PublicDomainSong } from "@/lib/content/publicDomainSongs";
import { staticPageSlugs, type StaticPageSlug } from "@/lib/content/staticPages";
import { tuningHubContent } from "@/lib/content/tuningHub";
import { toolsHubContent } from "@/lib/content/toolsHub";
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

export function buildToolsIndexMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const content = toolsHubContent[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[locale], "universal tuner", "online music tools"],
    alternates: buildAlternates(locale, "tools"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/tools`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildTuningHubMetadata(locale: Locale): Metadata {
  const content = tuningHubContent[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [...content.keywords, ...homeKeywords[locale], "alternate tunings", "guitar tuning", "Drop D", "Open G"],
    alternates: buildAlternates(locale, "tunings"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/tunings`,
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

export function buildSongsIndexMetadata(locale: Locale): Metadata {
  const content = songsUi[locale];
  return {
    title: `${content.title} | TuneUniversal`,
    description: content.description,
    keywords: [
      ...homeKeywords[locale],
      "public domain sheet music",
      "free sheet music",
      "easy sheet music for children",
      "children songs notes",
      "spartiti pubblico dominio",
      "spartiti facili per bambini",
      "canzoni bambini note facili",
      "accordi canzoni facili",
      "music practice"
    ],
    alternates: buildAlternates(locale, "songs"),
    openGraph: {
      title: `${content.title} | TuneUniversal`,
      description: content.description,
      url: `${siteUrl}/${locale}/songs`,
      siteName: "TuneUniversal",
      type: "website",
      locale
    }
  };
}

export function buildSongMetadata(locale: Locale, song: PublicDomainSong): Metadata {
  const content = songsUi[locale];
  const title = `${song.title} chords and simplified sheet music | TuneUniversal`;
  const description = `${song.title}: ${song.key}, ${song.meter}, ${song.bpm} BPM. ${content.description}`;
  return {
    title,
    description,
    keywords: [
      song.title,
      `${song.title} chords`,
      `${song.title} sheet music`,
      `${song.title} spartito`,
      `${song.title} accordi`,
      `${song.title} chord diagrams`,
      `${song.title} come fare accordi`,
      "public domain music",
      "free music sheet",
      "guitar chord diagrams",
      "diagrammi accordi chitarra",
      ...(song.audience === "children"
        ? ["easy sheet music for children", "spartiti facili per bambini", "canzoni bambini note facili"]
        : []),
      ...homeKeywords[locale]
    ],
    alternates: buildAlternates(locale, `songs/${song.slug}`),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/songs/${song.slug}`,
      siteName: "TuneUniversal",
      type: "article",
      locale
    }
  };
}

export function allLocalizedUrls() {
  const allToolPaths = Array.from(new Set([...toolSlugs, ...instrumentTunerSlugs]));
  return locales.flatMap((locale) => [
    `/${locale}/tools`,
    ...allToolPaths.map((tool) => `/${locale}/tools/${tool}`),
    `/${locale}/tunings`,
    `/${locale}/guides`,
    ...guideSlugs.map((guide) => `/${locale}/guides/${guide}`),
    `/${locale}/songs`,
    ...publicDomainSongSlugs.map((song) => `/${locale}/songs/${song}`),
    ...staticPageSlugs.map((page) => `/${locale}/${page}`)
  ]);
}
