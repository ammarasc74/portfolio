import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-36 sm:pb-28 sm:pt-48">
      <span aria-hidden="true" className="mb-8 block h-px w-12 bg-accent sm:mb-10" />
      <h1 className="max-w-4xl text-[2.75rem] font-bold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">
        {profile.title}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
        {profile.heroLine}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-ink/80"
        >
          View projects
        </a>
        <a
          href={profile.cvPath}
          className="rounded-full border border-ink/15 bg-white px-7 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
