/**
 * SEO constants and JSON-LD builders for Söder Entertainment.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel to override the production origin.
 */

function normaliseOrigin(value: string | undefined, fallback: string): string {
  const raw = (value ?? "").trim();
  if (!raw) return fallback;
  const stripped = raw.replace(/\/+$/, "");
  return /^https?:\/\//i.test(stripped) ? stripped : `https://${stripped}`;
}

export const SITE_URL = normaliseOrigin(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://www.soderentertainment.com",
);

export const SITE_NAME = "Söder Entertainment";
export const SITE_LOCALE = "sv_SE";
export const SITE_LANGUAGE = "sv-SE";

export const SITE_TAGLINE = "Event, ljud, ljus & fyrverkeri i Skåne";

export const SITE_DESCRIPTION =
  "Söder Entertainment skapar premium event i Skåne sedan 2005 – ljud, ljus, scen, DJ, studentflak, hoppborgar, fyrverkeri och eventuthyrning.";

/**
 * Default Open Graph / Twitter share card. The URL is the Next.js
 * file-convention route `app/opengraph-image.tsx`, which is rendered as a
 * real 1200×630 PNG at build time. Because `metadataBase` is set to
 * SITE_URL in the root layout, the relative URL below is automatically
 * resolved to an absolute https URL in production, e.g.
 * https://www.soderentertainment.com/opengraph-image
 */
export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Söder Entertainment – Event, ljud, ljus & fyrverkeri i Skåne",
} as const;

export const SITE_KEYWORDS = [
  "event Skåne",
  "eventbyrå Malmö",
  "ljud och ljus",
  "studentflak",
  "DJ uthyrning",
  "hoppborg uthyrning",
  "fyrverkeri Skåne",
  "uthyrning ljud",
  "festutrustning",
  "bröllop DJ",
  "kick off företag",
  "Söder Entertainment",
];

export const BUSINESS = {
  legalName: "Söder Entertainment",
  phone: "+46404211851",
  phoneDisplay: "+46 40 42 11 85",
  email: "info@soderentertainment.com",
  street: "Fabriksgatan 14",
  postalCode: "235 32",
  city: "Vellinge",
  region: "Skåne län",
  country: "SE",
  countryName: "Sweden",
  foundingYear: "2005",
  priceRange: "$$",
  areaServed: [
    "Malmö",
    "Lund",
    "Trelleborg",
    "Vellinge",
    "Ystad",
    "Landskrona",
    "Skurup",
    "Skåne",
  ],
  sameAs: [
    "https://facebook.com/Soderentertainment",
    "https://www.instagram.com/soderentertainment",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${trimmed === "/" ? "" : trimmed}`;
}

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export function jsonLdScript(data: JsonLd, id?: string) {
  return {
    id,
    type: "application/ld+json",
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/soder-logo.png`,
    image: `${SITE_URL}/soder-logo.png`,
    foundingDate: BUSINESS.foundingYear,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    sameAs: BUSINESS.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
  };
}

export function localBusinessJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EntertainmentBusiness"],
    "@id": `${SITE_URL}/#local-business`,
    name: SITE_NAME,
    image: `${SITE_URL}/soder-logo.png`,
    logo: `${SITE_URL}/soder-logo.png`,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    foundingDate: BUSINESS.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      postalCode: BUSINESS.postalCode,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: BUSINESS.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        email: BUSINESS.email,
        areaServed: "SE",
        availableLanguage: ["sv", "en"],
      },
    ],
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: SITE_LANGUAGE,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  category?: string;
  serviceTypes?: string[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    serviceType: opts.category ?? "Event",
    category: opts.category,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    ...(opts.serviceTypes
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: opts.name,
            itemListElement: opts.serviceTypes.map((label) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: label,
              },
            })),
          },
        }
      : {}),
  };
}
