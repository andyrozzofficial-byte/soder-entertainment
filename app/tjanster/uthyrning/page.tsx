import Link from "next/link";

import { BookingModalTrigger } from "@/app/components/booking/PremiumBookingModal";
import { ContactBar } from "@/app/components/ContactBar";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeroShell } from "@/app/components/SiteHeroShell";
import { SiteIcon } from "@/app/components/SiteIcon";
import {
  ctaCard,
  ctaPrimary,
  ctaPrimaryCompact,
  ctaSecondary,
  ctaSecondaryCompact,
  ctaTextSubtle,
  eyebrow,
  eyebrowSoft,
  glassCard,
  glassCardDark,
  glassCardDarkHover,
  glassCardHover,
  HairlineTop,
  sectionHeading,
  SectionGlow,
} from "@/app/components/ui";

type IconName = Parameters<typeof SiteIcon>[0]["name"];

type RentalProduct = {
  title: string;
  price: string;
  note?: string;
};

type RentalCategory = {
  key: string;
  title: string;
  short: string;
  intro: string;
  icon: IconName;
  products: RentalProduct[];
};

const rentalCategories: RentalCategory[] = [
  {
    key: "bord-stolar",
    title: "Bord/stolar",
    icon: "briefcase",
    short:
      "Möbler för fest, bröllop & event – från klappstolar till runda bord och överdrag.",
    intro:
      "Allt från enkla klappstolar och fällbord till lyxigare stolar och runda bord för exempelvis bröllop. Möbler ställs ej upp om det inte överenskommits vid bokning.",
    products: [
      { title: "Klappstol / stapelbar stol", price: "25 kr/dygn" },
      { title: "Klaffbord 180×75 cm", price: "110 kr/dygn" },
      {
        title: "Överdrag till klaffbord",
        price: "130 kr/dygn",
        note: "Finns i flera färger",
      },
      { title: "Runda bord 160 cm Ø", price: "250 kr/dygn" },
      {
        title: "Överdrag till runda bord",
        price: "130 kr/dygn",
        note: "Finns i flera färger",
      },
      { title: "Ståbord 80 cm", price: "130 kr/dygn" },
      {
        title: "Överdrag till ståbord",
        price: "130 kr/dygn",
        note: "Finns i flera färger",
      },
    ],
  },
  {
    key: "effektmaskiner",
    title: "Effektmaskiner",
    icon: "spark",
    short:
      "Rök, hazer, snö, konfetti & bubblor – för rätt energi och atmosfär.",
    intro:
      "Rök-, snö-, konfetti- och bubbelmaskiner i flera nivåer. Vi matchar effekten efter kvällens karaktär och lokal.",
    products: [
      {
        title: "Rökmaskin (Fest/Pub)",
        price: "200 kr/dygn",
        note: "Inkl. rökvätska",
      },
      {
        title: "Rökmaskin (Disco)",
        price: "550 kr/dygn",
        note: "Inkl. rökvätska",
      },
      {
        title: "Rökmaskin (Nattklubb)",
        price: "800 kr/dygn",
        note: "Inkl. rökvätska",
      },
      {
        title: "Hazer (Nattklubb)",
        price: "800 kr/dygn",
        note: "Inkl. rökvätska",
      },
      {
        title: "Tungrök / isrök (Nattklubb)",
        price: "2 200 kr/dygn",
        note: "Inkl. rökvätska",
      },
      {
        title: "Snömaskin (Fest/Pub)",
        price: "500 kr/dygn",
        note: "Inkl. snövätska",
      },
      {
        title: "Snömaskin (Nattklubb)",
        price: "1 000 kr/dygn",
        note: "Inkl. snövätska",
      },
      {
        title: "Konfettimaskin (Fest/Pub)",
        price: "800 kr/dygn",
        note: "Exkl. konfetti",
      },
      {
        title: "Konfettimaskin (Disco)",
        price: "1 500 kr/dygn",
        note: "Exkl. konfetti",
      },
      {
        title: "Konfettimaskin (Nattklubb)",
        price: "2 500 kr/dygn",
        note: "Exkl. konfetti",
      },
      {
        title: "Bubbelmaskin (Fest/Pub)",
        price: "100 kr/dygn",
        note: "Exkl. bubbelvätska",
      },
      {
        title: "Bubbelmaskin (Disco)",
        price: "300 kr/dygn",
        note: "Exkl. bubbelvätska",
      },
      {
        title: "Bubbelmaskin (Nattklubb)",
        price: "800 kr/dygn",
        note: "Exkl. bubbelvätska",
      },
    ],
  },
  {
    key: "elverk",
    title: "Elverk",
    icon: "spark",
    short:
      "Mobil el för utomhusevent och studentflak – tryggt och beprövat.",
    intro:
      "Tystgående elverk för event där fast el inte räcker till – studentflak, utomhusscener och festivaler.",
    products: [
      { title: "Elverk \"Makita\"", price: "500 kr/dygn", note: "2,2 kW – 3,2 kW" },
    ],
  },
  {
    key: "ljud-pa",
    title: "Ljud/PA",
    icon: "music",
    short:
      "Ljudanläggningar, DJ-paket, mixerbord, mikrofoner och PA-lösningar.",
    intro:
      "Allt från mindre ljudanläggningar till PA-paket för 50–50 000 personer. Vi matchar nivå, lokal och format.",
    products: [
      {
        title: "Ljudanläggning M",
        price: "600 kr/dygn",
        note: "2× 15\" toppar inkl. stativ",
      },
      {
        title: "Ljudanläggning L",
        price: "850 kr/dygn",
        note: "2× 18\" fullrange inkl. stativ",
      },
      {
        title: "Ljudanläggning Disco",
        price: "1 750 kr/dygn",
        note: "2× 15\" toppar + 2× 18\" basar inkl. stativ",
      },
      {
        title: "Ljudanläggning Disco XL",
        price: "3 000 kr/dygn",
        note: "2× 2×15\" fullrange + 2× 18\" basar",
      },
      {
        title: "Ljudanläggning Nattklubb",
        price: "6 000 kr/dygn",
        note: "4× 2×15\" fullrange + 4× 18\" basar inkl. slutsteg",
      },
      {
        title: "Ljudanläggning Live",
        price: "10 000 kr/dygn",
        note: "2× 2×15\" fullrange + 2× 2×18\" basar",
      },
      { title: "PA-paket", price: "Offert", note: "Publik 50–50 000 personer" },
      {
        title: "DJ-paket 1",
        price: "500 kr/dygn",
        note: "2× Pioneer CDJ 800 MKII + DJM 800",
      },
      {
        title: "DJ-paket 2",
        price: "500 kr/dygn",
        note: "2× Pioneer CDJ 1000 MKI/MKIII + DJM 800",
      },
      { title: "Pioneer XDJ-RX1", price: "650 kr/dygn" },
      { title: "Pioneer XDJ-RX2", price: "750 kr/dygn" },
      {
        title: "Aktiv topp 15\"",
        price: "250 kr/dygn",
        note: "db Opera / Electro Voice / JBL Eon",
      },
      { title: "Aktiv topp 15\" Yamaha", price: "350 kr/dygn" },
      { title: "Aktiv topp 2×15\" JBL", price: "650 kr/dygn" },
      { title: "Aktiv bas 15\" The Box", price: "250 kr/dygn" },
      { title: "Aktiv bas 18\" Electro Voice", price: "400 kr/dygn" },
      { title: "Aktiv bas 15\" Yamaha", price: "500 kr/dygn" },
      { title: "Aktiv bas 2×18\" db", price: "1 500 kr/dygn" },
      {
        title: "Hörlurar Beats / Pioneer HDJ-2000",
        price: "200 kr/dygn",
        note: "Studio / DJ",
      },
      { title: "Hörlurar Skullcandy", price: "50 kr/dygn" },
      {
        title: "Mixerbord Pioneer DJM-600",
        price: "200 kr/dygn",
        note: "4-kanals",
      },
      {
        title: "Mixerbord Pioneer DJM-800 / DJM-900",
        price: "300 kr/dygn",
        note: "4-kanals",
      },
      {
        title: "Mixerbord Pioneer DJM-2000",
        price: "750 kr/dygn",
        note: "4-kanals",
      },
      {
        title: "Mixerbord Yamaha (PA)",
        price: "100 – 200 kr/dygn",
        note: "EQ + effekter",
      },
      {
        title: "Mixerbord Behringer 16-kanal (PA)",
        price: "400 kr/dygn",
        note: "EQ + effekter",
      },
      {
        title: "CD-spelare Pioneer CDJ-800/900/1000",
        price: "300 – 400 kr/dygn",
      },
      { title: "CD-spelare Pioneer CDJ-2000", price: "800 kr/dygn" },
      {
        title: "Vinylspelare Technics SL-1200",
        price: "350 kr/dygn",
        note: "Slipmat 20 kr / Ortofon-nålar 150 kr",
      },
      {
        title: "Mikrofon (sång/tal)",
        price: "Från 50 kr/dygn",
        note: "Standard, AKG, Behringer, Shure SM58",
      },
      {
        title: "Trådlös mikrofon Shure",
        price: "300 kr/dygn",
        note: "SM58 / PG Headset",
      },
      {
        title: "Instrumentmik Shure PG52/56/57",
        price: "100 kr/dygn",
        note: "Bastrumma / trummor / gitarr",
      },
    ],
  },
  {
    key: "ljus",
    title: "Ljus",
    icon: "spark",
    short:
      "Moving heads, lasers, gobo, strobes, miljöljus och scanners.",
    intro:
      "Ett brett ljussortiment för att bygga rätt scenisk look – från mjukt mingelljus till klubbenergi.",
    products: [
      { title: "Movinghead JBS S5", price: "500 kr/dygn" },
      { title: "Movinghead LED SL38 X", price: "300 kr/dygn" },
      { title: "Laser 30–40 mW Grön", price: "200 kr/dygn" },
      { title: "Laser 80–250 mW Grön", price: "300 kr/dygn" },
      {
        title: "Laser 80–250 mW RGB",
        price: "500 kr/dygn",
        note: "Röd / Grön / Gul",
      },
      { title: "UV-kanon 400 W", price: "150 kr/dygn" },
      { title: "UV-kanon 750 W", price: "250 kr/dygn" },
      {
        title: "Gobo — Mini Falcon / Falcon / Zachry",
        price: "150 kr/dygn",
      },
      {
        title: "Aktiv spegelboll Worldstar",
        price: "250 kr/dygn",
      },
      { title: "Strobe 750 W", price: "100 kr/dygn" },
      { title: "Strobe 1 500 W", price: "100 kr/dygn" },
      {
        title: "Scanners — Dynamo / Rover / LED",
        price: "150 kr/dygn",
      },
      {
        title: "Par 56 LED",
        price: "75 kr/dygn",
        note: "Halvstor kanna",
      },
      { title: "LED Flame stående", price: "75 kr/dygn" },
      { title: "Scanner LED", price: "150 kr/dygn" },
      { title: "LED Bars 100 cm", price: "100 kr/dygn" },
      {
        title: "Miljöljus — Waterwave / Oilprojector / Poseidon",
        price: "150 kr/tillfälle",
        note: "Vågeffekt",
      },
      {
        title: "Audience Blinders",
        price: "150 kr/tillfälle",
        note: "4× PAR 36",
      },
      { title: "Par 56 — kanna stor", price: "50 kr/tillfälle" },
      { title: "Par 16 — kanna liten", price: "25 kr/tillfälle" },
      {
        title: "Skytracker Novalight 3400",
        price: "3 500 kr/tillfälle",
        note: "Räckvidd 3–4 km",
      },
      {
        title: "DMX-ljusbord JB Systems SM 1612",
        price: "350 kr/tillfälle",
      },
      { title: "Switchbox", price: "100 kr/tillfälle" },
      { title: "Dimmerpack", price: "100 kr/tillfälle" },
    ],
  },
  {
    key: "ljusstativ-tross",
    title: "Ljusstativ/Tross",
    icon: "grid",
    short:
      "Stativ, truss, mikrofon- och högtalarstativ för rigg och produktion.",
    intro:
      "Stativ och truss för säker rigg – från enklare ljusstativ till hela trussbågar i flera sektioner.",
    products: [
      {
        title: "Stativ inkl. topparm",
        price: "150 kr/dygn",
        note: "6 monteringshål",
      },
      {
        title: "Stativ inkl. 3 m tross",
        price: "500 kr/dygn",
        note: "28 monteringshål",
      },
      {
        title: "Stativ inkl. 4,5 m tross",
        price: "700 kr/dygn",
        note: "42 monteringshål",
      },
      {
        title: "Truss — trekant / fyrkant / rund",
        price: "Offert",
        note: "1–3 m sektioner, böjar / vinklar",
      },
      { title: "Mikrofonstativ standard", price: "75 kr/dygn" },
      { title: "Mikrofonstativ rund fot", price: "150 kr/dygn" },
      {
        title: "Högtalarstativ — kraftigt, stående",
        price: "150 kr/dygn",
      },
      { title: "Monitorstativ stående", price: "100 kr/dygn" },
      { title: "Monitorstativ liggande", price: "100 kr/dygn" },
    ],
  },
  {
    key: "partytalt",
    title: "Partytält",
    icon: "people",
    short:
      "Topptält och ryggåstält i flera storlekar – med eller utan golv.",
    intro:
      "Vi har partytält i alla storlekar. Kontakta oss för en offert med montering och leverans/hämtning. Alla priser exkl. moms.",
    products: [
      {
        title: "Topptält 5×5 m (25 m²)",
        price: "Från 4 400 kr",
        note: "Plastgolv 5 650 kr / Trägolv 6 500 kr",
      },
      {
        title: "Ryggåstält 6×6 m (36 m²)",
        price: "Från 4 700 kr",
        note: "Plastgolv 6 500 kr / Trägolv 7 600 kr",
      },
      {
        title: "Ryggåstält 6×9 m (54 m²)",
        price: "Från 6 000 kr",
        note: "Plastgolv 8 700 kr / Trägolv 10 400 kr",
      },
      {
        title: "Ryggåstält 6×12 m (72 m²)",
        price: "Från 7 600 kr",
        note: "Plastgolv 11 200 kr",
      },
      {
        title: "Ryggåstält 6×15 m (90 m²)",
        price: "Från 9 500 kr",
        note: "Plastgolv 14 000 kr / Trägolv 16 900 kr",
      },
      {
        title: "Ryggåstält 6×18 m (108 m²)",
        price: "Från 11 500 kr",
        note: "Plastgolv 16 900 kr / Trägolv 20 400 kr",
      },
      {
        title: "Ryggåstält 6×21 m (126 m²)",
        price: "Från 13 400 kr",
        note: "Plastgolv 19 700 kr / Trägolv 23 800 kr",
      },
      {
        title: "Ryggåstält 8×6 m (48 m²)",
        price: "Från 5 700 kr",
        note: "Plastgolv 8 100 kr / Trägolv 9 600 kr",
      },
      {
        title: "Ryggåstält 8×9–8×24 m",
        price: "Offert",
        note: "Större format i 3 m intervall",
      },
      {
        title: "Liningtyg i taket (vit)",
        price: "50 kr/m²",
        note: "Tillbehör",
      },
      {
        title: "Kristallkrona (vit)",
        price: "875 kr",
        note: "Tillbehör",
      },
      {
        title: "Gasolvärmare",
        price: "900 kr",
        note: "Inkl. gasol",
      },
      {
        title: "Betongfundament",
        price: "200 kr",
        note: "180 kg",
      },
      {
        title: "Frakt — Malmö / Lund",
        price: "450 kr",
        note: "Standardfrakt",
      },
      {
        title: "Frakt — utanför region",
        price: "250 kr/mil",
      },
    ],
  },
  {
    key: "scen",
    title: "Scen",
    icon: "music",
    short:
      "Scenpodier för artistuppträdanden, presentationer och DJ-bås.",
    intro:
      "Modulär scen och scenpodier som byggs efter event och lokal – från enskilda podier till hela scenupplägg.",
    products: [
      {
        title: "Scen (komplett)",
        price: "12 000 kr",
        note: "Inkl. podier",
      },
      {
        title: "Scenpodium 2×1 m",
        price: "250 kr/dygn",
      },
    ],
  },
  {
    key: "spegelbollar",
    title: "Spegelbollar",
    icon: "spark",
    short:
      "Klassisk discokänsla – spegelbollar med motor och belysning.",
    intro:
      "Spegelbollar i två storlekar, levereras med motor och belysning för en självgående discoeffekt.",
    products: [
      {
        title: "Spegelboll 40 cm",
        price: "250 kr/dygn",
        note: "Inkl. motor & belysning",
      },
      {
        title: "Spegelboll 50 cm",
        price: "300 kr/dygn",
        note: "Inkl. motor & belysning",
      },
    ],
  },
  {
    key: "servis-koksutrustning",
    title: "Servis/Köksutrustning",
    icon: "briefcase",
    short:
      "Glas, bestick, dukar, kaffekokare, kyl och stekbord – för helheten.",
    intro:
      "Vi kompletterar gärna eventet med servis och köksutrustning för en komplett serveringsupplevelse.",
    products: [
      {
        title: "Glas, porslin & bestick",
        price: "Offert",
        note: "Sätt utifrån antal gäster",
      },
      {
        title: "Dukar & textilier",
        price: "Offert",
        note: "Flera färger",
      },
      { title: "Kaffekokare & vattenkokare", price: "Offert" },
      {
        title: "Kyl & stekbord",
        price: "Offert",
        note: "För catering på plats",
      },
    ],
  },
];

