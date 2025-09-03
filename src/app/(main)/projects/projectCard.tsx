import { useRouter } from "next/navigation";

import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

import Chip from "../../shared/chip";
import Image from "next/image";

export type ProjectProps = {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  image: string;
  links: { text: string; url: string }[];
};

export default function ProjectCard({
  id,
  name,
  subtitle,
  tags,
  image,
  links,
}: ProjectProps) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div
      className="w-full flex gap-5 hover:bg-glass transition-all border-1 border-transparent hover:border-t-glass-light hover:drop-shadow-lg cursor-pointer p-3 group hover:scale-105 relative"
      onClick={() => handleClick(id)}
    >
      <div className="min-w-55 h-35 relative">
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
        <p className="font-normal text-white group-hover:text-emerald-200 transition-all mb-3">
          {name}
        </p>
        <p className="mb-3">{subtitle}</p>
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag, i) => (
            <Chip key={i} text={tag} />
          ))}
        </div>
      </div>
      <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover:right-1 group-hover:top-1 transition-all group-hover:text-emerald-200" />
    </div>
  );
}
