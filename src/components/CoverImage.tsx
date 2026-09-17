import Image from "next/image";

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
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      style={{ objectFit: "cover" }}
    />
  );
}
