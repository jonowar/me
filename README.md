# me

Personal page & portfolio for **Jono Warren** — a single-page, client-side site
built with [Astro](https://astro.build). Ships as static HTML with almost no
JavaScript (just a theme toggle), so it loads fast and deploys anywhere.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload at `localhost:4321`      |
| `npm run build`   | Build the static site into `dist/`                  |
| `npm run preview` | Preview the production build locally                |
| `npm start`       | Serve `dist/` on `$PORT` (used by Railway)          |

## Editing content

**You almost never need to touch the components.** Everything you'll want to
change — your name, bio, links, skills, and project list — lives in one file:

- **`src/consts.ts`** — name, role, tagline, email, socials, about paragraphs,
  skills, and the `PROJECTS` array. The projects are placeholders; replace them
  with your real work.

Other things you might tweak:

- **`src/styles/global.css`** — colors and theme. The accent color and light/dark
  palettes are CSS variables at the top of the file.
- **`public/favicon.svg`** — the tab icon (currently a "J" monogram).
- **`astro.config.mjs`** — set `site` to your final domain for correct canonical
  URLs.

## Project structure

```
src/
├── consts.ts            # ← all editable content lives here
├── layouts/Layout.astro # <head>, SEO meta, no-flash theme script
├── components/          # Header, Hero, Projects, About, Footer, ThemeToggle
├── pages/index.astro    # the single page (composes the components)
└── styles/global.css    # design tokens + base styles
public/                  # static assets served as-is (favicon, robots.txt)
```

## Deploying to Railway

The repo is Railway-ready. Railway builds the static site and serves `dist/`
with a lightweight static server on the port it assigns.

1. Push this repo to GitHub (already wired to `github.com/jonowar/me`).
2. In Railway: **New Project → Deploy from GitHub repo** → pick `jonowar/me`.
3. Railway reads `railway.json`:
   - **Build:** `npm run build`
   - **Start:** `npm start` → `serve dist -s -l tcp://0.0.0.0:$PORT`
4. Once deployed, **Settings → Networking → Generate Domain** (or add a custom
   domain), then update `site` in `astro.config.mjs` to match.

No environment variables are required.

> Prefer a pure static host instead? `npm run build` and drop `dist/` on
> GitHub Pages, Netlify, Cloudflare Pages, or any static host.
