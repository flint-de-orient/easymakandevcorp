# Easymakan Dev Corp. — Website

Live: https://www.easymakandev.com

Vite + React 18 + TypeScript. Deployed on Vercel — every push to `main` deploys automatically.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into dist/
```

## ⚠️ Important: styling gotcha

**`src/index.css` is a pre-built Tailwind v4 output file. There is no Tailwind build step** — Tailwind is not in `package.json`, and `vite.config.ts` runs only the React plugin.

This means **any Tailwind utility class not already present in `src/index.css` will silently do nothing.** No error, no warning — the style simply never applies. For instance `aspect-video` and `text-xl` are absent, which is why components use bare `<h2>`/`<h3>` (headings are styled globally in that file) rather than size utilities.

When adding new styles, do one of these instead:

1. **Write a dedicated stylesheet** and import it in the component — Vite bundles it normally:

   ```tsx
   import '../styles/showcase.css';
   ```

   This is what `src/components/Showcase.tsx` does with `src/styles/showcase.css`.

2. **Use inline `style={{ ... }}`** for one-off values. `clamp()` works well for responsive sizing without media queries.

3. Only reuse Tailwind classes that already appear elsewhere in the codebase.

## Layout

```
src/
  components/     UI sections (Hero, About, Projects, Showcase, ...)
    ui/           shadcn-style primitives
    admin/        admin dashboard
  styles/         component stylesheets (showcase.css, globals.css)
  pages/          route-level pages
  index.css       pre-built Tailwind output — see the warning above
public/           static assets served as-is (brochures, video, images)
```

## Deployment

Pushing to `main` triggers a Vercel build. Project settings:

- Build command: `npm run build`
- Output directory: `dist`
- Root directory: *(empty — the app lives at the repository root)*

Routing, caching, and security headers are configured in `vercel.json`.
