import type { Metadata } from "next";
import CoverImage from "@/components/CoverImage";
import BadgeCurrent from "@/components/BadgeCurrent";
import { getExhibitions } from "@/lib/content";
import styles from "./exhibitions.module.css";

export const metadata: Metadata = { title: "EXHIBITIONS" };

export default function ExhibitionsPage() {
  const { hero, cards, detailLabel, details } = getExhibitions();

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <CoverImage src={hero.img} alt={hero.title} className={styles.heroImg} priority sizes="100vw" />
        </div>
        <div className={styles.heroScrim} />
        <div className={styles.heroLine} />
        <div className={styles.heroContent}>
          <BadgeCurrent label={hero.badge} />
          <h1 className={`display-heading ${styles.heroTitle}`}>{hero.title}</h1>
          <p className={styles.heroSubtitle}>{hero.subtitle}</p>
          <p className={styles.heroDate}>{hero.date}</p>
        </div>
      </section>

      {/* 3 cards */}
      <section className={styles.cardRow}>
        <div className={styles.cardGrid}>
          {cards.map((ex) => (
            <article key={ex.title} className="card-lift">
              <div className={`exh-card ${styles.cardImg}`}>
                <CoverImage src={ex.img} alt={ex.title} className="exh-img" sizes="(max-width: 900px) 100vw, 30vw" />
                {ex.current && (
                  <div className={styles.cardBadge}>
                    <BadgeCurrent />
                  </div>
                )}
              </div>
              <h3 className={`display-heading ${styles.cardTitle}`}>{ex.title}</h3>
              <p className={styles.cardSub}>{ex.sub}</p>
              <p className={styles.cardDate}>{ex.date}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Label divider */}
      <div className={styles.labelRow}>
        <span className={styles.label}>{detailLabel}</span>
        <div className={styles.labelRule} />
      </div>

      {/* 2 detailed exhibitions */}
      <section className={styles.details}>
        {details.map((d) => (
          <article key={d.title} className="card-lift">
            <div className={`exh-card ${styles.detailImg}`}>
              <CoverImage src={d.img} alt={d.title} className="exh-img" sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
            <h3 className={styles.detailTitle}>{d.title}</h3>
            <p className={styles.detailBody}>{d.desc}</p>
            <p className={styles.detailDate}>{d.date}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
