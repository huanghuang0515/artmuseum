import type { VisitContent } from "./types";

export const visit: VisitContent = {
  heroImage: "/assets/visit-building.png",
  hero: {
    heading: "CULTURE",
    body: "Weddings, birthdays, hen-dos are all back on the agenda at last — meaning we can finally slip back into look-at-me going-out pieces. Sequins and feathers are making a stealth return to shopping baskets, while the thigh-flashing mini reigns supreme. If you're after something a tad less, well, naked, look to Christopher Esber for playful reveal-and-conceal cutouts — or stay covered up but still stylish.",
  },
  hours: [
    { label: "Monday", time: "9 a.m. – 6 p.m." },
    { label: "Wednesday – Sunday", time: "9 a.m. – 6 p.m." },
    { label: "Friday (late)", time: "9 a.m. – 9:45 p.m." },
    { label: "Tuesday", time: "CLOSED", closed: true },
  ],
  admission: [
    { label: "General admission", price: "€17" },
    { label: "Tickets purchased online", price: "€17" },
    { label: "Reduced admission", price: "€13" },
    { label: "Under 18 (EU nationals)", price: "Free" },
    { label: "Under 26 (EU nationals)", price: "Free" },
  ],
  tradition: {
    heading: "Tradition",
    body: "Weddings, birthdays, hen-dos are all back on the agenda at last — meaning we can finally slip back into look-at-me going-out pieces. Sequins and feathers are making a stealth return to shopping baskets, while the thigh-flashing mini reigns supreme thanks to Prada's thigh-grazing satin number. If you're after something a tad less, well, naked, look to Christopher Esber for playful reveal-and-conceal cutouts.",
    photos: ["/assets/visit-photo1.jpg", "/assets/visit-photo2.jpg"],
    interior: "/assets/visit-interior.jpg",
  },
};
