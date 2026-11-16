import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Photo as BasePhoto } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { RichText } from "@/components/RichText";
import { caseStudies, type Block, type Bullet, type Img } from "@/data/case-studies";
import sizes from "@/data/image-sizes.json";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  return { title: study ? `${study.title.toLowerCase()} — Linh Nguyen` : "Linh Nguyen" };
}

const pad = (n: number) => String(n).padStart(2, "0");
const asItem = (t: string | (string | { text: string; href: string })[]) => (typeof t === "string" ? [t] : t);

function Photo({ img }: { img: Img }) {
  const s = (sizes as Record<string, { src: string; width: number; height: number }>)[img.src];
  return (
    <figure>
      <BasePhoto src={s?.src ?? img.src} width={s?.width} height={s?.height} alt={img.alt} />
      {img.caption && <figcaption className="mt-1.5 text-xs text-muted">{img.caption}</figcaption>}
    </figure>
  );
}

function Bullets({ items, nested = false }: { items: Bullet[]; nested?: boolean }) {
  return (
    <ul className={`list-disc space-y-1.5 pl-5 marker:text-muted ${nested ? "mt-1.5" : ""}`}>
      {items.map((b, i) => (
        <li key={i} className="pl-1">
          {b.b && <span className="font-medium">{b.b} </span>}
          {b.t && <RichText item={asItem(b.t)} />}
          {b.sub && <Bullets items={b.sub} nested />}
        </li>
      ))}
    </ul>
  );
}

function BlockView({ block }: { block: Block }) {
  if ("h" in block) return <h3 className="pt-2 font-medium">{block.h}</h3>;
  if ("ul" in block) return <Bullets items={block.ul} />;
  return (
    <p>
      <RichText item={asItem(block.p)} />
    </p>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const study = caseStudies[index];
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
      <Reveal variant="drop">
        <a href="/projects/" className="text-link">← projects</a>
      </Reveal>
      <Reveal variant="drop" delay={0.07}>
        <h1 className="mt-10 text-3xl font-light tracking-wide lowercase">{study.title}</h1>
        {study.subtitle && <p className="mt-2 text-lg font-light">{study.subtitle}</p>}
        <p className="mt-1 text-sm text-muted lowercase">{study.meta}</p>
      </Reveal>

      <ol className="mt-12">
        {study.sections.map((section, i) => {
          const hasText = !!section.blocks?.length;
          const images = section.images ?? [];
          return (
            <Reveal
              key={section.heading}
              as="li"
              delay={0.18 + i * 0.1}
              className="grid gap-6 border-t border-rule py-10 md:grid-cols-[3rem_1fr_minmax(0,22rem)] md:gap-8"
            >
                <span className="hidden pt-1 text-xs font-medium tracking-wider text-muted tabular-nums md:block">
                  {pad(i + 1)}
                </span>

                <div className={hasText ? "max-w-prose" : "md:col-span-2"}>
                  <span className="mb-1 block text-xs font-medium tracking-wider text-muted tabular-nums md:hidden">
                    {pad(i + 1)}
                  </span>
                  <h2 className="text-xl font-normal">{section.heading}</h2>

                  {hasText && (
                    <div className="mt-4 space-y-3 text-[0.95rem]">
                      {section.blocks!.map((b, j) => (
                        <BlockView key={j} block={b} />
                      ))}
                    </div>
                  )}

                  {/* Image-only sections: photos in a row under the heading */}
                  {!hasText && images.length > 0 && (
                    <div className={`mt-5 grid gap-4 ${images.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-2xl"}`}>
                      {images.map((img) => (
                        <Photo key={img.src} img={img} />
                      ))}
                    </div>
                  )}
                </div>

                {hasText && images.length > 0 && (
                  <div className="grid content-start gap-4">
                    {images.map((img) => (
                      <Photo key={img.src} img={img} />
                    ))}
                  </div>
                )}
            </Reveal>
          );
        })}
      </ol>

      <nav aria-label="More projects" className="flex flex-wrap justify-between gap-4 border-t border-rule pt-8 text-sm">
        {prev ? (
          <a href={`/${prev.slug}/`} className="text-link">← {prev.title.toLowerCase()}</a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={`/${next.slug}/`} className="text-link">{next.title.toLowerCase()} →</a>
        ) : (
          <a href="/projects/" className="text-link">all projects →</a>
        )}
      </nav>
    </main>
  );
}
