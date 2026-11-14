import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { RichText, TextLink } from "@/components/RichText";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "projects — Linh Nguyen" };

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  return (
    <>
      <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
        <Reveal variant="drop">
          <a href="/" className="text-link">← linh nguyen</a>
        </Reveal>
        <Reveal variant="drop" delay={0.07}>
          <h1 className="mt-10 text-3xl font-light tracking-wide">projects</h1>
        </Reveal>

        <ol className="mt-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              as="li"
              delay={0.18 + i * 0.1}
              className="grid gap-6 border-t border-rule py-10 md:grid-cols-[3rem_1fr_minmax(0,22rem)] md:gap-8"
            >
                <span className="hidden pt-1.5 text-xs font-medium tracking-wider text-muted tabular-nums md:block">
                  {pad(i + 1)}
                </span>

                {/* Photo first on mobile, right column on desktop */}
                <Photo
                  src={p.image.src}
                  alt={p.image.alt}
                  width={p.image.width}
                  height={p.image.height}
                  sizes="(min-width: 768px) 22rem, 100vw"
                  wrapClassName="self-start md:order-last"
                  className="max-h-80 object-cover md:max-h-72"
                />

                <div className="max-w-prose">
                  <span className="mb-1 block text-xs font-medium tracking-wider text-muted tabular-nums md:hidden">
                    {pad(i + 1)}
                  </span>
                  <h2 className="text-xl font-normal lowercase">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted lowercase">
                    {p.dates}
                    {p.course && <> · {p.course}</>}
                  </p>
                  <div className="mt-4 space-y-3 text-[0.95rem]">
                    {p.paragraphs.map((item, j) => (
                      <p key={j}>
                        <RichText item={item} />
                      </p>
                    ))}
                  </div>
                  {p.links.length > 0 && (
                    <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {p.links.map((l) => (
                        <TextLink key={l.href} href={l.href}>
                          {l.text}
                        </TextLink>
                      ))}
                    </p>
                  )}
                </div>
            </Reveal>
          ))}
        </ol>
      </main>
    </>
  );
}
