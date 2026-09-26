import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <p className="eyebrow">{project.client}</p>
      <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
      <p className="muted">{project.summary}</p>
      <div className="chips" aria-label="Technology stack">
        {project.stack.slice(0, 5).map((item) => <span className="chip" key={item}>{item}</span>)}
      </div>
      <ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
      <Link className="arrow" href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
        Explore case study <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
