import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Animates its children in when they scroll into view (see <Motion /> and globals.css).
 *
 * - variant "drop": slides down into place (homepage cascade, like the reference site)
 * - variant "rise": slides up into place (sections further down a page)
 * - delay: extra delay in seconds, used to cascade items that appear on first load.
 *   Items revealed later by scrolling get a short automatic stagger instead.
 */
export function Reveal({
  children,
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: "drop" | "rise";
  delay?: number;
  className?: string;
}) {
  return (
    <Tag
      className={`reveal ${className}`}
      data-reveal={variant}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
