import Image from "next/image";
import { featured } from "@/data/projects";
import StoreBadge from "@/components/StoreBadge";

export default function FeaturedProject() {
  return (
    <section className="border-y border-ink/8 bg-white">
      <div className="mx-auto grid max-w-5xl gap-14 px-6 py-20 sm:grid-cols-2 sm:items-center sm:py-28 lg:gap-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Featured project
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {featured.name}
          </h2>
          <p className="mt-3 text-lg text-muted">{featured.tagline}</p>
          <p className="mt-5 leading-relaxed text-body">{featured.contribution}</p>
          <ul role="list" className="mt-6 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-ink/8 bg-paper px-3 py-1 text-xs font-semibold text-body"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {featured.links.map((l) => (
              <StoreBadge key={l.url} link={l} appName={featured.name} />
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 bottom-4 rounded-[3rem] border border-accent/10 bg-accent/5"
          />
          <div className="relative flex items-start justify-center gap-5 px-4 py-10 sm:gap-6">
            {featured.screenshots.slice(0, 2).map((src, i) => (
              <div
                key={src}
                className={`w-32 overflow-hidden rounded-[2rem] border-[5px] border-ink bg-ink shadow-2xl shadow-ink/25 sm:w-44 ${
                  i === 1 ? "mt-14" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${featured.name} screenshot ${i + 1}`}
                  width={360}
                  height={780}
                  className="h-auto w-full rounded-[1.7rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
