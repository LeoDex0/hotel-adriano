"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import RevealText from "./RevealText";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "mb-4 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em]",
          align === "center" && "justify-center",
          light ? "text-gold-bright" : "text-gold"
        )}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </motion.p>
      <RevealText
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl",
          light ? "text-paper" : "text-ink"
        )}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            light ? "text-paper/75" : "text-ink/70"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
