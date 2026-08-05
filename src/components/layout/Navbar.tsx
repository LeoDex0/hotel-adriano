"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-paper/90 py-3 shadow-[0_1px_0_0_rgba(13,11,9,0.08)] backdrop-blur-md"
            : "bg-transparent py-6"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            data-cursor="Home"
            className={cn(
              "font-display text-lg tracking-[0.15em] transition-colors",
              solid ? "text-ink" : "text-paper"
            )}
          >
            HOTEL FELLINI
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="View"
                  className={cn(
                    "font-sans text-[13px] uppercase tracking-[0.14em] transition-colors hover:text-gold",
                    solid ? "text-ink/80" : "text-paper/90",
                    active && "text-gold"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              data-cursor="Call"
              className={cn(
                "hidden items-center gap-2 font-sans text-[13px] tracking-wide lg:flex",
                solid ? "text-ink/80" : "text-paper/90"
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.phoneDisplay}
            </a>
            <MagneticButton className="hidden sm:inline-block">
              <Link
                href="/book"
                data-cursor="Book"
                className="inline-block rounded-full border border-gold bg-gold px-6 py-2.5 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-transparent hover:text-gold"
              >
                Reserve
              </Link>
            </MagneticButton>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full border transition-colors md:hidden",
                solid
                  ? "border-ink/20 text-ink"
                  : "border-paper/40 text-paper"
              )}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-ink px-8 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="border-b border-ink-line py-4"
              >
                <Link
                  href={link.href}
                  className="font-display text-3xl text-paper"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + NAV_LINKS.length * 0.06 }}
              className="pt-6"
            >
              <Link href="/book" className="font-display text-2xl text-gold">
                Reserve Your Stay
              </Link>
              <a
                href={SITE.phoneHref}
                className="mt-4 block font-sans text-lg tracking-wide text-paper/60"
              >
                {SITE.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
