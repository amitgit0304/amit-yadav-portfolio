# Amit Yadav — Data Engineer Portfolio

A production-oriented portfolio for a Data Engineer and Data & AI Consultant. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Site map

- `/` — Hero, technology credibility, featured work, services, process, and CTA
- `/about` — Bio, working style, grouped skills, and placeholder experience
- `/projects` — Searchable/filterable project index
- `/projects/[slug]` — Statically generated case studies with JSON-LD
- `/services` — Packages, audience, timelines, deliverables, and FAQ
- `/contact` — Accessible contact form, Calendly, email, and social links
- `/api/contact` — Vercel-compatible Resend email route

Core components live in `src/components`; site configuration is in `src/lib/site.ts`; typed case-study content is in `src/lib/projects.ts`.

## Local setup

Requirements: Node.js 20.9+ and npm 10+.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Before deployment, run:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

This environment did not have Node.js installed when the codebase was created, so dependency installation and build verification must be run on a machine with Node.js 20.9+.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, without a trailing slash |
| `NEXT_PUBLIC_CALENDLY_URL` | Booking page |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible domain; no script loads when blank |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public direct-contact email |
| `RESEND_API_KEY` | Server-only Resend API key |
| `CONTACT_TO_EMAIL` | Verified recipient for form submissions |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |

Never expose `RESEND_API_KEY` with a `NEXT_PUBLIC_` prefix. In Resend, verify your sending domain before changing the default onboarding sender.

The contact endpoint includes field validation, a honeypot, and best-effort in-memory throttling (five requests per IP per ten minutes). Serverless instances do not share memory, so production abuse protection should use Vercel WAF/rate limiting or a shared store such as Upstash Redis.

## Editing projects

Case studies use a strict `Project` TypeScript type in `src/lib/projects.ts`. Add an object to the exported `projects` array and provide a unique URL-safe `slug`; static routes and sitemap entries are generated automatically.

This implementation deliberately uses typed local TypeScript content rather than raw MDX. It avoids a runtime parser, keeps filters type-safe, and is ideal for the current structured case-study layout. If editorial freedom becomes important, add `@next/mdx` or Contentlayer and retain the same frontmatter fields as the `Project` type.

All metrics currently use clearly qualified target ranges. Replace them only with approved, defensible outcomes.

## Replacing placeholders

1. Replace Calendly, email, GitHub, and LinkedIn values in `.env.local` and `src/lib/site.ts`.
2. Add the real PDF as `public/amit-yadav-resume.pdf`.
3. Replace `[Company]` and `[Dates]` on the About page with resume-approved details.
4. Replace the CSS architecture flow on each project with an optimized SVG or WebP. For raster files, use `next/image` with explicit dimensions.
5. Add an Open Graph image at `src/app/opengraph-image.png` or implement a generated `opengraph-image.tsx`.
6. Review every anonymized case study and range before publishing.

## Deployment to Vercel

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel; it will detect Next.js.
3. Add production environment variables in **Project Settings → Environment Variables**.
4. Deploy and test the contact form, metadata, `/sitemap.xml`, and `/robots.txt`.
5. Add the custom domain under **Settings → Domains** and update `NEXT_PUBLIC_SITE_URL`.
6. Configure the DNS records Vercel provides, then redeploy so canonical and structured URLs use the final domain.

## Design system

Default palette: **Midnight Signal** — background `#070b14`, surfaces `#0d1422` / `#111b2d`, text `#f4f7fb`, muted text `#9dabc0`, teal accent `#5eead4`, violet secondary `#8b5cf6`.

Alternative future palettes:

- **Graphite + Electric Blue:** `#090b10`, `#151922`, `#60a5fa`, `#c084fc`
- **Deep Navy + Lime:** `#060b16`, `#101a2f`, `#bef264`, `#22d3ee`

Typography uses Geist with Geist Mono accents via `next/font`. Spacing is fluid using `clamp()`. Cards share a subtle border, one-pixel accent highlight, rounded corners, and restrained hover elevation. Buttons have at least a 44px target. Focus is always visible, landmarks/headings are semantic, and motion is disabled under `prefers-reduced-motion`.

## Analytics and privacy

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to load Plausible after hydration. Leave it blank for no analytics. If using Plausible Cloud, confirm your data-processing and cookie requirements for target regions; the basic script is commonly deployed without cookies, but compliance remains site-owner responsibility.

## Next steps

- [ ] Add approved resume, headshot, logo, project screenshots, and social URLs
- [ ] Add a generated Open Graph image and favicon set
- [ ] Validate copy and measurable outcomes against the final resume
- [ ] Run Lighthouse and axe against production on mobile and desktop
- [ ] Add durable distributed rate limiting and CAPTCHA only if abuse warrants it
- [ ] Add a CMS or MDX pipeline when non-developers need editing access
- [ ] Add a blog for technical writing and long-tail SEO
- [ ] Enable testimonials only after written approval
- [ ] Add consent-aware analytics events for calls, resume downloads, and form success
- [ ] Add Playwright smoke tests and CI quality gates
