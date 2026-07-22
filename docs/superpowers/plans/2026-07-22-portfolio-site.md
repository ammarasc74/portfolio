# Portfolio Site + CV Tune-up Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a one-page portfolio site for React Native developer Ammar Yasser, and produce an updated CV that links to it.

**Architecture:** Next.js App Router with static export (`output: 'export'`), all project content in typed data files under `data/`, presentational components under `components/`, single page assembled in `app/page.tsx`. Deployed to Vercel free tier. CV is an HTML print template rendered to PDF with headless Chrome, served from `public/`.

**Tech Stack:** Next.js 15 + TypeScript + Tailwind CSS (create-next-app defaults), Vitest + React Testing Library, Vercel CLI, headless Chrome for PDF/OG generation.

**Spec:** `docs/superpowers/specs/2026-07-22-portfolio-site-design.md` — read it first. Key constraints: clean minimal **light** design (near-white bg, dark text, single blue accent, pill buttons), English only, mobile-first, and the honesty rule: **only claim store listings verified live with a working URL.**

**Environment notes:**
- 8 GB M1 Mac, disk-tight — do not install anything beyond what this plan lists.
- Repo already exists at `~/projects/portfolio` (contains `docs/` and `.git` only, branch `master`).
- GitHub auth: the user's personal SSH key is configured (`ssh -T git@github.com` prints the username). Do NOT use HTTPS remotes — the keychain token belongs to a different account.
- Every commit message ends with the trailer: `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`

---

### Task 1: Scaffold Next.js project with static export

**Files:**
- Create: entire Next.js scaffold in `~/projects/portfolio/` (app/, public/, package.json, …)
- Modify: `next.config.ts`

- [ ] **Step 1: Verify node version**

Run: `node -v`
Expected: v18.18+ (ideally v20+). If lower, STOP and report to the user — do not install node yourself.

- [ ] **Step 2: Scaffold (create-next-app refuses non-empty dirs, so park `docs/` first)**

```bash
cd ~/projects/portfolio
mv docs /tmp/portfolio-docs-parked
npx create-next-app@latest . --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
mv /tmp/portfolio-docs-parked docs
```

- [ ] **Step 3: Enable static export in `next.config.ts` (replace file contents)**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```

- [ ] **Step 4: Verify the build produces a static export**

Run: `npm run build`
Expected: build succeeds and an `out/` directory exists containing `index.html`.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app with static export

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Test infrastructure (Vitest + React Testing Library)

**Files:**
- Create: `vitest.config.mts`, `vitest.setup.ts`, `__tests__/smoke.test.tsx`
- Modify: `package.json` (scripts)

- [ ] **Step 1: Install dev dependencies**

```bash
npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/dom
```

- [ ] **Step 2: Create `vitest.config.mts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", setupFiles: "./vitest.setup.ts" },
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
});
```

- [ ] **Step 3: Create `vitest.setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 4: Add test script to `package.json` scripts block**

```json
"test": "vitest run"
```

- [ ] **Step 5: Create `__tests__/smoke.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";

test("test infra renders JSX", () => {
  render(<h1>hello</h1>);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
```

- [ ] **Step 6: Run tests**

Run: `npm test`
Expected: 1 passed.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: add vitest + react-testing-library

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Collect and verify links + screenshots (content gate)

This task gates the honesty rule. Nothing goes in the data file unless verified here.

**Files:**
- Create: `public/screenshots/manafith/*.png` (copied), `docs/superpowers/plans/link-inventory.md` (verification record)

- [ ] **Step 1: Verify candidate URLs are live**

Check each with: `curl -s -o /dev/null -w "%{http_code}" -L "<url>"` (expect `200`; Play/App Store sometimes return `403` to curl — if so, verify by loading the URL in the Browser pane and confirming the listing shows the app):

- Google Play: `https://play.google.com/store/apps/details?id=com.najm.manafeth`
- Munaseq site: `https://munaseq.ai`
- App Store: search `https://itunes.apple.com/search?term=manafith&country=sa&entity=software` (also try `manafeth`) and take the `trackViewUrl` from the JSON result. If no result, the app has no live iOS listing — record that and omit the App Store badge.
- AppGallery: search the web for `Manafith AppGallery` / `site:appgallery.huawei.com manafeth`. If no public listing URL is found, omit the AppGallery badge.

- [ ] **Step 2: Ask the user for personal links (AskUserQuestion or direct message)**

