import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">Get in touch</h2>
        <p className="mx-auto mt-2 max-w-md text-neutral-600">
          Open to React Native and mobile engineering roles.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-neutral-900 px-6 py-2.5 font-medium text-white transition hover:bg-neutral-700">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className="text-neutral-600 underline-offset-4 transition hover:text-neutral-900 hover:underline">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" className="text-neutral-600 underline-offset-4 transition hover:text-neutral-900 hover:underline">
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
