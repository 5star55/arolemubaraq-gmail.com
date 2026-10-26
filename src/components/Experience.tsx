"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import { Reveal, ease } from "./Reveal";
import { SectionTitle } from "./ui";
import { ArrowUpRight } from "./icons";
import { certifications, experience } from "@/lib/data";

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 24 });
  const sy = useSpring(y, { stiffness: 200, damping: 24 });
  const image = active !== null ? experience[active].image : undefined;

  return (
    <section id="experience" className="scroll-mt-24 bg-ink-soft px-4 pb-24 text-white sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle watermark="EXPERIENCE" title="Experience" dark aside="Final-year SWE student" />
        </Reveal>

        <ul
          className="relative mt-12 sm:mt-16"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - r.left);
            y.set(e.clientY - r.top);
          }}
          onPointerLeave={() => setActive(null)}
        >
          {experience.map((job, i) => (
            <motion.li
              key={job.org + job.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              onPointerEnter={() => setActive(i)}
              className="group flex flex-col gap-2 border-b border-white/10 px-2 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-8"
            >
              <div>
                <p className="text-lg font-medium sm:text-2xl">{job.org}</p>
                <p className="mt-2 text-base text-white/50 transition-colors duration-300 group-hover:text-white/80 sm:text-xl">
                  {job.role}
                </p>
              </div>
              <p className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white sm:text-xl">
                {job.period}
              </p>
            </motion.li>
          ))}

          <AnimatePresence>
            {image && (
              <motion.div
                key={image}
                aria-hidden
                style={{ left: sx, top: sy }}
                initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 7 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.35, ease }}
                className="pointer-events-none absolute z-10 hidden aspect-[16/11] w-72 translate-x-6 -translate-y-1/2 overflow-hidden rounded-md bg-white/90 p-1.5 shadow-2xl md:block"
              >
                <div className="relative size-full overflow-hidden rounded-sm">
                  <Image src={image} alt="" fill sizes="288px" className="object-cover object-top" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>

        <Reveal className="mt-20 sm:mt-28">
          <h3 className="px-2 text-sm font-medium tracking-[0.2em] text-white/50 uppercase sm:px-4">Certifications</h3>
        </Reveal>
        <ul className="mt-4">
          {certifications.map((cert, i) => (
            <motion.li
              key={cert.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="border-b border-white/10"
            >
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 px-2 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-8"
              >
                <div>
                  <p className="flex items-center gap-2 text-lg font-medium sm:text-2xl">
                    {cert.name}
                    <ArrowUpRight
                      width={20}
                      height={20}
                      className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </p>
                  <p className="mt-2 text-base text-white/50 transition-colors duration-300 group-hover:text-white/80 sm:text-xl">
                    {cert.issuer}
                  </p>
                </div>
                <p className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white sm:text-xl">
                  {cert.date}
                </p>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