Ask for: GitHub profile URL, LinkedIn profile URL, public contact email (default `ammar.business24@gmail.com`), and any store/web links they know for Glogo, In House, Dentaly, Life Right, Fantasia, Aqarbot. Projects without verified links simply render without link buttons — that is fine.

- [ ] **Step 3: Copy Manafith screenshots**

```bash
ls ~/Desktop/manafith-store-design
mkdir -p public/screenshots/manafith
```

Pick 2–3 portrait phone panels (prefer English 1080×1920 if present, otherwise Arabic — it is a Saudi app, Arabic screens are authentic) and copy them as `public/screenshots/manafith/shot-1.png`, `shot-2.png`, `shot-3.png`. If files exceed ~500 KB each, downscale: `sips -Z 1200 <file>`.

- [ ] **Step 4: Record results in `docs/superpowers/plans/link-inventory.md`**

Write a table: URL → status (verified live / not found / user-provided) → date. Later tasks read this file to know which links exist.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "content: add verified link inventory and Manafith screenshots

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Typed project/experience/skills data (TDD)

**Files:**
- Create: `data/projects.ts`, `data/profile.ts`, `__tests__/data.test.ts`

- [ ] **Step 1: Write the failing test `__tests__/data.test.ts`**

```ts
import { projects, featured } from "@/data/projects";
import { profile } from "@/data/profile";

test("exactly one featured project, and it is Manafith with screenshots", () => {
  expect(featured.name).toBe("Manafith");
  expect(featured.screenshots.length).toBeGreaterThanOrEqual(2);
  expect(projects.filter((p) => p.featured)).toHaveLength(1);
});

test("every project states a personal contribution, not just an app description", () => {
  for (const p of projects) {
    expect(p.tagline.length, p.name).toBeGreaterThan(10);
    expect(p.contribution.length, p.name).toBeGreaterThan(20);
    expect(p.tech.length, p.name).toBeGreaterThanOrEqual(2);
    expect(p.tech.length, p.name).toBeLessThanOrEqual(6);
  }
});

test("all links are https and non-empty", () => {
  for (const p of projects) {
    for (const l of p.links) {
      expect(l.url, `${p.name} ${l.store}`).toMatch(/^https:\/\/.+/);
    }
  }
});

test("profile has contact links", () => {
  expect(profile.email).toContain("@");
  expect(profile.github).toMatch(/^https:\/\/github\.com\//);
  expect(profile.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//);
});
```

- [ ] **Step 2: Run to verify failure**

Run: `npm test`
Expected: FAIL — cannot resolve `@/data/projects`.

- [ ] **Step 3: Create `data/projects.ts`**

Use this content. **Replace the `links` arrays with exactly what Task 3's `link-inventory.md` verified** — include only verified/user-provided URLs, drop the rest. The copy below is final (edit only if the user corrects facts).

