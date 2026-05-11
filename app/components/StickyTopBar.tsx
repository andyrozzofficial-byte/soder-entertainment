"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useBookingModal } from "@/app/components/booking/PremiumBookingModal";
import { SiteIcon } from "@/app/components/SiteIcon";

export function StickyTopBar() {
  const [scrolled, setScrolled] = useState(false);
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!scrolled}
      className={[
        "fixed inset-x-0 top-0 z-40 transform-gpu transition-[transform,opacity] duration-300 ease-out",
        scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      ].join(" ")}
    >
      <div className="border-b border-white/10 bg-[#050A1A]/72 pt-[env(safe-area-inset-top)] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:py-3.5">
          <Link
            href="/"
            aria-label="Söder Entertainment — hem"
            className="inline-flex items-center"
          >
            <Image
              src="/soder-logo.png"
              alt="Söder Entertainment"
              width={520}
              height={180}
              className="h-auto w-24 opacity-95 sm:w-28"
            />
          </Link>

          <button
            type="button"
            onClick={() => openBookingModal("Kontakt")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1f5cff] px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-white shadow-[0_18px_60px_-22px_rgba(31,92,255,0.95)] ring-1 ring-[#7ea2ff]/30 transition-colors duration-200 ease-out hover:bg-[#2b67ff] sm:px-5 sm:py-2.5 sm:text-xs"
          >
            <SiteIcon name="phone" className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            KONTAKT
          </button>
        </div>
      </div>
    </div>
  );
}
