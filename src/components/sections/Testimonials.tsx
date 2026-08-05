import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS, type Testimonial } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="mx-4 flex w-[340px] shrink-0 flex-col gap-5 border border-ink-line bg-ink-soft p-7 sm:w-[380px]">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 font-display text-sm text-gold">
          {initials(t.name)}
        </div>
        <div>
          <p className="text-sm text-paper">{t.name}</p>
          <p className="text-xs text-paper/50">{t.location}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-gold text-gold" />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-paper/70">
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-ink py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="Word travels along the coast"
          light
          align="center"
          className="mx-auto"
        />
      </div>

      <div className="mask-fade-x mt-16 flex">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
