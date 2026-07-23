import Image from "next/image";
import type { Project } from "@/data/projects";
import StoreBadge from "@/components/StoreBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-3xl border border-ink/8 bg-white p-6 transition-colors duration-300 hover:border-ink/20">
      {project.screenshots[0] && (
        <div className="mb-5 overflow-hidden rounded-2xl border border-ink/8 bg-paper">
          <Image
            src={project.screenshots[0]}
            alt={`${project.name} screenshot`}
            width={400}
            height={300}
            className="h-40 w-full object-cover object-top"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
      <p className="mt-0.5 text-sm font-semibold text-accent">{project.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
        {project.contribution}
      </p>
      <ul role="list" className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-ink/8 bg-paper px-2.5 py-0.5 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <StoreBadge key={l.url} link={l} appName={project.name} />
          ))}
        </div>
      )}
    </article>
  );
}
