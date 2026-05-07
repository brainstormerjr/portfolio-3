import { useNavigate } from "react-router-dom";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

import Chip from "./Chip";
import { CDN_URL } from "@/lib/env";
import type { Blog } from "@/types";

export default function BlogCard({
  id,
  title,
  subtitle,
  tags,
  image,
  date,
}: Blog) {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/blog/${id}`);
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
          src={`${CDN_URL}/blogs/images/${image}`}
          alt={title}
        />
      </div>
      <div>
        <p className="mb-3">{date}</p>
        <p className="font-normal text-white group-hover/card:text-emerald-200 transition-all mb-3">
          {title}
        </p>
        <p className="mb-3">{subtitle}</p>
        <div className="flex gap-3 flex-wrap mb-3">
          {tags.map((tag, i) => (
            <Chip key={i} text={tag} />
          ))}
        </div>
      </div>
      <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover/card:right-1 group-hover/card:top-1 transition-all group-hover/card:text-emerald-200" />
    </div>
  );
}
