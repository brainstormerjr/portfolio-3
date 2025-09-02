import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Buttons from "./buttons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-h-full overflow-y-scroll">
          <div className="flex max-w-350 mx-auto">
            <div className="w-150 h-screen px-15 py-24 flex flex-col justify-between box-border sticky top-0">
              <div>
                <h1 className="text-5xl font-black mb-6">{">"}_ HAROLD KWAN</h1>
                <h2 className="text-xl mb-6">Full Stack Engineer</h2>
                <h3 className="text-base font-extralight mb-20">
                  I make fun sh!t.
                </h3>

                <Buttons />
              </div>

              <div className="mt-auto flex gap-6 mb-24">
                <a href="https://github.com/brainstormerjr" target="_blank">
                  <FaGithub className="size-7 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harold-kwan/"
                  target="_blank"
                >
                  <FaLinkedin className="size-7 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
                </a>
                <a href="mailto:haroldkwan@me.com">
                  <MdEmail className="size-7 opacity-50 hover:opacity-100 transition-all cursor-pointer" />
                </a>
              </div>
            </div>

            <div className="flex-1 mt-24 px-15 font-extralight text-sm text-translucent leading-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
