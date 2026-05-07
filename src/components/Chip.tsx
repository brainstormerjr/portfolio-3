import { useEffect, useState } from "react";

import { CDN_URL } from "@/lib/env";

interface ChipProps {
  text: string;
  hoverable?: boolean;
}

export default function Chip({ text, hoverable = true }: ChipProps) {
  const iconFile = text === "C#" ? "CSharp.png" : `${text}.png`;
  const iconUrl = `${CDN_URL}/icons/${iconFile}`;

  const [hasIcon, setHasIcon] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setHasIcon(true);
    };
    img.src = iconUrl;
    return () => {
      cancelled = true;
    };
  }, [iconUrl]);

  return (
    <div
      className={`w-fit h-10 flex items-center border-1 border-emerald-200
    ${
      hoverable
        ? "text-emerald-200 group-hover/card:bg-emerald-200 group-hover/card:text-black transition-all"
        : "text-black bg-emerald-200"
    }`}
    >
      {hasIcon ? (
        <div className="w-10 h-10 bg-emerald-200 flex items-center justify-center">
          <div className="relative w-6 h-6">
            <img
              className="absolute inset-0 w-full h-full object-contain object-center"
              src={iconUrl}
              alt={text}
            />
          </div>
        </div>
      ) : null}
      <div className="px-2">
        <p className="h-fit font-light">{text}</p>
      </div>
    </div>
  );
}
