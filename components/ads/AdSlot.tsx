"use client";

import { useEffect, useMemo } from "react";

type AdSlotVariant = "leaderboard" | "mobileBanner" | "rectangle";

const adsenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT;

const adSlots: Record<AdSlotVariant, string | undefined> = {
  leaderboard: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD,
  mobileBanner: process.env.NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_BANNER,
  rectangle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE
};

const variantClassName: Record<AdSlotVariant, string> = {
  leaderboard: "min-h-[90px] md:min-h-[110px]",
  mobileBanner: "min-h-[96px]",
  rectangle: "min-h-[280px]"
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({
  className = "",
  variant = "leaderboard"
}: {
  className?: string;
  variant?: AdSlotVariant;
}) {
  const slot = adSlots[variant];
  const isReady = Boolean(adsenseClient && slot);
  const classNames = useMemo(
    () =>
      [
        "flex w-full items-center justify-center rounded-lg border border-dashed border-line bg-white/55 px-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-ink/35",
        variantClassName[variant],
        className
      ].join(" "),
    [className, variant]
  );

  useEffect(() => {
    if (!isReady) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and delayed AdSense loading can make this fail harmlessly.
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <aside aria-label="Advertising space" className={classNames}>
        AD
      </aside>
    );
  }

  return (
    <aside aria-label="Advertising space" className={classNames}>
      <ins
        className="adsbygoogle block h-full w-full"
        data-ad-client={adsenseClient}
        data-ad-format="auto"
        data-ad-slot={slot}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
