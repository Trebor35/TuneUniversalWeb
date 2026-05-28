import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { ChordHowTo } from "@/components/songs/ChordHowTo";
import {
  getPublicDomainSong,
  isPublicDomainSongSlug,
  publicDomainSongSlugs,
  songsUi
} from "@/lib/content/publicDomainSongs";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { buildSongMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, musicCompositionSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

type PageProps = { params: Promise<{ locale: string; song: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => publicDomainSongSlugs.map((song) => ({ locale, song })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, song: rawSong } = await params;
  if (!isLocale(rawLocale) || !isPublicDomainSongSlug(rawSong)) return {};
  return buildSongMetadata(rawLocale, getPublicDomainSong(rawSong));
}

export default async function SongPage({ params }: PageProps) {
  const { locale: rawLocale, song: rawSong } = await params;
  if (!isLocale(rawLocale) || !isPublicDomainSongSlug(rawSong)) notFound();

  const locale = rawLocale as Locale;
  const ui = songsUi[locale];
  const dictionary = await getDictionary(locale);
  const song = getPublicDomainSong(rawSong);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <JsonLd data={musicCompositionSchema(locale, song)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "TuneUniversal", url: `${siteUrl}/${locale}` },
          { name: ui.title, url: `${siteUrl}/${locale}/songs` },
          { name: song.title, url: `${siteUrl}/${locale}/songs/${song.slug}` }
        ])}
      />
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-mint">{ui.publicDomain}</p>
      <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{song.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/70">{song.origin}</p>

      <AdSlot className="mt-8" />

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0 space-y-8">
          <section className="grid gap-3 rounded-lg border border-line bg-white p-5 shadow-soft sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/45">{ui.key}</p>
              <p className="mt-1 text-lg font-black">{song.key}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/45">{ui.meter}</p>
              <p className="mt-1 text-lg font-black">{song.meter}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/45">{ui.bpm}</p>
              <p className="mt-1 text-lg font-black">{song.bpm}</p>
            </div>
          </section>

          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{ui.chords}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {song.chords.map((chord, index) => (
                <span key={`${chord}-${index}`} className="rounded-md border border-line bg-paper px-3 py-2 font-black">
                  {chord}
                </span>
              ))}
            </div>
          </section>

          <ChordHowTo chords={song.chords} locale={locale} />

          <AdSlot variant="mobileBanner" className="lg:hidden" />
          <AdSlot variant="rectangle" className="mx-auto hidden max-w-xl lg:flex" />

          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{ui.melody}</h2>
            <div className="mt-4 grid gap-3">
              {song.melody.map((bar, index) => (
                <div key={`${bar}-${index}`} className="rounded-lg border border-line bg-paper p-4">
                  <span className="text-xs font-bold text-ink/45">{index + 1}</span>
                  <p className="mt-1 break-words font-mono text-lg font-bold leading-8">{bar}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{ui.practice}</h2>
            <ul className="mt-4 grid gap-3">
              {song.practiceTips.map((tip) => (
                <li key={tip} className="rounded-md bg-paper p-3 leading-7 text-ink/72">
                  {tip}
                </li>
              ))}
            </ul>
          </section>

          <AdSlot variant="rectangle" className="mx-auto max-w-xl lg:hidden" />

          <section className="rounded-lg border border-line bg-white p-5">
            <h2 className="text-xl font-bold">{ui.source}</h2>
            <p className="mt-3 leading-7 text-ink/72">{song.sourceNote}</p>
          </section>

          <AdSlot />
        </article>

        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="rectangle" className="mb-6 hidden lg:flex" />
          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold">{ui.tools}</h2>
            <div className="mt-4 grid gap-2">
              <Link className="rounded-md bg-paper px-3 py-2 font-semibold hover:text-mint" href={`/${locale}/tools/guitar-tuner`}>
                {dictionary.tools["guitar-tuner"].title}
              </Link>
              <Link className="rounded-md bg-paper px-3 py-2 font-semibold hover:text-mint" href={`/${locale}/tools/metronome`}>
                {dictionary.tools.metronome.title}
              </Link>
              <Link className="rounded-md bg-paper px-3 py-2 font-semibold hover:text-mint" href={`/${locale}/tools/chord-transposer`}>
                {dictionary.tools["chord-transposer"].title}
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
