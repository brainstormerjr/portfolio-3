import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaArrowLeft } from "react-icons/fa6";

import Chip from "@/components/Chip";
import DetailSkeleton from "@/components/skeletons/DetailSkeleton";
import { CDN_URL } from "@/lib/env";
import type { Blog } from "@/types";

export default function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<{ blog: Blog; markdown: string }>();

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    (async () => {
      try {
        const listRes = await fetch(`${CDN_URL}/blogs.json`);
        if (!listRes.ok) throw new Error();
        const list: { blogs: Blog[] } = await listRes.json();
        const blog = list.blogs.find((b) => b.id === id);
        if (!blog) throw new Error();
        const mdRes = await fetch(`${CDN_URL}/blogs/markdown/${id}.md`);
        if (!mdRes.ok) throw new Error();
        const markdown = await mdRes.text();
        if (!cancelled) setData({ blog, markdown });
      } catch {
        if (!cancelled) navigate("/404", { replace: true });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id, navigate]);

  if (!data) {
    return <DetailSkeleton />;
  }

  const { blog, markdown } = data;

  const handleClick = () => {
    navigate("/blog");
  };

  return (
    <div className="mt-48 md:mt-128 mb-30 px-6 md:px-48">
      <div className="absolute top-0 left-0 w-full h-80 md:h-196 -z-30">
        <img
          className="absolute inset-0 w-full h-full object-center object-cover mask-b-from-0% mask-b-to-100% -z-20"
          src={`${CDN_URL}/blogs/images/${blog.image}`}
          alt={blog.title}
        />
      </div>

      <div
        className="w-fit px-4 py-2 flex items-center gap-3 cursor-pointer border border-white mb-8 md:mb-12 relative group"
        onClick={handleClick}
      >
        <div className="absolute left-0 w-full h-0 group-hover:h-full bg-white -z-10 transition-all"></div>
        <FaArrowLeft className="group-hover:text-black transition-all" />
        <p className="group-hover:text-black transition-all">Back</p>
      </div>
      <h1 className="text-4xl md:text-8xl font-black text-center mb-4 md:mb-6">
        {blog.title}
      </h1>
      <h2 className="text-lg md:text-2xl font-normal text-center text-emerald-200 mb-4 md:mb-6">
        {blog.subtitle}
      </h2>
      <h2 className="text-sm md:text-md font-normal text-center text-translucent mb-8 md:mb-12">
        {blog.date}
      </h2>
      <div className="flex gap-3 flex-wrap justify-center mb-8 md:mb-12">
        {blog.tags.map((tag, i) => (
          <Chip key={i} text={tag} hoverable={false} />
        ))}
      </div>
      <div className="text-sm font-light">
        <ReactMarkdown
          components={{
            h1: (props) => (
              <h1
                className="text-4xl font-bold text-emerald-200 mt-8 mb-6 pb-2 border-b border-b-emerald-200"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="text-3xl font-semibold text-emerald-200 mt-8 mb-3 pb-2 border-b border-b-emerald-900"
                {...props}
              />
            ),
            p: (props) => <p className="leading-6 mb-5" {...props} />,
            ul: (props) => <ul className="mb-5" {...props} />,
            li: (props) => (
              <li className="list-disc list-inside ml-5" {...props} />
            ),
            img: (props) => <img className="w-4/5 mx-auto my-16" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
        {blog.links.length ? (
          <h1 className="text-4xl font-bold text-emerald-200 mt-8 mb-6 pb-2 border-b border-b-emerald-200">
            Related Links
          </h1>
        ) : null}
        <ul>
          {blog.links.map((l, i) => (
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
