"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type TjansterItem = {
  label: string;
  href: string;
};

const tjansterItems: TjansterItem[] = [
  { label: "Event & fest", href: "/tjanster/event-fest" },
  { label: "Studentflak", href: "/tjanster/student" },
  { label: "Uthyrning", href: "/tjanster/uthyrning" },
  { label: "Underhållning", href: "/tjanster/underhallning" },
  { label: "Hoppborgar", href: "/tjanster/hoppborgar" },
  { label: "Fyrverkeri", href: "/tjanster/fyrverkeri" },
];

export function TjansterMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => {
          cancelClose();
          setOpen(true);
        }}
        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-white/80 transition-colors hover:text-white sm:text-sm"
      >
        TJÄNSTER
        <svg
          className={[
            "h-3 w-3 text-white/60 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m5 8 5 5 5-5" />
        </svg>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Tjänster"
          className="absolute left-1/2 top-full z-50 mt-3 w-[min(15rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#050A1A]/92 shadow-[0_60px_180px_-90px_rgba(0,0,0,0.95)] ring-1 ring-[#7ea2ff]/20 backdrop-blur-xl"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7ea2ff]/40 to-transparent"
            aria-hidden="true"
          />
          <ul className="py-2">
            {tjansterItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-5 py-2.5 text-left text-xs font-semibold tracking-[0.18em] text-white/80 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
