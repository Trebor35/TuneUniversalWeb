import type { Metadata } from "next";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT;

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
      <body>
        <AdSenseScript />
        {children}
      </body>
    </html>
  );
}
