"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [cloud, setCloud] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const searchable = `${project.title} ${project.summary} ${project.stack.join(" ")}`.toLowerCase();
      return (!term || searchable.includes(term)) &&
        (cloud === "All" || project.cloud.includes(cloud as never)) &&
        (platform === "All" || project.platforms.includes(platform as never)) &&
        (type === "All" || project.type.includes(type as never));
    });
  }, [cloud, platform, projects, query, type]);

  return (
    <>
      <div className="filters" role="search" aria-label="Filter projects">
        <div className="field">
          <label htmlFor="project-search">Search</label>
          <input id="project-search" className="input" type="search" value={query}
            onChange={(event) => setQuery(event.target.value)} placeholder="Title, keyword, or technology" />
        </div>
        <Filter id="cloud" label="Cloud" value={cloud} onChange={setCloud} options={["All", "AWS", "Azure"]} />
        <Filter id="platform" label="Platform" value={platform} onChange={setPlatform}
          options={["All", "Snowflake", "Iceberg", "Databricks", "Power BI"]} />
        <Filter id="type" label="Type" value={type} onChange={setType}
          options={["All", "Migration", "Orchestration", "BI", "Governance"]} />
      </div>
      <p className="muted" role="status" aria-live="polite">{filtered.length} project{filtered.length === 1 ? "" : "s"} found</p>
      {filtered.length ? (
        <div className="grid-2">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      ) : (
        <div className="card"><h2>No matching projects</h2><p className="muted">Try broadening or clearing the filters.</p></div>
      )}
    </>
  );
}

function Filter({ id, label, value, options, onChange }: {
  id: string; label: string; value: string; options: string[]; onChange: (value: string) => void;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="input" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}
