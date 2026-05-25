import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
    <div lang={locale} dir={getTextDirection(locale)}>
      <Header locale={locale} dictionary={dictionary} />
      {children}
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
