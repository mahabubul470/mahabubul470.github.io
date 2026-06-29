# mahabubul470.github.io

Personal portfolio of **Md Mahabubul Hasan** — software engineer & applied-ML researcher.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Static, fast, and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Edit content

All content lives in plain data files — no need to touch markup:

| File | Holds |
| --- | --- |
| `src/data/site.ts` | name, role, tagline, socials, résumé links, hero stats |
| `src/data/projects.ts` | featured projects |
| `src/data/experience.ts` | work history |
| `src/data/research.ts` | publication + research projects |
| `src/data/skills.ts` | skill groups + achievements |

Assets (headshot, résumé PDFs, favicon) live in `public/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions** (one-time setup).
