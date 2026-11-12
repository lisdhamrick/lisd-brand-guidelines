# Leander ISD Brand Guidelines

Portable, one-page Leander ISD brand guidelines built with React, TypeScript, Vite, and Tailwind CSS.

The repository is the source of truth. The production build is static, so it can be hosted independently, served from Payload, published through GitHub Pages or another static host, or integrated into a WordPress template.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The deployable site is written to `dist/`.

## Base paths

The default build expects to run at the root of a hostname, such as `https://design.leanderisd.org/`.

For a subdirectory deployment, set `VITE_BASE_PATH` before building:

```bash
VITE_BASE_PATH=/lisd-brand-guidelines/ npm run build
```

All routes, images, fonts, and downloadable assets use Vite's base path, so the same source can be deployed in each supported environment.

## Hosting options

See [docs/deployment.md](docs/deployment.md) for WordPress, Payload, static hosting, and subdomain guidance.

## Brand assets

Official artwork and district photography live in `public/`. Do not redraw or modify logo files in application code. Replace assets only with approved exports from Leander ISD Communications.
