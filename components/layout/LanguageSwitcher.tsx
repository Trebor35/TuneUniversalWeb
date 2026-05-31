"use client";

import { Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n/locales";
import { pathWithoutLocale } from "@/lib/i18n/routing";

export function LanguageSwitcher({
  className = "",
  locale,
  label,
  selectClassName = ""
}: {
  className?: string;
  locale: Locale;
  label: string;
  selectClassName?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(nextLocale: Locale) {
    const suffix = pathWithoutLocale(pathname || "/");
    router.push(`/${nextLocale}${suffix === "/" ? "" : suffix}`);
  }

  return (
    <label className={`inline-flex min-h-11 min-w-0 items-center gap-1 rounded-md border border-line bg-white px-2 py-2 text-sm sm:gap-2 sm:px-3 ${className}`}>
      <Globe2 aria-hidden className="shrink-0" size={16} />
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(event) => changeLocale(event.target.value as Locale)}
        className={`max-w-24 truncate bg-transparent outline-none sm:max-w-none ${selectClassName}`}
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
