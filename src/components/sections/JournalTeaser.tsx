import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import JournalCard from "@/components/ui/JournalCard";
import { JOURNAL } from "@/lib/data";

export default function JournalTeaser() {
  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="From the Concierge"
            title="Notes from the coast"
            light
          />
          <Link
            href="/journal"
            data-cursor="View"
            className="text-xs uppercase tracking-[0.2em] text-gold-bright hover:text-paper"
          >
            Read the journal →
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden bg-ink-line sm:grid-cols-3">
          {JOURNAL.map((post) => (
            <JournalCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
