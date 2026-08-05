"use client";

import { useActionState } from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";
import { submitContact } from "@/lib/actions";
import { initialFormState } from "@/lib/form-state";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialFormState
  );

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full border border-gold text-gold">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-6 font-display text-2xl text-paper">
          Message sent
        </p>
        <p className="mt-3 max-w-xs text-sm text-paper/60">{state.message}</p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/40">
          Full Name *
        </span>
        <input
          type="text"
          name="name"
          required
          className={cn(
            "w-full border-b bg-transparent pb-2 text-sm text-paper outline-none transition-colors [color-scheme:dark] focus:border-gold",
            state.fieldErrors?.name ? "border-terracotta" : "border-ink-line"
          )}
        />
        {state.fieldErrors?.name && (
          <p className="mt-2 text-xs text-terracotta">{state.fieldErrors.name}</p>
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/40">
          Email *
        </span>
        <input
          type="email"
          name="email"
          required
          className={cn(
            "w-full border-b bg-transparent pb-2 text-sm text-paper outline-none transition-colors [color-scheme:dark] focus:border-gold",
            state.fieldErrors?.email ? "border-terracotta" : "border-ink-line"
          )}
        />
        {state.fieldErrors?.email && (
          <p className="mt-2 text-xs text-terracotta">{state.fieldErrors.email}</p>
        )}
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/40">
          Message *
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="How can we help?"
          className={cn(
            "w-full resize-none border-b bg-transparent pb-2 text-sm text-paper outline-none transition-colors [color-scheme:dark] focus:border-gold placeholder:text-paper/30",
            state.fieldErrors?.message ? "border-terracotta" : "border-ink-line"
          )}
        />
        {state.fieldErrors?.message && (
          <p className="mt-2 text-xs text-terracotta">{state.fieldErrors.message}</p>
        )}
      </label>

      {state.status === "error" && !state.fieldErrors && (
        <p className="text-sm text-terracotta">{state.message}</p>
      )}

      <MagneticButton className="mt-2 self-start">
        <button
          type="submit"
          disabled={pending}
          data-cursor="Send"
          className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3.5 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send Enquiry"}
        </button>
      </MagneticButton>
    </form>
  );
}
