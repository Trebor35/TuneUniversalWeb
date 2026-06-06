import Link from "next/link";
import { getGuideContent, guideIndexContent, type GuideSlug } from "@/lib/content/guides";
import { getPublicDomainSong, publicDomainSongSlugs, songsUi } from "@/lib/content/publicDomainSongs";
import { tuningHubContent } from "@/lib/content/tuningHub";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getContentLocale, type BaseLocale, type Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

const footerTools: ToolSlug[] = ["guitar-tuner", "bass-tuner", "metronome", "tap-bpm", "sound-level-meter", "pitch-generator"];
const footerPages = ["about", "contact", "privacy-policy", "cookie-policy", "terms-of-use"] as const;
const footerGuideSlugs: GuideSlug[] = [
  "how-to-tune-guitar",
  "how-to-tune-bass",
  "how-to-tune-ukulele",
  "how-to-tune-violin",
  "how-to-tune-cello",
  "how-to-tune-piano"
];

const footerPageLabels: Record<(typeof footerPages)[number], Record<BaseLocale, string>> = {
  about: {
    ar: "حول",
    de: "Über uns",
    en: "About Us",
    es: "Acerca de",
    fr: "À propos",
    it: "Chi siamo",
    ja: "概要",
    ko: "소개",
    pt: "Sobre",
    ru: "О проекте",
    zh: "关于我们"
  },
  contact: {
    ar: "اتصل بنا",
    de: "Kontakt",
    en: "Contact",
    es: "Contacto",
    fr: "Contact",
    it: "Contatti",
    ja: "お問い合わせ",
    ko: "문의하기",
    pt: "Contacto",
    ru: "Контакты",
    zh: "联系我们"
  },
  "privacy-policy": {
    ar: "سياسة الخصوصية",
    de: "Datenschutz",
    en: "Privacy Policy",
    es: "Política de privacidad",
    fr: "Politique de confidentialité",
    it: "Privacy Policy",
    ja: "プライバシーポリシー",
    ko: "개인정보 처리방침",
    pt: "Política de privacidade",
    ru: "Политика конфиденциальности",
    zh: "隐私政策"
  },
  "cookie-policy": {
    ar: "سياسة ملفات تعريف الارتباط",
    de: "Cookie-Richtlinie",
    en: "Cookie Policy",
    es: "Política de cookies",
    fr: "Politique relative aux cookies",
    it: "Cookie Policy",
    ja: "Cookie ポリシー",
    ko: "쿠키 정책",
    pt: "Política de cookies",
    ru: "Политика Cookie",
    zh: "Cookie 政策"
  },
  "terms-of-use": {
    ar: "شروط الاستخدام",
    de: "Nutzungsbedingungen",
    en: "Terms of Use",
    es: "Términos de uso",
    fr: "Conditions d'utilisation",
    it: "Termini di utilizzo",
    ja: "利用規約",
    ko: "이용 약관",
    pt: "Termos de uso",
    ru: "Условия использования",
    zh: "使用条款"
  }
};

export function Footer({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const contentLocale = getContentLocale(locale);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_3fr]">
        <div>
          <p className="font-bold">TuneUniversal</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-ink/66">{dictionary.meta.description}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-4">
          <div className="grid content-start gap-2">
            {footerTools.map((slug) => (
              <Link key={slug} href={`/${locale}/tools/${slug}`} className="text-sm font-medium text-ink/72 hover:text-mint">
                {dictionary.tools[slug].title}
              </Link>
            ))}
          </div>
          <div className="grid content-start gap-2">
            <Link href={`/${locale}/tunings`} className="text-sm font-bold text-ink hover:text-mint">
              {tuningHubContent[contentLocale].title}
            </Link>
            <Link href={`/${locale}/guides`} className="text-sm font-bold text-ink hover:text-mint">
              {guideIndexContent[contentLocale].title}
            </Link>
            {footerGuideSlugs.map((guide) => (
              <Link key={guide} href={`/${locale}/guides/${guide}`} className="text-sm font-medium text-ink/72 hover:text-mint">
                {getGuideContent(locale, guide).title}
              </Link>
            ))}
          </div>
          <div className="grid content-start gap-2">
            <Link href={`/${locale}/songs`} className="text-sm font-bold text-ink hover:text-mint">
              {songsUi[contentLocale].title}
            </Link>
            {publicDomainSongSlugs.slice(0, 3).map((song) => (
              <Link key={song} href={`/${locale}/songs/${song}`} className="text-sm font-medium text-ink/72 hover:text-mint">
                {getPublicDomainSong(song).title}
              </Link>
            ))}
          </div>
          <div className="grid content-start gap-2">
            {footerPages.map((page) => (
              <Link key={page} href={`/${locale}/${page}`} className="text-sm font-medium text-ink/72 hover:text-mint">
                {footerPageLabels[page][contentLocale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
