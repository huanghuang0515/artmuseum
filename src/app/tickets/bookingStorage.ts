import type { BookingResult } from "@/lib/booking";

/**
 * The Tickets wizard stashes the confirmed booking in sessionStorage under
 * this key so the confirmation route can render it. In production the
 * confirmation page would instead load the order by reference from the
 * ticketing backend (e.g. /tickets/confirmation/[reference]).
 */
export const BOOKING_STORAGE_KEY = "qm_booking";

export interface StoredBookingLine {
  name: string;
  qty: number;
  lineTotal: number;
}

export interface StoredBooking extends BookingResult {
  lines: StoredBookingLine[];
}
