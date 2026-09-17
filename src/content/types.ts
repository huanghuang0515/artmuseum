/**
 * Content model for the QALISSO Museum site.
 *
 * These types describe the shape of the site's editorial + commerce data.
 * Today the data lives in the typed modules alongside this file; in
 * production the same shapes would be returned by a CMS or API. Keeping the
 * shapes here (and reading them only through `@/lib/content`) means the
 * source can be swapped without touching any component.
 */

export interface StoryCard {
  title: string;
  img: string;
  desc: string;
}

export interface HeroCopy {
  /** Bold lede line under the display headings. */
  lede: string;
  /** Light long-form body paragraph. */
  body: string;
}

export interface HomeContent {
  hero: HeroCopy;
  heroImage: string;
  culture: { heading: string; body: string };
  cultureImage: string;
  stories: StoryCard[];
  collectionImages: string[];
}

export interface ExhibitionCard {
  title: string;
  sub: string;
  date: string;
  img: string;
  current: boolean;
}

export interface ExhibitionDetail {
  title: string;
  date: string;
  img: string;
  desc: string;
}

export interface ExhibitionsContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    date: string;
    img: string;
  };
  cards: ExhibitionCard[];
  detailLabel: string;
  details: ExhibitionDetail[];
}

export interface Artwork {
  id: number;
  title: string;
  author: string;
  date: string;
  inv: string;
  img: string;
  medium: string;
}

export interface EventItem {
  category: string;
  title: string;
  schedule: string;
  audience: string;
  age: string;
  night: boolean;
  desc: string;
}

export interface HoursRow {
  label: string;
  time: string;
  closed?: boolean;
}

export interface AdmissionRow {
  label: string;
  price: string;
}

export interface VisitContent {
  heroImage: string;
  hero: { heading: string; body: string };
  hours: HoursRow[];
  admission: AdmissionRow[];
  tradition: {
    heading: string;
    body: string;
    photos: [string, string];
    interior: string;
  };
}

export interface TicketType {
  id: string;
  name: string;
  /** Price in EUR. 0 renders as "Free". */
  price: number;
  desc: string;
  popular: boolean;
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  addressLines: string[];
  mapImage: string;
}

export interface SiteChrome {
  navLinks: { label: string; href: string }[];
  legalLinks: string[];
  socials: { label: string; title: string }[];
}
