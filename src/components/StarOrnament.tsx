/** Four-pointed star used as a section marker. viewBox 0 0 34 35. */
export default function StarOrnament({
  size = 32,
  color = "currentColor",
  className,
  style,
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 35"
      fill={color}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.909 7.299L17.091 0L15.091 7.299C13.818 11.604 11.273 14.225 7.091 15.535L0 17.594L7.091 19.465C11.273 20.775 13.818 23.396 15.091 27.701L17.091 35L18.909 27.701C20.182 23.396 22.727 20.775 26.909 19.465L34 17.594L26.909 15.535C22.727 14.225 20.182 11.604 18.909 7.299Z" />
    </svg>
  );
}
