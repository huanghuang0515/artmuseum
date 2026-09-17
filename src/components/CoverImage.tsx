import Image from "next/image";

// next/image applies basePath automatically only when the optimizer is on.
// With images.unoptimized (static export), it does not — so prefix it here for
// root-relative sources. Empty basePath (e.g. Vercel) leaves src unchanged.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBase = (src: string) =>
  src.startsWith("/") && BASE_PATH ? `${BASE_PATH}${src}` : src;

/**
 * Fills its (positioned) parent with a cover-cropped image. Parents set the
 * aspect ratio / size and `overflow: hidden`; this handles the object-fit.
 * `className` lands on the <img> so hover-zoom classes (.exh-img) still work.
 */
export default function CoverImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={withBase(src)}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: "cover" }}
    />
  );
}
