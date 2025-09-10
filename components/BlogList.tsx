import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import genListKey from "@/lib/utils";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  image: string;
  content: string;
};

export default function BlogList() {
  const blogDir = path.join(process.cwd(), "public/blog");
  const files = fs.readdirSync(blogDir);
  const posts: BlogPost[] = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        content,
        date: new Date(data.date).toLocaleDateString("en-US") || "",
        tags: data.tags || [],
        image: data.image || null,
        title: data.title || "Untitled",
        slug: file.replace(/\.md$/, ""),
        categories: data.categories || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // newest first

  return (
    <section id="blog-posts" className="space-y-8">
      {posts.map((post) => (
        <a key={genListKey()} href={`/blog/${post.slug}`}>
          <article className="">
            <div className="w-full">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100">{post.title}</h2>
              <p className="text-sm text-slate-400">{post.date}</p>
              <p className="mt-2 text-slate-300">{post.content.slice(0, 250)}...</p>
            </div>
          </article>
        </a>
      ))}
    </section>
  );
}