import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/locales";
import { allLocalizedUrls } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tuneuniversal.com";

  return allLocalizedUrls().map((path) => {
    const localizedUrls = Object.fromEntries(
      locales.map((locale) => {
        const localizedPath = path.replace(/^\/[a-z]{2}(?=\/)/, `/${locale}`);
        return [locale, `${siteUrl}${localizedPath}`];
      })
    );

    return {
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path.includes("/tools/") ? "monthly" : "weekly",
      priority: path.includes("/tools/") ? 0.8 : 1,
      alternates: {
        languages: {
          ...localizedUrls,
          "x-default": `${siteUrl}${path.replace(/^\/[a-z]{2}(?=\/)/, "/en")}`
        }
      }
    };
  });
}
