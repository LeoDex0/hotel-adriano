"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Gallery({
  limit,
  heading = true,
}: {
  limit?: number;
  heading?: boolean;
}) {
  const items = limit ? GALLERY.slice(0, limit) : GALLERY;
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % items.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {heading && (
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Gallery"
              title="The coast, in frames"
              description="A few stills from the hotel, and from the shoreline beyond it."
            />
            {limit && (
              <Link
                href="/gallery"
                data-cursor="View"
                className="text-xs uppercase tracking-[0.2em] text-gold hover:text-ink"
              >
                View full gallery →
              </Link>
            )}
          </div>
        )}

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[10rem]">
          {items.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              data-cursor="Open"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={cn(
                "group relative block overflow-hidden bg-ink-soft",
                img.span === "wide" && "sm:col-span-2 md:row-span-2",
                img.span === "tall" ? "md:row-span-3" : "md:row-span-2",
                !img.span && "aspect-[4/3] md:aspect-auto"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
              <span className="absolute bottom-3 left-3 translate-y-2 text-xs uppercase tracking-wide text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
            onClick={close}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm uppercase tracking-[0.2em] text-paper/70">
              {items[active].caption}
            </p>

            <button
              type="button"
              aria-label="Close"
              onClick={close}
              data-cursor="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:border-paper sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
