import Image from "next/image";
import Link from "next/link";
import {
  Bike,
  Clapperboard,
  Sparkles,
  Umbrella,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import type { Experience } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Umbrella,
  Waves,
  Clapperboard,
  Sparkles,
  UtensilsCrossed,
  Bike,
};

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const Icon = ICONS[experience.icon] ?? Sparkles;

  return (
    <article className="group flex flex-col overflow-hidden bg-ink-soft">
      <div className="relative aspect-[4/2.6] w-full overflow-hidden">
        {experience.image ? (
          <>
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/25" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink via-ink-soft to-ink">
            <Icon className="h-10 w-10 text-gold" strokeWidth={1.25} />
          </div>
        )}
        <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-paper/30 text-paper backdrop-blur-sm">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-paper">
          {experience.title}
        </h3>
        <p className="mt-1 font-display italic text-gold-bright">
          {experience.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">
          {experience.description}
        </p>
        <p className="mt-4 text-xs uppercase tracking-wide text-paper/40">
          {experience.duration}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-ink-line pt-4">
          <p className="font-display text-xl text-paper">
            &euro;{experience.price}
            <span className="text-xs text-paper/50"> {experience.priceUnit}</span>
          </p>
          <Link
            href={`/book?experience=${experience.id}`}
            data-cursor="Book"
            className="inline-block rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Reserve
          </Link>
        </div>
      </div>
    </article>
  );
}
