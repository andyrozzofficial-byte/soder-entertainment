"use client";

import Image from "next/image";

import { useBookingModal } from "@/app/components/booking/PremiumBookingModal";
import {
  ctaPrimaryCompact,
  eyebrow,
  glassCard,
  glassCardHover,
  sectionHeading,
} from "@/app/components/ui";

import { SiteIcon } from "./SiteIcon";

type Product = {
  title: string;
  pricePerDay: string;
  imageUrl: string;
};

export function ProductBookingGrid({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: Product[];
}) {
  const { openBookingModal } = useBookingModal();

  return (
    <>
      <div className="text-center">
        <div className={eyebrow}>PRODUKTER</div>
        <h2 className={`mt-3 ${sectionHeading}`}>{title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-white/75">
          {intro}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <div
            key={p.title}
            className={`group relative flex h-full flex-col overflow-hidden p-6 backdrop-blur ${glassCard} ${glassCardHover}`}
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#050A1A]/35">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050A1A]/75"
                aria-hidden="true"
              />
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <h3 className="text-base font-extrabold tracking-tight text-white">
                {p.title}
              </h3>
              <div className="shrink-0 rounded-full border border-[#7ea2ff]/25 bg-[#0b1433]/60 px-3 py-1 text-xs font-extrabold text-white/90">
                {p.pricePerDay}
              </div>
            </div>

            <div className="mt-6 flex flex-1 items-end">
              <button
                type="button"
                onClick={() => openBookingModal(p.title)}
                className={`${ctaPrimaryCompact} w-full`}
              >
                Fråga / Boka
                <SiteIcon name="arrowRight" className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
