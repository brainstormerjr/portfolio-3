import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import About from "./about/about";

export default function Home() {
  return (
    <div className="max-h-full overflow-y-scroll">
      <div className="flex max-w-350 mx-auto">
        <div className="w-150 h-screen px-15 py-24 flex flex-col justify-between box-border sticky top-0">
          <div>
            <h1 className="text-5xl font-black mb-6">{">"}_ HAROLD KWAN</h1>
            <h2 className="text-xl mb-6">Full Stack Engineer</h2>
            <h3 className="text-base font-extralight mb-20">
              I make fun sh!t.
            </h3>

            <div className="w-40 hover:w-50 h-10 border-1 border-white flex justify-center items-center cursor-pointer mb-5 group relative transition-all">
              <span className="group-hover:text-black transition-all relative z-10">
                {"<"} ABOUT /{">"}
              </span>
              <div className="w-0 h-10 group-hover:w-full transition-all bg-white absolute left-0"></div>
            </div>
            <div className="w-40 hover:w-50 h-10 border-1 border-white flex justify-center items-center cursor-pointer mb-5 group relative transition-all">
              <span className="group-hover:text-black transition-all relative z-10">
                {"<"} PROJECTS /{">"}
              </span>
              <div className="w-0 h-10 group-hover:w-full transition-all bg-white absolute left-0"></div>
            </div>
            <div className="w-40 hover:w-50 h-10 border-1 border-white flex justify-center items-center cursor-pointer mb-5 group relative transition-all">
              <span className="group-hover:text-black transition-all relative z-10">
                {"<"} BLOG /{">"}
              </span>
              <div className="w-0 h-10 group-hover:w-full transition-all bg-white absolute left-0"></div>
            </div>
          </div>

          <div className="mt-auto flex gap-6 mb-24">
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
        </div>

        <div className="flex-1 mt-24 px-15 font-extralight text-sm text-translucent leading-6">
          <About />
        </div>
      </div>
    </div>
  );
}
