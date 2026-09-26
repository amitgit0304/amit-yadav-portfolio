# Amit Yadav — Data Engineer Portfolio

Personal portfolio for Amit Yadav, Data Engineer and Data & AI Consultant. It showcases case studies, services, and experience in cloud data platforms, ETL/ELT pipelines, analytics, and privacy-safe data systems.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) with React and TypeScript
- Tailwind CSS
- ESLint and Prettier
- Resend for contact form email delivery
- Plausible for optional, privacy-friendly analytics

## Features

- Responsive, dark-first design with reduced-motion support
- Searchable case studies, filterable by cloud, platform, and project type
- Statically generated case study pages
- Contact form with validation, spam honeypot, and rate limiting
- SEO metadata, Open Graph and Twitter cards, JSON-LD, sitemap, and robots.txt
- Accessible navigation, labelled form controls, and visible focus states

## Pages

| Route | Content |
| --- | --- |
| `/` | Introduction, tech stack, featured projects, services, and process |
| `/about` | Background, working style, skills, and experience |
| `/projects` | Case study index with search and filters |
| `/projects/[slug]` | Case study: problem, approach, architecture, and results |
| `/services` | Services, typical timelines, and FAQ |
| `/contact` | Contact form, booking link, email, and social links |

## Project structure

```text
src/
├── app/            # Routes, layout, API route, sitemap, and robots
├── components/     # Header, footer, project cards, filters, and contact form
└── lib/
    ├── projects.ts # Typed case study content
    └── site.ts     # Site details, navigation, and links
```

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler |
| `npm run format` | Format files with Prettier |

## Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |
| `NEXT_PUBLIC_CALENDLY_URL` | Booking page URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible domain; leave blank to disable analytics |
| `RESEND_API_KEY` | Resend API key (server-only) |
| `CONTACT_TO_EMAIL` | Recipient for contact form messages |
| `CONTACT_FROM_EMAIL` | Verified sender address |

## Updating content

- **Case studies:** add or edit entries in `src/lib/projects.ts`. Each project needs a unique `slug`; its page and sitemap entry are generated automatically.
- **Site details and links:** update `src/lib/site.ts`.
- **Resume:** place the PDF at `public/amit-yadav-resume.pdf`.

## Deployment

The site is designed for [Vercel](https://vercel.com):

1. Import this repository into Vercel.
2. Add the environment variables listed above.
3. Deploy, then connect a custom domain if needed and update `NEXT_PUBLIC_SITE_URL`.

## Design

- **Colors:** dark background `#070b14`, surface `#0d1422`, text `#f4f7fb`, teal accent `#5eead4`, violet accent `#8b5cf6`
- **Typography:** Geist and Geist Mono
- **Layout:** fluid spacing, card-based sections, and a mobile-first responsive grid

## License

© Amit Yadav. All rights reserved.
