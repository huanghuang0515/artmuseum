import type { Metadata } from "next";
import ConfirmationView from "./ConfirmationView";

export const metadata: Metadata = { title: "BOOKING CONFIRMED" };

export default function ConfirmationPage() {
  return <ConfirmationView />;
}
