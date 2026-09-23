"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AvailablePill, PillButton } from "./ui";
import { experience, profile, projects, services } from "@/lib/data";
import { ease } from "./Reveal";

const links = [
  { label: "Work", href: "/#work", count: projects.length },
  { label: "Service", href: "/#service", count: services.length },
  { label: "Experience", href: "/#experience", count: experience.length },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled ? "bg-white/70 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.2)] ring-1 ring-black/5 backdrop-blur-xl" : ""
        }`}
      >
        {profile.available ? <AvailablePill /> : <span className="px-4 font-semibold">{profile.firstName}</span>}

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="group relative text-[15px] font-medium text-ink">
                {l.label}
                {l.count !== undefined && <span className="ml-1.5 text-xs text-faint">[{l.count}]</span>}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <PillButton href={`mailto:${profile.email}`}>Let&apos;s Talk</PillButton>
          </span>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-full bg-ink lg:hidden"
          >
            <span className={`h-px w-4 bg-white transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-white transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
            className="mx-auto mt-3 max-w-7xl space-y-1 rounded-3xl bg-white/90 p-3 shadow-xl ring-1 ring-black/5 backdrop-blur-xl lg:hidden"
          >
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium hover:bg-paper"
                >
                  {l.label}
                  {l.count !== undefined && <span className="text-sm text-faint">[{l.count}]</span>}
                </Link>
              </li>
            ))}
            <li className="px-1 pt-2 sm:hidden">
              <PillButton href={`mailto:${profile.email}`} className="w-full justify-center">
                Let&apos;s Talk
              </PillButton>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
