# Link Inventory

Single source of truth for which external links and assets may appear on the
portfolio site. The site's honesty rule: **only links recorded here as
"verified live" may be rendered.** Items marked "not found" or "pending user
input" must be omitted from the site until this file is updated.

Verification pass: 2026-07-22.

| # | URL / item | Status | Notes | Date |
|---|---|---|---|---|
| 1 | [Google Play — Manafith](https://play.google.com/store/apps/details?id=com.najm.manafeth) | Verified live | HTTP 200 | 2026-07-22 |
| 2 | [App Store — Manafith](https://apps.apple.com/sa/app/manafith-%D9%85%D9%86%D8%A7%D9%81%D8%B0/id1630305902) | Verified live | Confirmed via iTunes Search API; app "Manafith \| منافذ", bundleId `com.najm.manafeth`, developer Najm for Insurance Services | 2026-07-22 |
| 3 | [Munaseq website](https://munaseq.ai) | Verified live | HTTP 200 | 2026-07-22 |
| 4 | Huawei AppGallery listing — Manafith | Not found | Two targeted web searches found no public listing URL. Omit from site until a URL is provided. | 2026-07-22 |
| 5 | [GitHub profile](https://github.com/ammarasc74) | Verified live (2026-07-22) | Controller-verified live; name matches. | 2026-07-22 |
| 6 | [LinkedIn profile](https://www.linkedin.com/in/ammar-yasser-1297971b3/) | User-provided (2026-07-22) | Provided by user. | 2026-07-22 |
| 7 | Public email confirmation (`ammar.business24@gmail.com`) | User-provided (2026-07-22) | Provided by user; confirmed for public display. | 2026-07-22 |
| 8 | Glogo — store/web link | Pending user input | User has not answered yet. Omit from site until provided. | 2026-07-22 |
| 9 | In House — store/web link | Pending user input | User has not answered yet. Omit from site until provided. | 2026-07-22 |
| 10 | Dentaly — store/web link | Pending user input | User has not answered yet. Omit from site until provided. | 2026-07-22 |
| 11 | Life Right — store/web link | Pending user input | User has not answered yet. Omit from site until provided. | 2026-07-22 |
| 12 | Fantasia — store/web link | Pending user input | User has not answered yet. Omit from site until provided. | 2026-07-22 |
| 13 | Aqarbot — store/web link | Pending user input | User has not answered yet. Omit from site until provided. | 2026-07-22 |

## Screenshots collected

| File | Source | Dimensions (final) | Size | Notes |
|---|---|---|---|---|
| `public/screenshots/manafith/shot-1.jpg` | `~/Desktop/manafith-store-design/play-1080x1920/en/01.png` | 675×1200 | 109 KB | Branded hero/onboarding panel: "Your policy in 60 seconds" |
| `public/screenshots/manafith/shot-2.jpg` | `~/Desktop/manafith-store-design/play-1080x1920/en/04.png` | 562×1000 | 91 KB | Real app UI: home dashboard ("Everything in one place") |
| `public/screenshots/manafith/shot-3.jpg` | `~/Desktop/manafith-store-design/play-1080x1920/en/05.png` | 675×1200 | 104 KB | Real app UI: Saudi border-crossing map ("All border ports, one map") |

Originals in `~/Desktop/manafith-store-design/` are read-only source material and
were not modified or moved; the files above are resized copies (`sips -Z`)
re-encoded as JPEG quality 80 (`sips -s format jpeg -s formatOptions 80`) for
web delivery — the site uses `images.unoptimized`, so files ship as-is.

## Rules for later tasks

- Do not render any link from rows 4–13 above until this file is updated to
  "Verified live" for that row.
- Re-verification is required if more than 30 days pass before the site
  ships, since store listings and marketing pages can change.