const rentalTerms: { title: string; text: string }[] = [
  {
    title: "Beställning och betalning",
    text: "Efter utförd beställning översänds en bokningsbekräftelse via e-post som signeras av hyrestagaren. Hyresavgiften betalas omgående till bankgiro/Swish, om inte kontant betalning sker vid avhämtning.",
  },
  {
    title: "Pris och prisändringar",
    text: "I priset ingår den totala hyreskostnaden för produkten/produkterna som anges i beskrivningen för produkt, personal eller förmedlade föremål.",
  },
  {
    title: "Avbeställningsskydd",
    text: "Avbeställningsskydd kan tecknas och träder i kraft vid din eller dina närståendes sjukdom eller skada – eller annan allvarlig omständighet som gör att du måste avboka.",
  },
  {
    title: "Avbeställningsavgift",
    text: "Vid avbokning efter signerat hyresavtal dras en avbeställningsavgift på 50 % av hyreskostnaden av innan resterande belopp betalas tillbaka.",
  },
  {
    title: "Är det billigare att hyra via Söder?",
    text: "Att hyra produkter via oss kostar alltid mindre än hos våra konkurrenter – om inte detta är fallet matchar vi konkurrentens pris.",
  },
];

const trustStats = [
  { value: "Jour", label: "På samtliga uthyrningar" },
  { value: "Offertstege", label: "Rabatt vid fler tillfällen / period" },
  { value: "Soundcheck", label: "Leverans/montering vid behov" },
];

