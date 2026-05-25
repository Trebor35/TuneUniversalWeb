"use client";

import { Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n/locales";
import { pathWithoutLocale } from "@/lib/i18n/routing";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(nextLocale: Locale) {
    const suffix = pathWithoutLocale(pathname || "/");
    router.push(`/${nextLocale}${suffix === "/" ? "" : suffix}`);
  }

  return (
    <label className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-white px-2 py-2 text-sm sm:px-3">
      <Globe2 aria-hidden size={16} />
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
        className="max-w-32 bg-transparent outline-none sm:max-w-none"
        aria-label={label}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeNames[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
