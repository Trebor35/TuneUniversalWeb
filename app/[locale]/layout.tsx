import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getTextDirection, isLocale, type Locale } from "@/lib/i18n/locales";

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <div lang={locale} dir={getTextDirection(locale)} translate="no" className="notranslate">
      <Header locale={locale} dictionary={dictionary} />
      {children}
      <Footer locale={locale} dictionary={dictionary} />
      <CookieBanner
        text={dictionary.cookie.text}
        privacyLabel={dictionary.cookie.privacy}
        privacyHref={`/${locale}/privacy-policy`}
        acceptLabel={dictionary.cookie.accept}
        declineLabel={dictionary.cookie.decline}
        customizeLabel={dictionary.cookie.customize}
        savePrefsLabel={dictionary.cookie.savePrefs}
        necessary={dictionary.cookie.necessary}
        necessaryDesc={dictionary.cookie.necessaryDesc}
        analytics={dictionary.cookie.analytics}
        analyticsDesc={dictionary.cookie.analyticsDesc}
        advertising={dictionary.cookie.advertising}
        advertisingDesc={dictionary.cookie.advertisingDesc}
      />
    </div>
  );
}
