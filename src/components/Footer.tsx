import Link from "next/link";
import CoverImage from "./CoverImage";
import { getContactInfo, getSiteChrome } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const { navLinks, legalLinks, socials } = getSiteChrome();
  const info = getContactInfo();

  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <div>
          <div className={styles.brand}>QALISSO MUSEUM</div>
          <div className={styles.contact}>
            <div>{info.phone}</div>
            <div>{info.email}</div>
            <div className={styles.contactSpaced}>102 terrasse Boieldieu, Tour W</div>
            <div>12ème étage, 92800 Puteaux</div>
          </div>
          <div className={styles.map}>
            <CoverImage src={info.mapImage} alt="Map to QALISSO Museum" sizes="(max-width: 900px) 100vw, 30vw" />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.navLinks}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Production note: text glyphs stand in for real social icons. */}
          <div className={styles.socials}>
            {socials.map((s) => (
              <a key={s.title} href="#" title={s.title} aria-label={s.title} className={styles.social}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.legal}>
          {legalLinks.map((l) => (
            <a key={l} href="#" className={styles.legalLink}>
              {l}
            </a>
          ))}
        </div>
        <div className={styles.wordmark}>QALISSO ✦ MUSEUM</div>
      </div>
    </footer>
  );
}
