import Image from "next/image";
import { useIconList } from "./iconListContext";

export default function Chip({
  text,
  hoverable = true,
}: {
  text: string;
  hoverable?: boolean;
}) {
  const iconList = useIconList();
  let icon = `${text}.png`;
  if (text === "C#") {
    icon = icon.replace("#", "Sharp");
  }
  const isIconDefined = icon && iconList.includes(icon);

  return (
    <div
      className={`w-fit h-10 flex items-center border-1 border-emerald-200
    ${
      hoverable
        ? "text-emerald-100 group-hover/card:bg-emerald-200 group-hover/card:text-black transition-all"
        : "text-black bg-emerald-100"
    }`}
    >
      {isIconDefined ? (
        <div className="w-10 h-10 bg-emerald-200 flex items-center justify-center">
          <div className="relative w-6 h-6">
            <Image
              className="object-contain object-center"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/icons/${icon}`}
              alt={text}
              fill
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
