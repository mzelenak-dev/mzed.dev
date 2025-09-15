import Image from "next/image";
import genListKey from "@/lib/utils";
import GetBlogList from '@/lib/blog';

export default function BlogList() {
  const blogList = GetBlogList();
  blogList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // newest first

  return (
    <section id="blog-posts" className="space-y-8 flex flex-col">
      {blogList.map((post) => (
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