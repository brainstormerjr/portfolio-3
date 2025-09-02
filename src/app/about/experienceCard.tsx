import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import Chip from "./chip";

export type ExperienceProps = {
  start: string;
  end: string;
  location: string;
  role: string;
  name: string;
  description: string;
  tags: string[];
};

export default function ExperienceCard({
  start,
  end,
  location,
  role,
  name,
  description,
  tags,
}: ExperienceProps) {
  return (
    <div className="flex hover:bg-glass transition-all border-1 border-transparent hover:border-t-glass-light hover:drop-shadow-lg cursor-pointer p-3 group hover:scale-105 relative">
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
      <LiaExternalLinkSquareAltSolid className="size-5 absolute right-3 top-3 group-hover:right-1 group-hover:top-1 transition-all group-hover:text-emerald-200" />
    </div>
  );
}
