"use client";

import { motion } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { ease } from "@/components/Reveal";

// Skip the curtain on the first page load so content isn't hidden until hydration.
let hasMounted = false;

// Re-mounts on every navigation: a dark curtain wipes up off the new page.
export default function Template({ children }: { children: ReactNode }) {
  const play = hasMounted;
  useEffect(() => {
    hasMounted = true;
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] origin-top bg-ink-soft"
        initial={play ? { scaleY: 1 } : false}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.05 }}
      />
      {children}
    </>
  );
}
