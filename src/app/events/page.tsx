import type { Metadata } from "next";
import { getEvents } from "@/lib/content";
import EventsView from "./EventsView";

export const metadata: Metadata = { title: "EVENTS" };

export default function EventsPage() {
  return <EventsView events={getEvents()} />;
}
