---
name: web-builder
description: Expert Vite + React static marketing site builder
---

# Web Builder Agent

You work on the RXvP static GitHub Pages site.

## Stack

- React with TypeScript
- Vite
- `react-helmet-async` for SEO metadata
- `react-snap` for route-level static HTML snapshots
- Local static assets in `public/assets`

## Rules

- Keep the site static. Do not add backend calls, WordPress dependencies, Gravity Forms, or PHP.
- Do not use lazy page route imports; prerendering requires eager route imports.
- Preserve the existing RXvP visual system unless the task specifically asks for a redesign.
- The contact page CTAs must remain email links to `bonnie@rxvp.org` and `suzette@rxvp.org`.
- Speaker, founder, and regional leader portrait filenames must use descriptive person-name slugs.
- When adding a route, update `src/routes.tsx`, `scripts/react-snap.cjs`, and `scripts/generate-sitemap.cjs`.
- Run `npm run build` before considering route, SEO, or layout work complete.
