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
  zh: "é€šç”¨è°ƒéŸ³å™¨",
  ru: "Ð£Ð½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ‚ÑŽÐ½ÐµÑ€",
  ja: "ãƒ¦ãƒ‹ãƒãƒ¼ã‚µãƒ«ãƒãƒ¥ãƒ¼ãƒŠãƒ¼",
  ko: "ë²”ìš© íŠœë„ˆ",
  ar: "Ù…Ø¯ÙˆØ²Ù† Ø´Ø§Ù…Ù„"
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
                {page === "about" && (locale === "it" ? "Chi siamo" : "About")}
                {page === "privacy-policy" && "Privacy Policy"}
                {page === "cookie-policy" && "Cookie Policy"}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
