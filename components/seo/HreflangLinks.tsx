import { locales, type Locale } from "@/lib/i18n/locales";

export function HreflangLinks({ locale, path }: { locale: Locale; path: string }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return (
    <>
      {locales.map((item) => (
        <link key={item} rel="alternate" hrefLang={item} href={`${siteUrl}/${item}${cleanPath}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en${cleanPath}`} />
      <meta property="og:locale" content={locale} />
    </>
  );
}
