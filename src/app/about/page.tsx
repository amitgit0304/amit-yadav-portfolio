import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: "About Amit Yadav's data engineering experience, values, and technical capabilities." };

const skills = {
  "Cloud": ["AWS", "Azure", "S3", "ADLS", "Lambda", "EventBridge"],
  "Data platforms": ["Snowflake", "Apache Iceberg", "Databricks", "Delta Lake"],
  "Orchestration": ["Dagster", "Azure Data Factory", "dbt", "Event-driven workflows"],
  "IaC & CI/CD": ["Terraform", "GitHub Actions", "Azure DevOps", "Docker"],
  "BI & analytics": ["Power BI", "Dimensional modeling", "Semantic layers", "DAX"],
  "Governance": ["Data quality", "Contracts", "Lineage", "AWS Clean Rooms", "Access controls"],
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow">About</p>
        <h1 className="title">Building dependable systems—and capable teams.</h1>
        <p className="lede">4 years of experience building cloud data platforms, ETL/ELT pipelines, analytics solutions, and privacy-safe data systems using AWS, Snowflake, Iceberg, Dagster, Python, SQL, and Azure.</p>
      </section>
      <section className="section container grid-2">
        <div><p className="eyebrow">Working style</p><h2>Pragmatic, transparent, and ownership-driven.</h2></div>
        <div className="prose"><p>I translate business outcomes into systems teams can safely operate. That means making trade-offs visible, testing failure paths, documenting decisions, and treating security, cost, and observability as design inputs.</p><p>I value simple interfaces, incremental delivery, candid communication, and knowledge transfer. The goal is durable capability—not unnecessary complexity.</p></div>
      </section>
      <section className="section container">
        <div className="section-head"><div><p className="eyebrow">Technical toolkit</p><h2>Breadth, organized around outcomes.</h2></div></div>
        <div className="grid-3">{Object.entries(skills).map(([group, items]) => <article className="card" key={group}><h3>{group}</h3><div className="chips">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div></article>)}</div>
      </section>
      <section className="section container grid-2">
        <div><p className="eyebrow">Experience</p><h2 className="title">A placeholder timeline, ready for your resume.</h2><a className="button button-primary" href={site.resume} download>Download resume</a></div>
        <ol className="process">
          <li className="step"><div><strong>Data Engineer / Consultant · [Company]</strong><p className="muted">[Dates] · Cloud platforms, orchestration, governance, and analytics delivery.</p></div></li>
          <li className="step"><div><strong>Data Engineer · [Company]</strong><p className="muted">[Dates] · ETL/ELT, data modeling, BI enablement, and platform operations.</p></div></li>
        </ol>
      </section>
    </>
  );
}
