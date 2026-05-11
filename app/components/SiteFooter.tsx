import Image from "next/image";
import Link from "next/link";

import { FooterBookingLink } from "@/app/components/booking/FooterBookingLink";

import { SiteIcon } from "./SiteIcon";

export function SiteFooter({ services }: { services: string[] }) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/soder-logo.png"
                alt="Söder Entertainment"
                width={520}
                height={180}
                className="h-auto w-44 opacity-90"
              />
            </div>
            <div className="mt-4 text-xs font-semibold tracking-[0.28em] text-white/55">
              EVENT · LJUD · LJUS · FYRVERKERI
            </div>
            <div className="mt-5 flex items-center gap-3 text-white/60">
              <a
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                href="#"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                href="#"
                aria-label="Instagram"
              >
                ☐
              </a>
              <a
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                href="#"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[0.18em] text-white/70">
              SNABBLÄNKAR
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-white/65">
              <li>
                <Link className="hover:text-white transition-colors" href="/#hem">
                  Hem
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" href="/#tjanster">
                  Tjänster
                </Link>
              </li>
              <li>
                <FooterBookingLink className="text-left text-sm text-white/65 hover:text-white transition-colors">
                  Kontakt
                </FooterBookingLink>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[0.18em] text-white/70">
              TJÄNSTER
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-white/65">
              {services.map((s) => (
                <li key={s}>
                  <Link className="hover:text-white transition-colors" href="/#tjanster">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[0.18em] text-white/70">
              KONTAKT
            </div>
            <div className="mt-4 grid gap-2 text-sm text-white/65">
              <a className="inline-flex items-center gap-2" href="tel:+4640421185">
                <SiteIcon name="phone" className="h-4 w-4 text-white/60" />
                040 - 42 11 85
              </a>
              <FooterBookingLink
                subject="E-post förfrågan"
                className="inline-flex items-center gap-2 text-left text-sm text-white/65 hover:text-white transition-colors"
              >
                <SiteIcon name="mail" className="h-4 w-4 text-white/60" />
                info@soderentertainment.com
              </FooterBookingLink>
              <div className="inline-flex items-start gap-2 text-white/55">
                <SiteIcon name="pin" className="mt-0.5 h-4 w-4 text-white/60" />
                <div>
                  Fabriksgatan 14
                  <br />
                  235 32 Vellinge
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Söder Entertainment. Alla rättigheter
          förbehållna.
        </div>
        <div className="mt-2 text-center text-[11px] tracking-[0.04em] text-white/30">
          Design &amp; utveckling av{" "}
          <a
            href="https://lunov.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/45 underline-offset-4 transition-colors hover:text-white/80 hover:underline"
          >
            Lunov
          </a>
        </div>
      </div>
    </footer>
  );
}

