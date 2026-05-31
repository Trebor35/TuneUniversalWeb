"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export type MobileNavGroup = {
  title: string;
  links: { href: string; label: string }[];
};

export function MobileMenu({ groups, label }: { groups: MobileNavGroup[]; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-line bg-white text-ink"
      >
        {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
      </button>

      {open ? (
        <div className="absolute right-0 top-12 z-50 w-[min(88vw,420px)] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-lg border border-line bg-white p-4 text-left shadow-soft">
          <div className="space-y-5">
            {groups.map((group) => (
              <section key={group.title}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-mint">{group.title}</p>
                <div className="mt-2 grid gap-1">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2 text-sm font-semibold leading-5 text-ink hover:bg-paper"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
