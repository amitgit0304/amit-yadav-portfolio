import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { features, site, techStack } from "@/lib/site";

const services = [
  ["Platform architecture", "Cloud-native foundations that balance reliability, governance, performance, and cost."],
  ["Pipeline engineering", "Observable batch and event-driven ETL/ELT with safe backfills and clear ownership."],
  ["Modernization & migration", "Phased AWS, Snowflake, Iceberg, Azure, and lakehouse modernization."],
  ["Data trust", "Contracts, quality controls, lineage, and privacy-safe collaboration patterns."],
  ["Analytics enablement", "Governed semantic models and decision-ready Power BI experiences."],
  ["AI-ready foundations", "Curated, discoverable, policy-aware data products prepared for AI workloads."],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", name: site.name, url: site.url, jobTitle: "Data Engineer and Data & AI Consultant", sameAs: Object.values(site.social) },
      { "@type": "WebSite", name: `${site.name} Portfolio`, url: site.url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <div className="container">
          <p className="kicker"><span className="status-dot" aria-hidden="true" /> Available for select opportunities</p>
          <h1 className="display">I build data platforms that move from <span className="gradient-text">raw to reliable.</span></h1>
          <p className="lede">
            Data Engineer and Data & AI Consultant helping teams design, build, and operate cloud data platforms—from ingestion and orchestration to governance and decision-ready analytics.
          </p>
          <div className="actions">
            <a className="button button-primary" href={site.calendly} target="_blank" rel="noreferrer">Book a call <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href={site.resume} download>Download resume</a>
            <Link className="button button-secondary" href="/projects">View projects</Link>
          </div>
        </div>
      </section>

      <div className="stat-strip" aria-label="Core technologies"><div className="container chips">{techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div></div>

      <section className="section container">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><h2>Platforms with a measurable point of view.</h2></div><Link href="/projects">All projects →</Link></div>
        <div className="grid-3">{projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>

      <section className="section container">
        <div className="section-head"><div><p className="eyebrow">Capabilities</p><h2>From architecture to adoption.</h2></div></div>
        <div className="grid-3">{services.map(([title, text], index) => (
          <article className="card service-card" key={title}><p className="eyebrow">0{index + 1}</p><h3>{title}</h3><p className="muted">{text}</p></article>
        ))}</div>
      </section>

      <section className="section container grid-2">
        <div><p className="eyebrow">How I work</p><h2 className="title">Clarity at every stage.</h2><p className="lede">A pragmatic engagement model designed to reduce risk and transfer knowledge—not create dependency.</p></div>
        <div className="process">{[
          ["Discover", "Align outcomes, constraints, owners, and baseline measures."],
          ["Design", "Make trade-offs explicit with a secure, operable blueprint."],
          ["Build", "Deliver incrementally with tests, observability, and documentation."],
          ["Optimize", "Tune reliability, performance, developer experience, and cost."],
          ["Handover", "Transfer runbooks, decisions, and ownership to your team."],
        ].map(([title, text]) => <div className="step" key={title}><div><strong>{title}</strong><p className="muted">{text}</p></div></div>)}</div>
      </section>

      {features.testimonials ? (
        <section className="section container" aria-labelledby="testimonials-title">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-title">Trusted delivery, in their words.</h2>
          <div className="card"><p className="muted">Approved testimonials will appear here.</p></div>
        </section>
      ) : null}

      <section className="section container" aria-labelledby="contact-cta">
        <div className="cta"><p className="eyebrow">Build with confidence</p><h2 id="contact-cta" className="title">Have a difficult data problem?</h2><p className="lede">Let’s turn the ambiguity into a practical, maintainable path forward.</p>
          <div className="actions"><a className="button button-primary" href={site.calendly} target="_blank" rel="noreferrer">Book a call</a><Link className="button button-secondary" href="/contact">Contact me</Link></div>
        </div>
      </section>
    </>
  );
}
