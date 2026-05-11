"use client";

import { SiteIcon } from "@/app/components/SiteIcon";
import { ctaPrimary } from "@/app/components/ui";

import { useBookingModal } from "./PremiumBookingModal";

export function HeroPrimaryCta() {
  const { openBookingModal } = useBookingModal();
  return (
    <span className="relative inline-flex">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 scale-125 rounded-full bg-[#1f5cff]/45 blur-2xl"
      />
      <button
        type="button"
        className={`${ctaPrimary} relative`}
        onClick={() => openBookingModal()}
      >
        <SiteIcon name="phone" className="h-4 w-4" />
        KONTAKTA OSS
      </button>
    </span>
  );
}

export function NavKontaktButton() {
  const { openBookingModal } = useBookingModal();
  return (
    <button
      type="button"
      className="text-xs font-semibold tracking-[0.2em] text-white/80 transition-colors hover:text-white sm:text-sm"
      onClick={() => openBookingModal("Kontakt")}
    >
      KONTAKT
    </button>
  );
}
