import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import BookingForm from "@/components/forms/BookingForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reserve — Hotel Adriano",
  description:
    "Request a reservation at Hotel Adriano — choose a room, your dates, and an optional experience. Our concierge confirms by email within one working day.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ room?: string; experience?: string }>;
}) {
  const { room, experience } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Request your stay"
        description="Tell us the dates and the room, and — if you'd like — an experience to go with it. Our concierge confirms everything by email."
        image="/images/room-dolce-vita.jpg"
      />
      <section className="bg-ink pb-24 pt-4 lg:pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-10">
          <BookingForm initialRoom={room} initialExperience={experience} />

          <aside className="flex flex-col gap-8">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
                What happens next
              </p>
              <ol className="space-y-4 text-sm leading-relaxed text-paper/70">
                <li>
                  <span className="mr-2 font-display text-gold-bright">01</span>
                  We check availability for your dates and hold the room.
                </li>
                <li>
                  <span className="mr-2 font-display text-gold-bright">02</span>
                  Our concierge emails to confirm details and answer any questions.
                </li>
                <li>
                  <span className="mr-2 font-display text-gold-bright">03</span>
                  You settle the balance on arrival — no card required to request a hold.
                </li>
              </ol>
            </div>

            <div className="border-t border-ink-line pt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
                Prefer to talk first?
              </p>
              <a
                href={SITE.phoneHref}
                className="block text-lg text-paper hover:text-gold-bright"
              >
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 block text-sm text-paper/60 hover:text-paper"
              >
                {SITE.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
