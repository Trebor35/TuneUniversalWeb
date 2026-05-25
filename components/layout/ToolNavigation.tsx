import Link from "next/link";
import { Music2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/locales";
import { toolSlugs, type ToolSlug } from "@/lib/tools/toolConfig";

export function ToolNavigation({
  locale,
  dictionary,
  tools = [...toolSlugs],
  variant = "grid"
}: {
  locale: Locale;
  dictionary: Dictionary;
  tools?: ToolSlug[];
  variant?: "grid" | "sidebar";
}) {
  const navClassName =
    variant === "sidebar" ? "grid gap-3" : "grid gap-3 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <nav className={navClassName} aria-label={dictionary.nav.tools}>
      {tools.map((slug) => (
        <Link
          key={slug}
          href={`/${locale}/tools/${slug}`}
          className="group flex min-h-24 items-start gap-3 rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-mint hover:shadow-soft"
        >
          <span className="mt-1 shrink-0 rounded-md bg-mint/10 p-2 text-mint">
            <Music2 size={18} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block font-semibold">{dictionary.tools[slug].title}</span>
            <span className="mt-1 block text-sm leading-6 text-ink/68">{dictionary.tools[slug].description}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
