import { BookingModalTrigger } from "@/app/components/booking/PremiumBookingModal";
import { ContactBar } from "@/app/components/ContactBar";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeroShell } from "@/app/components/SiteHeroShell";
import { SiteIcon } from "@/app/components/SiteIcon";
import {
  ctaPrimary,
  ctaPrimaryCompact,
  ctaSecondary,
  ctaSecondaryCompact,
  eyebrow,
  eyebrowSoft,
  glassCard,
  glassCardHover,
  HairlineTop,
  sectionHeading,
  SectionGlow,
} from "@/app/components/ui";

const VENUE_URL = "https://hantverksgardenvellinge.se";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80";

type Highlight = {
  title: string;
  description: string;
  icon: Parameters<typeof SiteIcon>[0]["name"];
};

const highlights: Highlight[] = [
  {
    title: "Bröllop",
    description:
      "En vacker ram för er stora dag – från vigsel och mingel till middag och dansgolv. Stämningsfull belysning, akustik och en lokal som lyfter helheten.",
    icon: "rings",
  },
  {
    title: "Företagsevent",
    description:
      "Konferens, kick off, julbord eller releasefest. En representativ miljö som passar både formella program och kvällar med energi.",
    icon: "briefcase",
  },
  {
    title: "Catering & atmosfär",
    description:
      "Genomarbetad meny, omsorgsfullt dukade bord och en känsla som sitter från första glas till sista låt – allt i en lokal byggd för premiumupplevelser.",
    icon: "music",
  },
];

const footerServices = [
  "Event & fest",
  "Student",
  "Uthyrning",
  "Underhållning",
  "Hoppborgar",
  "Fyrverkeri",
];

export default function FestlokalPage() {
  return (
    <main className="flex-1 bg-[#050A1A] text-white">
      <SiteHeroShell>
        <div
          id="festlokal"
          className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className={eyebrow}>FESTLOKAL</div>
            <h1 className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl sm:leading-tight md:text-6xl">
              En premium festlokal
              <br className="hidden sm:block" /> för era största stunder
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
              I samarbete med Hantverksgården i Vellinge erbjuder vi en
              stilren, atmosfärisk festlokal – byggd för bröllop, företagsevent
              och tillställningar där detaljerna ska sitta.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_80px_220px_-140px_rgba(31,92,255,0.85)]"
              role="img"
              aria-label="Festlokal – stämningsfull miljö"
            >
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#050A1A]/30 via-[#050A1A]/30 to-[#050A1A]/85"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_25%,rgba(31,92,255,0.18)_0%,rgba(5,10,26,0.0)_55%,rgba(5,10,26,0.7)_100%)]"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-10">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <div className={eyebrowSoft}>
                      HANTVERKSGÅRDEN · VELLINGE
                    </div>
                    <div className="mt-2 text-lg font-extrabold tracking-tight sm:text-xl">
                      En lokal för känsla, tempo och detaljer
                    </div>
                  </div>
                  <a
                    href={VENUE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaPrimary}
                  >
                    <SiteIcon name="arrowRight" className="h-4 w-4" />
                    BESÖK LOKALEN
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:flex-wrap [&>*]:w-full sm:[&>*]:w-auto">
            <a
              href={VENUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaPrimary}
            >
              <SiteIcon name="arrowRight" className="h-4 w-4" />
              BESÖK LOKALEN
            </a>
            <BookingModalTrigger
              subject="Festlokal – Boka visning"
              className={ctaSecondary}
            >
              <SiteIcon name="pin" className="h-4 w-4" />
              BOKA VISNING
            </BookingModalTrigger>
            <BookingModalTrigger
              subject="Festlokal – Kontakta oss"
              className={ctaSecondary}
            >
              <SiteIcon name="mail" className="h-4 w-4" />
              KONTAKTA OSS
            </BookingModalTrigger>
          </div>
        </div>
      </SiteHeroShell>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:py-16">
        <div className="text-center">
          <div className={eyebrow}>VÅR FESTLOKAL</div>
          <h2 className={`mt-3 ${sectionHeading}`}>
            Byggd för minnen som dröjer kvar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
            Hantverksgården i Vellinge är en av Skånes mest stämningsfulla
            festlokaler – med charm, hantverk och en miljö som lyfter både små
            sammankomster och stora tillställningar.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className={`group relative flex h-full flex-col overflow-hidden px-7 pb-8 pt-9 text-center sm:px-8 ${glassCard} ${glassCardHover}`}
            >
              <HairlineTop />

              <div className="flex justify-center">
                <div className="grid h-13 w-13 place-items-center rounded-full bg-[#0b1433] ring-2 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)] transition group-hover:ring-[#7ea2ff]/35">
                  <SiteIcon name={h.icon} className="h-5 w-5 text-[#9bb8ff]" />
                </div>
              </div>

              <h3 className="mt-5 text-base font-extrabold tracking-tight">
                {h.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {h.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16">
        <SectionGlow variant="primary" className="-inset-x-4 -top-4 bottom-0" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0b2a7a]/60 via-[#091b4a]/60 to-[#091b4a]/60 px-6 py-8 shadow-[0_50px_160px_-100px_rgba(31,92,255,0.95)] backdrop-blur sm:px-12 sm:py-10">
          <SectionGlow variant="edge" />
          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="max-w-2xl">
              <div className={eyebrowSoft}>NÄSTA STEG</div>
              <div className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl">
                Vill ni se lokalen i verkligheten?
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/80">
                Boka en visning så går vi igenom era önskemål på plats – eller
                besök Hantverksgårdens egen sida för mer information om
                lokalen.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
              <BookingModalTrigger
                subject="Festlokal – Boka visning"
                className={ctaPrimaryCompact}
              >
                <SiteIcon name="pin" className="h-4 w-4" />
                BOKA VISNING
              </BookingModalTrigger>
              <a
                href={VENUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaSecondaryCompact}
              >
                <SiteIcon name="arrowRight" className="h-4 w-4" />
                BESÖK LOKALEN
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactBar />
      <SiteFooter services={footerServices} />
    </main>
  );
}
