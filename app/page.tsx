import Link from "next/link";

import { ContactBar } from "@/app/components/ContactBar";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeroShell, HeroPrimaryCta } from "@/app/components/SiteHeroShell";
import { SiteIcon } from "@/app/components/SiteIcon";
import {
  eyebrow,
  glassCard,
  glassCardHover,
  HairlineTop,
  sectionHeading,
  SectionGlow,
} from "@/app/components/ui";

type Service = {
  title: string;
  imageUrl: string;
  icon:
    | "rings"
    | "briefcase"
    | "cap"
    | "people"
    | "spark"
    | "grid"
    | "music";
  includes: string[];
  href: string;
  imageFilter?: string;
  imageScaleClass?: string;
};

const DEFAULT_IMAGE_FILTER = "brightness-[0.78] saturate-[0.9]";
const DEFAULT_IMAGE_SCALE = "group-hover:scale-[1.06]";

const services: Service[] = [
  {
    title: "Event & fest",
    icon: "briefcase",
    imageUrl: "/images/event & fest.jpg",
    includes: ["Bal", "Bröllop", "Julbord", "Kick Off", "Privatfest", "Företagsevent"],
    href: "/tjanster/event-fest",
  },
  {
    title: "Student",
    icon: "cap",
    imageUrl: "/images/student.jpg",
    includes: ["Studentflak"],
    href: "/tjanster/student",
    imageFilter: "brightness-[0.66] saturate-[0.88]",
    imageScaleClass: "scale-[1.10] group-hover:scale-[1.14]",
  },
  {
    title: "Uthyrning",
    icon: "grid",
    imageUrl: "/images/uthyrning.jpg",
    includes: [
      "Bord/stolar",
      "Ljud/PA",
      "Ljus",
      "Tross",
      "Partytält",
      "Scen",
      "Effektmaskiner",
      "Spegelbollar",
      "Elverk",
    ],
    href: "/tjanster/uthyrning",
  },
  {
    title: "Underhållning",
    icon: "music",
    imageUrl: "/images/underhållning.jpg",
    includes: ["Artister", "DJ", "Personal", "Catering", "Underhållning"],
    href: "/tjanster/underhallning",
  },
  {
    title: "Hoppborgar",
    icon: "people",
    imageUrl: "/images/hoppborg.jpg",
    includes: ["Hoppborgar"],
    href: "/tjanster/hoppborgar",
    imageFilter: "brightness-[0.78] saturate-[0.62]",
  },
  {
    title: "Fyrverkeri",
    icon: "spark",
    imageUrl: "/images/fireworks.jpg",
    includes: ["Fyrverkeri"],
    href: "/tjanster/fyrverkeri",
    imageFilter:
      "brightness-[0.78] contrast-[1.18] sepia-[0.5] hue-rotate-[180deg] saturate-[1.15]",
  },
];

export default function HomePage() {
  return (
    <main className="flex-1 bg-[#050A1A] text-white">
      <SiteHeroShell>
        <div
          id="hem"
          className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl">
              Event & upplevelser
              <br className="hidden sm:block" /> som folk minns
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
              Vi skapar oförglömliga event med rätt ljud, ljus, stämning och
              energi – oavsett tillfälle.
            </p>

            <div className="mt-10 flex justify-center">
              <HeroPrimaryCta />
            </div>
          </div>
        </div>
      </SiteHeroShell>

      <section
        id="tjanster"
        className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:py-16"
      >
        <SectionGlow variant="soft" className="-inset-x-2 -inset-y-2" />
        <div className="relative text-center">
          <div className={eyebrow}>VÅRA TJÄNSTER</div>
          <h2 className={`mt-3 ${sectionHeading}`}>
            Vi skapar rätt upplevelse för ditt event
          </h2>
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group relative flex h-full flex-col overflow-hidden ${glassCard} ${glassCardHover}`}
            >
              <HairlineTop />
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <div
                  className={`absolute inset-0 bg-cover bg-center transform-gpu [backface-visibility:hidden] [will-change:transform] transition-transform duration-1000 ease-out ${s.imageScaleClass ?? DEFAULT_IMAGE_SCALE} ${s.imageFilter ?? DEFAULT_IMAGE_FILTER}`}
                  style={{ backgroundImage: `url("${s.imageUrl}")` }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_65%_at_50%_28%,rgba(31,92,255,0.22)_0%,rgba(75,45,140,0.12)_42%,transparent_70%)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050A1A]/60 via-[#080f28]/52 to-[#050A1A]/97"
                  aria-hidden="true"
                />
              </div>

              <div className="relative flex flex-1 flex-col px-7 pb-8 pt-7 text-center sm:px-8">
                <div className="-mt-11 flex justify-center transform-gpu">
                  <div className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-[#0b1433] ring-2 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)] transform-gpu transition-[box-shadow,--tw-ring-color] duration-300 ease-out group-hover:ring-[#7ea2ff]/35">
                    <SiteIcon name={s.icon} className="h-5 w-5 text-[#9bb8ff]" />
                  </div>
                </div>

                <h3 className="mt-4 text-base font-extrabold tracking-tight">
                  {s.title}
                </h3>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {s.includes.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-2 py-0.5 text-[10px] font-semibold text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-center pt-4 text-white/65 transition group-hover:text-white/85">
                  <SiteIcon name="arrowRight" className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactBar />
      <SiteFooter services={services.map((s) => s.title)} />
    </main>
  );
}

