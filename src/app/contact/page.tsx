import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Hotel Adriano Rimini",
  description:
    "Get in touch with Hotel Adriano — address, phone, email, and a concierge enquiry form. Replies within one working day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Plan your Adriatic escape"
        description="Call, write, or send an enquiry — our concierge team replies within one working day."
        image="/images/about-adriatic-coast.jpg"
      />
      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <iframe
                title="Hotel Adriano Rimini location"
                src={SITE.mapEmbedSrc}
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href={SITE.mapLinkSrc}
                target="_blank"
                rel="noreferrer"
                data-cursor="Map"
                className="group flex items-start gap-4"
              >
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-ink/40">
                    Address
                  </span>
                  <span className="mt-1 block text-sm text-ink/80 group-hover:text-ink">
                    {SITE.address}
                  </span>
                </span>
              </a>

              <a
                href={SITE.phoneHref}
                data-cursor="Call"
                className="group flex items-start gap-4"
              >
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-ink/40">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-ink/80 group-hover:text-ink">
                    {SITE.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                data-cursor="Email"
                className="group flex items-start gap-4 sm:col-span-2"
              >
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-ink/40">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-ink/80 group-hover:text-ink">
                    {SITE.email}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden bg-ink p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
