"use client";

import type { MouseEvent } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/layout/SmoothScroll";

const HeroParticles = dynamic(
  () => import("@/components/three/HeroParticles"),
  { ssr: false, loading: () => null }
);

const HERO_IMAGE = "/images/hero-twilight-coast.jpg";

export default function Hero() {
  const lenis = useLenis();

  const scrollTo = (href: string) => (e: MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(href, { offset: -90, duration: 1.6 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="vignette relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Coastline at twilight, Adriatic sea"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-80">
        <HeroParticles />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pb-28 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mb-6 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-gold-bright"
        >
          <span className="h-px w-10 bg-gold-bright" />
          On the Adriatic
        </motion.p>

        <RevealText
          as="h1"
          text="Hotel Adriano"
          delay={2.05}
          inView={false}
          className="font-display text-[15vw] leading-[0.9] tracking-tight text-paper sm:text-[10vw] lg:text-[7.4vw]"
        />
        <RevealText
          as="p"
          text="Adriatic Dolce Vita"
          delay={2.45}
          inView={false}
          className="mt-3 font-display text-xl italic text-gold-bright sm:text-2xl lg:text-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.75 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <MagneticButton>
            <Link
              href="/book"
              data-cursor="Book"
              className="inline-block rounded-full bg-gold px-8 py-3.5 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright"
            >
              Reserve Your Stay
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/rooms"
              data-cursor="View"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-8 py-3.5 font-sans text-[13px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper"
            >
              Explore Suites
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="Scroll"
        onClick={scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.1 }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 text-paper/70 lg:right-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
