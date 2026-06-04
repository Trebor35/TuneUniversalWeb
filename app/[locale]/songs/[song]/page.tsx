import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { ChordHowTo } from "@/components/songs/ChordHowTo";
import { getGuideContent } from "@/lib/content/guides";
import { clusterSectionLabels, getSongClusterGuides, getSongClusterTools } from "@/lib/content/internalLinking";
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

const songPageLabels: Record<
  Locale,
  {
    continueLearning: string;
    continueLearningDescription: string;
    allSongs: string;
    allGuides: string;
    allTools: string;
    relatedGuides: string;
  }
> = {
  ar: { continueLearning: "واصل من هنا", continueLearningDescription: "استخدم هذه الصفحة للانتقال من اللحن إلى الإيقاع والأكوردات والدروس الأساسية.", allSongs: "كل المقطوعات", allGuides: "كل الأدلة", allTools: "كل الأدوات", relatedGuides: "أدلة مفيدة" },
  de: { continueLearning: "Hier sinnvoll weitergehen", continueLearningDescription: "Nutze diese Song-Seite als Brücke zu Rhythmus, Akkorden und den wichtigsten Lern-Guides.", allSongs: "Alle Songs", allGuides: "Alle Guides", allTools: "Alle Tools", relatedGuides: "Hilfreiche Guides" },
  en: { continueLearning: "Continue from here", continueLearningDescription: "Use this song page as a bridge into rhythm, chords and the most useful learning guides.", allSongs: "All songs", allGuides: "All guides", allTools: "All tools", relatedGuides: "Helpful guides" },
  es: { continueLearning: "Sigue desde aquí", continueLearningDescription: "Usa esta página de canción como puente hacia ritmo, acordes y las guías más útiles para estudiar.", allSongs: "Todas las canciones", allGuides: "Todas las guías", allTools: "Todas las herramientas", relatedGuides: "Guías útiles" },
  fr: { continueLearning: "Continuer depuis ici", continueLearningDescription: "Utilisez cette page comme passerelle vers le rythme, les accords et les guides d’apprentissage les plus utiles.", allSongs: "Tous les morceaux", allGuides: "Tous les guides", allTools: "Tous les outils", relatedGuides: "Guides utiles" },
  it: { continueLearning: "Continua da qui", continueLearningDescription: "Usa questa pagina come ponte verso ritmo, accordi e guide fondamentali per studiare meglio il brano.", allSongs: "Tutti gli spartiti", allGuides: "Tutte le guide", allTools: "Tutti i tool", relatedGuides: "Guide utili" },
  ja: { continueLearning: "次に見るページ", continueLearningDescription: "この曲ページからリズム、コード、基礎ガイドへ自然に進めます。", allSongs: "すべての曲", allGuides: "すべてのガイド", allTools: "すべてのツール", relatedGuides: "役立つガイド" },
  ko: { continueLearning: "여기서 계속", continueLearningDescription: "이 곡 페이지를 리듬, 코드, 핵심 학습 가이드로 자연스럽게 이어서 활용할 수 있습니다.", allSongs: "모든 곡", allGuides: "모든 가이드", allTools: "모든 도구", relatedGuides: "유용한 가이드" },
  pt: { continueLearning: "Continue daqui", continueLearningDescription: "Use esta página de música como ponte para ritmo, acordes e os guias mais úteis para estudar melhor.", allSongs: "Todas as músicas", allGuides: "Todos os guias", allTools: "Todas as ferramentas", relatedGuides: "Guias úteis" },
  ru: { continueLearning: "Куда перейти дальше", continueLearningDescription: "Используйте эту страницу песни как мост к ритму, аккордам и самым полезным учебным гайдам.", allSongs: "Все песни", allGuides: "Все гайды", allTools: "Все инструменты", relatedGuides: "Полезные гайды" },
  zh: { continueLearning: "从这里继续", continueLearningDescription: "把这首曲目的页面继续连到节奏、和弦和最实用的学习指南。", allSongs: "全部曲目", allGuides: "全部指南", allTools: "全部工具", relatedGuides: "实用指南" }
};

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
  const labels = songPageLabels[locale];
  const clusterLabels = clusterSectionLabels[locale];
  const guideSlugs = getSongClusterGuides(song.slug);
  const practiceTools = getSongClusterTools(song.slug);

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

          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{labels.continueLearning}</h2>
            <p className="mt-3 leading-7 text-ink/72">{labels.continueLearningDescription}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link href={`/${locale}/songs`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {labels.allSongs}
              </Link>
              <Link href={`/${locale}/tools`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {labels.allTools}
              </Link>
              <Link href={`/${locale}/guides`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
                {labels.allGuides}
              </Link>
            </div>
          </section>

          <AdSlot variant="rectangle" className="mx-auto max-w-xl lg:hidden" />

          <section className="rounded-lg border border-line bg-white p-5">
            <h2 className="text-xl font-bold">{ui.source}</h2>
            <p className="mt-3 leading-7 text-ink/72">{song.sourceNote}</p>
          </section>

          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-2xl font-bold">{clusterLabels.songGuidesTitle}</h2>
            <p className="mt-3 leading-7 text-ink/72">{clusterLabels.songGuidesDescription}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {guideSlugs.map((guide) => {
                const guideContent = getGuideContent(locale, guide);
                return (
                  <Link
                    key={guide}
                    href={`/${locale}/guides/${guide}`}
                    className="rounded-lg border border-line bg-paper p-4 transition hover:border-mint hover:bg-white"
                  >
                    <p className="font-bold">{guideContent.title}</p>
                    <p className="mt-2 leading-7 text-ink/72">{guideContent.description}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <AdSlot />
        </article>

        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <AdSlot variant="rectangle" className="mb-6 hidden lg:flex" />
          <section className="rounded-lg border border-line bg-white p-5 shadow-soft">
            <h2 className="text-xl font-bold">{clusterLabels.songToolsTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/72">{clusterLabels.songToolsDescription}</p>
            <div className="mt-4 grid gap-2">
              {practiceTools.map((tool) => (
                <Link key={tool} className="rounded-md bg-paper px-3 py-2 font-semibold hover:text-mint" href={`/${locale}/tools/${tool}`}>
                  {dictionary.tools[tool].title}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
