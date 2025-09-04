"use client";
import { useState, useEffect } from "react";

import BlogCard from "./blogCard";
import { Blog } from "@/app/types";

export default function Blogs() {
  const [blogs, setBlogs] = useState<{ blogs: Blog[] }>({
    blogs: [],
  });

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3002"}/blogs`
    )
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const isLoading = blogs.blogs.length === 0;

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="mb-30">
      {blogs.blogs.map((b, i) => (
        <BlogCard
          id={b.id}
          title={b.title}
          subtitle={b.subtitle}
          tags={b.tags}
          image={b.image}
          date={b.date}
          links={b.links}
          key={i}
        />
      ))}
    </div>
  );
}
