# Pasic Plumbing — Maintenance Guide

This guide covers everything you need to keep your site updated. Most tasks don't require a developer.

---

## Contact Form Setup (Required Before Launch)

The contact form uses Formspree — a free service that delivers form submissions to your email.

**Steps:**
1. Go to formspree.io and create a free account
2. Click "New Form"
3. Set the destination email to your preferred address
4. Copy the Form ID (looks like `xrgvwkzd`)
5. In your Vercel dashboard → Project → Settings → Environment Variables
6. Add: `VITE_FORMSPREE_ID` = your Form ID
7. Redeploy (Vercel will do this automatically)

**Cost:** Free for up to 50 submissions/month. Paid plans start at $10/month for unlimited.

---

## Updating Phone Numbers or Contact Details

Edit this one file: `src/components/Footer.tsx`

The phone numbers also appear in:
- `src/components/Navbar.tsx` (navbar CTA button)
- `src/pages/Home.tsx` (hero section)
- `src/pages/Contact.tsx` (contact page)
- `index.html` (JSON-LD structured data)

Search the repo for `480-478-0447` to find every instance.

---

## Updating Services Copy

All service descriptions for the Services page are in: `src/pages/Services.tsx`

Look for the `services` array near the top of the file. Each service has a `name` and `description` field. Edit the description text and save.

The home page shows service names only (no descriptions) — those are in `src/pages/Home.tsx` in the `services` array.

---

## Replacing Placeholder Images

Three images are currently Unsplash placeholders. Search for `data-replace` in the code to find them:

| File | What it needs |
|------|---------------|
| `src/pages/Home.tsx` | Job site or crew photo |
| `src/pages/About.tsx` | Duke Pasic portrait or team photo |
| `src/pages/WaterHeaters.tsx` | Water heater installation photo |

**To replace:** Change the `src="..."` URL on the `<img>` tag to your image URL, or upload the image to Vercel Blob / any CDN and use that URL.

---

## Adding a New Service

1. Open `src/pages/Services.tsx`
2. Find the `services` array
3. Add a new object: `{ name: 'Service Name', description: 'Description here.' }`
4. Commit and push — Vercel deploys automatically

---

## Updating the About Story

Edit `src/pages/About.tsx`. The story text is in plain paragraph tags — just change the text content.

---

## Connecting Your Domain

1. Log in to Vercel Dashboard → pasic-plumbing project
2. Go to Settings → Domains
3. Add `pasicplumbing.com`
4. Vercel will give you DNS records (usually an A record and CNAME)
5. Add those records in your domain registrar (GoDaddy, Namecheap, etc.)
6. DNS propagates in 10–60 minutes

---

## What Requires a Developer

- Adding entirely new pages
- Changing the site's visual design (colors, fonts, layout)
- Adding new features (booking system, live chat, etc.)
- Connecting a CMS for easy content editing without code

---

## Technical Details

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (inline style + CSS variables)
- **Animations:** Framer Motion
- **Deployment:** Vercel (auto-deploys on every push to `main`)
- **Repo:** https://github.com/rickithadi/pasic-plumbing
- **Live URL:** https://pasic-plumbing.vercel.app (update to custom domain after setup)
