/**
 * Fades and lifts its children in on load.
 * Pure CSS (see .fade-in in globals.css), so content is visible even before
 * JavaScript loads, and it's skipped for users who prefer reduced motion.
 */
export function FadeIn({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "aside";
}) {
  return (
    <Component className={`fade-in ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </Component>
  );
}
