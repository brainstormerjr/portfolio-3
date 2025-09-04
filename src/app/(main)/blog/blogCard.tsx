import { useRouter } from "next/navigation";

import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

import Chip from "@/app/shared/chip";
import Image from "next/image";
import { Blog } from "@/app/types";

export default function BlogCard({
  id,
  title,
  subtitle,
  tags,
  image,
  date,
}: Blog) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className="w-full flex gap-5 hover:bg-glass transition-all border-1 border-transparent hover:border-t-glass-light hover:drop-shadow-lg cursor-pointer p-3 group hover:scale-105 relative"
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
          }/blogs/images/${image}`}
          alt={title}
          fill
        />
      </div>
      <div>
        <p className="mb-3">{date}</p>
        <p className="font-normal text-white group-hover:text-emerald-200 transition-all mb-3">
          {title}
        </p>
        <p className="mb-3">{subtitle}</p>
        <div className="flex gap-3 flex-wrap mb-3">
          {tags.map((tag, i) => (
            <Chip key={i} text={tag} />
          ))}
        </div>
      </div>
      <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover:right-1 group-hover:top-1 transition-all group-hover:text-emerald-200" />
    </div>
  );
}
