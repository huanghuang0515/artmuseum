import type { Metadata } from "next";
import { Cinzel, Marcellus, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Display face. Cinzel stands in for the licensed brand face "Qalisso".
 * To adopt the real Qalisso, swap this loader (e.g. next/font/local) and
 * update the --font-display token in globals.css to point at it.
 */
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  // Home is the bare wordmark; every other page becomes "<PAGE> — QALISSO MUSEUM".
  title: {
    default: "QALISSO MUSEUM",
    template: "%s — QALISSO MUSEUM",
  },
  description:
    "QALISSO Museum — a fine-art museum. Discover exhibitions, collections and events, plan your visit, and book admission online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${marcellus.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
