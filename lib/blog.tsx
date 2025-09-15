import fs from "fs";
import path from "path";
import matter from "gray-matter";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  image: string;
  content: string;
};

export default function GetBlogList() {
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
        image: data.image,
        title: data.title || "Untitled",
        slug: file.replace(/\.md$/, ""),
        categories: data.categories || [],
      };
    })

  return posts;
}