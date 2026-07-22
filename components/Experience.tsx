import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900">Experience</h2>
      <ol className="mt-6 space-y-4 border-l border-neutral-200 pl-6">
        {profile.experience.map((e) => (
          <li key={`${e.company}-${e.period}`} className="relative">
            <span aria-hidden="true" className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-blue-700" />
            <p className="text-sm text-neutral-500">{e.period}</p>
            <p className="font-medium text-neutral-900">
              {e.role} · {e.company}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
