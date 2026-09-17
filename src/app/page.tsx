import type { Metadata } from "next";
import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import StarOrnament from "@/components/StarOrnament";
import ArrowRight from "@/components/ArrowRight";
import { getHome } from "@/lib/content";
import styles from "./home.module.css";

export const metadata: Metadata = {
  // Home shows the bare wordmark, overriding the "%s — QALISSO MUSEUM" template.
  title: { absolute: "QALISSO MUSEUM" },
};

export default function HomePage() {
  const home = getHome();

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroLine} />
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={`display-heading ${styles.heroHeading}`}>QALISSO</h1>
            <div className={styles.ornamentRow}>
              <div className={styles.ornamentRule} />
              <span className={styles.ornamentStar}>
                <StarOrnament size={34} color="#fff" />
              </span>
              <div className={styles.ornamentRule} />
            </div>
            <h1 className={`display-heading ${styles.heroHeading} ${styles.heroHeadingSpaced}`}>
              MUSEUM
            </h1>
            <p className={styles.lede}>{home.hero.lede}</p>
            <p className={styles.heroBody}>{home.hero.body}</p>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroArch}>
              <CoverImage
                src={home.heroImage}
                alt="Featured artwork"
                priority
                sizes="(max-width: 900px) 90vw, 32vw"
              />
            </div>
          </div>
        </div>

        {/* Single-slide hero: controls are decorative until a carousel is wired. */}
        <div className={styles.dots} aria-hidden="true">
          <div className={`${styles.dot} ${styles.dotActive}`} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <button className={`${styles.chevron} ${styles.chevronLeft}`} aria-hidden="true" tabIndex={-1}>
          ‹
        </button>
        <button className={`${styles.chevron} ${styles.chevronRight}`} aria-hidden="true" tabIndex={-1}>
          ›
        </button>
      </section>

      {/* ─── CULTURE ─── */}
      <section className={styles.culture}>
        <div className={styles.cultureImgWrap}>
          <div className={styles.cultureArch}>
            <CoverImage src={home.cultureImage} alt="Culture" sizes="(max-width: 900px) 100vw, 42vw" />
          </div>
        </div>
        <div className={styles.cultureBody}>
          <h2 className={`display-heading ${styles.cultureHeading}`}>{home.culture.heading}</h2>
          <p className={styles.cultureText}>{home.culture.body}</p>
          <Link href="/exhibitions" className="arrow-link">
            Read more <ArrowRight />
          </Link>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section className={styles.stories}>
        <div className={styles.centerHeading}>
          <StarOrnament size={30} color="var(--brown-ink)" />
          <h2 className={`display-heading ${styles.storiesHeading}`}>Story Description</h2>
          <StarOrnament size={30} color="var(--brown-ink)" />
        </div>
        <div className={styles.storiesGrid}>
          {home.stories.map((s) => (
            <article key={s.title} className="card-lift">
              <div className={`exh-card ${styles.storyImg}`}>
                <CoverImage src={s.img} alt={s.title} className="exh-img" sizes="(max-width: 900px) 100vw, 30vw" />
              </div>
              <h3 className={styles.storyTitle}>{s.title}</h3>
              <p className={styles.storyDesc}>{s.desc}</p>
              <button className="arrow-link" aria-label={`Read ${s.title}`}>
                <ArrowRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ─── COLLECTIONS PREVIEW ─── */}
      <section className={styles.collections}>
        <div className={styles.collectionsHeadingRow}>
          <StarOrnament size={34} color="#fff" />
          <h2 className={`display-heading ${styles.collectionsHeading}`}>COLLECTIONS</h2>
          <StarOrnament size={34} color="#fff" />
        </div>
        <div className={styles.collectionsRule} />
        <div className={styles.collectionsGrid}>
          {home.collectionImages.map((img, i) => (
            <div key={i} className={`exh-card ${styles.collectionsCell}`}>
              <CoverImage src={img} alt="Collection artwork" className="exh-img" sizes="(max-width: 560px) 100vw, 30vw" />
            </div>
          ))}
        </div>
        <div className={styles.exploreWrap}>
          <Link href="/collections" className={styles.explore}>
            Explore
          </Link>
        </div>
      </section>
    </div>
  );
}
