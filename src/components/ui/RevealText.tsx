"use client";

import { createElement, type ElementType, type ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const childVariants: Variants = {
  hidden: { y: "112%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RevealText({
  text,
  as: Tag = "span",
  className,
  wordClassName,
  delay = 0,
  by = "word",
  inView = true,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number;
  by?: "word" | "char";
  /** Set false for above-the-fold text that should animate on mount rather than on scroll-into-view. */
  inView?: boolean;
}) {
  const parts = by === "char" ? Array.from(text) : text.split(" ");
  const step = by === "char" ? 0.022 : 0.07;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: step },
    },
  };

  // A single trigger (one IntersectionObserver) drives every word via variant
  // propagation — giving each word its own whileInView was unreliable when
  // many observers fired on the same frame.
  const triggerProps = inView
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-8% 0px" },
      }
    : { initial: "hidden", animate: "visible" };

  const nodes: ReactNode[] = parts.flatMap((part, i) => {
    const word = (
      <span
        key={`word-${i}`}
        className={cn(
          "-mb-[0.12em] inline-block overflow-hidden pb-[0.12em]",
          wordClassName
        )}
      >
        <motion.span className="inline-block" variants={childVariants}>
          {part}
        </motion.span>
      </span>
    );

    // The space must live outside the overflow-hidden/inline-block mask,
    // otherwise browsers trim it as trailing whitespace and words collide.
    if (by === "word" && i < parts.length - 1) {
      return [word, " "];
    }
    return [word];
  });

  return createElement(
    Tag,
    { className: cn("block", className) },
    <motion.span variants={containerVariants} {...triggerProps}>
      {nodes}
    </motion.span>
  );
}