const footerServices = [
  "Event & fest",
  "Student",
  "Uthyrning",
  "Underhållning",
  "Hoppborgar",
  "Fyrverkeri",
];

function CategoryNavCard({ c }: { c: RentalCategory }) {
  return (
    <a
      href={`#cat-${c.key}`}
              className={`group relative flex h-full flex-col p-6 ${glassCard} ${glassCardHover}`}
    >
      <HairlineTop />
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0b1433] ring-1 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)] transition group-hover:ring-[#7ea2ff]/35">
          <SiteIcon name={c.icon} className="h-5 w-5 text-[#9bb8ff]" />
        </div>
        <div className="text-base font-extrabold tracking-tight">{c.title}</div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/75">{c.short}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-white/65 transition group-hover:text-white/90">
        SE PRODUKTER
        <SiteIcon name="arrowRight" className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}

function ProductCard({
  category,
  product,
}: {
  category: RentalCategory;
  product: RentalProduct;
}) {
  return (
    <div className={`group flex h-full flex-col p-5 ${glassCardDark} ${glassCardDarkHover}`}>
      <div className="flex items-start justify-between gap-3">
        <h4 className="min-w-0 text-sm font-extrabold tracking-tight text-white [overflow-wrap:anywhere]">
          {product.title}
        </h4>
        <span className="shrink-0 rounded-full border border-[#7ea2ff]/25 bg-[#0b1433]/60 px-3 py-1 text-[11px] font-extrabold text-white/90">
          {product.price}
        </span>
      </div>
      {product.note ? (
        <p className="mt-2 text-xs leading-relaxed text-white/60">{product.note}</p>
      ) : null}

      <div className="mt-5 flex flex-1 items-end">
        <BookingModalTrigger
          subject={`Uthyrning – ${category.title} – ${product.title}`}
          className={`${ctaCard} w-full`}
        >
          Fråga / Boka
          <SiteIcon name="arrowRight" className="h-4 w-4 opacity-80" />
        </BookingModalTrigger>
      </div>
    </div>
  );
}

