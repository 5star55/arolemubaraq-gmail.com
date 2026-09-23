"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";

export default function SkillsMarquee() {
  const row = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-6" aria-label="Skills">
      <motion.ul
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {row.map((s, i) => (
          <li key={i} aria-hidden={i >= skills.length} className="flex items-center gap-12 text-2xl font-medium text-ink/70 uppercase sm:text-3xl">
            {s}
            <span className="size-2 rounded-full bg-ink/25" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
