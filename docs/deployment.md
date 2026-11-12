# Deployment options

## Recommended architecture

Keep this repository as the canonical source. Every host consumes the static `dist/` directory produced by `npm run build`.

For `design.leanderisd.org`, a root deployment is preferred. Build with `VITE_BASE_PATH=/` and point the subdomain at the chosen host.

## Payload

Payload is the cleanest long-term fit when the district wants the guide beside other modern web properties. The Payload deployment can either:

1. serve the generated `dist/` directory as a standalone static application; or
2. publish the build to a static host and link or proxy `design.leanderisd.org` to it.

Keeping this guide as its own build avoids coupling brand-guide releases to Payload's content model or administration interface.

## WordPress

WordPress can deliver the same build without becoming the source of truth.

Preferred order:

1. Serve `dist/` directly on `design.leanderisd.org`, outside the WordPress theme.
2. If the existing WordPress host must remain, use a dedicated full-width template that loads the generated assets and does not add the normal site header, footer, or content wrappers.
3. Use an iframe only as a temporary review solution; it creates avoidable accessibility, analytics, navigation, and responsive-height problems.

## Static hosts

Cloudflare Pages, Vercel, Netlify, and GitHub Pages can all publish this project.

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: `22`
- Root-hosted base path: `/`
- GitHub Pages project base path: `/lisd-brand-guidelines/`

## Domain cutover

The technical team can move `design.leanderisd.org` between hosts without changing the application. Before cutover, verify the DNS target, HTTPS certificate, root base path, analytics, redirects, and cache rules in a staging hostname.
