"use client";

import { useState } from "react";
import ArrowRight from "@/components/ArrowRight";
import CoverImage from "@/components/CoverImage";
import type { EventItem } from "@/content/types";
import styles from "./events.module.css";

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="var(--events-ink)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function EventsView({ events }: { events: EventItem[] }) {
  const [nightOnly, setNightOnly] = useState(false);

  const filtered = nightOnly ? events.filter((e) => e.night) : events;

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          {/* next/image so the src picks up basePath on static/subpath hosting */}
          <CoverImage src="/assets/event-hero.jpg" alt="Events at QALISSO Museum" priority sizes="100vw" />
        </div>
        <div className={styles.heroScrim} />
        <div className={styles.heroLine} />
        <h1 className={`display-heading ${styles.heroTitle}`}>EVENTS</h1>
      </section>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterRow}>
          <button className={styles.filterBtn} type="button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1" y="3.5" width="16" height="13.5" rx="1" stroke="var(--events-ink)" strokeWidth="1.3" />
              <line x1="1" y1="7.5" x2="17" y2="7.5" stroke="var(--events-ink)" strokeWidth="1.3" />
              <line x1="5" y1="1" x2="5" y2="5" stroke="var(--events-ink)" strokeWidth="1.3" strokeLinecap="round" />
              <line x1="13" y1="1" x2="13" y2="5" stroke="var(--events-ink)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            ALL DATES
            <Chevron />
          </button>

          <button
            type="button"
            className={`${styles.nightToggle}${nightOnly ? " " + styles.nightToggleOn : ""}`}
            onClick={() => setNightOnly((v) => !v)}
            aria-pressed={nightOnly}
          >
            🌙 Night Opening
          </button>

          <div className={styles.dropdowns}>
            {["Type", "Public", "Age"].map((f) => (
              <button key={f} className={styles.dropdown} type="button">
                {f}
                <Chevron />
              </button>
            ))}
          </div>

          <div className={styles.separator} />
          <div className={styles.separator} />
        </div>
      </div>

      {/* Event list */}
      <section className={styles.list}>
        {filtered.map((ev) => (
          <div key={ev.title} className={styles.row}>
            <div className={styles.col1}>
              <div className={styles.category}>{ev.category}</div>
              <h3 className={`display-heading ${styles.eventTitle}`}>{ev.title}</h3>
              <p className={styles.eventDesc}>{ev.desc}</p>
            </div>
            <div>
              <div className={styles.metaLabel}>Schedule</div>
              <div className={styles.metaValue}>{ev.schedule}</div>
            </div>
            <div>
              <div className={styles.metaLabel}>Audience</div>
              <div className={styles.metaValue}>{ev.audience}</div>
              <div className={styles.age}>Age {ev.age}</div>
            </div>
            <div className={styles.arrowCell}>
              <ArrowRight color="var(--events-ink)" length={36} />
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className={styles.empty}>No night events currently scheduled.</div>
        )}
      </section>
    </div>
  );
}
