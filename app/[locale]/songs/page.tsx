import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Music2 } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPublicDomainSong, publicDomainSongSlugs, songsUi } from "@/lib/content/publicDomainSongs";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildSongsIndexMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const childrenSectionLabels: Record<Locale, string> = {
  ar: "مقطوعات سهلة للأطفال",
  de: "Einfache Noten für Kinder",
  en: "Easy sheet music for children",
  es: "Partituras fáciles para niños",
  fr: "Partitions faciles pour enfants",
  it: "Spartiti facili per bambini",
  ja: "子ども向けの簡単な楽譜",
  ko: "어린이를 위한 쉬운 악보",
  pt: "Partituras fáceis para crianças",
  ru: "Простые ноты для детей",
  zh: "儿童简易乐谱"
};

const generalSectionLabels: Record<Locale, string> = {
  ar: "قطع أخرى",
  de: "Weitere gemeinfreie Stücke",
  en: "More public-domain pieces",
  es: "Más piezas de dominio público",
  fr: "Autres morceaux du domaine public",
  it: "Altri spartiti di pubblico dominio",
  ja: "その他のパブリックドメイン曲",
  ko: "다른 퍼블릭 도메인 곡",
  pt: "Mais peças em domínio público",
  ru: "Другие произведения общественного достояния",
  zh: "更多公有领域曲目"
};

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  return buildSongsIndexMetadata(rawLocale);
}

export default async function SongsIndexPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const ui = songsUi[locale];
  const childrenSongs = publicDomainSongSlugs.filter((slug) => getPublicDomainSong(slug).audience === "children");
  const generalSongs = publicDomainSongSlugs.filter((slug) => getPublicDomainSong(slug).audience !== "children");
  const renderSongCard = (slug: (typeof publicDomainSongSlugs)[number]) => {
    const song = getPublicDomainSong(slug);
    return (
      <Link
        key={slug}
        href={`/${locale}/songs/${slug}`}
        className="group flex min-h-40 items-start gap-3 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft"
      >
        <span className="mt-1 shrink-0 rounded-md bg-mint/10 p-2 text-mint">
          <Music2 size={18} aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-lg font-bold">{song.title}</span>
          <span className="mt-1 block text-sm leading-6 text-ink/68">{song.origin}</span>
          <span className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-ink/60">
            <span className="rounded-full bg-paper px-2 py-1">{song.key}</span>
            <span className="rounded-full bg-paper px-2 py-1">{song.meter}</span>
            <span className="rounded-full bg-paper px-2 py-1">{song.bpm} BPM</span>
          </span>
        </span>
      </Link>
    );
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: ui.title, url: `${siteUrl}/${locale}/songs` }
        ])}
      />
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">{ui.publicDomain}</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{ui.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{ui.description}</p>

      <AdSlot className="mt-8" />

      <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-7 text-ink/72">{ui.hero}</p>
        <p className="mt-3 rounded-md bg-mint/10 p-3 text-sm leading-6 text-ink/70">{ui.legalNote}</p>
      </section>

      <AdSlot variant="mobileBanner" className="mt-8 lg:hidden" />
      <AdSlot variant="rectangle" className="mx-auto mt-8 hidden max-w-xl lg:flex" />

      <section className="mt-8">
        <h2 className="text-2xl font-bold">{childrenSectionLabels[locale]}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {childrenSongs.map(renderSongCard)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">{generalSectionLabels[locale]}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {generalSongs.map(renderSongCard)}
        </div>
      </section>

      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot className="mt-8" />
    </main>
  );
}
