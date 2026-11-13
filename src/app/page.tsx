import Image from "next/image";
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import { FadeIn } from "@/components/FadeIn";
import { RichText, TextLink } from "@/components/RichText";
import { bio, pages, sections, socials } from "@/data/home";

const socialIcons = { email: FiMail, linkedin: FiLinkedin, github: FiGithub };

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:flex lg:gap-16 lg:px-12 lg:py-20 xl:gap-24">
      {/* ── Sidebar: name, photo, bio, links ─────────────────────────── */}
      <FadeIn
        as="aside"
        className="lg:sticky lg:top-20 lg:w-64 lg:shrink-0 lg:self-start xl:w-72"
      >
        <h1 className="text-3xl font-light tracking-wide">linh nguyen</h1>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted">
          <FiMapPin aria-hidden className="h-3.5 w-3.5" />
          nyc
        </p>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start lg:flex-col">
          <Image
            src="/img/profile/profile-sm.jpg"
            alt="Portrait of Linh Nguyen"
            width={900}
            height={1125}
            priority
            className="w-40 rounded-sm sm:w-44 lg:w-full"
          />

          <div className="space-y-4 text-[0.95rem]">
            {bio.map((item, i) => (
              <p key={i}>
                <RichText item={item} />
              </p>
            ))}

            <nav aria-label="Pages" className="flex flex-col items-start gap-2 pt-2">
              {pages.map((p) => (
                <TextLink key={p.href} href={p.href}>
                  {p.text}
                </TextLink>
              ))}
            </nav>

            <ul className="flex gap-4 pt-1" aria-label="Contact">
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
            </ul>
          </div>
        </div>
      </FadeIn>

      <hr className="my-12 border-rule lg:hidden" />

      {/* ── Currently / previously / additionally ────────────────────── */}
      <div className="grid flex-1 gap-12 lg:grid-cols-3 lg:gap-10 xl:gap-14">
        {sections.map((section, s) => (
          <FadeIn
            key={section.title}
            as="section"
            delay={0.15 + s * 0.12}
            className="md:grid md:grid-cols-[9rem_1fr] md:gap-8 lg:block"
          >
            <h2 className="mb-5 text-base font-medium tracking-wide text-muted lg:mb-6">
              {section.title}
            </h2>
            <ol className="space-y-6">
              {section.items.map((item, i) => (
                <li key={i} className="max-w-prose">
                  <span className="mb-1 block text-xs font-medium tracking-wider text-muted tabular-nums">
                    {pad(i + 1)}
                  </span>
                  <p className="text-[0.95rem]">
                    <RichText item={item} />
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
