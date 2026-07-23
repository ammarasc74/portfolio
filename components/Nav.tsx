import { profile } from "@/data/profile";

const LINKS = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <nav className="flex items-center rounded-full border border-ink/8 bg-white/85 p-1.5 shadow-lg shadow-ink/5 backdrop-blur-md">
        <a
          href="#top"
          className="hidden items-center rounded-full px-4 py-1.5 text-sm font-semibold text-ink transition hover:bg-ink/5 sm:inline-flex"
        >
          {profile.name}
        </a>
        <span aria-hidden="true" className="mx-1 hidden h-4 w-px bg-ink/10 sm:block" />
        {LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="rounded-full px-2.5 py-1.5 text-[13px] text-muted transition hover:bg-ink/5 hover:text-ink sm:px-3.5 sm:text-sm"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
