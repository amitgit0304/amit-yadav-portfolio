import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Services", description: "Data engineering and consulting services for cloud platforms, pipelines, governance, analytics, and AI readiness." };

const services = [
  ["Cloud data engineering & platform design", "Scale-ups and teams modernizing a fragmented data estate", "2–6 weeks", "Architecture blueprint, security model, delivery roadmap, cost assumptions"],
  ["ETL/ELT pipelines + dbt", "Teams with brittle workflows or growing source demand", "2–8 weeks", "Tested pipelines, transformations, lineage, runbooks, SLOs"],
  ["AWS / Snowflake migrations", "Organizations reducing legacy risk or platform coupling", "4–12+ weeks", "Assessment, migration waves, reconciliation, cutover and rollback plans"],
  ["Dagster orchestration", "Data teams needing asset lineage, safe backfills, and ownership", "2–8 weeks", "Asset model, resources, partitions, checks, sensors, CI/CD"],
  ["Data quality & validation", "Teams losing time to upstream changes and silent failures", "2–6 weeks", "Contracts, expectation suites, quarantine policy, observability"],
  ["Governance & privacy", "Teams collaborating across domains or external partners", "3–8 weeks", "Control design, data classification, access patterns, audit workflow"],
  ["Cost & performance optimization", "Platforms with rising spend or unstable runtimes", "2–4 weeks", "Baseline, prioritized optimizations, guardrails, savings model"],
  ["BI & Power BI modernization", "Leaders managing inconsistent KPIs and slow reports", "3–8 weeks", "Semantic model, dashboard patterns, security, release workflow"],
  ["AI-ready data foundations", "Teams preparing governed enterprise data for AI use cases", "3–10 weeks", "Readiness assessment, curated products, metadata and evaluation plan"],
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero container"><p className="eyebrow">Services</p><h1 className="title">Practical data consulting, built around outcomes.</h1><p className="lede">Focused engagements for teams that need senior engineering judgment and hands-on delivery. Timelines are indicative and confirmed after discovery.</p></section>
      <section className="section container" style={{ paddingTop: 0 }}><div className="grid-3">{services.map(([title, audience, timeline, deliverables]) => <article className="card service-card" key={title}><h2>{title}</h2><p><strong>Who it’s for</strong><br /><span className="muted">{audience}</span></p><p><strong>Typical timeline</strong><br /><span className="muted">{timeline}</span></p><p><strong>Deliverables</strong><br /><span className="muted">{deliverables}</span></p></article>)}</div></section>
      <section className="section container grid-2"><div><p className="eyebrow">FAQ</p><h2 className="title">Before we start.</h2></div><div>
        <details className="card"><summary><strong>Can you work with an existing team?</strong></summary><p className="muted">Yes. Engagements can combine architecture, embedded delivery, reviews, and coaching with explicit ownership boundaries.</p></details>
        <details className="card"><summary><strong>Do you provide fixed-price packages?</strong></summary><p className="muted">Discovery and focused assessments can often be fixed-scope. Delivery work is estimated after risks and dependencies are understood.</p></details>
        <details className="card"><summary><strong>How do you handle confidential data?</strong></summary><p className="muted">Access is minimized, documented, and aligned to your policies. Representative work is anonymized and never published without approval.</p></details>
      </div></section>
      <section className="section container"><div className="cta"><p className="eyebrow">Start with clarity</p><h2 className="title">Book a focused discovery call.</h2><a className="button button-primary" href={site.calendly} target="_blank" rel="noreferrer">Book a call</a></div></section>
    </>
  );
}
