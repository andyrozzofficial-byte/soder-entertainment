"use client";

import { useBookingModal } from "@/app/components/booking/PremiumBookingModal";
import { SectionGlow } from "@/app/components/ui";

import { SiteIcon } from "./SiteIcon";

export function ContactBar() {
  const { openBookingModal } = useBookingModal();

  return (
    <section
      id="kontakt"
      className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16"
    >
      <SectionGlow variant="primary" className="-inset-x-4 -top-4 bottom-0" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0b2a7a]/60 via-[#091b4a]/60 to-[#091b4a]/60 px-6 py-7 shadow-[0_40px_130px_-90px_rgba(31,92,255,0.85)] backdrop-blur sm:px-12 sm:py-8">
        <SectionGlow variant="edge" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
              <SiteIcon name="phone" className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight">
                Behöver ni hjälp med ert event?
              </div>
              <div className="mt-1 text-xs text-white/75">
                Vi hjälper er från idé till genomförande – kontakta oss idag!
              </div>
            </div>
          </div>

          <div className="grid gap-2 text-sm font-semibold">
            <a
              className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-white"
              href="tel:+4640421185"
            >
              <SiteIcon name="phone" className="h-4 w-4 text-white/80" />
              040 - 42 11 85
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-left text-white/90 transition-colors hover:text-white"
              onClick={() => openBookingModal("Kontakta oss")}
            >
              <SiteIcon name="mail" className="h-4 w-4 text-white/80" />
              info@soderentertainment.com
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
