// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import html from "remark-html";
import { remark } from "remark";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogDetail from "@/components/BlogDetail";

type BlogFrontmatter = {
  title: string;
  date: string;
  categories?: string[];
  tags?: string[];
  image?: string;
};

type BlogPost = {
  frontmatter: BlogFrontmatter;
  html: string;
};

export default async function BlogPost({params,}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "public/blog");
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;

  // Convert markdown to safe HTML
  const processedHtml = await remark()
    .use(html)
    // .use(rehypeSanitize) // sanitize HTML
    .process(content);

  const htmlContent = processedHtml.toString();
  console.log(`processedHtml is ${processedHtml}`)

  const post: BlogPost = {
    frontmatter,
    html: htmlContent || content,
  };

  return <BlogDetail post={{ ...post.frontmatter, html: post.html }} />;
}