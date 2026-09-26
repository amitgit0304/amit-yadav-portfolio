import type { Metadata } from "next";
import { ProjectFilters } from "@/components/project-filters";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Data platform, migration, orchestration, governance, and analytics case studies." };

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow">Case studies</p>
        <h1 className="title">Complex data work, made understandable.</h1>
        <p className="lede">Representative, anonymized engagements. Impact figures are safe target ranges, not claims about a named client.</p>
      </section>
      <section className="container section" style={{ paddingTop: 0 }}>
        <ProjectFilters projects={projects} />
      </section>
    </>
  );
}
