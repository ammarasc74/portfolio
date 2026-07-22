import { profile } from "@/data/profile";

const LINKS = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200/80 bg-[#FDFDFB]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-semibold text-neutral-900">
          {profile.name}
        </a>
        <div className="flex gap-4 text-sm text-neutral-600 sm:gap-6">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-neutral-900">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
