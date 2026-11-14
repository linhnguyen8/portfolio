/**
 * An image that shows a soft pulsing placeholder while loading, then fades in.
 * The fade is driven by <Motion />, which adds the "loaded" class.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  className = "",
  wrapClassName = "",
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  wrapClassName?: string;
  priority?: boolean;
  /** Layout width hint so the browser can pick a source from srcset. */
  sizes?: string;
}) {
  return (
    <span className={`img-wrap block overflow-hidden rounded-sm ${wrapClassName}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={`fade-img block h-auto w-full ${className}`}
      />
    </span>
  );
}
