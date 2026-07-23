import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Skills</h2>
        <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
      </div>
      <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group} className="border-t border-ink/10 pt-5">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {group}
            </h3>
            <ul role="list" className="mt-5 flex flex-wrap gap-2">
              {items.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm text-body"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
