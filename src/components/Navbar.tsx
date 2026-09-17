"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSiteChrome } from "@/lib/content";
import styles from "./Navbar.module.css";

const { navLinks } = getSiteChrome();

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const ticketsActive = pathname.startsWith("/tickets");

  return (
    <nav
      className={`${styles.nav} qm-nav-scrim${scrolled ? " " + styles.scrolled + " qm-nav-scrolled" : ""}`}
    >
      <Link href="/" className={styles.logo} aria-label="QALISSO Museum, home">
        <span className={styles.logoLine1}>QALISSO ✦</span>
        <span className={styles.logoLine2}>MUSEUM</span>
      </Link>

      <div
        className={`${styles.links}${menuOpen ? " " + styles.open : ""}`}
        id="primary-nav"
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${styles.link}${isActive(l.href) ? " " + styles.active : ""}`}
            aria-current={isActive(l.href) ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
        {/* Tickets inside the drawer on mobile */}
        <Link
          href="/tickets"
          className={`${styles.tickets} ${styles.mobileTickets}${ticketsActive ? " " + styles.active : ""}`}
        >
          <span className={styles.ticketGlyph}>🎟</span>
          Tickets
        </Link>
      </div>

      {/* Tickets button (desktop, right) */}
      <Link
        href="/tickets"
        className={`${styles.tickets} ${styles.ticketsDesktop}${ticketsActive ? " " + styles.active : ""}`}
      >
        <span className={styles.ticketGlyph}>🎟</span>
        Tickets
      </Link>

      <button
        type="button"
        className={styles.burger}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`${styles.backdrop}${menuOpen ? " " + styles.show : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </nav>
  );
}
