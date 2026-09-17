"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import StarOrnament from "@/components/StarOrnament";
import type { TicketType } from "@/content/types";
import { createBooking } from "@/lib/booking";
import { BOOKING_STORAGE_KEY, type StoredBooking } from "./bookingStorage";
import styles from "./tickets.module.css";

const STEPS = [
  { n: 1, l: "Select tickets" },
  { n: 2, l: "Date & time" },
  { n: 3, l: "Checkout" },
];

export default function TicketsView({
  ticketTypes,
  timeSlots,
}: {
  ticketTypes: TicketType[];
  timeSlots: string[];
}) {
  const router = useRouter();

  const [selected, setSelected] = useState<Record<string, number>>({});
  const [date, setDate] = useState("2026-05-12");
  const [time, setTime] = useState("11:00");
  const [step, setStep] = useState(1);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const updateQty = (id: string, delta: number) => {
    setSelected((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      if (next[id] === 0) delete next[id];
      return next;
    });
  };

  const items = useMemo(
    () => ticketTypes.filter((t) => (selected[t.id] || 0) > 0),
    [ticketTypes, selected],
  );
  const total = items.reduce((s, t) => s + t.price * selected[t.id], 0);
  const count = items.reduce((s, t) => s + selected[t.id], 0);

  const confirm = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      // Seam: createBooking stubs availability + payment, then mints a ref.
      const result = await createBooking({
        lines: items.map((t) => ({ type: t, qty: selected[t.id] })),
        date,
        time,
        total,
        customer,
      });
      const stored: StoredBooking = {
        ...result,
        lines: items.map((t) => ({
          name: t.name,
          qty: selected[t.id],
          lineTotal: t.price * selected[t.id],
        })),
      };
      try {
        sessionStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(stored));
      } catch {
        // sessionStorage may be unavailable (private mode); the confirmation
        // page falls back gracefully.
      }
      router.push("/tickets/confirmation");
    } catch {
      setSubmitting(false);
    }
  };

  const priceLabel = (p: number) => (p === 0 ? "Free" : `€${p}`);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowRow}>
            <StarOrnament size={26} color="var(--brown-ink)" />
            <span className={styles.eyebrow}>BOOK YOUR VISIT</span>
            <StarOrnament size={26} color="var(--brown-ink)" />
          </div>
          <h1 className={`display-heading ${styles.title}`}>Tickets</h1>
          <p className={styles.intro}>
            Reserve admission to QALISSO Museum. Online tickets guarantee entry
            without queuing at the door.
          </p>
        </div>

        {/* Stepper */}
        <div className={styles.stepper}>
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ display: "flex", alignItems: "flex-start" }}>
              <div className={styles.step}>
                <div
                  className={`${styles.stepNode}${step >= s.n ? " " + styles.stepNodeActive : ""}`}
                >
                  {s.n}
                </div>
                <span
                  className={`${styles.stepLabel}${step >= s.n ? " " + styles.stepLabelActive : ""}`}
                >
                  {s.l}
                </span>
              </div>
              {i < STEPS.length - 1 && <div className={styles.stepConnector} />}
            </div>
          ))}
        </div>

        <div className={styles.layout}>
          {/* LEFT — step content */}
          <div>
            {step === 1 && (
              <div className={styles.ticketList}>
                {ticketTypes.map((t) => {
                  const qty = selected[t.id] || 0;
                  return (
                    <div
                      key={t.id}
                      className={`${styles.ticketCard}${qty > 0 ? " " + styles.ticketCardSelected : ""}`}
                    >
                      {t.popular && <div className={styles.popular}>POPULAR</div>}
                      <div>
                        <div className={styles.ticketName}>{t.name}</div>
                        <div className={styles.ticketDesc}>{t.desc}</div>
                      </div>
                      <div className={styles.ticketPrice}>{priceLabel(t.price)}</div>
                      <div className={styles.qtyStepper}>
                        <button
                          type="button"
                          className={`${styles.qtyBtn}${qty > 0 ? " " + styles.qtyBtnActive : ""}`}
                          onClick={() => updateQty(t.id, -1)}
                          aria-label={`Remove one ${t.name}`}
                          disabled={qty === 0}
                        >
                          −
                        </button>
                        <div className={styles.qtyCount} aria-live="polite">
                          {qty}
                        </div>
                        <button
                          type="button"
                          className={`${styles.qtyBtn} ${styles.qtyBtnActive}`}
                          onClick={() => updateQty(t.id, 1)}
                          aria-label={`Add one ${t.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {step === 2 && (
              <div className={styles.panel}>
                <h3 className={styles.panelHeading}>Choose your visit date</h3>
                <p className={styles.panelNote}>
                  Closed Tuesdays. Last entry 30 minutes before closing.
                </p>
                <div className={styles.dateField}>
                  <label className={styles.fieldLabel} htmlFor="visit-date">
                    DATE
                  </label>
                  <input
                    id="visit-date"
                    type="date"
                    className={styles.dateInput}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <span className={styles.fieldLabel}>TIME SLOT</span>
                <div className={styles.slots}>
                  {timeSlots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`${styles.slot}${time === s ? " " + styles.slotSelected : ""}`}
                      onClick={() => setTime(s)}
                      aria-pressed={time === s}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.panel}>
                <h3 className={styles.panelHeading}>Your details</h3>
                <input
                  className={`mu-input ${styles.detailsGroup}`}
                  placeholder="Full name"
                  aria-label="Full name"
                  value={customer.name}
                  onChange={(e) => setCustomer((c) => ({ ...c, name: e.target.value }))}
                />
                <input
                  className={`mu-input ${styles.detailsGroup}`}
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  value={customer.email}
                  onChange={(e) => setCustomer((c) => ({ ...c, email: e.target.value }))}
                />
                <input
                  className={`mu-input ${styles.detailsGroup}`}
                  placeholder="Phone (optional)"
                  aria-label="Phone (optional)"
                  value={customer.phone}
                  onChange={(e) => setCustomer((c) => ({ ...c, phone: e.target.value }))}
                />
                <div className={styles.paymentDivider}>
                  <h4 className={styles.paymentHeading}>Payment</h4>
                  {/* Seam: these fields are UI-only. Real payment would mount a
                      Stripe Payment Element here and confirm server-side. */}
                  <input
                    className={`mu-input ${styles.detailsGroup}`}
                    placeholder="Card number"
                    aria-label="Card number"
                    inputMode="numeric"
                  />
                  <div className={styles.cardPair}>
                    <input className="mu-input" placeholder="MM / YY" aria-label="Expiry MM / YY" />
                    <input className="mu-input" placeholder="CVC" aria-label="CVC" inputMode="numeric" />
                  </div>
                </div>
              </div>
            )}

            {/* Step nav */}
            <div className={styles.stepNav}>
              {step > 1 ? (
                <button type="button" className={styles.btnGhost} onClick={() => setStep(step - 1)}>
                  ‹ Back
                </button>
              ) : (
                <button type="button" className={styles.btnGhost} onClick={() => router.push("/")}>
                  ‹ Cancel
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  className={`${styles.btnPrimary}${count === 0 ? " " + styles.btnPrimaryDisabled : ""}`}
                  disabled={count === 0}
                  onClick={() => count > 0 && setStep(step + 1)}
                >
                  Continue ›
                </button>
              ) : (
                <button
                  type="button"
                  className={`${styles.btnPrimary}${submitting ? " " + styles.btnPrimaryDisabled : ""}`}
                  disabled={submitting}
                  onClick={confirm}
                >
                  {submitting ? "Processing…" : `Confirm & Pay €${total}`}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — order summary */}
          <div className={styles.summaryCol}>
            <button
              type="button"
              className={styles.summaryToggle}
              onClick={() => setSummaryOpen((v) => !v)}
              aria-expanded={summaryOpen}
            >
              <span>Order Summary</span>
              <span className={styles.summaryToggleTotal}>
                €{total} {summaryOpen ? "▴" : "▾"}
              </span>
            </button>

            <div
              className={`${styles.summaryCard}${summaryOpen ? "" : " " + styles.summaryCardCollapsed}`}
            >
              <div className={`${styles.summaryHeader} ${styles.summaryCardHeaderHidden}`}>
                <span className={styles.summaryGlyph}>🎟</span>
                <h3 className={styles.summaryTitle}>Order Summary</h3>
              </div>

              {items.length === 0 ? (
                <p className={styles.summaryEmpty}>
                  No tickets selected yet. Choose ticket types from the list to begin.
                </p>
              ) : (
                <>
                  {items.map((t) => (
                    <div key={t.id} className={styles.summaryLine}>
                      <div>
                        <div className={styles.summaryLineName}>{t.name}</div>
                        <div className={styles.summaryLineQty}>× {selected[t.id]}</div>
                      </div>
                      <div className={styles.summaryLineTotal}>€{t.price * selected[t.id]}</div>
                    </div>
                  ))}
                  {step >= 2 && (
                    <div className={styles.summaryDateBlock}>
                      <div className={styles.summaryDateRow}>
                        <span className={styles.summaryMuted}>Date</span>
                        <span>{date}</span>
                      </div>
                      <div className={styles.summaryDateRow}>
                        <span className={styles.summaryMuted}>Time</span>
                        <span>{time}</span>
                      </div>
                    </div>
                  )}
                  <div className={styles.summaryTotalRow}>
                    <span className={styles.summaryTotalLabel}>Total ({count})</span>
                    <span className={styles.summaryTotalAmount}>€{total}</span>
                  </div>
                </>
              )}
            </div>

            <div className={styles.reassurance}>
              <strong>✓ Free cancellation</strong> up to 24 hours before your visit.
              <br />
              <strong>✓ Mobile tickets</strong> — show your e-ticket at the entrance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
