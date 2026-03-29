# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

Node version: 18 (see `.nvmrc`)

## Architecture

Next.js 13 (pages router) property management website for Tinfors Fastigheter (Örebro, Sweden). JavaScript only — no TypeScript. No `next.config.js` — all defaults.

**Shared layout:** `components/Layout.js` wraps every page with a sticky nav and footer. Uses `next/router` for active link detection. Global CSS variables (colors, spacing) live in `styles/globals.css`.

**Pages:**

- `pages/index.js` — Homepage: hero image, 3 CTA cards, about section
- `pages/hyresledigt.js` — Listings with category filter; placeholder listings defined inline
- `pages/intresseanmalan.js` — Rental interest form (sends email via `/api/email`)
- `pages/hyresinfo.js` — Tabbed info page (Viktigt / Inflytt / Utflytt / FAQ)
- `pages/om.js` — About Tinfors Fastigheter
- `pages/_app.js` — Imports `styles/globals.css`
- `pages/_document.js` — Adds reCAPTCHA v3 script to `<head>`
- `pages/api/email.js` — Verifies reCAPTCHA (score > 0.8), sends interest form via Resend

**Styling:** CSS Modules per page/component in `/styles/`. Bootstrap is **not** used — all styles are custom via CSS variables.

**Color scheme:** `--color-primary: #003057` (dark blue), `--color-secondary: #528E9A` (teal), `--color-accent: #D0E6EA` (light blue), `--color-neutral: #EBE8E5`.

## Email & Form Flow

1. User submits form → client executes reCAPTCHA v3, gets token
2. Token + form data POST to `/api/email`
3. API verifies token with Google (`score > 0.8`), then sends email via Resend
4. From: `info@tinfors.se` → To: `TARGET_EMAIL` env var

## Environment Variables

| Variable                         | Scope  | Purpose                                  |
| -------------------------------- | ------ | ---------------------------------------- |
| `NEXT_PUBLIC_reCAPTCHA_site_key` | Client | reCAPTCHA site key                       |
| `RECAPTCHA_SECRET`               | Server | reCAPTCHA secret for verification        |
| `RESEND_API_KEY`                 | Server | Resend email API key                     |
| `TARGET_EMAIL`                   | Server | Destination address for form submissions |
