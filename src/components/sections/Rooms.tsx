"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { ROOMS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Rooms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const distance = track.scrollWidth - section.clientWidth;
        if (distance <= 0) return;

        const tween = gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-28 lg:h-screen lg:py-0"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-6">
          <SectionHeading
            eyebrow="Rooms & Suites"
            title="Three rooms, three films"
            light
          />
          <div className="flex max-w-xs flex-col items-start gap-4">
            <p className="text-sm leading-relaxed text-paper/50">
              Each room borrows its name, and its mood, from a different
              Fellini picture.
            </p>
            <Link
              href="/rooms"
              data-cursor="View"
              className="text-xs uppercase tracking-[0.2em] text-gold-bright hover:text-paper"
            >
              View all suites →
            </Link>
          </div>
        </div>

        <div ref={trackRef} className="flex flex-col gap-8 lg:flex-row">
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="group relative flex w-full shrink-0 flex-col overflow-hidden bg-ink-soft lg:w-[42vw]"
            >
              <Link
                href={`/rooms/${room.id}`}
                data-cursor="View"
                className="relative aspect-[4/2.9] w-full overflow-hidden lg:aspect-[4/3.1]"
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-paper/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-paper/80 backdrop-blur-sm">
                  {room.film}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <Link href={`/rooms/${room.id}`}>
                  <h3 className="font-display text-2xl text-paper transition-colors group-hover:text-gold-bright">
                    {room.name}
                  </h3>
                </Link>
                <p className="mt-1 font-display italic text-gold-bright">
                  {room.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/60">
                  {room.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ink-line pt-4 text-xs uppercase tracking-wide text-paper/50">
                  <span>{room.size} m²</span>
                  <span>{room.bed}</span>
                  <span>{room.view}</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="font-display text-2xl text-paper">
                    &euro;{room.price}
                    <span className="text-sm text-paper/50"> / night</span>
                  </p>
                  <MagneticButton>
                    <Link
                      href={`/book?room=${room.id}`}
                      data-cursor="Book"
                      className="inline-block rounded-full border border-gold px-5 py-2 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
                    >
                      Reserve
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
