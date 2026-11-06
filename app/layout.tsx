import type { Metadata } from "next";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { defaultLocale, getTextDirection, isLocale } from "@/lib/i18n/locales";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT ?? "ca-pub-4436218293452548";

/**
 * Site-verification and ad-network ownership tags are rendered as literal elements in
 * <head> rather than through Next's `metadata` object.
 *
 * Next streams metadata into the body for user agents it assumes will render JavaScript,
 * and only the crawlers listed in `htmlLimitedBots` get it inside <head>. Google's
 * verification check and AdSense's ownership check do not always arrive with one of those
 * user agents, and a verification tag outside <head> does not count — which is how the
 * Search Console property silently fell back to unverified.
 */
const googleSiteVerification = "qj1pkf47J2giuoVckyXuzI_W6UCSl181wJfKob2O8M4";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com"),
  title: "TuneUniversal",
  description: "Free international music microtools for tuning, tempo and chords.",
  twitter: {
    card: "summary",
    site: "@TuneUniversal",
    title: "TuneUniversal — Free Music Tools Online",
    description: "Free browser tools for musicians: chromatic tuner, metronome, Tap BPM, chord transposer, sound meter and pitch generator. No install needed."
  },
  other: {
    google: "notranslate"
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-tune-locale");
  const locale = requestedLocale && isLocale(requestedLocale) ? requestedLocale : defaultLocale;

  return (
    <html lang={locale} dir={getTextDirection(locale)} translate="no" className="notranslate">
      <head>
        <meta name="google-site-verification" content={googleSiteVerification} />
        {adsenseClient ? <meta name="google-adsense-account" content={adsenseClient} /> : null}
        <script
          async
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
<Analytics />
      </body>
    </html>
  );
}
