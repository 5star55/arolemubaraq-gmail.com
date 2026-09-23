"use client";

import { motion } from "motion/react";
import { Fragment, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Splits text into letters that rise and sharpen in one after another. */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  const animate = { opacity: 1, y: "0%", filter: "blur(0px)" };
  // Letters are grouped per word so lines can only break between words.
  let index = 0;
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, w) => (
        <Fragment key={w}>
          {w > 0 && " "}
          <span aria-hidden className="inline-block whitespace-nowrap">
            {Array.from(word).map((char) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: "60%", filter: "blur(8px)" }}
                  {...(inView ? { whileInView: animate, viewport: { once: true } } : { animate })}
                  transition={{ duration: 0.7, ease, delay: delay + i * stagger }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </span>
  );
}

export { ease };
