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

Minimal Next.js 13 app for apartment rental inquiries at Tinfors Fastigheter (Örebro, Sweden). JavaScript only — no TypeScript.

**Pages:**
- `pages/index.js` — Single-page rental interest form with client-side `useState` for form state
- `pages/_document.js` — Adds Bootstrap 5 (CDN) and Google reCAPTCHA v3 script to `<head>`
- `pages/api/email.js` — API route: validates reCAPTCHA token (score > 0.8), then sends form data via Resend

**Styling:** CSS Modules in `/styles/`, Bootstrap 5.2.3 via CDN

## Email & Form Flow

1. User fills form on `/` and submits
2. Client executes reCAPTCHA v3, gets token
3. Token + form data POST to `/api/email`
4. API verifies token with Google, checks score threshold
5. On pass, sends formatted email via Resend to `TARGET_EMAIL`

## Environment Variables

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_reCAPTCHA_site_key` | Client | reCAPTCHA site key |
| `RECAPTCHA_SECRET` | Server | reCAPTCHA secret for verification |
| `RESEND_API_KEY` | Server | Resend email API key |
| `TARGET_EMAIL` | Server | Destination address for form submissions |
