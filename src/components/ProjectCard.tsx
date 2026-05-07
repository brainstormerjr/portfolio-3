import { useNavigate } from "react-router-dom";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

import Chip from "./Chip";
import { CDN_URL } from "@/lib/env";
import type { Project } from "@/types";

export default function ProjectCard({
  id,
  name,
  subtitle,
  tags,
  image,
  links,
}: Project) {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      className="w-full flex flex-col md:flex-row gap-5 hover:bg-glass transition-all border-1 border-transparent hover:border-t-glass-light hover:drop-shadow-lg cursor-pointer p-3 group/card md:hover:scale-105 relative"
      onClick={(e) => {
        handleClick(id);
        e.stopPropagation();
      }}
    >
      <div className="w-full md:w-auto md:min-w-60 h-45 relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={`${CDN_URL}/projects/images/${image}`}
          alt={name}
        />
      </div>
      <div>
        <p className="font-normal text-white group-hover/card:text-emerald-200 transition-all mb-3">
          {name}
        </p>
        <p className="mb-3">{subtitle}</p>
        <div className="flex gap-3 flex-wrap mb-3">
          {tags.map((tag, i) => (
            <Chip key={i} text={tag} />
          ))}
        </div>
        <div className="flex gap-3 flex-wrap text-white opacity-0 group-hover/card:opacity-100 overflow-hidden transition-all">
          {links.map((l, i) => (
            <a
              href={l.url}
              target="_blank"
              key={i}
              className="group/button"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-3 py-1 flex items-center justify-center border-1 border-white relative">
                <p className="group-hover/button:text-black transition-all">
                  {l.text}
                </p>
                <div className="absolute w-full h-0 group-hover/button:h-full bg-white -z-10 transition-all"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover/card:right-1 group-hover/card:top-1 transition-all group-hover/card:text-emerald-200" />
    </div>
  );
}
