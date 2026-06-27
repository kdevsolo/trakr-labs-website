# Trakr — Marketing Website

A modern, animated marketing site for **Trakr** — contextual feedback that lets users record their screen or capture screenshots directly inside your app, then triage everything in an AI-powered dashboard.

Built with **React + Vite**, **Tailwind CSS v4**, **Motion** (Framer Motion), and **lucide-react**.

## Features

- Animated aurora background with scroll parallax
- Sticky glass navbar with mobile menu and Sign in / Get started actions
- Hero with a floating, animated product preview
- Trusted-by logo wall, feature cards, social-proof stats, animated velocity chart, 3-step integration guide
- Testimonials, pricing tiers, FAQ accordion, and creator + contact sections
- "Get started" / "Sign in" CTAs pointing to the live app dashboard
- Fully responsive, dark theme, respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.jsx                  # routes
  index.css                # design tokens, utilities, keyframes
  config/site.js           # app/dashboard URLs (sign in, get started) + brand
  lib/motion.js            # shared animation variants
  data/                    # content for data-driven sections
    nav.js                 # navbar + footer links
    features.js, capabilities.js, clients.js, stats.js,
    pricing.js, testimonials.js, faqs.js
  pages/
    HomePage.jsx           # section composition
    Privacy.jsx, Terms.jsx
  components/
    layout/                # Layout, Navbar, Footer, Background, ScrollToTop
    ui/                    # SectionHeading, Reveal, Logo, Socials, AuthButtons
    sections/              # Hero, TrustedBy, Marquee, Features, Stats,
                           # DashboardPreview, Insights, WidgetPreview,
                           # HowItWorks, Testimonials, Pricing, CTA, FAQ, Creator
```

## Configuring the app / dashboard links

The "Sign in" and "Get started" buttons point at your live app. Edit the single
`src/config/site.js` file to set `APP_URL` (and, if needed, `SIGN_IN_URL` /
`GET_STARTED_URL`) to your real dashboard and auth routes.

## Wiring up the contact form

The contact form in `src/components/sections/Creator.jsx` currently simulates
submission. Connect it to your backend or a provider (e.g. an API route,
Formspree, or Resend).
