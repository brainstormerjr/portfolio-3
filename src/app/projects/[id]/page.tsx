"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import { Project } from "@/app/types";
import Chip from "@/app/shared/chip";

export default function ProjectDetails() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [project, setProject] = useState<{
    project: Project;
    markdown: string;
  }>();

  useEffect(() => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
      }/projects/${id}`
    )
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, [id]);

  if (!project) {
    return <div className="text-white">Loading...</div>;
  }

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div className="mt-128 px-48">
      <div className="absolute top-0 left-0 w-full h-196 -z-30">
        <Image
          className="object-center object-cover mask-b-from-0% mask-b-to-100% -z-20"
          src={`${
            process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
          }/projects/images/${project.project.image}`}
          alt={project.project.name}
          fill
        />
      </div>

      <div
        className="w-fit px-4 py-2 flex items-center gap-3 cursor-pointer border-1 border-white mb-12 relative group"
        onClick={handleClick}
      >
        <div className="absolute left-0 w-full h-0 group-hover:h-full bg-white -z-10 transition-all"></div>
        <FaArrowLeft className="group-hover:text-black transition-all" />
        <p className="group-hover:text-black transition-all">Back</p>
      </div>
      <h1 className="text-8xl font-black text-center mb-6">
        {project.project.name}
      </h1>
      <h2 className="text-2xl font-normal text-center text-emerald-200 mb-12">
        {project.project.subtitle}
      </h2>
      <div className="flex gap-3 flex-wrap justify-center mb-12">
        {project.project.tags.map((tag, i) => (
          <Chip key={i} text={tag} hoverable={false} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 mb-12 flex-wrap">
        {project.project.links.map((l, i) => (
          <a href={l.url} target="_blank" key={i} className="group">
            <div className="w-64 h-12 flex items-center justify-center border-1 border-white relative">
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
                className="text-4xl font-bold text-emerald-200 mt-8 mb-6 pb-2 border-b-1 border-b-emerald-200"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="text-3xl font-semibold text-emerald-200 mt-8 mb-3 pb-2 border-b-1 border-b-emerald-900"
                {...props}
              />
            ),
            li: (props) => <li className="list-disc list-inside" {...props} />,
          }}
        >
          {project.markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
