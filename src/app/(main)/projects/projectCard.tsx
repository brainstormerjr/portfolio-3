import { useRouter } from "next/navigation";

import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

import Chip from "@/app/shared/chip";
import Image from "next/image";
import { Project } from "@/app/types";

export default function ProjectCard({
  id,
  name,
  subtitle,
  tags,
  image,
  links,
}: Project) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div
      className="w-full flex gap-5 hover:bg-glass transition-all border-1 border-transparent hover:border-t-glass-light hover:drop-shadow-lg cursor-pointer p-3 group/card hover:scale-105 relative"
      onClick={(e) => {
        handleClick(id);
        e.stopPropagation();
      }}
    >
      <div className="min-w-60 h-45 relative">
        <Image
          className="object-cover object-center"
          src={`${
            process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
          }/projects/images/${image}`}
          alt={name}
          fill
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
