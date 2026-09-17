import type { EventItem } from "./types";

export const events: EventItem[] = [
  {
    category: "GUIDED TOUR",
    title: "My First Qalisso",
    schedule: "Every Sunday at 11 a.m.",
    audience: "Family",
    age: "4+",
    night: false,
    desc: "Enjoy a child- and family-oriented exploration of the Qalisso and learn the secrets behind its most famous artworks, including the Venus de Milo, the Mona Lisa, Egyptian antiquities, and major French paintings.",
  },
  {
    category: "GUIDED TOUR",
    title: "Welcome to the Qalisso",
    schedule: "Monday, Friday, Saturday and Sunday at 11 a.m.",
    audience: "Adult",
    age: "16+",
    night: false,
    desc: "Enjoy a child- and family-oriented exploration of the Qalisso and learn the secrets behind its most famous artworks, including the Venus de Milo, the Mona Lisa, Egyptian antiquities.",
  },
  {
    category: "NIGHT VISIT",
    title: "Another Qalisso",
    schedule: "Every Friday and Saturday at 10:30 p.m.",
    audience: "Adult",
    age: "18+",
    night: true,
    desc: "Enjoy a visit away from the crowds and discover the lesser-known treasures and stunning settings of another Qalisso.",
  },
];
