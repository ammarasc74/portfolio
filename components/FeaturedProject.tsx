import Image from "next/image";
import { featured } from "@/data/projects";
import StoreBadge from "@/components/StoreBadge";

export default function FeaturedProject() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
            Featured project
          </p>
          <h2 className="mt-1 text-3xl font-bold text-neutral-900">{featured.name}</h2>
          <p className="mt-1 text-lg text-neutral-500">{featured.tagline}</p>
          <p className="mt-4 leading-relaxed text-neutral-600">{featured.contribution}</p>
          <ul role="list" className="mt-4 flex flex-wrap gap-1.5">
            {featured.tech.map((t) => (
              <li key={t} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.links.map((l) => (
              <StoreBadge key={l.url} link={l} appName={featured.name} />
            ))}
          </div>
        </div>
        <div className="flex items-start justify-center gap-4">
          {featured.screenshots.slice(0, 2).map((src, i) => (
            <div
              key={src}
              className={`w-40 overflow-hidden rounded-[1.6rem] border-4 border-neutral-900 bg-neutral-900 sm:w-44 ${i === 1 ? "mt-10" : ""}`}
            >
              <Image src={src} alt={`${featured.name} screenshot ${i + 1}`} width={360} height={780} className="h-auto w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
