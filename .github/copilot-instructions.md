# Copilot Instructions

This repository is the static Vite/React rebuild of RXvP, migrated from WordPress to GitHub Pages.

## Project Goals

- Preserve the public RXvP website content and visual presentation from the WordPress export.
- Keep the site static and GitHub Pages compatible: no WordPress, PHP, Gravity Forms, server actions, or backend API requirements.
- Maintain SEO parity or better: unique titles, descriptions, canonical URLs, Open Graph metadata, Twitter metadata, sitemap, robots.txt, and JSON-LD.
- The contact page must use mailto CTAs to `bonnie@rxvp.org` and `suzette@rxvp.org`; do not reintroduce a server-backed form.
- Portrait assets must use descriptive person-name slugs, not date stamps, generic avatar names, or exported numeric names.

## SEO Architecture

This site uses Vite plus `react-snap` so every public route gets its own static HTML file in `dist`.

Build flow:

1. `npm run build` runs TypeScript and Vite.
2. `postbuild` runs `scripts/react-snap.cjs`.
3. `react-snap` prerenders `/` and `/contact/` to static HTML.
4. `scripts/generate-sitemap.cjs` writes `dist/sitemap.xml` and `dist/robots.txt`.

Important files:

- `src/components/SEO.tsx`: all per-page metadata and JSON-LD.
- `src/routes.tsx`: eager route imports only. Do not use lazy page routes; lazy routes can break prerender capture.
- `src/main.tsx`: hydrates when prerendered markup exists.
- `public/content/home.html`: static home page markup extracted from the WordPress export.
- `legacy/wordpress-export/`: raw source export kept for reference only.

## Implementation Rules

- Keep routes static and crawlable. If adding a page, add it to `src/routes.tsx`, `scripts/react-snap.cjs`, and `scripts/generate-sitemap.cjs`.
- Prefer local assets from `public/assets`; do not hotlink WordPress assets unless the asset is intentionally external.
- Keep contact conversion serverless with `mailto:` links to `bonnie@rxvp.org` and `suzette@rxvp.org`.
- When adding speaker, founder, or regional leader portraits, name files with the person slug, for example `deepa-desai.jpg`.
- Preserve RXvP brand colors and typography from the imported WordPress CSS unless there is a clear bug.
- Run `npm run build` after SEO, route, content, or layout changes.

## Verification

After building, confirm:

```bash
grep -o '<title>[^<]*</title>' dist/index.html
grep -o '<title>[^<]*</title>' dist/contact/index.html
test -f dist/sitemap.xml
test -f dist/contact/index.html
```
