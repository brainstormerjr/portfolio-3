import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { Metadata } from "next";

import Buttons from "./buttons";

export const metadata: Metadata = {
  title: "Harold Kwan",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-150 h-screen px-15 py-24 flex flex-col justify-between box-border sticky top-0">
        <div>
          <h1 className="text-5xl font-black mb-6">{">"}_ HAROLD KWAN</h1>
          <h2 className="text-xl mb-6">Full Stack Engineer</h2>
          <h3 className="text-base font-extralight mb-20">I make fun sh!t.</h3>

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
            This site runs on Next.js, Tailwind, and an Express backend. You can
            see the source code for both the{" "}
            <a
              className="underline font-normal"
              href="https://github.com/brainstormerjr/portfolio-3"
              target="_blank"
            >
              frontend
            </a>{" "}
            and{" "}
            <a
              className="underline font-normal"
              href="https://github.com/brainstormerjr/portfolio-3-backend"
              target="_blank"
            >
              backend
            </a>{" "}
            on GitHub.
          </p>
        </div>
      </div>

      <div className="flex-1 mt-24 px-15 font-extralight text-sm text-translucent leading-6">
        {children}
      </div>
    </div>
  );
}
