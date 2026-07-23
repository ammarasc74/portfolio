import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/8 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <span aria-hidden="true" className="mx-auto mb-8 block h-px w-12 bg-accent" />
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Get in touch</h2>
        <p className="mx-auto mt-3 max-w-md text-body">
          Open to React Native and mobile engineering roles.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition hover:bg-ink/80"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in new tab)"
            className="font-semibold text-muted underline-offset-4 transition hover:text-ink hover:underline"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="font-semibold text-muted underline-offset-4 transition hover:text-ink hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-14 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
