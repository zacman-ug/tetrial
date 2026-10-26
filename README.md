# Ezekiel Kigozi — Portfolio

Personal portfolio site for Ezekiel Kigozi. Built with Vite, React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build
npm run preview  # preview the build
```

## Edit content

All copy, projects, social links, and image URLs live in one module:

**[`src/content.ts`](src/content.ts)**

Replace anything marked `PLACEHOLDER` with real bio, role, projects, email, and photos. The UI reads from that file only — no CMS required.

## Structure

| Path | Role |
|------|------|
| `src/content.ts` | Editable site content |
| `src/components/` | Hero, About, Projects, Contact, Nav, Footer |
| `src/index.css` | Design tokens, layout, motion |
| `src/hooks/useReveal.ts` | Scroll-in section motion |

## Design direction

**Northern studio / viridian daylight** — cool sage atmosphere, charcoal ink, deep forest-green accent. Display type: Bricolage Grotesque. Body: Figtree. Full-bleed photographic hero, restrained sections, intentional load + scroll motion. Light by default (not dark-mode-first).

## What’s placeholder vs real

| Real | Placeholder (swap later) |
|------|--------------------------|
| Name: Ezekiel Kigozi | Email, LinkedIn, X |
| GitHub: [zacman-ug](https://github.com/zacman-ug) | Hero workspace photo |
| Work: Buganda Heritage, Will-mar’s | “Open to” intent; LinkedIn/X |
| Site structure & design | |

## Stack

- Vite 8 + React 19 + TypeScript
- Plain CSS (no UI kit)
