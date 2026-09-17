import type { Metadata } from "next";
import CoverImage from "@/components/CoverImage";
import StarOrnament from "@/components/StarOrnament";
import ArrowRight from "@/components/ArrowRight";
import { getVisit } from "@/lib/content";
import styles from "./visit.module.css";

export const metadata: Metadata = { title: "VISIT" };

export default function VisitPage() {
  const visit = getVisit();

  return (
    <div className={styles.page}>
      {/* Hero split */}
      <section className={styles.hero}>
        <div className={styles.heroImgWrap}>
          <CoverImage src={visit.heroImage} alt="QALISSO Museum building" priority sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
        <div className={styles.heroText}>
          <h1 className={`display-heading ${styles.heroHeading}`}>{visit.hero.heading}</h1>
          <p className={styles.heroBody}>{visit.hero.body}</p>
          <button className="arrow-link">
            Plan your visit <ArrowRight />
          </button>
        </div>
      </section>

      {/* Hours & Admission */}
      <section className={styles.hoursSection}>
        <div className={styles.hoursCard}>
          <div className={styles.hoursHeadingRow}>
            <StarOrnament size={32} color="var(--brown-ink)" />
            <h2 className={`display-heading ${styles.hoursHeading}`}>HOURS &amp; ADMISSION</h2>
            <StarOrnament size={32} color="var(--brown-ink)" />
          </div>
          <div className={styles.hoursGrid}>
            <div>
              <h3 className={styles.colHeading}>Opening Hours</h3>
              {visit.hours.map((h) => (
                <div key={h.label} className={styles.row}>
                  <span className={`${styles.rowLabel}${h.closed ? " " + styles.rowLabelClosed : ""}`}>
                    {h.label}
                  </span>
                  <span className={`${styles.rowValue}${h.closed ? " " + styles.rowValueClosed : ""}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <h3 className={styles.colHeading}>Admission</h3>
              {visit.admission.map((t) => (
                <div key={t.label} className={styles.row}>
                  <span className={styles.rowLabel}>{t.label}</span>
                  <span className={styles.rowValue}>{t.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tradition */}
      <section className={styles.tradition}>
        <h2 className={`display-heading ${styles.traditionHeading}`}>{visit.tradition.heading}</h2>
        <div className={styles.traditionRule} />
        <p className={styles.traditionBody}>{visit.tradition.body}</p>
        <div className={styles.photoPair}>
          {visit.tradition.photos.map((p, i) => (
            <div key={i} className={styles.photo}>
              <CoverImage src={p} alt="Museum visit" sizes="(max-width: 900px) 100vw, 46vw" />
            </div>
          ))}
        </div>
        <div className={styles.interior}>
          <CoverImage src={visit.tradition.interior} alt="Museum interior" sizes="92vw" />
        </div>
      </section>
    </div>
  );
}
