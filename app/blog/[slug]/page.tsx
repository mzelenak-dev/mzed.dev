// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Image from "next/image";

type BlogFrontmatter = {
  title: string;
  date: string;
  categories?: string[];
  tags?: string[];
  image?: string;
};

// ✅ Use the Next.js generic type for Page components
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params (since Next.js types them as a Promise in some configs)
  const { slug } = await params;

  const blogDir = path.join(process.cwd(), "public/blog");
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as BlogFrontmatter;

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-400">
        {new Date(frontmatter.date).toLocaleDateString()}
      </p>

      {frontmatter.image && (
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          className="my-6 rounded-lg"
          width={800}
          height={400}
        />
      )}

      {frontmatter?.categories && frontmatter.categories.length > 0 && (
        <p className="text-xs text-teal-400">
          Categories: {frontmatter.categories.join(", ")}
        </p>
      )}

      <div className="mt-6 whitespace-pre-line">{content}</div>
    </article>
  );
}