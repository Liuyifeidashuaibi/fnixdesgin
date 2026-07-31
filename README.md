# Fnix Design

Portfolio website for **Fnix**, an independent digital design studio.

The current release contains the studio landing page and the first published case study: **LUMINA**, a quiet-luxury jewelry e-commerce concept.

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- pnpm workspaces

## Getting started

```bash
pnpm install
pnpm --filter @workspace/lumina dev
```

When running outside the managed workspace, set Vite's required variables first:

```powershell
$env:PORT='5173'
$env:BASE_PATH='/'
pnpm --filter @workspace/lumina dev
```

## Available commands

```bash
pnpm --filter @workspace/lumina typecheck
pnpm --filter @workspace/lumina build
pnpm run typecheck
pnpm run build
```

## Main source files

- `artifacts/lumina/src/pages/home.tsx` — homepage and selected-work presentation
- `artifacts/lumina/src/components/Navigation.tsx` — desktop and mobile navigation
- `artifacts/lumina/src/components/Footer.tsx` — contact CTA and footer
- `artifacts/lumina/src/index.css` — global design tokens and typography

## License

MIT
