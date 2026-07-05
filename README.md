# Star Court Arcade

Marketing site for the Star Court Arcade, Lismore NSW — a heritage arcade
landmark. Built as a React + Vite single-page app styled with Tailwind CSS v4.

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

- `src/pages/Home.jsx` — the Home page, composed from section blocks
- `src/components/` — `Nav`, `Footer`, and the `Placeholder` photo stand-in
- `src/index.css` — Tailwind import + `@theme` palette and font tokens

## Status

The **Home** page is implemented. The nav/footer links to History, Shops and
Visit are placeholders (`#`) — those pages exist in the design project but
have not been built yet.
