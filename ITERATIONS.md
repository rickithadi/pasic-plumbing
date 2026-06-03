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
- [x] npm run build passed — clean

### Outstanding (Image Placeholders)
- Hero background: Unsplash placeholder — needs real job site/commercial photo
- About portrait: Unsplash placeholder — needs Duke (Dusko) Pasic photo
- Water heater page hero: Unsplash placeholder — needs real installation photo
- Logo: text wordmark fallback — no extractable logo from Wix source

---

## Iteration 1
Date: 2026-06-03
Branch: rebuild/iter-1
Score: ~31/40 (estimated pre-iter-2)

### Changes
- Removed hero metric stat block (anti-pattern) → editorial credential strip
- Removed emoji client cards → numbered typographic list
- Redesigned testimonials → featured pull-quote + two secondary
- Broke repeated section header pattern in Services → asymmetric grid
- Added skip-to-content link (accessibility)
- Added body scroll lock when mobile nav is open
- Bumped hero sub-body text contrast
- Added id="main-content" to all pages

### Build gate: PASS
### Deployment: https://pasic-plumbing.vercel.app (HTTP 200 confirmed)

---

## Iteration 2
Date: 2026-06-03
Branch: rebuild/iter-2 → merged to main ✓ FINAL
Score: ~35/40 (estimated)

### Changes
- Removed trust bar (verbatim duplicate of credential strip)
- Added IL phone number (312-375-5548) to hero alongside AZ number
- Fixed credential strip: inline separator elements, no border-right wrap bug
- Fixed contact form select: added custom chevron arrow
- Added hover states to contact page phone links
- Added response-time copy ("reply within one business day")
- Fixed Services heading: replaced weight-300 "SERVICES" sub-label
- Removed dead `img` fields from Services data
- Removed dead `featured` field from testimonials data
- Deployed to production: https://pasic-plumbing.vercel.app (HTTP 200 ✓)

### Build gate: PASS
### Anti-patterns: PASS
### Mobile check: PASS (all pages have 68px nav offset, min 44px touch targets)
### Regression check: PASS (navbar, hero, contact form, footer all present)
### Deployment: https://pasic-plumbing.vercel.app (HTTP 200 confirmed)

---

### Client action items
1. Formspree: formspree.io → New Form → VITE_FORMSPREE_ID in Vercel env vars
2. Photography: 3 Unsplash placeholders — see CONTENT.md § Image Placeholders
3. Domain: point pasicplumbing.com to Vercel Dashboard → Domains → Add
