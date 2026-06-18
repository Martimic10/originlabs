# Origin Labs Marketing Site

Premium marketing website for Origin Labs — a design-first iOS app studio.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # Next.js app router (layout, page, globals)
├── components/       # Section components
│   ├── Hero.tsx
│   ├── FeaturedProducts.tsx
│   ├── StudioDNA.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── IPhoneMockup.tsx
│   └── ScrollReveal.tsx
└── lib/
    └── animations.ts # Framer Motion variants
```

## Build

```bash
npm run build
npm start
```
