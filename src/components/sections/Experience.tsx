"use client";

import { motion } from "motion/react";
import {
  Bike,
  Clapperboard,
  Sparkles,
  Umbrella,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { AMENITIES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Umbrella,
  Waves,
  Clapperboard,
  Sparkles,
  UtensilsCrossed,
  Bike,
};

export default function Experience() {
  return (
    <section id="experience" className="relative bg-paper-dim py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Experience"
          title="Details worth staying for"
          description="Everything at Hotel Adriano is built around a slower kind of luxury — the kind you notice on day two, not day one."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((amenity, i) => {
            const Icon = ICONS[amenity.icon] ?? Sparkles;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="group relative flex flex-col gap-4 bg-paper-dim p-9 transition-colors duration-300 hover:bg-paper"
              >
                <Icon
                  className="h-7 w-7 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-xl text-ink">
                  {amenity.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/60">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
