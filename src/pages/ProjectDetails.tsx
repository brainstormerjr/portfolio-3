import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaArrowLeft } from "react-icons/fa6";

import Chip from "@/components/Chip";
import DetailSkeleton from "@/components/skeletons/DetailSkeleton";
import { CDN_URL } from "@/lib/env";
import type { Project } from "@/types";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<{ project: Project; markdown: string }>();

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    (async () => {
      try {
        const listRes = await fetch(`${CDN_URL}/projects.json`);
        if (!listRes.ok) throw new Error();
        const list: { projects: Project[] } = await listRes.json();
        const project = list.projects.find((p) => p.id === id);
        if (!project) throw new Error();
        const mdRes = await fetch(`${CDN_URL}/projects/markdown/${id}.md`);
        if (!mdRes.ok) throw new Error();
        const markdown = await mdRes.text();
        if (!cancelled) setData({ project, markdown });
      } catch {
        if (!cancelled) navigate("/404", { replace: true });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id, navigate]);

  if (!data) {
    return <DetailSkeleton />;
  }

  const { project, markdown } = data;

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div className="mt-48 md:mt-128 mb-30 px-6 md:px-48">
      <div className="absolute top-0 left-0 w-full h-80 md:h-196 -z-30">
        <img
          className="absolute inset-0 w-full h-full object-center object-cover mask-b-from-0% mask-b-to-100% -z-20"
          src={`${CDN_URL}/projects/images/${project.image}`}
          alt={project.name}
        />
      </div>

      <div
        className="w-fit px-4 py-2 flex items-center gap-3 cursor-pointer border border-white mb-8 md:mb-12 relative group"
        onClick={handleClick}
      >
        <div className="absolute left-0 w-full h-0 group-hover:h-full bg-white -z-10 transition-all"></div>
        <FaArrowLeft className="group-hover:text-black transition-all" />
        <p className="group-hover:text-black transition-all">Back</p>
      </div>
      <h1 className="text-4xl md:text-8xl font-black text-center mb-4 md:mb-6">
        {project.name}
      </h1>
      <h2 className="text-lg md:text-2xl font-normal text-center text-emerald-200 mb-8 md:mb-12">
        {project.subtitle}
      </h2>
      <div className="flex gap-3 flex-wrap justify-center mb-8 md:mb-12">
        {project.tags.map((tag, i) => (
          <Chip key={i} text={tag} hoverable={false} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 md:gap-5 mb-8 md:mb-12 flex-wrap">
        {project.links.map((l, i) => (
          <a
            href={l.url}
            target="_blank"
            key={i}
            className="group w-full md:w-auto"
          >
            <div className="w-full md:w-64 h-12 flex items-center justify-center border border-white relative">
              <p className="group-hover:text-black transition-all">{l.text}</p>
              <div className="absolute w-full h-0 group-hover:h-full bg-white -z-10 transition-all"></div>
            </div>
          </a>
        ))}
      </div>
      <div className="text-sm font-light">
        <ReactMarkdown
          components={{
            h1: (props) => (
              <h1
                className="text-4xl font-bold text-emerald-200 mt-8 mb-6 pb-2 border-b border-b-emerald-200"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="text-3xl font-semibold text-emerald-200 mt-8 mb-3 pb-2 border-b border-b-emerald-900"
                {...props}
              />
            ),
            p: (props) => <p className="leading-6 mb-5" {...props} />,
            ul: (props) => <ul className="mb-5" {...props} />,
            li: (props) => (
              <li className="list-disc list-inside ml-5" {...props} />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
