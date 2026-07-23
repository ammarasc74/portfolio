import type { ProjectLink } from "@/data/projects";

const LABELS: Record<ProjectLink["store"], [string, string]> = {
  appstore: ["Download on the", "App Store"],
  googleplay: ["Get it on", "Google Play"],
  appgallery: ["Explore it on", "AppGallery"],
  web: ["Visit the", "Website"],
};

export default function StoreBadge({ link, appName }: { link: ProjectLink; appName?: string }) {
  const [kicker, name] = LABELS[link.store];
  const label = `${appName ? `${appName} on ` : ""}${name} (opens in new tab)`;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex flex-col rounded-xl bg-ink px-5 py-2 text-white transition hover:bg-body"
    >
      <span className="text-[10px] leading-tight text-neutral-300">{kicker}</span>
      <span className="text-sm font-semibold leading-tight">{name}</span>
    </a>
  );
}
