import { AvailablePill, PillButton, SocialPill } from "./ui";
import { Reveal } from "./Reveal";
import { profile, socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="clouds relative scroll-mt-0 px-4 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <AvailablePill />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] font-bold tracking-tight text-ink/90 uppercase">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
            Internships, freelance builds or a team that needs another engineer - I&apos;d love to hear about it. Let&apos;s
            build something clear, fast and useful together.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <PillButton href={`mailto:${profile.email}`} className="mt-8 ring-4 ring-black/10">
            Contact Me
          </PillButton>
        </Reveal>
      </div>

      <Reveal delay={0.4} className="mx-auto mt-20 flex max-w-5xl flex-wrap items-center justify-center gap-3 sm:mt-28 sm:justify-between">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-ink py-1.5 pr-5 pl-1.5 text-sm font-semibold text-white shadow-lg">
          <span className="flex size-8 items-center justify-center rounded-full bg-white/15 text-xs">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </span>
          {profile.firstName} {profile.lastName}
        </span>
        {socials.map((s) => (
          <SocialPill key={s.label} social={s} />
        ))}
      </Reveal>
    </section>
  );
}
