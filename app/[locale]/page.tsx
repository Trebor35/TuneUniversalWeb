import type { Metadata } from "next";
import ToolsIndexPage, { generateStaticParams } from "./tools/page";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/locales";
import { buildToolsIndexMetadata } from "@/lib/seo/metadata";

type PageProps = { params: Promise<{ locale: string }> };

export { generateStaticParams };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const dictionary = await getDictionary(rawLocale);
  return buildToolsIndexMetadata(rawLocale, dictionary, "");
}

export default ToolsIndexPage;
