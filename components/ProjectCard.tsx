import Image from "next/image";
import type { Project } from "@/data/projects";
import StoreBadge from "@/components/StoreBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300">
      {project.screenshots[0] && (
        <div className="mb-4 overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={project.screenshots[0]}
            alt={`${project.name} screenshot`}
            width={400}
            height={300}
            className="h-40 w-full object-cover object-top"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-neutral-900">{project.name}</h3>
      <p className="text-sm text-blue-700">{project.tagline}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
        {project.contribution}
      </p>
      <ul role="list" className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700"
          >
            {t}
          </li>
        ))}
      </ul>
      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <StoreBadge key={l.url} link={l} appName={project.name} />
          ))}
        </div>
      )}
    </article>
  );
}
