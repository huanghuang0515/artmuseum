/** Line-plus-chevron arrow. Used inside .arrow-link buttons/links. */
export default function ArrowRight({
  color = "var(--brown-ink)",
  length = 52,
}: {
  color?: string;
  length?: number;
}) {
  return (
    <svg
      width={length + 10}
      height={12}
      viewBox={`0 0 ${length + 10} 12`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="6" x2={length - 2} y2="6" stroke={color} strokeWidth="1.4" />
      <path
        d={`M${length - 2} 1 L${length + 8} 6 L${length - 2} 11`}
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}
