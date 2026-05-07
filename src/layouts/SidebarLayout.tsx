import { Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Buttons from "@/components/Buttons";

export default function SidebarLayout() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-150 md:h-screen px-6 md:px-15 py-12 md:py-24 flex flex-col justify-between gap-12 md:gap-0 box-border md:sticky md:top-0">
        <div>
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            {">"}_ HAROLD KWAN
          </h1>
          <h2 className="text-lg md:text-xl mb-6">Full Stack Engineer</h2>
          <h3 className="text-base font-extralight mb-10 md:mb-20">
            I make fun sh!t.
          </h3>

          <Buttons />
        </div>

        <div>
          <div className="mt-auto flex gap-6 mb-8">
            <a href="https://github.com/brainstormerjr" target="_blank">
              <FaGithub className="size-7 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/harold-kwan/" target="_blank">
              <FaLinkedin className="size-7 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
            </a>
            <a href="mailto:haroldkwan@me.com">
              <MdEmail className="size-7 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
            </a>
          </div>
          <p className="text-xs text-translucent font-light">
            This React Router site and its CDN content is all self-hosted. You
            can see the source code on{" "}
            <a
              className="underline font-normal"
              href="https://github.com/brainstormerjr/portfolio-3"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex-1 mt-0 md:mt-24 px-6 md:px-15 pb-12 md:pb-0 font-extralight text-sm text-translucent leading-6">
        <Outlet />
      </div>
    </div>
  );
}
