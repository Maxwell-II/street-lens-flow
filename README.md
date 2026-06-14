# Street Lens Flow

Street Lens Flow is a cinematic front-end experience built around a Toronto night photo essay.

It presents a darker, denser walk through glass towers, transit light, lake air, wet streets, and small city pauses. The project is designed less like a standard landing page and more like an interactive visual route: part photo essay, part motion-driven interface, part atmosphere study.

**Live demo:** [street-lens-flow.vercel.app](https://street-lens-flow.vercel.app/)

## What It Is

This is a front-end showcase page focused on visual storytelling, layout rhythm, scroll interaction, and responsive presentation.

The experience guides visitors through:

- a full-screen cinematic hero section
- a Toronto night route sequence
- selected photo frames and field notes
- a compact contact sheet
- subtle scroll-based reveal animations
- a small reflection prompt at the end of the route

The goal is to show how a simple subject can become a polished web experience through composition, motion, spacing, typography, and mood.

## Design Direction

Street Lens Flow uses a dark editorial style inspired by night photography, contact sheets, camera notes, and city walks after midnight.

The interface keeps the page focused on the images and text:

- warm dark color palette
- restrained gold accent color
- large photographic sections
- sticky navigation
- scroll progress indicator
- motion that respects reduced-motion preferences
- responsive layout for desktop and mobile

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Project Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    StreetLensExperience.tsx
    TopProgressBar.tsx