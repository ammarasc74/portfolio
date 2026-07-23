import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Experience</h2>
        <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
      </div>
      <ol className="mt-10 space-y-8 border-l border-ink/10 pl-8">
        {profile.experience.map((e) => (
          <li key={`${e.company}-${e.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37.5px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-paper"
            />
            <p className="font-mono text-xs tracking-wide text-muted">{e.period}</p>
            <p className="mt-1 font-semibold text-ink">
              {e.role} · {e.company}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
