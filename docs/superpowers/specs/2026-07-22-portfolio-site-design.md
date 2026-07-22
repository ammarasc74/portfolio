# Portfolio site + CV tune-up — design

Date: 2026-07-22
Owner: Ammar Yasser (React Native developer)

## Problem

Ammar's projects are listed on his CV as text-only paragraphs — no links, no visuals, no statement of his personal contribution. HR screeners (the primary gatekeepers) can't quickly grasp what he has shipped. His strongest work — Manafith, a production insurance app live on the App Store, Google Play, and Huawei AppGallery — does not appear on the CV at all.

## Goal

An HR screener should understand who Ammar is and see proof of shipped apps within ~30 seconds. A technical reviewer digging deeper should find tech stacks, his specific contributions, and live store links.

## Audience

Primary: Saudi/Gulf company recruiters and hiring managers. Language: English only.

## Deliverables

1. A one-page portfolio website, deployed on Vercel (free tier, `*.vercel.app`), custom domain attachable later.
2. An updated CV (PDF + editable source) that points to the portfolio.

## Portfolio site

### Structure (single page, top to bottom)

1. **Sticky nav** — name + anchor links: Projects, Skills, Experience, Contact.
2. **Hero** — name, "React Native Developer", one-liner ("I build and ship cross-platform mobile apps for clients in Saudi Arabia and beyond"), CTAs: *View projects* (anchor) and *Download CV* (PDF), contact icons (email, GitHub, LinkedIn).
3. **Featured project: Manafith** — 2–3 phone-frame screenshots (assets exist in `~/Desktop/manafith-store-design`), a short paragraph on what Ammar built (insurance flows, chassis verification, payments, Arabic/RTL, multi-store publishing), and live store badges: App Store, Google Play, Huawei AppGallery.
4. **Projects grid** — cards for: Munaseq, In House (furniture e-commerce), Glogo (ride-sharing), Dentaly (dental clinic dashboard), Life Right (doctor video consultations), Fantasia (fantasy sports), Aqarbot (real-estate chatbot).
5. **Skills** — three chip groups: Mobile, Backend, DevOps & Tools. Compact; no paragraph lists.
6. **Experience timeline** — from CV: In-House (2025–present), Appcorp (2025), Pharosoft (2024), In-House (2022–2023), Valoro full-stack (2021–2022).
7. **Contact footer** — email, LinkedIn, GitHub.

### Project card formula

Every card renders from the same data shape:

- App name + one line: what the app is.
- 1–2 lines: what *Ammar* specifically built (features owned, not app marketing copy).
- 3–4 tech chips.
- Optional links: App Store / Google Play / AppGallery / web.
- Optional screenshot: cards with one show a phone mockup; cards without degrade to icon + text (never look broken).

All project content lives in a single typed data file (e.g. `data/projects.ts`); adding a project, link, or screenshot is a data edit, not a layout change.

### Visual direction: clean minimal light

- Near-white background, dark text, generous whitespace.
- Single blue accent for links/highlights; pill-shaped buttons.
- Real app screenshots carry the visual weight; no decorative gradients or dark-theme styling.
- Approved via mockup comparison (chosen over dark-developer and warm-editorial directions).

### Tech + deployment

- Next.js (App Router) + Tailwind CSS, static export.
- Repo: `~/projects/portfolio`, pushed to GitHub (ammar.business24 account, SSH remote).
- Deploy: Vercel free tier. Custom domain later — no code change required.
- Mobile-first responsive (HR opens links on phones).
- SEO meta tags + Open Graph image so the link previews well on WhatsApp/LinkedIn.

### Out of scope (deliberate)

- Arabic version / RTL site (English only for hiring).
- Per-project case-study pages — the one-page layout must not preclude adding them later, but they are not part of this build.
- Blog, analytics, contact forms, CMS.

## CV tune-up

Content changes (design-level; exact wording at implementation):

1. **Add Manafith as the first, featured project** — with store links and outcomes (published to three stores, Saudi production app). Add Munaseq as well.
2. **Rewrite every project entry** into the card formula: one line what it is, 1–2 bullets what Ammar did, tech, link. Keep entries 3 lines max.
3. **Add the portfolio URL** next to contact info at the top.

Source material: both `~/Downloads/Ammar_CV.pdf` (newer, Jun 2026) and `~/Downloads/AmmarResume.pdf` (richer work history) — merge the fuller history with the newer content. Deliverable: updated PDF in the same clean style + editable source (HTML print template or docx) so Ammar can maintain it.

## Honesty constraint

The hero and CV only claim store presence that can be verified with live links at build time. No inflated app counts.

## Open items (resolve during implementation)

- Collect live store links: Manafith (Google Play `com.najm.manafeth`, App Store, AppGallery) and any others that are public (Glogo, In House, Dentaly, Life Right, Fantasia).
- Confirm GitHub profile URL and LinkedIn URL.
- Confirm public contact email (CV uses ammar.business24@gmail.com).
- Pick screenshots per project (Manafith assets ready on Desktop; others as available).

## Success criteria

- One scroll shows: who he is → featured live app with store badges → all projects with his contributions.
- Site is responsive at 375px and 1280px, loads fast (static, Lighthouse performance ≥ 90).
- Every store badge/link resolves to a live listing.
- CV fits 2 pages, projects section scannable, portfolio link present.

## Verification plan

- Browser check of the deployed preview at mobile + desktop widths (screenshots as proof).
- Click-through of every external link.
- Lighthouse run on the deployed URL.
- CV PDF reviewed page-by-page before delivery.
