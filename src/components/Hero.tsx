"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PillButton, SocialPill } from "./ui";
import { SplitText, ease } from "./Reveal";
import { profile, socials } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-card px-4 pt-28 sm:px-8 lg:pt-36">
      <h1 className="font-display relative z-0 mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-x-[0.35em] text-center text-[12.5vw] leading-[0.95] font-extrabold tracking-[0.06em] lg:text-[clamp(4rem,7.3vw,8.5rem)] lg:flex-nowrap uppercase [font-variation-settings:'wdth'_112]">
        <SplitText text={profile.firstName} className="text-outline" delay={0.3} />
        <SplitText text={profile.lastName} className="text-ink" delay={0.3 + profile.firstName.length * 0.04} />
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease, delay: 0.7 }}
        className="relative z-10 mx-auto -mt-[4vw] aspect-[4/5] w-[min(78vw,32rem)] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[min(38vw,34rem)] lg:-translate-x-1/2"
      >
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={profile.fullName}
            fill
            preload
            sizes="(min-width: 1024px) 38vw, 78vw"
            className="object-contain object-bottom grayscale"
          />
        ) : (
          <PortraitPlaceholder />
        )}
      </motion.div>

      <div className="relative z-20 mx-auto mt-auto flex w-full max-w-7xl flex-col gap-10 pb-10 pt-8 lg:flex-row lg:items-end lg:justify-between lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.1 }}
          className="max-w-sm"
        >
          <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{profile.role}</p>
          <p className="mt-3 text-base leading-relaxed text-muted">{profile.tagline}</p>
          <PillButton href="/#work" className="mt-6">
            See my work
          </PillButton>
        </motion.div>

        <ul className="flex flex-wrap gap-3 lg:flex-col lg:items-end lg:gap-4">
          {socials.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.2 + i * 0.08 }}
            >
              <SocialPill social={s} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Stand-in until a real cut-out portrait is added at public/me.png. */
function PortraitPlaceholder() {
  return (
    <svg viewBox="0 0 400 500" className="size-full" aria-hidden>
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ececec" />
          <stop offset="1" stopColor="#dcdcdc" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d6d6d6" />
          <stop offset="1" stopColor="#c4c4c4" />
        </linearGradient>
      </defs>
      <rect x="168" y="250" width="64" height="70" rx="20" fill="url(#skin)" />
      <ellipse cx="200" cy="190" rx="92" ry="112" fill="url(#skin)" />
      <path d="M108 170c0-70 40-100 92-100s92 30 92 100c-18-38-50-52-92-52s-74 14-92 52z" fill="#cfcfcf" />
      <path d="M40 500c10-110 70-170 160-170s150 60 160 170z" fill="url(#shirt)" />
    </svg>
  );
}
