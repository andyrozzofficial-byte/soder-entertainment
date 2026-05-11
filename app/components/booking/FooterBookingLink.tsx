"use client";

import type { ReactNode } from "react";

import { useBookingModal } from "./PremiumBookingModal";

export function FooterBookingLink({
  subject = "Kontakt",
  className,
  children,
}: {
  subject?: string;
  className?: string;
  children: ReactNode;
}) {
  const { openBookingModal } = useBookingModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openBookingModal(subject)}
    >
      {children}
    </button>
  );
}
