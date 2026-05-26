import type { Metadata } from "next";
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
  ...(adsenseClient ? { other: { "google-adsense-account": adsenseClient } } : {})
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
