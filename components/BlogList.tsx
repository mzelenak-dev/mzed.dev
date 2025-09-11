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
    <section id="blog-posts" className="space-y-8 flex flex-col">
      {posts.map((post) => (
        <a key={genListKey()} href={`/blog/${post.slug}`}>
          <article className="p-5 rounded-lg bg-slate-800/50">
            <div className="w-full h-[200px] rounded-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-125"
              />
            </div>
            <div className="py-5">
              <h4 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{post.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{post.date}</p>
              <p className="mt-4 text-md text-slate-300">{post.content.slice(0, 250)}&hellip;</p>
            </div>
          </article>
        </a>
      ))}
    </section>
  );
}