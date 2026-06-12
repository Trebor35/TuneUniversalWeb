import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT ?? "ca-pub-4436218293452548";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com"),
  title: "TuneUniversal",
  description: "Free international music microtools for tuning, tempo and chords.",
  verification: {
    google: "gQZmeb2OXExGeZvTuDz6R-Xk87Fh9MdHgKfDl50Xk2I"
  },
  twitter: {
    card: "summary",
    site: "@TuneUniversal",
    title: "TuneUniversal — Free Music Tools Online",
    description: "Free browser tools for musicians: chromatic tuner, metronome, Tap BPM, chord transposer, sound meter and pitch generator. No install needed."
  },
  other: {
    google: "notranslate",
    ...(adsenseClient ? { "google-adsense-account": adsenseClient } : {})
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html translate="no" className="notranslate">
      <head>
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
