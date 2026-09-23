import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, socialIcons } from "./icons";
import type { Social } from "@/lib/data";

export function AvailablePill({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium whitespace-nowrap shadow-[0_8px_24px_-8px_rgb(0_0_0/0.18)] ring-1 ring-black/5 ${className}`}
    >
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
        <span className="relative inline-flex size-2.5 rounded-full bg-live" />
      </span>
      Available<span className="hidden sm:inline"> for New Project</span>
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  arrow?: boolean;
  className?: string;
};

export function PillButton({ href, children, variant = "dark", arrow = true, className = "" }: ButtonProps) {
  const styles =
    variant === "dark"
      ? "bg-ink text-white shadow-[0_10px_24px_-10px_rgb(0_0_0/0.6)] hover:bg-black"
      : "bg-card text-ink ring-1 ring-black/10 hover:ring-black/30";
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf");
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );
  const cls = `group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`;
  return external ? (
    <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex rounded-full bg-card px-4 py-1.5 text-sm font-medium text-ink/80 ring-1 ring-black/10 ${className}`}>
      {children}
    </span>
  );
}

export function SocialPill({ social }: { social: Social }) {
  const Icon = socialIcons[social.icon];
  const external = !social.href.startsWith("mailto:");
  return (
    <a
      href={social.href}
      target={external ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
    >
      <Icon />
      {social.label}
    </a>
  );
}

export function SectionTitle({
  watermark,
  title,
  dark = false,
  align = "left",
  aside,
}: {
  watermark: string;
  title: string;
  dark?: boolean;
  align?: "left" | "center";
  aside?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <div className={`relative flex items-end justify-between gap-6 pt-10 sm:pt-16 ${centered ? "justify-center text-center" : ""}`}>
      <span
        aria-hidden
        style={{ fontSize: `min(11rem, ${Math.round(95 / watermark.length)}vw)` }}
        className={`watermark absolute top-0 ${centered ? "left-1/2 -translate-x-1/2" : "-left-1"} ${dark ? "text-white/[0.04]" : "text-black/[0.04]"}`}
      >
        {watermark}
      </span>
      <h2
        className={`relative text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase tracking-tight ${dark ? "text-white" : "text-ink"}`}
      >
        /{title}
      </h2>
      {aside && <div className={`relative pb-2 text-sm sm:text-lg ${dark ? "text-white/85" : "text-muted"}`}>{aside}</div>}
    </div>
  );
}
