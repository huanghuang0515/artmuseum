"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import QRCode from "qrcode";
import StarOrnament from "@/components/StarOrnament";
import { BOOKING_STORAGE_KEY, type StoredBooking } from "../bookingStorage";
import styles from "./confirmation.module.css";

export default function ConfirmationView() {
  const [booking, setBooking] = useState<StoredBooking | null>(null);
  const [qr, setQr] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let stored: StoredBooking | null = null;
    try {
      const raw = sessionStorage.getItem(BOOKING_STORAGE_KEY);
      if (raw) stored = JSON.parse(raw) as StoredBooking;
    } catch {
      stored = null;
    }
    setBooking(stored);
    setLoaded(true);

    if (stored) {
      // A real system encodes a verifiable URL; the reference is enough here.
      QRCode.toDataURL(`QALISSO-TICKET:${stored.reference}`, {
        margin: 1,
        width: 296,
        color: { dark: "#5f2e13", light: "#ffffff" },
      })
        .then(setQr)
        .catch(() => setQr(""));
    }
  }, []);

  if (!loaded) {
    return <div className={styles.page} />;
  }

  if (!booking) {
    return (
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.star}>
            <StarOrnament size={48} color="var(--brown-ink)" />
          </div>
          <h1 className={`display-heading ${styles.heading}`}>No booking found</h1>
          <p className={styles.subtitle}>
            We couldn&apos;t find a recent booking in this session. Start a new
            reservation to book your visit.
          </p>
          <div className={styles.actions}>
            <Link href="/tickets" className={styles.btnPrimary}>
              Book tickets
            </Link>
            <Link href="/" className={styles.btnGhost}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.star}>
          <StarOrnament size={48} color="var(--brown-ink)" />
        </div>
        <h1 className={`display-heading ${styles.heading}`}>Booking confirmed</h1>
        <p className={styles.subtitle}>
          Thank you — your visit to QALISSO Museum is reserved. A confirmation
          with your e-ticket has been sent to your email.
        </p>

        <div className={styles.card}>
          <div>
            <div className={styles.refLabel}>Booking reference</div>
            <div className={styles.ref}>{booking.reference}</div>
            <div className={styles.metaGrid}>
              <div>
                <div className={styles.metaLabel}>Date</div>
                <div className={styles.metaValue}>{booking.date || "—"}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Time</div>
                <div className={styles.metaValue}>{booking.time || "—"}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Tickets</div>
                <div className={styles.metaValue}>{booking.count}</div>
              </div>
              <div>
                <div className={styles.metaLabel}>Total paid</div>
                <div className={styles.metaValue}>€{booking.total}</div>
              </div>
            </div>
          </div>

          <div className={styles.qrWrap}>
            {qr ? (
              // Generated client-side; not an <img> from a remote host.
              // eslint-disable-next-line @next/next/no-img-element
              <img className={styles.qr} src={qr} alt={`QR code for booking ${booking.reference}`} />
            ) : (
              <div className={styles.qr} aria-hidden="true" />
            )}
            <span className={styles.qrCaption}>Scan at the entrance</span>
          </div>
        </div>

        <div className={styles.lines}>
          {booking.lines.map((l, i) => (
            <div key={i} className={styles.line}>
              <span>
                {l.name} <span className={styles.lineQty}>× {l.qty}</span>
              </span>
              <span>€{l.lineTotal}</span>
            </div>
          ))}
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total ({booking.count})</span>
            <span className={styles.totalAmount}>€{booking.total}</span>
          </div>
        </div>

        <p className={styles.note}>
          Free cancellation up to 24 hours before your visit. Present your
          e-ticket (or this QR code) at the entrance.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            Back to Home
          </Link>
          <Link href="/events" className={styles.btnGhost}>
            Explore events
          </Link>
        </div>
      </div>
    </div>
  );
}
