import { redirect } from "next/navigation";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  redirect(`/${locale}/tools/guitar-tuner`);
}