```ts
export type Store = "appstore" | "googleplay" | "appgallery" | "web";

export interface ProjectLink {
  store: Store;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  contribution: string;
  tech: string[];
  links: ProjectLink[];
  screenshots: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "manafith",
    name: "Manafith",
    tagline: "Vehicle insurance app for the Saudi market",
    contribution:
      "Built and shipped the app end to end: policy purchase and vehicle flows, chassis-number verification, plate configuration, payment integration, and a full Arabic RTL experience — released to the App Store, Google Play, and Huawei AppGallery.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
    links: [
      { store: "googleplay", url: "https://play.google.com/store/apps/details?id=com.najm.manafeth" },
    ],
    screenshots: [
      "/screenshots/manafith/shot-1.png",
      "/screenshots/manafith/shot-2.png",
    ],
    featured: true,
  },
  {
    slug: "munaseq",
    name: "Munaseq",
    tagline: "AI-powered social media listening platform",
    contribution:
      "Built the web front-end in Next.js: dashboards for monitoring and analyzing social conversations across platforms.",
    tech: ["Next.js", "React", "TypeScript"],
    links: [{ store: "web", url: "https://munaseq.ai" }],
    screenshots: [],
  },
  {
    slug: "inhouse",
    name: "In House",
    tagline: "Furniture e-commerce app",
    contribution:
      "Maintained and extended the shopping experience: checkout integration, delivery-address management, and business-driven features across iOS and Android.",
    tech: ["React Native", "Redux Toolkit", "Shopify Restyle", "Firebase"],
    links: [],
    screenshots: [],
  },
  {
    slug: "glogo",
    name: "Glogo",
    tagline: "Ride-sharing app connecting drivers and passengers",
    contribution:
      "Implemented real-time trip tracking over socket connections and the ride status flows from request to drop-off.",
    tech: ["React Native", "Socket.IO", "REST APIs"],
    links: [],
    screenshots: [],
  },
  {
    slug: "dentaly",
    name: "Dentaly",
    tagline: "All-in-one dashboard for dental practitioners and clinics",
    contribution:
      "Built practitioner and clinic workflows: patient management, scheduling, and clinical operations screens.",
    tech: ["React Native", "TypeScript"],
    links: [],
    screenshots: [],
  },
  {
    slug: "life-right",
    name: "Life Right",
    tagline: "Emergency medical consultations over instant video calls",
    contribution:
      "Built the patient-to-doctor video call flows for rapid emergency consultations.",
    tech: ["React Native", "WebRTC"],
    links: [],
    screenshots: [],
  },
  {
    slug: "fantasia",
    name: "Fantasia",
    tagline: "Fantasy sports app scored by real match results",
    contribution:
      "Built team selection and live scoring driven by real team results and player stats.",
    tech: ["React Native", "REST APIs"],
    links: [],
    screenshots: [],
  },
  {
    slug: "aqarbot",
    name: "Aqarbot",
    tagline: "Real-estate chatbot for requesting and offering properties",
    contribution:
      "Built chatbot-driven flows for clients and brokers to request and offer housing units and land.",
    tech: ["React Native", "REST APIs"],
    links: [],
    screenshots: [],
  },
];

export const featured: Project = projects.find((p) => p.featured)!;
```

- [ ] **Step 4: Create `data/profile.ts`**

Fill `github`, `linkedin`, `email` from Task 3's user answers.

```ts
export const profile = {
  name: "Ammar Yasser",
  title: "React Native Developer",
  heroLine:
    "I build and ship cross-platform mobile apps for clients in Saudi Arabia and beyond.",
  email: "ammar.business24@gmail.com",
  github: "https://github.com/USERNAME-FROM-TASK-3",
  linkedin: "https://www.linkedin.com/in/HANDLE-FROM-TASK-3",
  cvPath: "/Ammar_Yasser_CV.pdf",
  experience: [
    { period: "2025 – Present", role: "React Native Developer", company: "In-House" },
    { period: "2025", role: "React Native Developer", company: "Appcorp" },
    { period: "2024", role: "React Native Developer", company: "Pharosoft" },
    { period: "2022 – 2023", role: "React Native Developer", company: "In-House" },
    { period: "2021 – 2022", role: "Full-stack Developer", company: "Valoro" },
  ],
  skills: {
    Mobile: [
      "React Native", "TypeScript", "React Navigation", "Redux Toolkit",
      "React Query", "Shopify Restyle", "Firebase", "OneSignal",
      "App Store / Play / AppGallery publishing",
    ],
    Backend: [
      "Node.js", "Express", "REST & GraphQL", "JWT / OAuth",
      "MySQL", "MongoDB", "Redis", "Socket.IO",
    ],
    "DevOps & Tools": [
      "GitHub Actions CI/CD", "Git", "Docker", "AWS S3 / EC2", "Jira",
    ],
  },
} as const;
```

- [ ] **Step 5: Run tests**

Run: `npm test`
Expected: PASS (all 4 data tests + smoke). If the profile test fails because Task 3 answers are missing, get them before proceeding — do not fake URLs.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add typed project and profile data

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: StoreBadge + ProjectCard components (TDD)

**Files:**
- Create: `components/StoreBadge.tsx`, `components/ProjectCard.tsx`, `__tests__/project-card.test.tsx`

- [ ] **Step 1: Write the failing test `__tests__/project-card.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

const base: Project = {
  slug: "x",
  name: "TestApp",
  tagline: "A test app",
  contribution: "Built the whole thing including the test suite",
  tech: ["React Native", "TypeScript"],
  links: [{ store: "googleplay", url: "https://play.google.com/store/apps/details?id=x" }],
  screenshots: [],
};

test("renders name, tagline, contribution, tech chips and link", () => {
  render(<ProjectCard project={base} />);
  expect(screen.getByText("TestApp")).toBeInTheDocument();
  expect(screen.getByText("A test app")).toBeInTheDocument();
  expect(screen.getByText(/Built the whole thing/)).toBeInTheDocument();
  expect(screen.getByText("React Native")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /google play/i })).toHaveAttribute(
    "href",
    "https://play.google.com/store/apps/details?id=x"
  );
});

test("renders no links section and no image when project has none", () => {
  render(<ProjectCard project={{ ...base, links: [] }} />);
  expect(screen.queryByRole("link")).toBeNull();
  expect(screen.queryByRole("img")).toBeNull();
});
```

