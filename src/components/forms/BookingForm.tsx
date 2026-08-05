"use client";

import { useActionState, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "@/components/ui/MagneticButton";
import { submitBooking } from "@/lib/actions";
import { initialFormState } from "@/lib/form-state";
import { EXPERIENCES, ROOMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function BookingForm({
  initialRoom,
  initialExperience,
}: {
  initialRoom?: string;
  initialExperience?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitBooking,
    initialFormState
  );
  const [room, setRoom] = useState(
    ROOMS.some((r) => r.id === initialRoom) ? initialRoom! : ROOMS[0].id
  );
  const [checkin, setCheckin] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[420px] flex-col items-center justify-center border border-ink-line bg-ink-soft p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full border border-gold text-gold">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-6 font-display text-2xl text-paper">
          Request received
        </p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
          {state.message}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-8 border border-ink-line bg-ink-soft p-6 sm:p-10"
    >
      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-paper/40">
          Choose a room *
        </p>
        <div
          role="radiogroup"
          aria-label="Room"
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {ROOMS.map((r) => (
            <div key={r.id}>
              <input
                type="radio"
                name="room"
                value={r.id}
                id={`room-${r.id}`}
                checked={room === r.id}
                onChange={() => setRoom(r.id)}
                className="peer sr-only"
              />
              <label
                htmlFor={`room-${r.id}`}
                className={cn(
                  "block cursor-pointer border px-4 py-3 text-sm transition-colors",
                  room === r.id
                    ? "border-gold bg-gold/10 text-paper"
                    : "border-ink-line text-paper/60 hover:border-paper/40"
                )}
              >
                <span className="block font-display text-base">{r.name}</span>
                <span className="mt-1 block text-xs text-paper/50">
                  &euro;{r.price} / night
                </span>
              </label>
            </div>
          ))}
        </div>
        {state.fieldErrors?.room && (
          <p className="mt-2 text-xs text-terracotta">{state.fieldErrors.room}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          required
          error={state.fieldErrors?.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={state.fieldErrors?.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" error={state.fieldErrors?.phone} />
        <Field
          label="Guests"
          name="guests"
          type="number"
          defaultValue="2"
          min={1}
          max={6}
          required
          error={state.fieldErrors?.guests}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Check-in"
          name="checkin"
          type="date"
          min={today}
          required
          error={state.fieldErrors?.checkin}
          onChange={(e) => setCheckin(e.target.value)}
        />
        <Field
          label="Check-out"
          name="checkout"
          type="date"
          min={checkin || today}
          required
          error={state.fieldErrors?.checkout}
        />
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/40">
          Experience (optional)
        </span>
        <select
          name="experience"
          defaultValue={initialExperience ?? ""}
          className="w-full border-b border-ink-line bg-transparent pb-2 text-sm text-paper outline-none transition-colors [color-scheme:dark] focus:border-gold"
        >
          <option value="">None — just the room</option>
          {EXPERIENCES.map((exp) => (
            <option key={exp.id} value={exp.id}>
              {exp.title}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/40">
          Notes
        </span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Anything our concierge should know — occasion, arrival time, preferences."
          className="w-full resize-none border-b border-ink-line bg-transparent pb-2 text-sm text-paper outline-none transition-colors [color-scheme:dark] focus:border-gold placeholder:text-paper/30"
        />
        {state.fieldErrors?.notes && (
          <p className="mt-2 text-xs text-terracotta">{state.fieldErrors.notes}</p>
        )}
      </label>

      {state.status === "error" && (
        <p className="text-sm text-terracotta">{state.message}</p>
      )}

      <MagneticButton className="self-start">
        <button
          type="submit"
          disabled={pending}
          data-cursor="Send"
          className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3.5 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-bright disabled:opacity-60"
        >
          {pending ? "Sending…" : "Request Reservation"}
        </button>
      </MagneticButton>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  defaultValue,
  min,
  max,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
  min?: string | number;
  max?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-paper/40">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        min={min}
        max={max}
        onChange={onChange}
        className={cn(
          "w-full border-b bg-transparent pb-2 text-sm text-paper outline-none transition-colors [color-scheme:dark] focus:border-gold",
          error ? "border-terracotta" : "border-ink-line"
        )}
      />
      {error && <p className="mt-2 text-xs text-terracotta">{error}</p>}
    </label>
  );
}
