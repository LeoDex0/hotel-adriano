import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pt-24 text-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <p className="font-display text-2xl tracking-[0.1em]">
            HOTEL ADRIANO
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            {SITE.description}
          </p>
        </div>
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-gold">
            Explore
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="text-sm text-paper/70 transition-colors hover:text-paper"
              >
                Book a Room
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.25em] text-gold">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-paper/70">
            <li>{SITE.address}</li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-paper">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-paper">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Hotel Adriano Rimini. All rights reserved.</p>
          <p>Viale Vespucci, 40 · 47921 Rimini RN, Italy</p>
        </div>
      </div>
      <p
        aria-hidden
        className="pointer-events-none select-none pb-2 text-center font-display text-[19vw] leading-none text-paper/[0.045]"
      >
        ADRIANO
      </p>
    </footer>
  );
}
