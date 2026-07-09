# Dhruv Oswal — Portfolio

A multi-page React portfolio with 3D animations (react-three-fiber), page-transition motion (framer-motion), and client-side routing (react-router-dom).

## Structure
- `src/pages/` — one file per page: Home, About, Experience, Skills, Projects, Education, Leadership, Contact
- `src/components/` — Navbar, Footer, Scene3D (3D hero background), SkillOrb (3D skill sphere), TiltCard (3D hover tilt)
- `src/data/content.js` — all site copy/content in one place, easy to edit

## Run locally / on Replit
```
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

On Replit: choose the "React" or "Vite" template, upload/paste these files, run `npm install` then `npm run dev`.

## Editing content
Everything text-based (bio, skills, projects, leadership entries, contact links) lives in `src/data/content.js` — edit that file and it propagates to every page automatically.

## Adding project links
Each project object in `content.js` (`export const projects`) can take an optional `link` field — add it and wire it into `src/pages/Projects.jsx` as an `<a>` around the card if you want clickable project cards.