- [ ] **Step 2: Run to verify failure**

Run: `npm test`
Expected: FAIL — cannot resolve `@/components/ProjectCard`.

- [ ] **Step 3: Create `components/StoreBadge.tsx`**

```tsx
import type { ProjectLink } from "@/data/projects";

const LABELS: Record<ProjectLink["store"], [string, string]> = {
  appstore: ["Download on the", "App Store"],
  googleplay: ["Get it on", "Google Play"],
  appgallery: ["Explore it on", "AppGallery"],
  web: ["Visit the", "Website"],
};

export default function StoreBadge({ link }: { link: ProjectLink }) {
  const [kicker, name] = LABELS[link.store];
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="inline-flex flex-col rounded-full bg-neutral-900 px-5 py-2 text-white transition hover:bg-neutral-700"
    >
      <span className="text-[10px] leading-tight text-neutral-300">{kicker}</span>
      <span className="text-sm font-medium leading-tight">{name}</span>
    </a>
  );
}
```

- [ ] **Step 4: Create `components/ProjectCard.tsx`**

```tsx
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
      <ul className="mt-4 flex flex-wrap gap-1.5">
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
            <StoreBadge key={l.url} link={l} />
          ))}
        </div>
      )}
    </article>
  );
}
```

- [ ] **Step 5: Run tests**

Run: `npm test`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add StoreBadge and ProjectCard components

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Nav, Hero, Skills, Experience, Footer components

Static presentational components — no TDD cycle needed beyond the page-level render test in Task 7; keep them dumb.

**Files:**
- Create: `components/Nav.tsx`, `components/Hero.tsx`, `components/Skills.tsx`, `components/Experience.tsx`, `components/Footer.tsx`

- [ ] **Step 1: Create `components/Nav.tsx`**

```tsx
import { profile } from "@/data/profile";

const LINKS = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200/80 bg-[#FDFDFB]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-semibold text-neutral-900">
          {profile.name}
        </a>
        <div className="flex gap-4 text-sm text-neutral-600 sm:gap-6">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-neutral-900">
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Create `components/Hero.tsx`**

```tsx
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-xl text-blue-700">{profile.title}</p>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600">
        {profile.heroLine}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          View projects
        </a>
        <a
          href={profile.cvPath}
          className="rounded-full border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-500"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/Skills.tsx`**

```tsx
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
            <ul className="mt-3 flex flex-wrap gap-1.5">
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
```

- [ ] **Step 4: Create `components/Experience.tsx`**

```tsx
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900">Experience</h2>
      <ol className="mt-6 space-y-4 border-l border-neutral-200 pl-6">
        {profile.experience.map((e) => (
          <li key={`${e.company}-${e.period}`} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-blue-700" />
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
```

- [ ] **Step 5: Create `components/Footer.tsx`**

```tsx
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
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-neutral-600 underline-offset-4 transition hover:text-neutral-900 hover:underline">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-600 underline-offset-4 transition hover:text-neutral-900 hover:underline">
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-neutral-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 6: Verify everything still compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add nav, hero, skills, experience, footer components

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 7: Featured section + page assembly + metadata (TDD at page level)

**Files:**
- Create: `components/FeaturedProject.tsx`, `__tests__/page.test.tsx`
- Modify: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`

- [ ] **Step 1: Write the failing test `__tests__/page.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("one-page portfolio renders all sections in order", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: /ammar yasser/i })).toBeInTheDocument();
  expect(screen.getByText(/featured project/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^projects$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^skills$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^experience$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /get in touch/i })).toBeInTheDocument();
});

