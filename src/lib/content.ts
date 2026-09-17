/**
 * Data-access seam.
 *
 * Components import ONLY from here, never from `@/content/*` directly. Today
 * these functions return the local typed modules synchronously. When a CMS or
 * API is introduced, reimplement each function to fetch from it (they can
 * become `async` and callers already treat pages as server components) — no
 * component or page needs to change.
 */

import { home } from "@/content/home";
import { exhibitions } from "@/content/exhibitions";
import { collections, collectionsPageCount } from "@/content/collections";
import { events } from "@/content/events";
import { visit } from "@/content/visit";
import { ticketTypes, timeSlots } from "@/content/tickets";
import { contactInfo, siteChrome } from "@/content/site";
import type {
  Artwork,
  ContactInfo,
  EventItem,
  ExhibitionsContent,
  HomeContent,
  SiteChrome,
  TicketType,
  VisitContent,
} from "@/content/types";

export function getHome(): HomeContent {
  return home;
}

export function getExhibitions(): ExhibitionsContent {
  return exhibitions;
}

export function getCollections(): { artworks: Artwork[]; pageCount: number } {
  return { artworks: collections, pageCount: collectionsPageCount };
}

export function getEvents(): EventItem[] {
  return events;
}

export function getVisit(): VisitContent {
  return visit;
}

export function getTicketTypes(): TicketType[] {
  return ticketTypes;
}

export function getTimeSlots(): string[] {
  return timeSlots;
}

export function getContactInfo(): ContactInfo {
  return contactInfo;
}

export function getSiteChrome(): SiteChrome {
  return siteChrome;
}
