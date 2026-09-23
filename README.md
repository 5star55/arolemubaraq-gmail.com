# Mubaraq Arole - Portfolio

Personal portfolio built with Next.js 16 (App Router), Tailwind CSS v4, Motion and Lenis.
Design based on "Personal Portfolio Website - Animations" by Dymas Alfin on Dribbble.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All text, projects, services and experience live in `src/lib/data.ts`.

- **Portrait:** add a transparent cut-out photo at `public/me.png` and set `profile.photo` to `"/me.png"`.
- **Project screenshots:** `public/projects/*.png`. Each project's `image` field points to one.
- **Resume:** `public/Mubaraq_Oluwatomisin_Arole_Resume.pdf` (linked from the Resume buttons).

## Structure

- `src/app/page.tsx` - home: hero, skills marquee, work, service, experience, contact
- `src/app/work/[slug]/page.tsx` - project detail pages (statically generated)
- `src/app/template.tsx` - curtain transition between pages
- `src/components/` - sections and shared UI
