import styles from "./BadgeCurrent.module.css";

/** Outlined pill badge, e.g. "CURRENT". Border/text take the given color. */
export default function BadgeCurrent({
  color = "#fff",
  label = "CURRENT",
}: {
  color?: string;
  label?: string;
}) {
  return (
    <span className={styles.badge} style={{ borderColor: color, color }}>
      {label}
    </span>
  );
}
