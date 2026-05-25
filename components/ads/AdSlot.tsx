type AdSlotVariant = "leaderboard" | "mobileBanner" | "rectangle";

const variantClassName: Record<AdSlotVariant, string> = {
  leaderboard: "min-h-[90px] md:min-h-[110px]",
  mobileBanner: "min-h-[96px]",
  rectangle: "min-h-[280px]"
};

export function AdSlot({
  className = "",
  variant = "leaderboard"
}: {
  className?: string;
  variant?: AdSlotVariant;
}) {
  return (
    <aside
      aria-label="Advertising space"
      className={[
        "flex w-full items-center justify-center rounded-lg border border-dashed border-line bg-white/55 px-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-ink/35",
        variantClassName[variant],
        className
      ].join(" ")}
    >
      AD
    </aside>
  );
}
