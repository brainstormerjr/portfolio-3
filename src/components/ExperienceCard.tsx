import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

import Chip from "./Chip";
import type { Experience } from "@/types";

export default function ExperienceCard({
  start,
  end,
  location,
  role,
  name,
  description,
  tags,
  link,
}: Experience) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row border-1 border-transparent hover:drop-shadow-lg p-3 relative ${
        link
          ? "hover:bg-glass transition-all hover:border-t-glass-light md:hover:scale-105 group/card cursor-pointer"
          : ""
      }`}
      onClick={handleClick}
    >
      <div className="md:min-w-55 mb-3 md:mb-0">
        <p>{end ? `${start} — ${end}` : start}</p>
        <p>{location ?? ""}</p>
      </div>
      <div>
        <p>
          <span className="font-normal text-white group-hover/card:text-emerald-200 transition-all">
            {role ?? ""}
          </span>{" "}
          {role ? "@" : ""}
        </p>
        <p className="font-normal text-white group-hover/card:text-emerald-200 transition-all mb-3">
          {name}
        </p>
        <p className="mb-3">{description}</p>
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag, i) => (
            <Chip key={i} text={tag} />
          ))}
        </div>
      </div>
      {link ? (
        <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover/card:right-1 group-hover:top-1 transition-all group-hover/card:text-emerald-200" />
      ) : null}
    </div>
  );
}
