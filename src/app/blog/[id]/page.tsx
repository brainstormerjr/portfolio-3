"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

import { Blog } from "@/app/types";
import Chip from "@/app/shared/chip";

export default function BlogDetails() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [blog, setBlog] = useState<{
    blog: Blog;
    markdown: string;
  }>();

  useEffect(() => {
    fetch(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
      }/blogs/${id}`
    )
      .then((response) => response.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) {
    return <div className="text-white">Loading...</div>;
  }

  const handleClick = () => {
    router.push("/blog");
  };

  return (
    <div className="mt-128 mb-30 px-48">
      <div className="absolute top-0 left-0 w-full h-196 -z-30">
        <Image
          className="object-center object-cover mask-b-from-0% mask-b-to-100% -z-20"
          src={`${
            process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"
          }/blogs/images/${blog.blog.image}`}
          alt={blog.blog.title}
          fill
        />
      </div>

      <div
        className="w-fit px-4 py-2 flex items-center gap-3 cursor-pointer border-1 border-white mb-12 relative group"
        onClick={handleClick}
      >
        <div className="absolute left-0 w-full h-0 group-hover:h-full bg-white -z-10 transition-all"></div>
        <FaArrowLeft className="group-hover:text-black transition-all" />
        <p className="group-hover:text-black transition-all">Back</p>
      </div>
      <h1 className="text-8xl font-black text-center mb-6">
        {blog.blog.title}
      </h1>
      <h2 className="text-2xl font-normal text-center text-emerald-200 mb-6">
        {blog.blog.subtitle}
      </h2>
      <h2 className="text-md font-normal text-center text-translucent mb-12">
        {blog.blog.date}
      </h2>
      <div className="flex gap-3 flex-wrap justify-center mb-12">
        {blog.blog.tags.map((tag, i) => (
          <Chip key={i} text={tag} hoverable={false} />
        ))}
      </div>
      <div className="text-sm font-light">
        <ReactMarkdown
          components={{
            h1: (props) => (
              <h1
                className="text-4xl font-bold text-emerald-200 mt-8 mb-6 pb-2 border-b-1 border-b-emerald-200"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="text-3xl font-semibold text-emerald-200 mt-8 mb-3 pb-2 border-b-1 border-b-emerald-900"
                {...props}
              />
            ),
            p: (props) => <p className="leading-6 mb-5" {...props} />,
            li: (props) => <li className="list-disc list-inside" {...props} />,
            img: (props) => <img className="w-4/5 mx-auto my-16" {...props} />,
          }}
        >
          {blog.markdown}
        </ReactMarkdown>
        {blog.blog.links.length ? (
          <h1 className="text-4xl font-bold text-emerald-200 mt-8 mb-6 pb-2 border-b-1 border-b-emerald-200">
            Related Links
          </h1>
        ) : null}
        <ul>
          {blog.blog.links.map((l, i) => (
            <li key={i} className="list-disc list-inside underline leading-6">
              <a href={l.url} target="_blank">
                {l.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
