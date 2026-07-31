# LUMINA — Timeless Elegance

A luxury jewelry brand frontend template (React + Vite) — a complete, scroll-rich single-page product showcase with cinematic hero, product collection, lookbook strip, brand story, editorial journal, store locator, and newsletter section.

## Run & Operate

- `pnpm --filter @workspace/lumina run dev` — frontend dev server (auto-assigned port)
- `pnpm --filter @workspace/api-server run dev` — API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite + Tailwind CSS v4 + framer-motion
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (pre-configured, unused in current template)
- Fonts: Cormorant Garamond (display serif) + Inter (body/nav)
- Build: esbuild (API server CJS bundle)

## Where things live

- `artifacts/lumina/` — frontend SPA (the LUMINA template)
  - `src/pages/home.tsx` — all sections: Hero, Collection, Lookbook, About, Journal, Stores, Newsletter
  - `src/components/Navigation.tsx` — scroll-aware transparent → dark nav
  - `src/components/Footer.tsx` — 4-column footer with social links
  - `src/index.css` — LUMINA brand color tokens (warm browns, gold #C9A96E, off-white #F5F0E8)
  - `public/` — product images, journal images, about-bg.jpg (AI-generated)
- `artifacts/api-server/` — shared Express API (health endpoint only currently)
- `lib/db/` — Drizzle ORM schema (empty; extend when backend needed)
- `lib/api-spec/openapi.yaml` — OpenAPI spec (health only; extend for product API)
- `attached_assets/` — source hero photo (woman with gold jewelry, warm amber light)

## Brand tokens

| Token | Value | Usage |
|---|---|---|
| Dark brown | `#2C1F0E` | Main background, overlay |
| Deep dark | `#1A120A` | Footer, Newsletter, Lookbook bg |
| Gold accent | `#C9A96E` | Prices, CTA hovers, highlights |
| Off-white | `#F5F0E8` | Collection/Journal section bg, text |
| Medium brown | `#3A2912` | Secondary text on light bg |

## Architecture decisions

- Frontend-only template (no DB calls in current build). Backend exists and is wired via the shared proxy at `/api`.
- Hero background image imported as ES module via `@assets` alias (points to `attached_assets/`) so Vite fingerprints it for cache-busting.
- Navigation uses scroll listener with `passive: true` for perf; transitions at 80px scroll offset.
- All section animations use `framer-motion` `useInView` with `once: true` — no re-animations on scroll-up.
- `background-position: 62% center` on the hero keeps the model's face and jewelry in frame across viewports.

## Product

Full-page luxury jewelry brand template with:
- **Hero** — full-viewport cinematic portrait, animated text reveal, season label + slide indicator
- **Collection** — 3-product grid with hover "VIEW PIECE" overlay, staggered entrance
- **Lookbook** — editorial 2-col strip with 2×2 image grid
- **About** — brand story + 3 pillars (Craftsmanship, Materials, Legacy)
- **Journal** — 3 editorial post cards with scroll reveal
- **Stores** — 3 flagship city cards (New York, London, Tokyo) with addresses and "BOOK A VISIT"
- **Newsletter** — email subscription with gold hover state
- **Footer** — 4-column with social links (IG / PT / WB)

## User preferences

- User is a frontend design/art engineer building frontend templates
- Source files live in Replit; user downloads via Replit zip export or GitHub to local `E:\FNIX\FnixDesign`
- Hero background: `attached_assets/微信图片_20260731073118_336_43_1785454635209.png` (1536×1024, clean portrait shot)
- Do not add backend features unless explicitly asked

## Gotchas

- The `@assets` Vite alias resolves to `attached_assets/` at the workspace root. Image filenames with Chinese characters work fine in Vite but must be imported as ES modules (not referenced via `/public/`).
- `background-position: 62% center` is calibrated for the current hero image. If the hero image changes, re-calibrate.
- Port is injected by the managed workflow (`artifacts/lumina: web`). Never hardcode a port.
- After any OpenAPI spec change: run `pnpm --filter @workspace/api-spec run codegen` before touching frontend hooks.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
