import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import Chip from "../../shared/chip";

import { Experience } from "@/app/types";

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
      className={`flex border-1 border-transparent hover:drop-shadow-lg p-3 relative ${
        link
          ? "hover:bg-glass transition-all hover:border-t-glass-light hover:scale-105 group cursor-pointer"
          : ""
      }`}
      onClick={handleClick}
    >
      <div className="min-w-55">
        <p>{end ? `${start} — ${end}` : start}</p>
        <p>{location ?? ""}</p>
      </div>
      <div>
        <p>
          <span className="font-normal text-white group-hover:text-emerald-200 transition-all">
            {role ?? ""}
          </span>{" "}
          {role ? "@" : ""}
        </p>
        <p className="font-normal text-white group-hover:text-emerald-200 transition-all mb-3">
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
        <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover:right-1 group-hover:top-1 transition-all group-hover:text-emerald-200" />
      ) : null}
    </div>
  );
}
