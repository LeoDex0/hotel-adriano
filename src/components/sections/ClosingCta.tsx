import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ClosingCta() {
  return (
    <section className="relative bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="mb-4 flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-current" />
          Reservations
          <span className="h-px w-8 bg-current" />
        </p>
        <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance text-ink md:text-5xl lg:text-6xl">
          Plan your Adriatic escape
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/70 lg:text-lg">
          Ninety metres from your pillow to the sand. Our concierge replies
          within one working day.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/book"
            data-cursor="Book"
            className="inline-block rounded-full bg-gold px-8 py-3.5 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright"
          >
            Reserve Your Stay
          </Link>
          <Link
            href="/contact"
            data-cursor="Contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-3.5 font-sans text-[13px] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
          >
            Get in Touch
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-ink-line pt-10 text-sm text-ink/60">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            {SITE.addressShort}
          </span>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 hover:text-ink"
          >
            <Phone className="h-4 w-4 text-gold" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 hover:text-ink"
          >
            <Mail className="h-4 w-4 text-gold" />
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