function CategorySection({ c }: { c: RentalCategory }) {
  return (
    <section
      id={`cat-${c.key}`}
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-14 sm:pb-16"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0b1433] ring-1 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)]">
                <SiteIcon name={c.icon} className="h-5 w-5 text-[#9bb8ff]" />
              </div>
              <div className={eyebrow}>KATEGORI</div>
            </div>
            <h3 className={`mt-3 ${sectionHeading}`}>{c.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              {c.intro}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <BookingModalTrigger
              subject={`Uthyrning – ${c.title} – Offert`}
              className={ctaPrimary}
            >
              <SiteIcon name="mail" className="h-4 w-4" />
              BEGÄR OFFERT
            </BookingModalTrigger>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.products.map((p) => (
            <ProductCard key={p.title} category={c} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UthyrningPage() {
  return (
    <main className="flex-1 bg-[#050A1A] text-white">
      <SiteHeroShell>
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:pb-20 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className={eyebrow}>TJÄNSTER · UTHYRNING</div>
            <h1 className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl sm:leading-tight md:text-6xl">
              Hyr av Söder
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
              Proffsig utrustning för event i alla storlekar – ljud, ljus, scen,
              effektmaskiner, partytält, möbler och eventinventarier. Vi har
              jour på samtliga uthyrningar och hjälper er att välja rätt nivå
              för er produktion.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {rentalCategories.map((c) => (
                <a
                  key={c.key}
                  href={`#cat-${c.key}`}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] font-semibold text-white/75 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#7ea2ff]/45 hover:text-white"
                >
                  {c.title}
                </a>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center [&>*]:w-full sm:[&>*]:w-auto">
              <BookingModalTrigger
                subject="Uthyrning — Offert"
                className={ctaPrimary}
              >
                <SiteIcon name="mail" className="h-4 w-4" />
                BEGÄR OFFERT
              </BookingModalTrigger>
              <a href="tel:+4640421185" className={ctaSecondary}>
                <SiteIcon name="phone" className="h-4 w-4" />
                RING 040 - 42 11 85
              </a>
            </div>
          </div>
        </div>
      </SiteHeroShell>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <div className="text-center">
            <div className={eyebrow}>TRYGGHET</div>
            <h2 className={`mt-3 ${sectionHeading}`}>
              Proffsigt &amp; enkelt – från offert till leverans
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trustStats.map((s) => (
              <div
                key={s.label}
                className={`p-6 text-center ${glassCardDark} ${glassCardDarkHover}`}
              >
                <div className="text-2xl font-extrabold tracking-tight text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 text-sm text-white/70">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7ea2ff]/70" />
              <span>
                Utkörning / hämtning / montering / soundcheck: från ca 500–1 000
                kr per tillfälle (beroende på upplägg).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7ea2ff]/70" />
              <span>
                Offertstege vid flera tillfällen eller längre period – priser
                reduceras efter omfattning.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7ea2ff]/70" />
              <span>
                Jour på samtliga uthyrningar och servicetelefon vid behov.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16">
        <SectionGlow variant="soft" className="-inset-x-2 -inset-y-2" />
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <div className="text-center">
            <div className={eyebrow}>KATEGORIER</div>
            <h2 className={`mt-3 ${sectionHeading}`}>Allt vi hyr ut</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75">
              Välj en kategori för att se produkter och priser, eller kontakta
              oss direkt för en skräddarsydd offert.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rentalCategories.map((c) => (
              <CategoryNavCard key={c.key} c={c} />
            ))}
            <a
              href="#hyresvillkor"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b2a7a]/45 via-[#091b4a]/45 to-[#091b4a]/45 p-6 shadow-[0_60px_160px_-120px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#7ea2ff]/55 hover:shadow-[0_90px_240px_-150px_rgba(31,92,255,0.7)]"
            >
              <HairlineTop />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0b1433] ring-1 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)] transition group-hover:ring-[#7ea2ff]/35">
                  <SiteIcon name="briefcase" className="h-5 w-5 text-[#9bb8ff]" />
                </div>
                <div className="text-base font-extrabold tracking-tight">
                  Hyresvillkor
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Beställning, betalning, avbokning och prismatchning – läs igenom
                våra villkor.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-white/75 transition group-hover:text-white">
                LÄS VILLKOR
                <SiteIcon name="arrowRight" className="h-3.5 w-3.5" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {rentalCategories.map((c) => (
        <CategorySection key={c.key} c={c} />
      ))}

      <section
        id="hyresvillkor"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-14 sm:pb-16"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
          <div className="text-center">
            <div className={eyebrow}>VILLKOR</div>
            <h2 className={`mt-3 ${sectionHeading}`}>Hyresvillkor</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/75">
              Tydliga villkor för bokning, betalning och avbokning – vi vill att
              ni känner er trygga från start till mål.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {rentalTerms.map((t) => (
              <div
                key={t.title}
                className={`p-6 ${glassCardDark} ${glassCardDarkHover}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0b1433] ring-1 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)]">
                    <SiteIcon name="briefcase" className="h-4 w-4 text-[#9bb8ff]" />
                  </div>
                  <div className="text-base font-extrabold tracking-tight">
                    {t.title}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookingModalTrigger
              subject="Uthyrning – Frågor om hyresvillkor"
              className={ctaSecondary}
            >
              <SiteIcon name="mail" className="h-4 w-4" />
              FRÅGA OM VILLKOR
            </BookingModalTrigger>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-4 pb-12 sm:pb-14">
        <SectionGlow variant="primary" className="-inset-x-4 -top-4 bottom-0" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0b2a7a]/65 via-[#091b4a]/65 to-[#091b4a]/65 p-7 shadow-[0_50px_160px_-100px_rgba(31,92,255,0.95)] backdrop-blur sm:p-10">
          <SectionGlow variant="edge" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className={eyebrowSoft}>KONTAKT</div>
            <h2 className="mt-4 text-balance text-[1.6rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl sm:leading-tight">
              Vill du ha en offert som känns rätt?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
              Säg vad ni behöver, datum och plats – så återkommer vi med ett
              upplägg som matchar ambitionsnivån, lokalen och budgeten.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
              <a href="tel:+4640421185" className={ctaSecondaryCompact}>
                <SiteIcon name="phone" className="h-4 w-4" />
                RING 040 - 42 11 85
              </a>
              <BookingModalTrigger
                subject="Uthyrning — Offert"
                className={ctaPrimaryCompact}
              >
                <SiteIcon name="mail" className="h-4 w-4" />
                BEGÄR OFFERT
              </BookingModalTrigger>
            </div>
            <div className="mt-6">
              <Link href="/#tjanster" className={ctaTextSubtle}>
                Tillbaka till tjänster
                <SiteIcon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBar />
      <SiteFooter services={footerServices} />
    </main>
  );
}
