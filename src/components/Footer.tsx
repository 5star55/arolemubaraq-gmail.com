import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink-soft px-4 py-8 text-sm text-white/50 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>Built with Next.js · {profile.location}</p>
      </div>
    </footer>
  );
}
