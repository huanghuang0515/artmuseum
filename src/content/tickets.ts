import type { TicketType } from "./types";

export const ticketTypes: TicketType[] = [
  {
    id: "general",
    name: "General Admission",
    price: 17,
    desc: "Full access to permanent collections and current exhibitions.",
    popular: false,
  },
  {
    id: "reduced",
    name: "Reduced Admission",
    price: 13,
    desc: "Students, seniors 65+, and groups of 10 or more.",
    popular: false,
  },
  {
    id: "family",
    name: "Family Pass",
    price: 38,
    desc: "Two adults and up to three children under 18.",
    popular: true,
  },
  {
    id: "night",
    name: "Night Opening",
    price: 20,
    desc: "Friday evenings — galleries open until 9:45 p.m.",
    popular: false,
  },
  {
    id: "guided",
    name: "Guided Tour",
    price: 28,
    desc: "Includes admission + 90-minute expert-led tour.",
    popular: false,
  },
  {
    id: "youth",
    name: "Under 26 (EU)",
    price: 0,
    desc: "Complimentary admission. ID required at entry.",
    popular: false,
  },
];

/** Bookable entry times (README step 2). */
export const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:30",
  "14:00",
  "15:30",
  "17:00",
  "19:30",
];
