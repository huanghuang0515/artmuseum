import type { Metadata } from "next";
import { getTicketTypes, getTimeSlots } from "@/lib/content";
import TicketsView from "./TicketsView";

export const metadata: Metadata = { title: "TICKETS" };

export default function TicketsPage() {
  return <TicketsView ticketTypes={getTicketTypes()} timeSlots={getTimeSlots()} />;
}
