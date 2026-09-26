import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Amit Yadav about data engineering, cloud platform, analytics, or consulting opportunities." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero container"><p className="eyebrow">Contact</p><h1 className="title">Let’s make the next data decision a good one.</h1><p className="lede">Share the outcome you need, what is getting in the way, and your approximate timeline.</p></section>
      <section className="section container contact-grid" style={{ paddingTop: 0 }}>
        <ContactForm />
        <aside className="card">
          <p className="eyebrow">Prefer another route?</p>
          <h2>Start a conversation.</h2>
          <p className="muted">For hiring, consulting, or collaboration inquiries, book directly or send an email.</p>
          <div className="actions"><a className="button button-primary" href={site.calendly} target="_blank" rel="noreferrer">Book via Calendly</a><a className="button button-secondary" href={`mailto:${site.email}`}>Email me</a></div>
          <hr style={{ border: 0, borderTop: "1px solid var(--line)", marginBlock: "2rem" }} />
          <div className="chips"><a href={site.social.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </aside>
      </section>
    </>
  );
}
