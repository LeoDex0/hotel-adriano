"use server";

import { z } from "zod";
import { ROOMS } from "./data";
import type { FormState } from "./form-state";

const roomIds = ROOMS.map((r) => r.id);

function fieldErrorsFrom(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

const bookingSchema = z
  .object({
    name: z.string().min(2, "Please enter your full name."),
    email: z.email("Enter a valid email address."),
    phone: z.string().optional(),
    room: z.string().refine((v) => roomIds.includes(v), {
      message: "Choose a room.",
    }),
    checkin: z.string().min(1, "Choose a check-in date."),
    checkout: z.string().min(1, "Choose a check-out date."),
    guests: z.coerce
      .number({ error: "Enter a number of guests." })
      .int()
      .min(1, "At least 1 guest.")
      .max(6, "For 6 or more guests, please contact us directly."),
    experience: z.string().optional(),
    notes: z.string().max(600, "Keep notes under 600 characters.").optional(),
  })
  .refine((data) => new Date(data.checkin) < new Date(data.checkout), {
    message: "Check-out must be after check-in.",
    path: ["checkout"],
  });

export async function submitBooking(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    room: formData.get("room"),
    checkin: formData.get("checkin"),
    checkout: formData.get("checkout"),
    guests: formData.get("guests"),
    experience: formData.get("experience") || undefined,
    notes: formData.get("notes") || undefined,
  };

  const result = bookingSchema.safeParse(raw);

  if (!result.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: fieldErrorsFrom(result.error),
    };
  }

  // Concept build: no reservation system or inbox is wired up behind this.
  // A production version would create a booking record here and notify the
  // concierge team — this validated payload is exactly what that call would receive.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const room = ROOMS.find((r) => r.id === result.data.room);
  const nights = Math.max(
    1,
    Math.round(
      (new Date(result.data.checkout).getTime() -
        new Date(result.data.checkin).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );
  const firstName = result.data.name.trim().split(" ")[0];

  return {
    status: "success",
    message: `Request received, ${firstName}. Our concierge will confirm your ${nights}-night stay in the ${
      room?.name ?? "selected room"
    } by email within one working day.`,
  };
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Enter a valid email address."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: fieldErrorsFrom(result.error),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const firstName = result.data.name.trim().split(" ")[0];

  return {
    status: "success",
    message: `Thank you, ${firstName} — our concierge team replies within one working day.`,
  };
}
