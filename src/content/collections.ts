import type { Artwork } from "./types";

/**
 * The prototype hard-codes 6 rows but paginates to "1 / 35". In production
 * these rows and the page count come from a collections API; here they are
 * the sample page the design shipped with.
 */
export const collections: Artwork[] = [
  {
    id: 1,
    title: "Nature morte aux fleurs et fruits",
    author: "Anonyme",
    date: "Vers 1870",
    inv: "RF MO PHO 2017 8 1",
    img: "/assets/col1.jpg",
    medium: "Huile sur toile",
  },
  {
    id: 2,
    title: "La Liseuse",
    author: "Charles Nègre (1820 – 1880)",
    date: "Avant 1852",
    inv: "RF MO PHO 2017 8 2",
    img: "/assets/col2.jpg",
    medium: "Épreuve sur papier albuminé",
  },
  {
    id: 3,
    title: "Portrait de jeune homme au verre de vin",
    author: "Charles Nègre (1820 – 1880)",
    date: "Avant 1852",
    inv: "RF MO PHO 2017 8 3",
    img: "/assets/exh-card1.jpg",
    medium: "Épreuve sur papier albuminé",
  },
  {
    id: 4,
    title: "Bouquet de roses et tulipes",
    author: "Anonyme",
    date: "Vers 1870",
    inv: "RF MO PHO 2017 8 4",
    img: "/assets/home-round.jpg",
    medium: "Épreuve sur papier albuminé",
  },
  {
    id: 5,
    title: "Paysage de montagne",
    author: "Hermann-Paul (1864 – 1940)",
    date: "Entre 1897 et 1898",
    inv: "RF MO PHO 2017 8 5",
    img: "/assets/exhibitions-detail.jpg",
    medium: "Huile sur toile",
  },
  {
    id: 6,
    title: "Vue de la baie de Naples",
    author: "Alphonse Gosset (1835 – 1914)",
    date: "Entre 1902 et 1908",
    inv: "RF MO PHO 2017 8 6",
    img: "/assets/story1.jpg",
    medium: "Aquarelle sur papier",
  },
];

/** Total pages the collection paginates to (README: "paginates to 35 pages"). */
export const collectionsPageCount = 35;
