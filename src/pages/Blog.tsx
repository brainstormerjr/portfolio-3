import { useState, useEffect } from "react";

import BlogCard from "@/components/BlogCard";
import CardListSkeleton from "@/components/skeletons/CardListSkeleton";
import { CDN_URL } from "@/lib/env";
import type { Blog } from "@/types";

export default function Blogs() {
  const [blogs, setBlogs] = useState<{ blogs: Blog[] }>({
    blogs: [],
  });

  useEffect(() => {
    fetch(`${CDN_URL}/blogs.json`)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const isLoading = blogs.blogs.length === 0;

  if (isLoading) {
    return <CardListSkeleton />;
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
