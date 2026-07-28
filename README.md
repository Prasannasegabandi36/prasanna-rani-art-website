# Prasanna Rani — Artist Portfolio

A premium, animated portfolio website for artist **Segabandi Prasanna Rani** (Prasanna Rani),
built with React 19, TypeScript, Vite, Tailwind CSS, React Router, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Adding your own artwork

All artwork content lives in **one file**: `src/data/artworks.ts`. Add as many entries as
you like — every page (Home, Gallery, Artwork Detail) reads from this array automatically,
so you never need to touch component code.

```ts
{
  id: "unique-id",
  title: "Artwork Title",
  image: "/artworks/your-image.jpg", // place the file in public/artworks/
  category: "Paintings",
  medium: "Watercolour",
  year: 2024,
  description: "A short description of the piece.",
  featured: true, // shows on the Home page featured section
}
```

Until a real image is added at that path, the site automatically shows an elegant
generated placeholder (gradient + motif) instead of a broken image — so the site looks
complete even before photos are added. Just drop a real photo at the same filename and it
will appear automatically.

Other editable data files, in `src/data/`:
- `categories.ts` — gallery filter categories
- `mediums.ts` — the Mediums page cards
- `inspirations.ts` — the Inspiration page cards
- `timeline.ts` — the About page timeline and stat counters

## Folder structure

```
src/
  components/   Reusable UI building blocks
  pages/        One file per route
  layouts/      Shared page shell (navbar, footer)
  data/         All editable content (artworks, categories, mediums, etc.)
  hooks/        Custom React hooks
  utils/        Small helper functions
  types/        Shared TypeScript types
public/
  artworks/     Drop artwork photos here
  inspiration/  Drop inspiration photos here
  artist/       Drop the artist's portrait photo here
```

## Contact form

The contact form UI is fully built and validates on the client. To actually deliver
messages, connect `handleSubmit` in `src/components/ContactForm.tsx` to a form backend
such as Formspree, EmailJS, or your own API endpoint.

## Notes

- The Google Map on the Contact page is a styled placeholder — swap it for a real embed
  (e.g. an `<iframe>` from Google Maps) once you have exact coordinates.
- The Instagram icon on the Contact page links to `#` — update it once a profile exists.
