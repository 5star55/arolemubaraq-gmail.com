"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Close } from "./icons";
import { Reveal, ease } from "./Reveal";
import { SectionTitle } from "./ui";
import { services } from "@/lib/data";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22 });
  const sy = useSpring(y, { stiffness: 180, damping: 22 });

  return (
    <section id="service" className="scroll-mt-24 bg-paper px-4 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle watermark="SERVICE" title="Service" />
        </Reveal>

        <ul
          className="relative mt-14 sm:mt-20"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - r.left);
            y.set(e.clientY - r.top);
          }}
          onPointerLeave={() => setActive(null)}
        >
          {services.map((s, i) => {
            const open = active === i;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                onClick={() => setActive(open ? null : i)}
                className="relative cursor-pointer border-b border-line"
              >
                <motion.div
                  aria-hidden
                  initial={false}
                  animate={{ scaleY: open ? 1 : 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute inset-0 origin-bottom rounded-sm bg-[#555]"
                />
                <div className="relative flex items-center justify-between gap-6 px-4 py-8 sm:px-6 sm:py-10">
                  <div>
                    <h3
                      className={`text-[clamp(1.75rem,5.5vw,4rem)] leading-none font-medium tracking-tight uppercase transition-colors duration-300 ${open ? "text-white" : "text-ink"}`}
                    >
                      {s.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="max-w-md overflow-hidden text-base leading-relaxed text-white/80 sm:text-lg"
                        >
                          <span className="block pt-4">{s.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={`shrink-0 transition-colors duration-300 ${open ? "text-white" : "text-ink"}`}>
                    {open ? <Close width={36} height={36} strokeWidth={1.4} /> : <ArrowUpRight width={36} height={36} strokeWidth={1.4} />}
                  </span>
                </div>
              </motion.li>
            );
          })}

          <AnimatePresence>
            {active !== null && services[active].image && (
              <motion.div
                key={active}
                aria-hidden
                style={{ left: sx, top: sy }}
                initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 8 }}
                exit={{ opacity: 0, scale: 0.7, rotate: 0 }}
                transition={{ duration: 0.4, ease }}
                className="pointer-events-none absolute z-10 hidden aspect-[16/10] w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md bg-white p-1.5 shadow-2xl md:block lg:w-80"
              >
                <div className="relative size-full overflow-hidden rounded-sm">
                  <Image src={services[active].image!} alt="" fill sizes="320px" className="object-cover object-top" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
