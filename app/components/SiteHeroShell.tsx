import Image from "next/image";
import Link from "next/link";

import { NavKontaktButton } from "@/app/components/booking/BookingTriggers";
import { TjansterMenu } from "@/app/components/TjansterMenu";

export { HeroPrimaryCta } from "@/app/components/booking/BookingTriggers";

export function SiteHeroShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/hero-bg.png)` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#050A1A]/65 via-[#050A1A]/45 to-[#050A1A]/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_20%,rgba(31,92,255,0.18)_0%,rgba(5,10,26,0.2)_45%,rgba(5,10,26,0.9)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.75)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050A1A] via-[#050A1A]/85 to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <header className="mx-auto w-full max-w-6xl px-4 pt-12 pb-5 sm:pt-14 sm:pb-0">
          <div className="text-center">
            <div className="mx-auto inline-flex max-w-[760px] flex-col items-center justify-center gap-3">
              <div className="relative">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1f5cff]/20 blur-3xl sm:h-40 sm:w-[500px] md:h-52 md:w-[720px]"
                  aria-hidden="true"
                />
                <Image
                  src="/soder-logo.png"
                  alt="Söder Entertainment"
                  width={1200}
                  height={420}
                  priority
                  className="mx-auto h-auto w-[160px] drop-shadow-[0_26px_70px_rgba(0,0,0,0.7)] sm:w-[280px] md:w-[440px] lg:w-[520px]"
                />
              </div>

              <div className="whitespace-nowrap text-[10px] font-semibold tracking-[0.18em] text-white/70 sm:text-xs sm:tracking-[0.32em] md:text-sm md:tracking-[0.35em]">
                EVENT &nbsp;·&nbsp; LJUD &nbsp;·&nbsp; LJUS &nbsp;·&nbsp;
                FYRVERKERI
              </div>
            </div>

            <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold tracking-[0.18em] text-white/80 sm:mt-10 sm:gap-x-10 sm:tracking-[0.2em] sm:text-sm">
              <Link className="hover:text-white transition-colors" href="/#hem">
                HEM
              </Link>
              <TjansterMenu />
              <NavKontaktButton />
            </nav>
          </div>
        </header>

        {children}
      </div>
    </section>
  );
}
