"use client";

import { SiteIcon } from "@/app/components/SiteIcon";
import { ctaCard } from "@/app/components/ui";

import { useBookingModal } from "./PremiumBookingModal";

export type PackageCard = {
  name: string;
  price: string;
  items: string[];
  highlight?: boolean;
};

export function PackageBookingCards({ cards }: { cards: PackageCard[] }) {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((p) => (
        <div
          key={p.name}
          className={[
            "flex h-full flex-col rounded-2xl border bg-[#050A1A]/50 p-6 shadow-[0_70px_190px_-150px_rgba(0,0,0,0.92)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#7ea2ff]/45 hover:shadow-[0_110px_280px_-170px_rgba(31,92,255,0.75)]",
            p.highlight
              ? "border-[#7ea2ff]/45 ring-1 ring-[#7ea2ff]/15"
              : "border-white/10",
          ].join(" ")}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="text-base font-extrabold tracking-tight">{p.name}</div>
            <div className="text-sm font-extrabold text-white/90">{p.price}</div>
          </div>
          <ul className="mt-4 grid flex-1 gap-2 text-sm text-white/75">
            {p.items.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ea2ff]/70" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => openBookingModal(`${p.name} — Offert`)}
            className={`${ctaCard} mt-6 w-full`}
          >
            Offert
            <SiteIcon name="arrowRight" className="h-4 w-4 opacity-80" />
          </button>
        </div>
      ))}
    </div>
  );
}
