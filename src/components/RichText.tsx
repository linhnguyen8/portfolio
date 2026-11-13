import { FiArrowUpRight } from "react-icons/fi";
import type { Item } from "@/data/home";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className="text-link"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <FiArrowUpRight aria-hidden className="ml-0.5 inline h-3.5 w-3.5 align-[-0.1em]" />}
    </a>
  );
}

export function RichText({ item }: { item: Item }) {
  return (
    <>
      {item.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <TextLink key={i} href={part.href}>
            {part.text}
          </TextLink>
        ),
      )}
    </>
  );
}
