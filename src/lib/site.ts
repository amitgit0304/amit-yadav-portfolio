function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  const fallback = vercelHost ? `https://${vercelHost}` : "http://localhost:3000";

  try {
    return new URL(configured || fallback).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export const site = {
  name: "Amit Yadav",
  role: "Data Engineer | Data & AI Consultant",
  description:
    "End-to-end cloud data platforms, reliable pipelines, analytics, and privacy-safe data systems.",
  url: resolveSiteUrl(),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  calendly:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/your-handle/30min",
  resume: "/amit-yadav-resume.pdf",
  social: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const techStack = [
  "AWS",
  "Snowflake",
  "Iceberg",
  "Dagster",
  "Terraform",
  "Python",
  "SQL",
  "Azure",
  "Databricks",
  "Power BI",
] as const;

export const features = {
  testimonials: false,
} as const;
