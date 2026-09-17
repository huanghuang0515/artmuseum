import type { Metadata } from "next";
import { getContactInfo } from "@/lib/content";
import ContactView from "./ContactView";

export const metadata: Metadata = { title: "CONTACT" };

export default function ContactPage() {
  return <ContactView info={getContactInfo()} />;
}
