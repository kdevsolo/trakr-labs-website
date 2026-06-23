# Trakr — Marketing Website

A modern, animated marketing site for **Trakr** — contextual feedback that lets users record their screen or capture screenshots directly inside your app, then triage everything in an AI-powered dashboard.

Built with **React + Vite**, **Tailwind CSS v4**, **Motion** (Framer Motion), and **lucide-react**.

## Features

- Animated aurora background with scroll parallax
- Sticky glass navbar with mobile menu
- Hero with a floating, animated product preview
- Feature cards, animated velocity chart, 3-step integration guide
- Waitlist forms (hero + dedicated CTA), FAQ accordion, creator + contact sections
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
  App.jsx                 # page composition
  index.css               # design tokens, utilities, keyframes
  lib/motion.js           # shared animation variants
  components/
    Background.jsx        # animated gradient/grid backdrop
    Navbar.jsx            # sticky glass nav
    Hero.jsx              # hero + animated product preview
    Marquee.jsx           # scrolling feature pills
    Features.jsx          # three core feature cards
    Insights.jsx          # performance insights + chart
    HowItWorks.jsx        # 3-step integration
    Waitlist.jsx          # waitlist CTA
    FAQ.jsx               # accordion
    Creator.jsx           # founder bio + contact form
    Footer.jsx
    WaitlistForm.jsx      # reusable email capture
    SectionHeading.jsx, Reveal.jsx, Logo.jsx, Socials.jsx
```

## Wiring up forms

The waitlist and contact forms currently simulate submission. Connect them to your
backend or a provider (e.g. an API route, Formspree, Resend, or a waitlist service)
inside `src/components/WaitlistForm.jsx` and `src/components/Creator.jsx`.
