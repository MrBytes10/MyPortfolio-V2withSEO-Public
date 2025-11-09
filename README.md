# myportfoliov2

Personal portfolio built with Next.js (App Router). This repository contains a responsive, Tailwind-styled portfolio site with pages for About, Expertise, Projects, Testimonials and Contact (EmailJS integration).

- Live preview (local): http://localhost:3000
- Next.js version: 15.x (see [package.json](package.json))

## Table of contents

- [Quick start](#quick-start)  
- [Scripts](#scripts)  
- [Environment / Secrets](#environment--secrets)  
- [Project structure & important files](#project-structure--important-files)  
- [Key components & pages](#key-components--pages)  
- [Styling & assets](#styling--assets)  
- [Build & deployment](#build--deployment)  
- [Linting & formatting](#linting--formatting)  
- [Troubleshooting & notes](#troubleshooting--notes)  
- [Credits & license](#credits--license)

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

Defined in [package.json](package.json):

- npm run dev — run Next.js in development
- npm run build — build for production
- npm run start — start production server (after build)
- npm run lint — run linter

## Environment / Secrets

The contact page sends email via EmailJS. Currently [src/app/contact/page.js](src/app/contact/page.js) contains the EmailJS service/template/public key strings. Replace these with environment variables and never commit secret keys.

Suggested .env.local entries (create at repo root; do NOT commit):
- NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

Then update [src/app/contact/page.js](src/app/contact/page.js) to use:
- process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
- process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

Note: `NEXT_PUBLIC_` variables are exposed to the browser. If you need hidden server-side secrets, implement a server endpoint.

## Project structure & important files

Top-level config and metadata:
- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [next.config.mjs](next.config.mjs)
- [postcss.config.mjs](postcss.config.mjs)
- [eslint.config.mjs](eslint.config.mjs)
- [.gitignore](.gitignore)

App code and assets:
- [src/app/layout.tsx](src/app/layout.tsx) — root layout and metadata (exported as [`RootLayout`](src/app/layout.tsx))
- [src/app/globals.css](src/app/globals.css) — global CSS and Tailwind entry
- [src/app/page.js](src/app/page.js) — main homepage (exported default component; referenced below as [`Home`](src/app/page.js))
- [public/site.webmanifest](public/site.webmanifest) — site manifest
- All static images: [public/](public/)

Component files:
- [`Header`](src/components/Header.js) — [src/components/Header.js](src/components/Header.js)
- [`Navbar`](src/components/Navbar.js) — [src/components/Navbar.js](src/components/Navbar.js)
- [`Hero`](src/components/Hero.js) — [src/components/Hero.js](src/components/Hero.js)
- [`Timeline`](src/components/Timeline.js) — [src/components/Timeline.js](src/components/Timeline.js)
- [`ProjectModal`](src/components/ProjectModal.js) — [src/components/ProjectModal.js](src/components/ProjectModal.js)
- [`Footer`](src/components/Footer.js) — [src/components/Footer.js](src/components/Footer.js)

Pages (App Router):
- Home: [src/app/page.js](src/app/page.js) — (`Home`)
- About: [src/app/about/page.js](src/app/about/page.js) — (`About`)
- Expertise: [src/app/expertise/page.js](src/app/expertise/page.js) — (`Expertise`)
- Projects: [src/app/projects/page.js](src/app/projects/page.js) — (`Projects`)
- Testimonials: [src/app/testimonials/page.js](src/app/testimonials/page.js) — (`Testimonials`)
- Contact: [src/app/contact/page.js](src/app/contact/page.js) — (`Contact`)

References in the codebase:
- Email sending: [src/app/contact/page.js](src/app/contact/page.js) uses `@emailjs/browser`
- Tailwind/PostCSS config: [postcss.config.mjs](postcss.config.mjs)
- ESLint config loader: [eslint.config.mjs](eslint.config.mjs)

## Key components & pages (quick reference)

- Root layout and site metadata: [`RootLayout`](src/app/layout.tsx) — [src/app/layout.tsx](src/app/layout.tsx)  
- Header + navigation: [`Header`](src/components/Header.js) & [`Navbar`](src/components/Navbar.js) — [src/components/Header.js](src/components/Header.js), [src/components/Navbar.js](src/components/Navbar.js)  
- Hero section (profile + rotating taglines): [`Hero`](src/components/Hero.js) — [src/components/Hero.js](src/components/Hero.js)  
- Project grid + modal: [`Projects`](src/app/projects/page.js) and [`ProjectModal`](src/components/ProjectModal.js) — [src/app/projects/page.js](src/app/projects/page.js), [src/components/ProjectModal.js](src/components/ProjectModal.js)  
- Contact form and EmailJS usage: [`Contact`](src/app/contact/page.js) — [src/app/contact/page.js](src/app/contact/page.js)  
- Career timeline: [`Timeline`](src/components/Timeline.js) — [src/components/Timeline.js](src/components/Timeline.js)

## Styling & assets

- Tailwind CSS is used (see [postcss.config.mjs](postcss.config.mjs) and devDependencies in [package.json](package.json)).
- Global styles: [src/app/globals.css](src/app/globals.css)
- Fonts are loaded via `next/font` in [src/app/layout.tsx](src/app/layout.tsx)
- Favicon/manifest: [public/site.webmanifest](public/site.webmanifest) and image files under [public/]

## Build & deployment

1. Build:
```bash
npm run build
```

2. Start production:
```bash
npm run start
```

Deployment recommendations:
- Vercel is the recommended host for Next.js App Router projects.
- Add environment variables in the deployment UI (EmailJS keys, etc.).
- Ensure `next.config.mjs` allows any external image domains if you use remote images.

## Linting & formatting

- ESLint configured via [eslint.config.mjs](eslint.config.mjs)
- Run lint:
```bash
npm run lint
```

Add Prettier if desired for formatting.

## Troubleshooting & notes

- If EmailJS fails, verify the values in [src/app/contact/page.js](src/app/contact/page.js) or move them into env vars as described above.
- If images fail to load with Next Image, ensure files exist in [public/](public/) or add remote domains to [next.config.mjs](next.config.mjs).
- Tailwind classes depend on PostCSS/Tailwind config. If styles missing, ensure `tailwindcss` and `@tailwindcss/postcss` are installed (see [package.json](package.json)).
- The project uses React 19 and Next 15 — check compatibility for third-party packages.

## Credits & license

- Built with Next.js and Tailwind CSS.
- Icons via `lucide-react`.
- Email integration uses `@emailjs/browser`.
- See [package.json](package.json) for full dependency list.

- Under MIT Licence