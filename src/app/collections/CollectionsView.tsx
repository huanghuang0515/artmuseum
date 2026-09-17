"use client";

import { useMemo, useState } from "react";
import CoverImage from "@/components/CoverImage";
import StarOrnament from "@/components/StarOrnament";
import type { Artwork } from "@/content/types";
import styles from "./collections.module.css";

const starPositions = [
  { top: 24, left: "6%" },
  { top: 14, left: "13%" },
  { top: 50, left: "4%" },
  { top: 62, left: "10%" },
  { top: 20, left: "82%" },
  { top: 38, left: "89%" },
  { top: 55, left: "84%" },
  { top: 70, left: "91%" },
];

export default function CollectionsView({
  artworks,
  pageCount,
}: {
  artworks: Artwork[];
  pageCount: number;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return artworks;
    return artworks.filter(
      (a) =>
        a.title.toLowerCase().includes(q) || a.author.toLowerCase().includes(q),
    );
  }, [query, artworks]);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        {starPositions.map((p, i) => (
          <span key={i} className={styles.star} style={{ top: p.top, left: p.left }}>
            <StarOrnament size={i % 2 === 0 ? 16 : 22} color="var(--brown-ink)" />
          </span>
        ))}
        <h1 className={`display-heading ${styles.heading}`}>COLLECTIONS</h1>

        {/* Search */}
        <div className={styles.search}>
          <div className={styles.searchField}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="6" stroke="var(--brown-ink)" strokeWidth="1.4" />
              <line x1="13" y1="13" x2="18.5" y2="18.5" stroke="var(--brown-ink)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by artist, subject, object, access number..."
              aria-label="Search the collection"
            />
          </div>
          <button className={styles.searchBtn} type="button">
            Search
          </button>
        </div>
        <div className={styles.advancedWrap}>
          <button className={styles.advanced} type="button">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="4.5" stroke="var(--brown-ink)" strokeWidth="1.2" />
              <line x1="9.5" y1="9.5" x2="14" y2="14" stroke="var(--brown-ink)" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="8" y1="6" x2="12" y2="6" stroke="var(--brown-ink)" strokeWidth="1.2" />
            </svg>
            Advanced search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className={styles.table}>
        <div className={styles.headerRow}>
          {["", "Title, author, description", "Date", "Inventory N°"].map((h, i) => (
            <span key={i} className={styles.headerCell}>
              {h}
            </span>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>No results for &quot;{query}&quot;</div>
        )}

        {filtered.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.thumb}>
              <CoverImage src={item.img} alt={item.title} sizes="160px" />
            </div>
            <div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.medium}>{item.medium}</div>
            </div>
            <div className={styles.date}>
              <span className={styles.metaLabel}>Date</span>
              {item.date}
            </div>
            <div className={styles.inv}>
              <span className={styles.metaLabel}>Inventory N°</span>
              {item.inv}
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className={styles.pagination}>
          <button className={styles.pageArrow} type="button" aria-label="Previous page">
            ‹
          </button>
          <div className={styles.pageCount}>
            <div className={styles.pageHighlight} />
            <span className={styles.pageText}>
              <strong>1</strong>
              <span className={styles.pageSlash}>/</span>
              {pageCount}
            </span>
          </div>
          <button className={styles.pageArrow} type="button" aria-label="Next page">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
