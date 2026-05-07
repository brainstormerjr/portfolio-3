import { useState, useEffect } from "react";

import ProjectCard from "@/components/ProjectCard";
import CardListSkeleton from "@/components/skeletons/CardListSkeleton";
import { CDN_URL } from "@/lib/env";
import type { Project } from "@/types";

export default function Projects() {
  const [projects, setProjects] = useState<{ projects: Project[] }>({
    projects: [],
  });

  useEffect(() => {
    fetch(`${CDN_URL}/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const isLoading = projects.projects.length === 0;

  if (isLoading) {
    return <CardListSkeleton />;
  }

  return (
    <div className="mb-30">
      {projects.projects.map((p, i) => (
        <ProjectCard
          id={p.id}
          name={p.name}
          subtitle={p.subtitle}
          tags={p.tags}
          image={p.image}
          links={p.links}
          key={i}
        />
      ))}
    </div>
  );
}
