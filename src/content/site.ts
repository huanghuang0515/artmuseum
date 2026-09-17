import type { ContactInfo, SiteChrome } from "./types";

export const contactInfo: ContactInfo = {
  name: "QALISSO MUSEUM",
  phone: "+33 1 44 23 08 55",
  email: "qalissomuseum@qaliss.com",
  addressLines: ["102 terrasse Boieldieu,", "Tour W – 12ème étage,", "92800 Puteaux"],
  mapImage: "/assets/footer-map.jpg",
};

/**
 * Nav order matches the prototype: HOME VISIT EVENTS COLLECTIONS
 * EXHIBITIONS CONTACT. `href` is the real route (Home is "/").
 */
export const siteChrome: SiteChrome = {
  navLinks: [
    { label: "HOME", href: "/" },
    { label: "VISIT", href: "/visit" },
    { label: "EVENTS", href: "/events" },
    { label: "COLLECTIONS", href: "/collections" },
    { label: "EXHIBITIONS", href: "/exhibitions" },
    { label: "CONTACT", href: "/contact" },
  ],
  legalLinks: ["Legal Notice", "Privacy Policy", "Cookies", "Credits", "Copyright"],
  socials: [
    { label: "f", title: "Facebook" },
    { label: "◎", title: "Instagram" },
    { label: "𝕏", title: "Twitter" },
    { label: "▶", title: "YouTube" },
  ],
};
