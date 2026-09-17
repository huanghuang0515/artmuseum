/**
 * Booking seam.
 *
 * The prototype's step 3 fired a browser `alert()`. This module is the stub
 * that stands in for the real ticketing backend the README calls for:
 *
 *   - `checkSlotAvailability` → live per-slot capacity check
 *   - `processPayment`        → Stripe (or equivalent) payment intent
 *   - `createBooking`         → persist the order, return a real reference
 *
 * Each function is intentionally client-side and deterministic-ish so the
 * flow runs end-to-end today. Replace the bodies with real API/server-action
 * calls; the return shapes are the contract the UI already depends on.
 */

import type { TicketType } from "@/content/types";

export interface CartLine {
  type: TicketType;
  qty: number;
}

export interface BookingRequest {
  lines: CartLine[];
  date: string;
  time: string;
  total: number;
  customer: { name: string; email: string; phone?: string };
}

export interface BookingResult {
  reference: string;
  date: string;
  time: string;
  total: number;
  count: number;
}

/**
 * Generate a human-readable booking reference, e.g. "QM-7F3A-2K9".
 * Production would return the reference minted by the ticketing backend.
 */
export function generateBookingReference(): string {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no ambiguous chars
  const pick = (n: number) =>
    Array.from({ length: n }, () =>
      alphabet[Math.floor(Math.random() * alphabet.length)],
    ).join("");
  return `QM-${pick(4)}-${pick(3)}`;
}

/**
 * STUB — always reports the slot as available. Replace with a real capacity
 * check against the ticketing backend for the given date + time.
 */
export async function checkSlotAvailability(
  _date: string,
  _time: string,
  _seats: number,
): Promise<{ available: boolean; remaining?: number }> {
  return { available: true };
}

/**
 * STUB — pretends the payment succeeded. Replace with a Stripe PaymentIntent
 * (confirmed server-side); never trust a client-only "paid" flag in prod.
 */
export async function processPayment(
  _amount: number,
): Promise<{ ok: true } | { ok: false; error: string }> {
  return { ok: true };
}

/**
 * Orchestrates the mock booking: (stub) availability → (stub) payment →
 * reference. Returns everything the confirmation page needs to render.
 */
export async function createBooking(req: BookingRequest): Promise<BookingResult> {
  const count = req.lines.reduce((s, l) => s + l.qty, 0);
  await checkSlotAvailability(req.date, req.time, count);
  await processPayment(req.total);
  return {
    reference: generateBookingReference(),
    date: req.date,
    time: req.time,
    total: req.total,
    count,
  };
}
