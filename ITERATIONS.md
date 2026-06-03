# Pasic Plumbing — Iteration Log

## Iteration 0 — Initial Build
Date: 2026-06-03
Branch: main (pre-critique)
Score: TBD

### What was built
- Full React + TypeScript + Tailwind v4 + Framer Motion site
- Pages: Home, About, Services, Water Heaters, Contact, 404
- Components: Navbar (mobile-responsive), Footer
- Design: Industrial desert warmth — deep charcoal + copper/rust accent, Barlow Condensed display font
- SEO: JSON-LD (Plumber schema), sitemap.xml, robots.txt, full OG meta tags
- Accessibility: focus-visible, reduced-motion media query, escape key nav dismiss, backdrop tap dismiss
- Formspree contact form with idle/sending/sent/error states
- All 13 services listed
- 3 testimonials verbatim
- 4 commercial portfolio clients
- 2 phone numbers (AZ + IL)

### Build gate
- [ ] npm run build passed — pending

### Outstanding (Image Placeholders)
- Hero background: Unsplash placeholder — needs real job site/commercial photo
- About portrait: Unsplash placeholder — needs Duke (Dusko) Pasic photo
- Water heater page hero: Unsplash placeholder — needs real installation photo
- Logo: text wordmark fallback — no extractable logo from Wix source

### Client action items
1. Formspree: formspree.io → New Form → VITE_FORMSPREE_ID in Vercel env vars
2. Photography: 3 Unsplash placeholders — see CONTENT.md § Image Placeholders
3. Domain: point pasicplumbing.com to Vercel Dashboard → Domains → Add
