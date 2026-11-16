import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { RichText, TextLink } from "@/components/RichText";
import { bio, pages, sections, socials } from "@/data/home";

const socialIcons = { email: FiMail, linkedin: FiLinkedin, github: FiGithub };

const pad = (n: number) => String(n).padStart(2, "0");

// Cascade timing (seconds). Sidebar first, then each column's heading, then its items.
const SIDEBAR_STEP = 0.07;
const COLUMN_START = 0.3;
const COLUMN_STEP = 0.08;
const ITEM_START = 0.45;
const ITEM_STEP = 0.1;

export default function Home() {
  let step = 0;
  const next = () => step++ * SIDEBAR_STEP;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:flex lg:gap-16 lg:px-12 lg:py-20 xl:gap-24">
      {/* ── Sidebar: name, photo, bio, links ─────────────────────────── */}
      <aside className="lg:sticky lg:top-20 lg:w-64 lg:shrink-0 lg:self-start xl:w-72">
        <Reveal variant="drop" delay={next()}>
          <h1 className="text-3xl font-light tracking-wide">linh nguyen</h1>
        </Reveal>
        <Reveal variant="drop" delay={next()}>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
            <FiMapPin aria-hidden className="h-3.5 w-3.5" />
            nyc
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start lg:flex-col">
          <Reveal variant="drop" delay={next()} className="w-40 shrink-0 sm:w-44 lg:w-full">
            <Photo src="/img/profile/profile-sm.jpg" alt="Portrait of Linh Nguyen" width={900} height={1125} priority />
          </Reveal>

          <div className="space-y-4 text-[0.95rem]">
            {bio.map((item, i) => (
              <Reveal key={i} as="p" variant="drop" delay={next()}>
                <RichText item={item} />
              </Reveal>
            ))}

            <nav aria-label="Pages" className="flex flex-col items-start gap-2 pt-2">
              {pages.map((p) => (
                <Reveal key={p.href} variant="drop" delay={next()}>
                  <TextLink href={p.href}>{p.text}</TextLink>
                </Reveal>
              ))}
            </nav>

            <Reveal as="ul" variant="drop" delay={next()} className="flex gap-4 pt-1">
              {socials.map(({ label, href }) => {
                const Icon = socialIcons[label];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="-m-2 inline-flex p-2 text-ink/70 transition-colors hover:text-muted"
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </Reveal>
          </div>
        </div>
      </aside>

      <hr className="my-12 border-rule lg:hidden" />

      {/* ── Currently / previously / additionally ────────────────────── */}
      <div className="grid flex-1 gap-12 lg:grid-cols-3 lg:gap-10 xl:gap-14">
        {sections.map((section, s) => (
          <section key={section.title} className="md:grid md:grid-cols-[9rem_1fr] md:gap-8 lg:block">
            <Reveal variant="drop" delay={COLUMN_START + s * COLUMN_STEP}>
              <h2 className="mb-5 text-base font-medium tracking-wide text-muted lg:mb-6">{section.title}</h2>
            </Reveal>
            <ol className="space-y-6">
              {section.items.map((item, i) => (
                <Reveal
                  key={i}
                  as="li"
                  variant="drop"
                  delay={ITEM_START + s * COLUMN_STEP + i * ITEM_STEP}
                  className="max-w-prose"
                >
                  <span className="mb-1 block text-xs font-medium tracking-wider text-muted tabular-nums">
                    {pad(i + 1)}
                  </span>
                  <p className="text-[0.95rem]">
                    <RichText item={item} />
                  </p>
                </Reveal>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
