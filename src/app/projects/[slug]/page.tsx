import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { title: project.title, description: project.summary, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const jsonLd = {
    "@context": "https://schema.org", "@type": "CreativeWork", name: project.title,
    description: project.summary, creator: { "@type": "Person", name: site.name }, url: `${site.url}/projects/${project.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="page-hero container">
          <Link className="eyebrow" href="/projects">← All case studies</Link>
          <h1 className="title">{project.title}</h1>
          <p className="lede">{project.summary}</p>
          <div className="chips" style={{ marginTop: "1.5rem" }}>{project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
        </header>
        <div className="container grid-2">
          <aside className="card"><p className="eyebrow">Engagement</p><p><strong>Context</strong><br /><span className="muted">{project.client}</span></p><p><strong>Role</strong><br /><span className="muted">{project.role}</span></p><p><strong>Safe impact ranges</strong></p><ul>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></aside>
          <div className="prose">
            <h2>Problem statement</h2><p>{project.problem}</p>
            <h2>Constraints</h2><List items={project.constraints} />
          </div>
        </div>
        <section className="section container">
          <p className="eyebrow">Architecture placeholder</p><h2>From governed sources to trusted consumption.</h2>
          <div className="architecture" role="img" aria-label="Conceptual data flow from source through ingestion and governed platform to consumers">
            <div className="node">Sources</div><div className="node">Ingest & validate</div><div className="node">Governed platform</div><div className="node">Analytics & AI</div>
          </div>
          <p className="muted">Conceptual diagram—replace with an approved engagement-specific architecture later.</p>
        </section>
        <section className="container grid-2">
          <div className="prose"><h2>Approach</h2><List items={project.approach} /><h2>Implementation highlights</h2><List items={project.implementation} /></div>
          <div className="prose"><h2>Lessons learned</h2><List items={project.lessons} /><h2>What I’d do next</h2><List items={project.next} /><h2>Links</h2><p className="muted">Repository and demo links are intentionally omitted until approved public assets are available.</p></div>
        </section>
      </article>
      <section className="section container"><div className="cta"><p className="eyebrow">Discuss a similar challenge</p><h2 className="title">Let’s design the right path.</h2><div className="actions"><a className="button button-primary" href={site.calendly} target="_blank" rel="noreferrer">Book a call</a><Link className="button button-secondary" href="/contact">Contact me</Link></div></div></section>
    </>
  );
}

function List({ items }: { items: string[] }) {
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
