import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Reveal, SplitText } from "@/components/Reveal";
import { ArrowLeft } from "@/components/icons";
import { AvailablePill, PillButton, SectionTitle, Tag } from "@/components/ui";
import { getProject, profile, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.name} - ${profile.fullName}`, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const more = [1, 2].map((n) => projects[(index + n) % projects.length]);

  return (
    <>
      <main className="bg-[linear-gradient(120deg,#f7f7f7_0%,#ececec_30%,#f8f8f8_45%,#ebebeb_65%,#f6f6f6_100%)]">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-8 sm:pt-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold ring-1 ring-black/10 transition-transform hover:-translate-x-0.5"
          >
            <ArrowLeft /> Back
          </Link>
          {profile.available && <AvailablePill />}
        </header>

        <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <Reveal className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Reveal>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h1 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-none font-semibold tracking-tight">
                <SplitText text={project.name} delay={0.35} stagger={0.05} />
              </h1>
              <Reveal delay={0.6} y={10}>
                <span className="text-xl text-muted sm:text-2xl">/{project.kind}</span>
              </Reveal>
            </div>
            <Reveal delay={0.7}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>
            </Reveal>
            <Reveal delay={0.8} className="mt-8 flex flex-wrap gap-3">
              {project.live && <PillButton href={project.live}>Live Preview</PillButton>}
              <PillButton href={`mailto:${profile.email}`} variant="light" arrow={false}>
                Contact Me
              </PillButton>
            </Reveal>
          </div>

          <Reveal delay={0.5} className="grid content-start gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:text-right">
            <Meta label="Role">{project.role}</Meta>
            <Meta label="Timeline">{project.timeline}</Meta>
            <div>
              <p className="text-sm text-faint">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2 lg:justify-end">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-xl bg-card px-3 py-2 text-sm font-medium shadow-sm ring-1 ring-black/5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="rounded-xl bg-white/60 p-3 ring-1 ring-black/10 backdrop-blur sm:p-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-ink-soft">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  preload
                  sizes="(min-width: 1152px) 1100px, 95vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex size-full items-center justify-center">
                  <span className="font-display text-[clamp(3rem,12vw,9rem)] font-extrabold tracking-[0.12em] text-white/10 uppercase">
                    {project.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-faint uppercase">Highlights</h2>
          </Reveal>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {project.highlights.map((h, i) => (
              <li key={h}>
                <Reveal delay={i * 0.1} className="h-full rounded-xl bg-card p-6 ring-1 ring-black/5">
                  <span className="text-sm text-faint">0{i + 1}</span>
                  <p className="mt-4 text-lg leading-snug font-medium">{h}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-dashed border-black/15 px-4 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionTitle watermark="WORK" title="More Work" align="center" />
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.12}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-sm text-faint">{label}</p>
      <p className="mt-2 text-xl font-medium sm:text-2xl">{children}</p>
    </div>
  );
}
