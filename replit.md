# Fnix Design

Fnix is an independent digital design studio portfolio. The current site introduces the studio and presents LUMINA as the first selected project.

## Commands

- `pnpm --filter @workspace/lumina dev` — run the portfolio site
- `pnpm --filter @workspace/lumina typecheck` — type-check the portfolio site
- `pnpm --filter @workspace/lumina build` — build the portfolio site
- `pnpm run typecheck` — type-check all workspace packages
- `pnpm run build` — type-check and build all workspace packages

The Vite application requires `PORT` and `BASE_PATH` environment variables when run outside the managed workspace. For example, in PowerShell:

```powershell
$env:PORT='5173'; $env:BASE_PATH='/'; pnpm --filter @workspace/lumina dev
```

## Project structure

- `artifacts/lumina/` — Fnix portfolio frontend (React, Vite, Tailwind CSS, Framer Motion)
- `attached_assets/` — source project imagery used by the LUMINA case study
- `artifacts/api-server/` — optional shared Express API (health endpoint only)
- `lib/` — generated API clients, OpenAPI spec, and database package

## Design system

- Base: near-black `#101010`
- Surface: warm off-white `#E8E4DC`
- Accent: electric chartreuse `#C6FF43`
- Display: Playfair Display
- UI: DM Sans

## Notes

- LUMINA is the only published case study. Add future work as real projects become ready.
- Images from `attached_assets/` are imported through the `@assets` alias so Vite fingerprints them in production.
- Contact links currently point to `hello@fnix.design`; replace this with the final business email before launch.
