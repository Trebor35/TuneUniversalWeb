import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Music2 } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuideContent } from "@/lib/content/guides";
import { clusterSectionLabels, getSongClusterGuides, getSongClusterTools } from "@/lib/content/internalLinking";
import { getLocalizedSong, getPublicDomainSong, publicDomainSongSlugs, songsUi } from "@/lib/content/publicDomainSongs";
import { hubEnhancements } from "@/lib/content/seoEnhancements";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getContentLocale, withLocaleFallbacks, isLocale, locales, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import { buildSongsIndexMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

const childrenSectionLabels: Record<Locale, string> = withLocaleFallbacks({
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
}, {
  nl: "Eenvoudige bladmuziek voor kinderen",
  pl: "Łatwe nuty dla dzieci",
  tr: "Çocuklar için kolay nota",
  cs: "Snadné noty pro děti",
  sv: "Enkel noter för barn",
  "pt-BR": "Partituras fáceis para crianças",
  hi: "बच्चों के लिए आसान नोट शीट",
  no: "Enkle noter for barn"
});

const generalSectionLabels: Record<Locale, string> = withLocaleFallbacks({
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
}, {
  nl: "Meer stukken uit het publiek domein",
  pl: "Więcej utworów z domeny publicznej",
  tr: "Daha fazla kamu malı parça",
  cs: "Více skladeb z veřejné domény",
  sv: "Fler stycken i det fria",
  "pt-BR": "Mais peças em domínio público",
  hi: "अधिक पब्लिक डोमेन टुकड़े",
  no: "Flere stykker i offentlig domene"
});

const songsBridgeLabels: Record<
  Locale,
  {
    continueLearning: string;
    continueLearningDescription: string;
    allGuides: string;
    allTools: string;
    tunings: string;
    practiceTools: string;
    learningGuides: string;
  }
> = withLocaleFallbacks({
  ar: { continueLearning: "واصل من هنا", continueLearningDescription: "اربط صفحات المقطوعات بالأدوات العملية والإيقاع والقراءة الموسيقية للحصول على دراسة يومية أوضح.", allGuides: "كل الأدلة", allTools: "كل الأدوات", tunings: "الضبطات", practiceTools: "أدوات للتدريب", learningGuides: "أدلة مفيدة" },
  de: { continueLearning: "Hier sinnvoll weitergehen", continueLearningDescription: "Verbinde diese Song-Seiten mit praktischen Tools, Rhythmusarbeit und grundlegenden Musik-Guides.", allGuides: "Alle Guides", allTools: "Alle Tools", tunings: "Stimmungen", practiceTools: "Tools zum Üben", learningGuides: "Hilfreiche Guides" },
  en: { continueLearning: "Continue from here", continueLearningDescription: "Connect these song pages with practical tools, rhythm work and core music guides for daily practice.", allGuides: "All guides", allTools: "All tools", tunings: "Tunings", practiceTools: "Practice tools", learningGuides: "Helpful guides" },
  es: { continueLearning: "Sigue desde aquí", continueLearningDescription: "Conecta estas páginas de canciones con herramientas prácticas, trabajo rítmico y guías base para practicar mejor.", allGuides: "Todas las guías", allTools: "Todas las herramientas", tunings: "Afinaciones", practiceTools: "Herramientas para practicar", learningGuides: "Guías útiles" },
  fr: { continueLearning: "Continuer depuis ici", continueLearningDescription: "Reliez ces pages de morceaux aux outils pratiques, au travail rythmique et aux guides musicaux essentiels.", allGuides: "Tous les guides", allTools: "Tous les outils", tunings: "Accordages", practiceTools: "Outils pour travailler", learningGuides: "Guides utiles" },
  it: { continueLearning: "Continua da qui", continueLearningDescription: "Collega queste pagine spartiti ai tool pratici, al lavoro sul ritmo e alle guide musicali più utili per studiare meglio.", allGuides: "Tutte le guide", allTools: "Tutti i tool", tunings: "Accordature", practiceTools: "Tool per esercitarti", learningGuides: "Guide utili" },
  ja: { continueLearning: "次に見るページ", continueLearningDescription: "曲ページから実用ツール、リズム練習、基礎ガイドへ自然につなげて毎日の練習に使えます。", allGuides: "すべてのガイド", allTools: "すべてのツール", tunings: "チューニング", practiceTools: "練習ツール", learningGuides: "役立つガイド" },
  ko: { continueLearning: "여기서 계속", continueLearningDescription: "이 곡 페이지를 실전 도구, 리듬 연습, 핵심 음악 가이드와 연결해 더 자연스럽게 공부할 수 있습니다.", allGuides: "모든 가이드", allTools: "모든 도구", tunings: "튜닝", practiceTools: "연습용 도구", learningGuides: "유용한 가이드" },
  pt: { continueLearning: "Continue daqui", continueLearningDescription: "Ligue estas páginas de músicas a ferramentas práticas, trabalho de ritmo e guias musicais essenciais.", allGuides: "Todos os guias", allTools: "Todas as ferramentas", tunings: "Afinações", practiceTools: "Ferramentas de prática", learningGuides: "Guias úteis" },
  ru: { continueLearning: "Куда перейти дальше", continueLearningDescription: "Свяжите страницы песен с практическими инструментами, ритмом и базовыми музыкальными гайдами для ежедневной практики.", allGuides: "Все гайды", allTools: "Все инструменты", tunings: "Строи", practiceTools: "Инструменты для практики", learningGuides: "Полезные гайды" },
  zh: { continueLearning: "从这里继续", continueLearningDescription: "把这些曲目页和实用工具、节奏练习以及基础音乐指南连起来，更适合日常练习。", allGuides: "全部指南", allTools: "全部工具", tunings: "调弦", practiceTools: "练习工具", learningGuides: "实用指南" }
} satisfies Record<BaseLocale, {
  continueLearning: string;
  continueLearningDescription: string;
  allGuides: string;
  allTools: string;
  tunings: string;
  practiceTools: string;
  learningGuides: string;
}>, {
  nl: { continueLearning: "Ga hier verder", continueLearningDescription: "Verbind deze liedpagina's met praktische tools, ritmisch werk en kerngidsen voor dagelijkse oefening.", allGuides: "Alle gidsen", allTools: "Alle tools", tunings: "Stemmingen", practiceTools: "Oefentools", learningGuides: "Handige gidsen" },
  pl: { continueLearning: "Kontynuuj stąd", continueLearningDescription: "Połącz te strony piosenek z praktycznymi narzędziami, pracą rytmiczną i podstawowymi gidami muzycznymi.", allGuides: "Wszystkie poradniki", allTools: "Wszystkie narzędzia", tunings: "Stroje", practiceTools: "Narzędzia do ćwiczeń", learningGuides: "Pomocne poradniki" },
  tr: { continueLearning: "Buradan devam edin", continueLearningDescription: "Bu şarkı sayfalarını pratik araçlar, ritim çalışması ve temel müzik rehberleriyle bağlayın.", allGuides: "Tüm rehberler", allTools: "Tüm araçlar", tunings: "Akortlar", practiceTools: "Pratik araçlar", learningGuides: "Yararlı rehberler" },
  cs: { continueLearning: "Pokračujte odtud", continueLearningDescription: "Propojte tyto stránky písní s praktickými nástroji, rytmickou prací a základními hudebními průvodci.", allGuides: "Všechny průvodce", allTools: "Všechny nástroje", tunings: "Ladění", practiceTools: "Cvičební nástroje", learningGuides: "Užitečné průvodce" },
  sv: { continueLearning: "Fortsätt härifrån", continueLearningDescription: "Koppla dessa låtsidor till praktiska verktyg, rytmarbete och grundläggande musikguider för daglig övning.", allGuides: "Alla guider", allTools: "Alla verktyg", tunings: "Stämningar", practiceTools: "Övningsverktyg", learningGuides: "Hjälpsamma guider" },
  "pt-BR": { continueLearning: "Continue por aqui", continueLearningDescription: "Conecte estas páginas de músicas com ferramentas práticas, trabalho de ritmo e guias musicais essenciais.", allGuides: "Todos os guias", allTools: "Todas as ferramentas", tunings: "Afinações", practiceTools: "Ferramentas de prática", learningGuides: "Guias úteis" },
  hi: { continueLearning: "यहाँ से जारी रखें", continueLearningDescription: "इन गाने के पेजों को प्रैक्टिकल टूल, रिदम वर्क और मुख्य संगीत गाइड से जोड़ें।", allGuides: "सभी गाइड", allTools: "सभी टूल", tunings: "ट्यूनिंग", practiceTools: "अभ्यास टूल", learningGuides: "उपयोगी गाइड" },
  no: { continueLearning: "Fortsett herfra", continueLearningDescription: "Koble disse sangsidene til praktiske verktøy, rytmearbeid og kjerneguider for daglig øving.", allGuides: "Alle guider", allTools: "Alle verktøy", tunings: "Stemminger", practiceTools: "Øvingsverktøy", learningGuides: "Nyttige guider" }
});

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
  const contentLocale = getContentLocale(locale);
  const ui = songsUi[locale];
  const labels = songsBridgeLabels[locale];
  const clusterLabels = clusterSectionLabels[locale];
  const dictionary = await getDictionary(locale);
  const childrenSongs = publicDomainSongSlugs.filter((slug) => getPublicDomainSong(slug).audience === "children");
  const generalSongs = publicDomainSongSlugs.filter((slug) => getPublicDomainSong(slug).audience !== "children");
  const guideSlugs = Array.from(
    new Set(publicDomainSongSlugs.flatMap((slug) => getSongClusterGuides(slug)))
  );
  const practiceTools = Array.from(new Set(publicDomainSongSlugs.flatMap((slug) => getSongClusterTools(slug))));
  const renderSongCard = (slug: (typeof publicDomainSongSlugs)[number]) => {
    const song = getLocalizedSong(slug, locale);
    return (
      <Link
        key={slug}
        href={`/${locale}/songs/${slug}`}
        className="group flex min-h-0 items-start gap-3 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft sm:min-h-40"
      >
        <span className="mt-1 shrink-0 rounded-md bg-mint/10 p-2 text-mint">
          <Music2 size={18} aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block break-words text-lg font-bold">{song.title}</span>
          <span className="mt-1 block break-words text-sm leading-6 text-ink/68">{song.origin}</span>
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
      <section className="mt-6 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-7 text-ink/72">{hubEnhancements[contentLocale].songs}</p>
      </section>

      <AdSlot className="mt-8" />

      <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
        <p className="leading-7 text-ink/72">{ui.hero}</p>
        <p className="mt-3 rounded-md bg-mint/10 p-3 text-sm leading-6 text-ink/70">{ui.legalNote}</p>
      </section>

      <section className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
        <h2 className="text-2xl font-bold">{labels.continueLearning}</h2>
        <p className="mt-3 leading-7 text-ink/72">{labels.continueLearningDescription}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link href={`/${locale}/tools`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
            {labels.allTools}
          </Link>
          <Link href={`/${locale}/guides`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
            {labels.allGuides}
          </Link>
          <Link href={`/${locale}/tunings`} className="rounded-lg border border-line bg-mint/5 p-4 font-semibold transition hover:border-mint hover:bg-white">
            {labels.tunings}
          </Link>
        </div>
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

      <section className="mt-10">
        <h2 className="text-2xl font-bold">{clusterLabels.songToolsTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink/72">{clusterLabels.songToolsDescription}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {practiceTools.map((tool) => (
            <Link
              key={tool}
              href={`/${locale}/tools/${tool}`}
              className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint"
            >
              <p className="font-bold">{dictionary.tools[tool].title}</p>
              <p className="mt-2 leading-7 text-ink/72">{dictionary.tools[tool].description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">{clusterLabels.songGuidesTitle}</h2>
        <p className="mt-3 max-w-3xl leading-7 text-ink/72">{clusterLabels.songGuidesDescription}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guideSlugs.map((guide) => {
            const guideContent = getGuideContent(locale, guide);
            return (
              <Link
                key={guide}
                href={`/${locale}/guides/${guide}`}
                className="rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-mint"
              >
                <p className="font-bold">{guideContent.title}</p>
                <p className="mt-2 leading-7 text-ink/72">{guideContent.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <AdSlot variant="rectangle" className="mx-auto mt-8 max-w-xl lg:hidden" />
      <AdSlot className="mt-8" />
    </main>
  );
}
