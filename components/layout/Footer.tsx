import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import type { ToolSlug } from "@/lib/tools/toolConfig";

const footerTools: ToolSlug[] = ["guitar-tuner", "metronome", "tap-bpm", "chord-transposer"];
const footerPages = ["about", "privacy-policy", "cookie-policy"] as const;

const universalTunerLabels: Record<Locale, string> = {
  it: "Accordatore universale",
  en: "Universal tuner",
  fr: "Accordeur universel",
  de: "Universelles Stimmgeraet",
  es: "Afinador universal",
  pt: "Afinador universal",
  zh: "通用调音器",
  ru: "Универсальный тюнер",
  ja: "ユニバーサルチューナー",
  ko: "범용 튜너",
  ar: "مدوزن شامل"
};

const footerPageLabels: Record<(typeof footerPages)[number], Record<Locale, string>> = {
  about: {
    it: "Chi siamo",
    en: "About",
    fr: "À propos",
    de: "Über uns",
    es: "Acerca de",
    pt: "Sobre",
    zh: "关于",
    ru: "О проекте",
    ja: "概要",
    ko: "소개",
    ar: "حول"
  },
  "privacy-policy": {
    it: "Privacy Policy",
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
    de: "Datenschutz",
    es: "Política de privacidad",
    pt: "Política de privacidade",
    zh: "隐私政策",
    ru: "Политика конфиденциальности",
    ja: "プライバシーポリシー",
    ko: "개인정보 처리방침",
    ar: "سياسة الخصوصية"
  },
  "cookie-policy": {
    it: "Cookie Policy",
    en: "Cookie Policy",
    fr: "Politique relative aux cookies",
    de: "Cookie-Richtlinie",
    es: "Política de cookies",
    pt: "Política de cookies",
    zh: "Cookie 政策",
    ru: "Политика Cookie",
    ja: "Cookie ポリシー",
    ko: "쿠키 정책",
    ar: "سياسة ملفات تعريف الارتباط"
  }
};

export function Footer({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-bold">TuneUniversal</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-ink/66">{dictionary.meta.description}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="grid gap-2">
            {footerTools.map((slug) => (
              <Link key={slug} href={`/${locale}/tools/${slug}`} className="text-sm font-medium text-ink/72 hover:text-mint">
                {slug === "guitar-tuner" ? universalTunerLabels[locale] : dictionary.tools[slug].title}
              </Link>
            ))}
          </div>
          <div className="grid gap-2">
            {footerPages.map((page) => (
              <Link key={page} href={`/${locale}/${page}`} className="text-sm font-medium text-ink/72 hover:text-mint">
                {footerPageLabels[page][locale]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
