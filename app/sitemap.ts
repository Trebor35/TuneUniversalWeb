import type { MetadataRoute } from "next";
import { allLocalizedUrls } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tuneuniversal.vercel.app";
  return allLocalizedUrls().map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes("/tools/") ? "monthly" : "weekly",
    priority: path.includes("/tools/") ? 0.8 : 1
  }));
}
