import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900">Skills</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              {group}
            </h3>
            <ul role="list" className="mt-3 flex flex-wrap gap-1.5">
              {items.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-white px-3 py-1 text-sm text-neutral-700 ring-1 ring-neutral-200"
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
