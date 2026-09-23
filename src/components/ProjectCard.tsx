"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "./icons";
import { Tag } from "./ui";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-md bg-card p-1.5 pb-6 shadow-[0_20px_40px_-24px_rgb(0_0_0/0.25)] ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-[0_30px_60px_-24px_rgb(0_0_0/0.35)]"
    >
      <div
        className="relative aspect-[16/11] cursor-none overflow-hidden rounded-sm bg-ink-soft"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - r.left);
          y.set(e.clientY - r.top);
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 768px) 45vw, 95vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-display text-5xl font-extrabold tracking-[0.1em] text-white/15 uppercase">
              {project.name}
            </span>
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-ink/70 uppercase backdrop-blur">
          {project.kind}
        </span>
        <motion.span
          aria-hidden
          style={{ left: sx, top: sy }}
          animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-xl"
        >
          <ArrowUpRight width={22} height={22} />
        </motion.span>
      </div>
      <div className="px-3 pt-5 sm:px-4">
        <h3 className="text-xl leading-snug font-medium text-ink sm:text-2xl">{project.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted" aria-label="Tech stack">
          {project.stack.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="size-1 rounded-full bg-ink/25" />}
              {s}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
