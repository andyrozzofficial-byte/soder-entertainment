/**
 * Shared design-system tokens for Söder Entertainment.
 *
 * These constants codify the existing dark-blue premium look so every page
 * stays visually consistent. Compose with extra Tailwind classes when needed
 * (e.g. ` w-full`, ` mt-4`).
 */

export const eyebrow =
  "text-xs font-bold tracking-[0.3em] text-[#1f5cff]";

export const eyebrowSoft =
  "text-xs font-bold tracking-[0.3em] text-[#9bb8ff]";

export const sectionHeading =
  "text-balance text-2xl font-extrabold tracking-tight sm:text-3xl";

const ctaBase =
  "inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.18em] transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 disabled:cursor-not-allowed disabled:opacity-50";

export const ctaPrimary = [
  ctaBase,
  "rounded-lg bg-[#1f5cff] px-7 py-3.5 text-white",
  "shadow-[0_30px_90px_-26px_rgba(31,92,255,0.95)] ring-1 ring-[#7ea2ff]/25",
  "hover:-translate-y-0.5 hover:bg-[#2b67ff] hover:shadow-[0_40px_120px_-26px_rgba(31,92,255,1)]",
].join(" ");

export const ctaSecondary = [
  ctaBase,
  "rounded-lg bg-white/[0.06] px-7 py-3.5 text-white ring-1 ring-white/15",
  "hover:-translate-y-0.5 hover:bg-white/[0.12] hover:shadow-[0_28px_90px_-44px_rgba(31,92,255,0.85)]",
].join(" ");

export const ctaPrimaryCompact = [
  ctaBase,
  "rounded-lg bg-[#1f5cff] px-6 py-3 text-white",
  "shadow-[0_28px_90px_-30px_rgba(31,92,255,1)] ring-1 ring-[#7ea2ff]/30",
  "hover:-translate-y-0.5 hover:bg-[#2b67ff] hover:shadow-[0_40px_120px_-32px_rgba(31,92,255,1)]",
].join(" ");

export const ctaSecondaryCompact = [
  ctaBase,
  "rounded-lg bg-white/[0.08] px-6 py-3 text-white ring-1 ring-white/15",
  "hover:-translate-y-0.5 hover:bg-white/[0.13] hover:shadow-[0_24px_80px_-40px_rgba(31,92,255,0.85)]",
].join(" ");

export const ctaTextSubtle = [
  ctaBase,
  "rounded-lg border border-white/15 bg-white/[0.05] px-5 py-2.5 text-white/90",
  "hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.10]",
].join(" ");

export const ctaCard = [
  ctaBase,
  "rounded-lg border border-white/12 bg-white/[0.06] px-4 py-2.5 text-white/90 ring-1 ring-transparent",
  "hover:-translate-y-0.5 hover:border-[#7ea2ff]/35 hover:bg-white/[0.10] hover:shadow-[0_36px_100px_-50px_rgba(31,92,255,0.7)]",
].join(" ");

export const glassCard =
  "rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_60px_160px_-120px_rgba(0,0,0,0.9)] transform-gpu transition-[transform,box-shadow,border-color,background-color] duration-500 ease-out [backface-visibility:hidden]";

export const glassCardHover =
  "hover:-translate-y-1.5 hover:border-[#7ea2ff]/55 hover:bg-white/[0.045] hover:shadow-[0_90px_240px_-150px_rgba(31,92,255,0.7)]";

export const glassCardDark =
  "rounded-2xl border border-white/10 bg-[#050A1A]/55 shadow-[0_60px_170px_-140px_rgba(0,0,0,0.92)] transform-gpu transition-[transform,box-shadow,border-color,background-color] duration-500 ease-out [backface-visibility:hidden]";

export const glassCardDarkHover =
  "hover:-translate-y-1 hover:border-[#7ea2ff]/45 hover:shadow-[0_90px_240px_-160px_rgba(31,92,255,0.7)]";

export function SectionGlow({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "soft" | "edge";
  className?: string;
}) {
  const gradient =
    variant === "primary"
      ? "bg-[radial-gradient(55%_60%_at_50%_50%,rgba(31,92,255,0.18)_0%,rgba(31,92,255,0.06)_45%,rgba(5,10,26,0)_75%)]"
      : variant === "soft"
        ? "bg-[radial-gradient(60%_70%_at_50%_50%,rgba(126,162,255,0.12)_0%,rgba(31,92,255,0.04)_50%,rgba(5,10,26,0)_85%)]"
        : "bg-[radial-gradient(85%_55%_at_50%_0%,rgba(31,92,255,0.16)_0%,rgba(5,10,26,0)_70%)]";

  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0", gradient, className].join(" ")}
    />
  );
}

export function HairlineTop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7ea2ff]/40 to-transparent",
        className,
      ].join(" ")}
    />
  );
}
