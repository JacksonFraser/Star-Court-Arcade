# Star Court Arcade

Marketing site for the Star Court Arcade, Lismore NSW — a heritage arcade
landmark. Built as a React + TypeScript + Vite single-page app, routed with
React Router and styled with Tailwind CSS v4.

The design comes from the Claude Design project and uses the Marcellus
(display serif) + Archivo (sans) type pairing on a warm cream/brass palette.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/main.tsx` — app entry + React Router routes
- `src/components/Layout.tsx` — shared nav + footer chrome around routed pages
- `src/pages/Home.tsx` — the Home page, composed from section blocks
- `src/pages/History.tsx` — decade-by-decade timeline + archival gallery
- `src/components/` — `Nav`, `Footer`, and the `Placeholder` photo stand-in
- `src/index.css` — Tailwind import + `@theme` palette and font tokens

## Status

The **Home** (`/`) and **History** (`/history`) pages are implemented. The
nav/footer links to Shops and Visit are placeholders (`#`) — those pages exist
in the design project but have not been built yet.
