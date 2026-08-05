import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import JournalCard from "@/components/ui/JournalCard";
import { JOURNAL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal — Hotel Fellini Rimini",
  description:
    "Notes from the concierge desk — Rimini's old town, our stretch of the Adriatic, and the story behind the Fellini room names.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="From the Concierge"
        title="Notes from the coast"
        description="A few things worth knowing before you arrive — and a few we just wanted to write down."
        image="/images/gallery-coast-day.jpg"
      />
      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-px overflow-hidden bg-ink-line sm:grid-cols-3">
            {JOURNAL.map((post) => (
              <JournalCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
