"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

const ABOUT_IMAGE = "/images/about-adriatic-coast.jpg";

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <motion.div
          initial={{ clipPath: "inset(0% 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0% 0)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden lg:order-1"
        >
          <Image
            src={ABOUT_IMAGE}
            alt="Panoramic view of the Adriatic coastline near Rimini"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-ink/10" />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="The Hotel"
            title="Somewhere between memory and invention"
            description="Federico Fellini once said Rimini lived between memory and invention — Hotel Adriano borrows that spirit. A boutique address on the Adriatic shoreline where mid-century glamour meets unhurried Romagna hospitality: forty-two rooms and suites, a rooftop pool, and a private stretch of beach, ninety metres from your pillow."
          />

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="font-display text-4xl text-ink lg:text-5xl"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
