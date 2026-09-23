"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Reveal, ease } from "./Reveal";
import { PillButton, SectionTitle } from "./ui";
import { projects, type ProjectKind } from "@/lib/data";

const filters: ("All" | ProjectKind)[] = ["All", "Real Project", "Side Project"];

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.kind === filter);

  return (
    <section id="work" className="scroll-mt-24 bg-paper px-4 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionTitle watermark="PORTFOLIO" title="Selected Work" align="center" />
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center justify-between gap-4 sm:mt-20">
          <div className="flex gap-1 rounded-full">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className="relative rounded-full px-4 py-2 text-[15px] font-medium text-ink"
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-card ring-1 ring-black/10"
                    transition={{ duration: 0.4, ease }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
          <PillButton href="https://github.com/5star55" variant="light">
            View GitHub
          </PillButton>
        </Reveal>

        <motion.div layout className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease, delay: (i % 2) * 0.12 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
