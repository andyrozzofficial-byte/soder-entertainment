import { SiteIcon } from "@/app/components/SiteIcon";

export type ContactPerson = {
  name: string;
  email: string;
  phoneDisplay: string;
  phoneTel: string;
};

export const CONTACT_PERSONS: ContactPerson[] = [
  {
    name: 'Christofer "Puffe" Nilsson',
    email: "info@soderentertainment.com",
    phoneDisplay: "0704-990686",
    phoneTel: "+46704990686",
  },
  {
    name: "Kent Larsen",
    email: "kent@soderentertainment.com",
    phoneDisplay: "0763-512778",
    phoneTel: "+46763512778",
  },
];

const linkClass =
  "inline-flex min-w-0 max-w-full items-center gap-1.5 text-xs text-white/75 transition-colors hover:text-white";

function ContactPersonCard({ person }: { person: ContactPerson }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/[0.06] backdrop-blur-sm sm:px-3.5 sm:py-3">
      <h3 className="text-sm font-bold leading-snug text-white">{person.name}</h3>
      <div className="mt-2 flex flex-col gap-1.5">
        <a className={linkClass} href={`mailto:${person.email}`}>
          <SiteIcon name="mail" className="h-3.5 w-3.5 shrink-0 text-[#9bb8ff]" />
          <span className="truncate">{person.email}</span>
        </a>
        <a className={linkClass} href={`tel:${person.phoneTel}`}>
          <SiteIcon name="phone" className="h-3.5 w-3.5 shrink-0 text-[#9bb8ff]" />
          <span>{person.phoneDisplay}</span>
        </a>
      </div>
    </article>
  );
}

export function ContactPersons({
  variant = "section",
}: {
  variant?: "modal" | "section";
}) {
  const headingClass =
    variant === "modal"
      ? "text-[10px] font-bold tracking-[0.28em] text-[#9bb8ff] sm:text-[11px]"
      : "text-[11px] font-bold tracking-[0.22em] text-[#9bb8ff]";

  const gridClass =
    variant === "modal"
      ? "mt-2 grid gap-2"
      : "mt-3 grid gap-2 sm:grid-cols-2 sm:gap-3";

  const HeadingTag = variant === "modal" ? "h3" : "h2";

  return (
    <div>
      <HeadingTag className={headingClass}>KONTAKTPERSONER</HeadingTag>
      <div className={gridClass}>
        {CONTACT_PERSONS.map((person) => (
          <ContactPersonCard key={person.email} person={person} />
        ))}
      </div>
    </div>
  );
}