test("featured Manafith section shows store badges", () => {
  render(<Page />);
  expect(screen.getAllByText("Manafith").length).toBeGreaterThanOrEqual(1);
  expect(screen.getAllByRole("link", { name: /google play/i }).length).toBeGreaterThanOrEqual(1);
});
```

- [ ] **Step 2: Run to verify failure**

Run: `npm test`
Expected: FAIL (default scaffold page has none of these headings).

- [ ] **Step 3: Create `components/FeaturedProject.tsx`**

```tsx
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
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {featured.tech.map((t) => (
              <li key={t} className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-700">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {featured.links.map((l) => (
              <StoreBadge key={l.url} link={l} />
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-4">
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
```

- [ ] **Step 4: Replace `app/page.tsx`**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <div className="bg-[#FDFDFB] text-neutral-900">
      <Nav />
      <main>
        <Hero />
        <FeaturedProject />
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-neutral-900">Projects</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((p) => !p.featured).map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Replace `app/layout.tsx` (keep the scaffold's font setup if present, update metadata)**

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ammar Yasser — React Native Developer",
  description:
    "React Native developer shipping cross-platform mobile apps — live on the App Store, Google Play, and Huawei AppGallery.",
  openGraph: {
    title: "Ammar Yasser — React Native Developer",
    description:
      "Cross-platform mobile apps, shipped: insurance, e-commerce, ride-sharing, healthcare.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
```

Note: if the scaffold's layout imports different font names (e.g. `Geist` + `Geist_Mono` with CSS variables), keep its working font wiring and only change `metadata`, `lang`, and add `scroll-smooth`.

- [ ] **Step 6: Run tests**

Run: `npm test`
Expected: PASS (all suites).

- [ ] **Step 7: Generate the OG image**

Create `scripts/og.html`:

```html
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  body { margin:0; width:1200px; height:630px; display:flex; flex-direction:column;
    justify-content:center; padding:0 90px; box-sizing:border-box;
    background:#FDFDFB; font-family:-apple-system, Helvetica, Arial, sans-serif; }
  h1 { font-size:64px; margin:0; color:#171717; }
  p.role { font-size:32px; color:#1d4ed8; margin:8px 0 24px; }
  p.line { font-size:26px; color:#525252; margin:0; max-width:900px; line-height:1.4; }
</style></head><body>
  <h1>Ammar Yasser</h1>
  <p class="role">React Native Developer</p>
  <p class="line">Cross-platform mobile apps, shipped — App Store, Google Play, Huawei AppGallery.</p>
</body></html>
```

Run:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot="$PWD/public/og.png" --window-size=1200,630 --hide-scrollbars "file://$PWD/scripts/og.html"
```

Expected: `public/og.png` exists, 1200×630 (`sips -g pixelWidth -g pixelHeight public/og.png`).

- [ ] **Step 8: Build**

Run: `npm run build`
Expected: static export succeeds, `out/index.html` contains "Manafith".

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: assemble one-page portfolio with featured Manafith section

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 8: Browser verification (responsive + links)

**Files:** none created — fixes go to whichever component needs them.

- [ ] **Step 1: Create `.claude/launch.json` for the dev server**

```json
{
  "version": "0.0.1",
  "configurations": [
    { "name": "portfolio", "runtimeExecutable": "npm", "runtimeArgs": ["run", "dev"], "port": 3000 }
  ]
}
```

- [ ] **Step 2: Start preview** — use the `preview_start` tool with `{name: "portfolio"}` (never Bash).

- [ ] **Step 3: Check console and structure**

Use `read_console_messages` (expect no errors) and `read_page` (verify all sections and every external link's href).

- [ ] **Step 4: Responsive check**

`resize_window` to mobile (375×812): verify nav doesn't overflow, featured screenshots stack acceptably, grid becomes single-column. Then desktop (1280×800). Take a screenshot at each size as proof.

- [ ] **Step 5: Fix anything broken** — edit source, re-verify from Step 3.

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: responsive polish from browser verification

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 9: CV rebuild (HTML → PDF)

**Files:**
- Create: `cv/cv.html`, `public/Ammar_Yasser_CV.pdf`

- [ ] **Step 1: Create `cv/cv.html`**

Single-file HTML print template, A4, same clean-minimal style. Content rules (from spec): Manafith first with store links; every project = what-it-is line + 1–2 "what I did" bullets + tech; portfolio URL in the header. Merge work history from `~/Downloads/AmmarResume.pdf` (fuller) with `~/Downloads/Ammar_CV.pdf` (newer). Use the deployed URL from Task 10 — if executing this task before deploy, use `PORTFOLIO_URL` as a marker and replace it in Task 10 Step 4.

```html
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 14mm 16mm; }
  body { font-family: -apple-system, Helvetica, Arial, sans-serif; color:#171717;
    font-size:10.5px; line-height:1.45; margin:0; }
  h1 { font-size:24px; margin:0; }
  .role { color:#1d4ed8; font-size:13px; margin:2px 0 6px; }
  .contact { color:#525252; font-size:10px; }
  .contact a { color:#1d4ed8; text-decoration:none; }
  h2 { font-size:12px; text-transform:uppercase; letter-spacing:0.06em;
    border-bottom:1px solid #d4d4d4; padding-bottom:3px; margin:14px 0 6px; }
  .job, .proj { margin-bottom:7px; }
  .job b, .proj b { font-size:11px; }
  .period { color:#737373; float:right; }
  ul { margin:2px 0 0 16px; padding:0; }
  li { margin-bottom:1px; }
  .tech { color:#525252; font-size:9.5px; }
  .links a { color:#1d4ed8; text-decoration:none; margin-right:8px; }
</style></head><body>

<h1>Ammar Yasser</h1>
<p class="role">React Native Developer</p>
<p class="contact">
  ammar.business24@gmail.com · +20 10 16 1188 41 · Al-Sheikh Zayed, Giza, Egypt ·
  Portfolio: <a href="PORTFOLIO_URL">PORTFOLIO_URL</a>
</p>

<h2>Summary</h2>
<p>Software engineer with 5 years of experience, specializing in React Native. Started as a
backend developer (Node.js APIs, auth, databases), then moved to mobile, shipping production
apps for insurance, e-commerce, ride-sharing, and healthcare clients in Saudi Arabia and Egypt —
published to the App Store, Google Play, and Huawei AppGallery. Strong on payments,
Arabic/RTL, CI/CD with GitHub Actions, and store publishing end to end.</p>

<h2>Projects</h2>
<div class="proj"><b>Manafith</b> — vehicle insurance app (Saudi market)
  <ul>
    <li>Built and shipped end to end: policy purchase and vehicle flows, chassis verification,
        plate configuration, payment integration, full Arabic RTL.</li>
    <li>Published and maintained releases on three stores.</li>
  </ul>
  <p class="links">LINKS-FROM-TASK-3-INVENTORY</p>
  <p class="tech">React Native · TypeScript · Redux Toolkit · REST APIs</p>
</div>
<div class="proj"><b>Munaseq</b> — AI social media listening platform
  <ul><li>Built the Next.js web front-end: monitoring and analysis dashboards.</li></ul>
  <p class="tech">Next.js · React · TypeScript</p>
</div>
<div class="proj"><b>In House</b> — furniture e-commerce app
  <ul><li>Extended checkout, delivery-address management, and business features on iOS and Android.</li></ul>
  <p class="tech">React Native · Redux Toolkit · Shopify Restyle · Firebase</p>
</div>
<div class="proj"><b>Glogo</b> — ride-sharing app
  <ul><li>Implemented real-time trip tracking over sockets and full ride status flows.</li></ul>
  <p class="tech">React Native · Socket.IO</p>
</div>
<div class="proj"><b>Dentaly</b> — dental clinic dashboard
  <ul><li>Built practitioner workflows: patient management, scheduling, clinical operations.</li></ul>
  <p class="tech">React Native · TypeScript</p>
</div>
<div class="proj"><b>Life Right</b> — emergency video consultations
  <ul><li>Built patient-to-doctor instant video call flows.</li></ul>
  <p class="tech">React Native · WebRTC</p>
</div>
<div class="proj"><b>Fantasia</b> — fantasy sports · <span class="tech">team selection and live scoring from real match data</span></div>
<div class="proj"><b>Aqarbot</b> — real-estate chatbot · <span class="tech">request/offer flows for clients and brokers</span></div>

<h2>Experience</h2>
<div class="job"><b>React Native Developer</b> — In-House <span class="period">2025 – Present</span></div>
<div class="job"><b>React Native Developer</b> — Appcorp <span class="period">2025</span></div>
<div class="job"><b>React Native Developer</b> — Pharosoft <span class="period">2024</span></div>
<div class="job"><b>React Native Developer</b> — In-House <span class="period">2022 – 2023</span></div>
<div class="job"><b>Full-stack Developer</b> — Valoro <span class="period">2021 – 2022</span></div>

<h2>Skills</h2>
<p><b>Mobile:</b> React Native, TypeScript, React Navigation, Redux Toolkit, React Query,
Shopify Restyle, Firebase, OneSignal, store publishing (App Store / Play / AppGallery)<br>
<b>Backend:</b> Node.js, Express, REST &amp; GraphQL, JWT/OAuth, MySQL, MongoDB, Redis, Socket.IO<br>
<b>DevOps:</b> GitHub Actions CI/CD, Git, Docker, AWS S3/EC2, Jira</p>

<h2>Education</h2>
<p>Bachelor of Commerce, Al-Azhar University <span class="period">2018 – 2022</span></p>

<h2>Languages</h2>
<p>Arabic (native) · English (professional working proficiency)</p>

</body></html>
```

Replace `LINKS-FROM-TASK-3-INVENTORY` with anchor tags for each verified store link (e.g. `<a href="...">Google Play</a>`), and drop the line if none.

- [ ] **Step 2: Render to PDF**

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --print-to-pdf="$PWD/public/Ammar_Yasser_CV.pdf" --no-pdf-header-footer "file://$PWD/cv/cv.html"
```

- [ ] **Step 3: Verify the PDF**

Read `public/Ammar_Yasser_CV.pdf` (Read tool renders PDFs). Expected: ≤ 2 pages, no clipped text, links visible. Adjust font sizes/margins in `cv/cv.html` and re-render if it overflows 2 pages.

- [ ] **Step 4: Show the user** — present the PDF for approval before continuing. This replaces their real CV content; they must sign off.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add rebuilt CV (HTML source + PDF)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 10: Push to GitHub + deploy to Vercel

**Files:** none (operations only), except the `PORTFOLIO_URL` replacement in Step 4.

- [ ] **Step 1: Identify the GitHub account and create the repo**

```bash
ssh -T git@github.com
```

Expected output: `Hi <username>! You've successfully authenticated...` — note the username.

Then check `gh auth status`. If gh is logged in as that same username: `gh repo create portfolio --public --source . --push`. If gh is a different account (likely — the keychain holds a work account), ask the user to create an empty public repo named `portfolio` on github.com, then:

```bash
git remote add origin git@github.com:<username>/portfolio.git
git push -u origin master
```

- [ ] **Step 2: Deploy to Vercel**

```bash
npx vercel whoami
```

If not logged in: run `npx vercel login <user-email>` — tell the user to click the verification link Vercel emails them, then continue. Deploy:

```bash
npx vercel --prod --yes
```

Expected: a production URL like `https://portfolio-<hash>-<scope>.vercel.app` plus the clean alias `https://portfolio-<scope>.vercel.app`. Record the clean URL.

- [ ] **Step 3: Verify deployed site** — open the production URL in the Browser pane; check the page renders, screenshots load, `/Ammar_Yasser_CV.pdf` downloads.

- [ ] **Step 4: Bake the final URL into the CV**

Replace `PORTFOLIO_URL` in `cv/cv.html` with the production URL, re-run Task 9 Steps 2–3, rebuild (`npm run build`), redeploy (`npx vercel --prod --yes`).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: bake production URL into CV and redeploy

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
git push
```

---

### Task 11: Final verification sweep

- [ ] **Step 1: Full click-through** — on the DEPLOYED URL in the Browser pane: click every external link (store badges, Munaseq, GitHub, LinkedIn, mailto) via `read_page` href inspection + spot-check loads. Every link must resolve to the right live destination.

- [ ] **Step 2: Mobile + desktop screenshots** of the deployed site (375px and 1280px) as proof for the user.

- [ ] **Step 3: Lighthouse (optional, disk permitting)** — `npx lighthouse <url> --only-categories=performance,accessibility,seo --quiet --chrome-flags="--headless"`. Expected: performance ≥ 90. If npx lighthouse pulls too much onto the tight disk, skip and note it — the site is static HTML, performance risk is low.

- [ ] **Step 4: Check off spec success criteria** — one scroll tells the story; responsive at 375/1280; every badge resolves live; CV ≤ 2 pages with portfolio link. Report results to the user with the deployed URL and screenshots.

---

## Deliverables recap

1. Live site on Vercel (custom domain attachable later in Vercel dashboard → Domains — no code change).
2. `public/Ammar_Yasser_CV.pdf` — updated CV, also the `Download CV` target.
3. Editable sources the user keeps: `data/projects.ts` + `data/profile.ts` (site content), `cv/cv.html` (CV content).
