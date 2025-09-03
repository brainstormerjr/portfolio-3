"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Buttons() {
  const pathname = usePathname();
  const router = useRouter();

  const buttonClass = (routes: string[]) =>
    `w-40 h-10 border-1 border-white flex justify-center items-center cursor-pointer mb-5 group relative transition-all ${
      routes.includes(pathname) ? "w-50" : ""
    }`;

  const buttonTextClass = (routes: string[]) =>
    `group-hover:text-black transition-all relative z-10 ${
      routes.includes(pathname) ? "text-black" : ""
    }`;

  const buttonBgClass = (routes: string[]) =>
    `w-0 h-10 group-hover:w-full transition-all bg-white absolute left-0 ${
      routes.includes(pathname) ? "w-full" : ""
    }`;

  const handleClick = (route: string) => {
    if (route === pathname) return;
    router.push(route);
  };

  return (
    <div>
      <div
        className={buttonClass(["/", "/about"])}
        onClick={() => handleClick("/")}
      >
        <span className={buttonTextClass(["/", "/about"])}>
          {"<"} ABOUT /{">"}
        </span>
        <div className={buttonBgClass(["/", "/about"])}></div>
      </div>

      <div
        className={buttonClass(["/projects"])}
        onClick={() => handleClick("/projects")}
      >
        <span className={buttonTextClass(["/projects"])}>
          {"<"} PROJECTS /{">"}
        </span>
        <div className={buttonBgClass(["/projects"])}></div>
      </div>

      <div
        className={buttonClass(["/blog"])}
        onClick={() => handleClick("/blog")}
      >
        <span className={buttonTextClass(["/blog"])}>
          {"<"} BLOG /{">"}
        </span>
        <div className={buttonBgClass(["/blog"])}></div>
      </div>
    </div>
  );
}
