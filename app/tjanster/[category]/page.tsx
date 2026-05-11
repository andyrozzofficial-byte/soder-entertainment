import Link from "next/link";
import { notFound } from "next/navigation";

import type { PackageCard } from "@/app/components/booking/PackageBookingCards";
import { PackageBookingCards } from "@/app/components/booking/PackageBookingCards";
import { BookingModalTrigger } from "@/app/components/booking/PremiumBookingModal";
import { ContactBar } from "@/app/components/ContactBar";
import { ProductBookingGrid } from "@/app/components/ProductBookingGrid";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeroShell } from "@/app/components/SiteHeroShell";
import { SiteIcon } from "@/app/components/SiteIcon";
import {
  cardBgImageHoverScale,
  ctaPrimary,
  ctaPrimaryCompact,
  ctaSecondaryCompact,
  ctaTextSubtle,
  eyebrow,
  eyebrowSoft,
  glassCardDark,
  glassCardDarkHover,
  sectionHeading,
  SectionGlow,
  splitShowcaseCard,
  splitShowcaseContentCell,
  splitShowcaseGrid,
  splitShowcaseImageCell,
} from "@/app/components/ui";

type InfoCard = {
  title: string;
  description: string;
  icon: Parameters<typeof SiteIcon>[0]["name"];
};

type CategoryContent = {
  title: string;
  intro: string;
  icon: Parameters<typeof SiteIcon>[0]["name"];
  includes: string[];
  overviewTitle: string;
  overviewCards: InfoCard[];
  showcase: {
    title: string;
    text: string;
    imageUrl: string;
    bullets?: string[];
  }[];
  credibility?: {
    title: string;
    stats: { label: string; value: string }[];
  };
  products?: {
    title: string;
    intro: string;
    items: {
      title: string;
      pricePerDay: string;
      imageUrl: string;
    }[];
  };
  packages?: {
    title: string;
    description?: string;
    cards: PackageCard[];
    note?: string;
  };
  details?: {
    title: string;
    paragraphs: string[];
  };
  pricingHighlights?: {
    title: string;
    description?: string;
    bullets: string[];
  };
};

