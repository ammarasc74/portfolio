import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-xl text-blue-700">{profile.title}</p>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600">
        {profile.heroLine}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          View projects
        </a>
        <a
          href={profile.cvPath}
          className="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-500"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
