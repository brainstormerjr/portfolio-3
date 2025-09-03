"use client";
import { useState, useEffect } from "react";

import ProjectCard from "./projectCard";
import { Project } from "@/app/types";

export default function Projects() {
  const [projects, setProjects] = useState<{ projects: Project[] }>({
    projects: [],
  });

  useEffect(() => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
      }/projects`
    )
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const isLoading = projects.projects.length === 0;

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
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