const categories: Record<string, CategoryContent> = {
  "event-fest": {
    title: "Event & fest",
    intro:
      "Vi skapar minnesvärda tillställningar där helhet, känsla och tempo sitter – från första mingel till sista låt.",
    icon: "briefcase",
    includes: ["Bal", "Bröllop", "Julbord", "Kick Off", "Privatfest", "Företagsevent"],
    overviewTitle: "Det som skapar upplevelsen",
    overviewCards: [
      {
        title: "Helhetstänk",
        description:
          "Vi hjälper till med plan, flöde och detaljer – så upplevelsen känns sömlös för gästerna.",
        icon: "grid",
      },
      {
        title: "Stämning & atmosfär",
        description:
          "Ljud och ljus som matchar lokalen och kvällen – elegant, energiskt eller intimt.",
        icon: "music",
      },
      {
        title: "Trygg leverans",
        description:
          "Struktur, timing och tydlig kommunikation. Ni vet vad som händer och när.",
        icon: "briefcase",
      },
    ],
    credibility: {
      title: "Trygghet som märks",
      stats: [
        { value: "Sedan 2005", label: "Erfarenhet i branschen" },
        { value: "Helhet", label: "Plan • produktion • genomförande" },
        { value: "Premium", label: "Känsla, tempo och detaljer" },
      ],
    },
    showcase: [
      {
        title: "Stämning som känns direkt",
        text: "Vi bygger en kväll med tydlig dramaturgi: välkomnande start, rätt energi under middagen och ett dansgolv som lyfter när det behövs.",
        bullets: ["Ljudbild som sitter", "Miljöljus i rätt ton", "Tydligt körschema"],
        imageUrl:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Flexibelt upplägg",
        text: "Bröllop, bal, julbord eller företagsevent – vi anpassar nivå, teknik och uttryck efter plats och publik.",
        bullets: ["Skräddarsytt efter er vision", "Proffsig rigg & soundcheck", "Trygg leverans"],
        imageUrl:
          "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    packages: {
      title: "Upplägg vi ofta bygger",
      description:
        "Exempel på innehåll vi kan kombinera. Vi anpassar alltid efter plats, budget och känsla.",
      cards: [
        {
          name: "Bal",
          price: "Offert",
          items: [
            "Välkomstchampagne",
            "Förrätt med vin/öl",
            "Varmrätt med vin/öl (påfyllning)",
            "Kaffe & kaka",
            "Röd matta & musik i exklusiv miljö",
            "Fyrverkeri (valfritt)",
          ],
        },
        {
          name: "Julbord & julfest",
          price: "Offert",
          items: [
            "Centralt belägen festvåning (vid behov)",
            "Fördrink med glögg & mingel",
            "Omfattande julbord",
            "2 glas öl eller vin",
            "Kaffe & avec (valfritt)",
            "Dans / kvällsprogram (valfritt)",
          ],
        },
        {
          name: "Kick Off & företagsevent",
          price: "Offert",
          items: [
            "Upplägg för gemensamma aktiviteter",
            "Produktion: ljud, ljus och teknik",
            "DJ/artist/konferencier (valfritt)",
            "Catering (valfritt)",
            "Körschema och genomförande på plats",
          ],
          highlight: true,
        },
      ],
      note:
        "Vill ni att vi tar ett helhetsgrepp med struktur, idéer, mat, musik och miljö? Vi skräddarsyr gärna.",
    },
    details: {
      title: "Varför vi gör det här",
      paragraphs: [
        "Att arrangera en fest innebär ofta mycket planering för något som passerar på några timmar. Efteråt finns minnena kvar – och det är där vi vill leverera som starkast.",
        "Vi arbetar flexibelt och kundnära, med er vilja och magkänsla i centrum. Målet är att gästerna ska känna sig omhändertagna och delaktiga i den atmosfär som skapas.",
      ],
    },
  },
  student: {
    title: "Studentflak",
    intro:
      "Kompletta studentflak som syns och hörs – från “skön studentkänsla” till tungt partyflak.",
    icon: "cap",
    includes: ["Studentflak"],
    overviewTitle: "Ett studentflak som syns, hörs och känns",
    overviewCards: [
      {
        title: "Komplett helhetslösning",
        description:
          "Lastbil med chaufför + ljudpaket + el. Ni kopplar in och kör.",
        icon: "grid",
      },
      {
        title: "Trygg partner",
        description:
          "Lång erfarenhet och många genomförda studentflak – vi planerar för ett säkert upplägg.",
        icon: "briefcase",
      },
      {
        title: "Rätt nivå av tryck",
        description:
          "Välj Large, XL eller XXL – anpassat efter vibe, antal och hur ni vill att det ska kännas.",
        icon: "music",
      },
    ],
    credibility: {
      title: "Beprövat upplägg",
      stats: [
        { value: "Sedan 2005", label: "Studentflak med erfarenhet" },
        { value: "Jour", label: "Support vid behov" },
        { value: "Skåne", label: "Malmö • Lund • Trelleborg m.fl." },
      ],
    },
    showcase: [
      {
        title: "Flak som syns och hörs",
        text: "Vi levererar en helhetslösning där ljud, el och logistik fungerar – så ni kan fokusera på festen.",
        bullets: ["Lastbil + chaufför", "Ljudpaket i rätt nivå", "El-aggregat ingår"],
        imageUrl:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Rätt tryck för er klass",
        text: "Välj Large, XL eller XXL. Vi hjälper er välja nivå utifrån rutt, antal och hur ni vill att det ska kännas.",
        bullets: ["Tydliga paket", "Smidig inkoppling", "Trygg planering"],
        imageUrl:
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    packages: {
      title: "Studentpaket & priser",
      description:
        "Priser från tidigare upplägg. Vi hjälper er välja rätt paket utifrån rutt och ambitionsnivå.",
      cards: [
        {
          name: "Large",
          price: "18.000 kr",
          items: [
            "Lastbil med chaufför",
            "2× 15\" toppar + 2× 18\" basar",
            "AUX/RCA-anslutning",
            "El-aggregat",
          ],
        },
        {
          name: "XL",
          price: "22.000 kr",
          items: [
            "Lastbil med chaufför",
            "4× 15\" toppar + 2× 18\" basar",
            "AUX/RCA-anslutning",
            "El-aggregat",
          ],
          highlight: true,
        },
        {
          name: "XXL",
          price: "25.000 kr",
          items: [
            "Lastbil med chaufför",
            "2× (2×21\") toppar + 2× (2×21\") basar",
            "AUX/RCA-anslutning",
            "El-aggregat",
          ],
        },
      ],
      note:
        "Vi kör studentflak i bl.a. Malmö, Lund, Trelleborg, Vellinge, Ystad, Landskrona och Skurup med omnejd.",
    },
    details: {
      title: "Så vi jobbar",
      paragraphs: [
        "Oavsett om ni vill ha ett mindre flak eller ett flak som känns som en klubb på hjul, anpassar vi lösningen efter era behov och önskemål.",
        "Vi är vana vid de praktiska delarna runt studentflak och hjälper er få en trygg, smidig och maxad upplevelse.",
      ],
    },
  },
  uthyrning: {
    title: "Uthyrning",
    intro:
      "Proffsig utrustning för event i alla storlekar – ljud, ljus och eventinventarier med trygg support.",
    icon: "grid",
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
      "Servis/Köksutrustning",
    ],
    overviewTitle: "Utrustning för rätt känsla",
    overviewCards: [
      {
        title: "Ljud/PA",
        description:
          "Från mindre anläggningar till större disco/PA-upplägg – vi matchar nivå efter behov.",
        icon: "music",
      },
      {
        title: "Ljus & rigg",
        description:
          "Moving heads, lasers, miljöljus, truss och stativ – bygg en scenisk look i rätt ton.",
        icon: "grid",
      },
      {
        title: "Eventinventarier",
        description:
          "Bord/stolar, partytält, scen, elverk och även servis/köksutrustning för helheten.",
        icon: "briefcase",
      },
    ],
    credibility: {
      title: "Proffsigt & enkelt",
      stats: [
        { value: "Jour", label: "På samtliga uthyrningar" },
        { value: "Offertstege", label: "Rabatt vid fler tillfällen" },
        { value: "Soundcheck", label: "Leverans/montering vid behov" },
      ],
    },
    showcase: [
      {
        title: "Uthyrning som känns premium",
        text: "Vi hjälper dig bygga rätt nivå: från en enkel setup till en hel produktion. Allt med tydlig plan och utrustning som levererar.",
        bullets: ["Rätt val för lokalen", "Smidig logistik", "Support när det gäller"],
        imageUrl:
          "https://images.unsplash.com/photo-1515169067865-5387a3a6d9c1?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Inventarier för helheten",
        text: "Utöver teknik kan vi även komplettera med bord/stolar, tält, scen och serveringsutrustning för ett komplett eventflöde.",
        bullets: ["Bord/stolar & textilier", "Servis/kök", "Elverk & scen"],
        imageUrl:
          "https://images.unsplash.com/photo-1517457210344-703079e57d4e?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    pricingHighlights: {
      title: "Bra att veta om priser & service",
      bullets: [
        "Utkörning/hämtning/montering/soundcheck: från ca 500–1.000 kr per tillfälle (beroende på upplägg).",
        "Offertstege vid flera tillfällen eller längre period – priser reduceras efter omfattning.",
        "Jour på samtliga uthyrningar och service-telefon vid behov.",
      ],
    },
    details: {
      title: "Exempel på hyresutbud",
      paragraphs: [
        "Ljudpaket, DJ-utrustning, aktiva toppar/basar, mikrofoner, mixerbord och mer.",
        "Ljus: moving heads, laser, UV, gobo, spegelboll, strobes, LED-bars, miljöeffekter samt styrning.",
        "Servis/köksutrustning: glas, bestick, dukar, kaffekokare, kyl, stekbord m.m.",
      ],
    },
  },
  underhallning: {
    title: "Underhållning",
    intro:
      "Artister, DJ, catering och personal – vi sätter rätt nivå och hjälper er boka tryggt och smart.",
    icon: "music",
    includes: ["Artister", "DJ", "Personal", "Catering", "Underhållning"],
    overviewTitle: "Det som lyfter kvällen",
    overviewCards: [
      {
        title: "Artister",
        description:
          "Svenska och internationella alternativ i flera genrer – från coverband till konferencierer och etablerade namn.",
        icon: "music",
      },
      {
        title: "DJ",
        description:
          "DJ för allt från bröllop till nattklubbskänsla – genrebredd och erfarenhet från stora events.",
        icon: "grid",
      },
      {
        title: "Catering & personal",
        description:
          "Cateringupplägg och bemanning som matchar kvällen – från enklare buffé till hel service.",
        icon: "briefcase",
      },
    ],
    credibility: {
      title: "Rätt matchning",
      stats: [
        { value: "Nätverk", label: "Svenskt & internationellt" },
        { value: "Genrebredd", label: "DJ, band, konferencier" },
        { value: "Tryggt", label: "Tydlig process & offert" },
      ],
    },
    showcase: [
      {
        title: "Underhållning med precision",
        text: "Vi sätter rätt nivå för publik och format – från elegant lounge till full klubbenergi.",
        bullets: ["Artist/DJ-matchning", "Teknik vid behov", "Tydlig leverans"],
        imageUrl:
          "https://images.unsplash.com/photo-1521337706264-a414f153a5b6?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Catering & personal",
        text: "När helheten sitter blir det enkelt för gästerna. Vi hjälper med upplägg och leverantörer som matchar stilen ni vill åt.",
        bullets: ["Menyupplägg", "Bemanning", "Flöde & timing"],
        imageUrl:
          "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    details: {
      title: "Förmedling – men på vårt sätt",
      paragraphs: [
        "Vi använder ett brett nätverk av leverantörer och hjälper er hitta rätt match för eventets mål, målgrupp och budget.",
        "Oavsett om ni vill ha en DJ som håller dansgolvet i gång eller en artist som lyfter hela kvällen, guidar vi er till en lösning som känns premium – utan onödigt krångel.",
      ],
    },
  },
  hoppborgar: {
    title: "Hoppborgar",
    intro:
      "Hoppborgar som skapar energi och glädje – perfekta för familjedagar, företagsevent och festivalvibe.",
    icon: "people",
    includes: ["Hoppborgar"],
    overviewTitle: "Lekfull energi för alla åldrar",
    overviewCards: [
      {
        title: "Utbud",
        description:
          "Flera storlekar och teman – från mindre borgar till större hinderbanor.",
        icon: "grid",
      },
      {
        title: "För en dag eller mer",
        description:
          "Hyra per dag med smidig leverans/upphämtning efter upplägg.",
        icon: "briefcase",
      },
      {
        title: "Tryggt upplägg",
        description:
          "Vi hjälper er tänka på yta, el och placering – så det blir säkert och enkelt.",
        icon: "people",
      },
    ],
    credibility: {
      title: "Trygg leverans",
      stats: [
        { value: "Planerat", label: "Yta • el • placering" },
        { value: "Smidigt", label: "För en dag eller mer" },
        { value: "Eventvibe", label: "Passar familj & festival" },
      ],
    },
    showcase: [
      {
        title: "Hoppborgar som lyfter helheten",
        text: "För event där du vill skapa aktivitet och energi. Vi hjälper välja modell utifrån yta, ålder och känsla.",
        bullets: ["Rätt storlek", "Enkel logistik", "Tryggt upplägg"],
        imageUrl:
          "https://images.unsplash.com/photo-1520975693411-b7d71a3f5c45?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Kombinera med ljus & ljud",
        text: "Vill du få en mer “evening festival”-känsla? Vi kan kombinera med miljöljus, PA och effekt för en premium upplevelse.",
        bullets: ["Miljöljus", "PA för speak", "Effektmaskiner"],
        imageUrl:
          "https://images.unsplash.com/photo-1515169067865-5387a3a6d9c1?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    products: {
      title: "Populära hoppborgar",
      intro:
        "Perfekta för kalas, företagsevent och festivaler — från mindre hoppborgar till stora hinderbanor.",
      items: [
        {
          title: "Hoppkudden 16m2",
          pricePerDay: "1000 kr/dag",
          imageUrl: "/images/hoppborgar/hoppkudden.png",
        },
        {
          title: "Ballongborgen",
          pricePerDay: "500 kr/dag",
          imageUrl: "/images/hoppborgar/ballongborgen.png",
        },
        {
          title: "Dubbelsliden",
          pricePerDay: "1200 kr/dag",
          imageUrl: "/images/hoppborgar/dubbelsliden.png",
        },
        {
          title: "Prinsessborgen",
          pricePerDay: "500 kr/dag",
          imageUrl: "/images/hoppborgar/prinsessborgen.png",
        },
        {
          title: "Gula Borgen",
          pricePerDay: "500 kr/dag",
          imageUrl: "/images/hoppborgar/gula-borgen.png",
        },
        {
          title: "Rosa Borgen",
          pricePerDay: "500 kr/dag",
          imageUrl: "/images/hoppborgar/rosa-borgen.png",
        },
        {
          title: "Tunnelbanan",
          pricePerDay: "700 kr/dag",
          imageUrl: "/images/hoppborgar/tunnelbanan.png",
        },
        {
          title: "Piraten",
          pricePerDay: "1200 kr/dag",
          imageUrl: "/images/hoppborgar/piraten.png",
        },
        {
          title: "Ninja",
          pricePerDay: "1500 kr/dag",
          imageUrl: "/images/hoppborgar/ninja.png",
        },
        {
          title: "Hinderbanan",
          pricePerDay: "4000 kr/dag",
          imageUrl: "/images/hoppborgar/hinderbanan.jpg",
        },
        {
          title: "Emoji",
          pricePerDay: "1200 kr/dag",
          imageUrl: "/images/hoppborgar/emoji.png",
        },
      ],
    },
  },
  fyrverkeri: {
    title: "Fyrverkeri",
    intro:
      "Dramatiska finaler och magiska ögonblick – med fokus på kvalitet, upplevelse och säkerhet.",
    icon: "spark",
    includes: ["Fyrverkeri"],
    overviewTitle: "Effektfull final med trygghet",
    overviewCards: [
      {
        title: "Återförsäljare",
        description:
          "Vi är återförsäljare av Svea Fireworks – en av Skandinaviens största importörer.",
        icon: "spark",
      },
      {
        title: "Beställning året runt",
        description:
          "Fyrverkerier på beställning – planera i god tid (kan inte skickas som vanlig post).",
        icon: "briefcase",
      },
      {
        title: "Tillstånd",
        description:
          "Tillstånd krävs oftast (undantag vissa högtider). Ansökan via polisen, ca 700 kr.",
        icon: "grid",
      },
    ],
    credibility: {
      title: "Kvalitet i fokus",
      stats: [
        { value: "Året runt", label: "Beställning på förhand" },
        { value: "700 kr", label: "Tillstånd (oftast)" },
        { value: "Säkerhet", label: "Planering & kvalitet" },
      ],
    },
    showcase: [
      {
        title: "Finaler som känns",
        text: "Fyrverkeri är mer än smällar – det är en upplevelse. Vi hjälper er planera för en dramatisk och säker avslutning.",
        bullets: ["Planera i god tid", "Kvalitet & säkerhet", "Tydlig process"],
        imageUrl:
          "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=2000&q=80",
      },
      {
        title: "Tillstånd & praktiskt",
        text: "Tillstånd krävs i de flesta fall (undantag vissa högtider). Vi hjälper er förstå vad som behövs och när.",
        bullets: ["Ansökan via polisen", "Undantag vid vissa datum", "Kostnad ca 700 kr"],
        imageUrl:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80",
      },
    ],
    details: {
      title: "Planering & säkerhet",
      paragraphs: [
        "Vi rekommenderar att ni är ute i god tid – särskilt om ni vill ha ett specifikt upplägg eller datum.",
        "Tillstånd för fyrverkeri söks hos polisen (undantag nyårsafton, påskafton och valborgsmässoafton).",
      ],
    },
  },
} as const;

type CategoryKey = keyof typeof categories;

const CATEGORY_BOOKING_SUBJECT: Record<CategoryKey, string> = {
  "event-fest": "Kick Off & företagsevent",
  student: "Studentflak XL",
  uthyrning: "Uthyrning — Offert",
  underhallning: "Underhållning — Offert",
  hoppborgar: "Hoppborgar",
  fyrverkeri: "Fyrverkeri",
};

export function generateStaticParams() {
  return (Object.keys(categories) as CategoryKey[])
    .filter((category) => category !== "uthyrning")
    .map((category) => ({ category }));
}

function Section({
  title,
  eyebrow: eyebrowText,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
        <div className="text-center">
          {eyebrowText ? <div className={eyebrow}>{eyebrowText}</div> : null}
          <h2 className={`mt-3 ${sectionHeading}`}>{title}</h2>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.035] px-2 py-0.5 text-[10px] font-semibold text-white/70">
      {children}
    </span>
  );
}

function InfoCards({ cards }: { cards: InfoCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((c) => (
        <div
          key={c.title}
          className={`p-6 ${glassCardDark} ${glassCardDarkHover}`}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#0b1433] ring-1 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)]">
              <SiteIcon name={c.icon} className="h-5 w-5 text-[#9bb8ff]" />
            </div>
            <div className="text-base font-extrabold tracking-tight">
              {c.title}
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            {c.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const key = category as CategoryKey;
  const data = categories[key];
  if (!data) return notFound();

  const heroBookingSubject = CATEGORY_BOOKING_SUBJECT[key];

  return (
    <main className="flex-1 bg-[#050A1A] text-white">
      <SiteHeroShell>
        <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:pb-24 sm:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>TJÄNSTER</p>
            <h1 className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl sm:leading-tight md:text-6xl">
              {data.title}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
              {data.intro}
            </p>

            <div className="mt-10 flex justify-center">
              <BookingModalTrigger
                subject={heroBookingSubject}
                className={ctaPrimary}
              >
                <SiteIcon name="phone" className="h-4 w-4" />
                KONTAKTA OSS
              </BookingModalTrigger>
            </div>
          </div>
        </div>
      </SiteHeroShell>

      <Section title={data.overviewTitle} eyebrow="ÖVERSIKT">
        <InfoCards cards={data.overviewCards} />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {data.includes.map((t) => (
            <TagPill key={t}>{t}</TagPill>
          ))}
        </div>
      </Section>

      {data.credibility ? (
        <Section title={data.credibility.title} eyebrow="TRYGGHET">
          <div className="grid gap-4 md:grid-cols-3">
            {data.credibility.stats.map((s) => (
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
        </Section>
      ) : null}

      {data.packages ? (
        <Section title={data.packages.title} eyebrow="PAKET">
          {data.packages.description ? (
            <p className="mx-auto max-w-3xl text-center text-sm text-white/70">
              {data.packages.description}
            </p>
          ) : null}
          <div className="mt-8">
            <PackageBookingCards cards={data.packages.cards} />
          </div>
          {data.packages.note ? (
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-white/65">
              {data.packages.note}
            </p>
          ) : null}
        </Section>
      ) : null}

      {data.products ? (
        <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <ProductBookingGrid
              title={data.products.title}
              intro={data.products.intro}
              items={data.products.items}
            />
          </div>
        </section>
      ) : null}

      {data.showcase.length ? (
        <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:pb-16">
          <div className="grid gap-6 lg:gap-8">
            {data.showcase.map((b, idx) => (
              <div key={b.title} className={splitShowcaseCard}>
                <div className={splitShowcaseGrid}>
                  <div
                    className={[
                      splitShowcaseImageCell,
                      idx % 2 === 1 ? "md:order-2" : "",
                    ].join(" ")}
                  >
                    <div
                      className={cardBgImageHoverScale}
                      style={{ backgroundImage: `url(${b.imageUrl})` }}
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050A1A]/30 via-[#050A1A]/30 to-[#050A1A]/90"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 shadow-[inset_0_-80px_120px_rgba(5,10,26,0.95)]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className={splitShowcaseContentCell}>
                    <div className={eyebrow}>SHOWCASE</div>
                    <h3 className="mt-3 text-balance text-2xl font-extrabold tracking-tight">
                      {b.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/85">
                      {b.text}
                    </p>
                    {b.bullets?.length ? (
                      <ul className="mt-6 grid gap-2 text-sm text-white/70">
                        {b.bullets.map((x) => (
                          <li key={x} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7ea2ff]/70" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {data.pricingHighlights ? (
        <Section title={data.pricingHighlights.title} eyebrow="PRISINFO">
          {data.pricingHighlights.description ? (
            <p className="mx-auto max-w-3xl text-center text-sm text-white/70">
              {data.pricingHighlights.description}
            </p>
          ) : null}
          <ul className="mx-auto mt-6 grid max-w-3xl gap-3 text-sm text-white/70">
            {data.pricingHighlights.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#7ea2ff]/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {data.details ? (
        <Section title={data.details.title} eyebrow="DETALJER">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3 text-white/70">
              <span className="h-px w-14 bg-white/10" aria-hidden="true" />
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0b1433] ring-1 ring-white/10 shadow-[0_18px_46px_-26px_rgba(31,92,255,0.95)]">
                <SiteIcon name="spark" className="h-5 w-5 text-[#9bb8ff]" />
              </div>
              <span className="h-px w-14 bg-white/10" aria-hidden="true" />
            </div>

            <div className="mt-6 grid gap-4 text-sm leading-relaxed text-white/85">
              {data.details.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/#tjanster" className={ctaTextSubtle}>
              Tillbaka till tjänster
              <SiteIcon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      ) : (
        <section className="mx-auto w-full max-w-6xl px-4 pb-12">
          <div className="text-center">
            <Link href="/#tjanster" className={ctaTextSubtle}>
              Tillbaka till tjänster
              <SiteIcon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

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
              Säg datum, plats och vad ni vill uppnå – så återkommer vi med ett
              upplägg som matchar känslan, tekniken och nivån ni är ute efter.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
              <a href="tel:+4640421185" className={ctaSecondaryCompact}>
                <SiteIcon name="phone" className="h-4 w-4" />
                RING 040 - 42 11 85
              </a>
              <BookingModalTrigger subject="Offert" className={ctaPrimaryCompact}>
                <SiteIcon name="mail" className="h-4 w-4" />
                MAILA OSS
              </BookingModalTrigger>
            </div>
          </div>
        </div>
      </section>

      <ContactBar />
      <SiteFooter services={Object.values(categories).map((c) => c.title)} />
    </main>
  );
}

