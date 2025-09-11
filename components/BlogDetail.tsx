// components/BlogDetail.tsx
import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  date: string | Date;
  image?: string;
  categories?: string[];
  tags?: string[];
  excerpt?: string;
  html: string;
  readingTime?: string;
};

export default function BlogDetail({ post }: { post: Post }) {
  const formattedDate =
    typeof post.date === "string"
      ? new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : post.date.toLocaleDateString();

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      {/* Page container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 lg:py-20">
        <article className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16">
          {/* Left column — content */}
          <section className="space-y-8">
            {/* Breadcrumb / meta row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="font-medium">
                  {post.title}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <time
                  dateTime={new Date(post.date).toISOString()}
                  className="text-sm text-slate-400"
                >
                  {formattedDate}
                </time>
                {post.readingTime && (
                  <span className="text-sm text-slate-400">· {post.readingTime}</span>
                )}
              </div>
            </div>

            {/* Hero card */}
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 shadow-lg"
              aria-hidden={!post.image}
            >
              {post.image ? (
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-cover object-center transform transition-transform duration-700 ease-out hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 pointer-events-none" />
                </div>
              ) : (
                <div className="h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-slate-800/30">
                  <span className="text-sm text-slate-400">No image provided</span>
                </div>
              )}

              <header className="absolute left-6 right-6 bottom-6 sm:bottom-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-slate-50 drop-shadow-md">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="mt-2 text-sm text-slate-300 max-w-2xl">{post.excerpt}</p>
                )}
              </header>
            </div>

            {/* Article body card */}
            <div className="prose prose-invert max-w-none bg-slate-900/40 rounded-xl p-6 sm:p-8 shadow-inner">
              {/* tags & categories row */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories?.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-teal-300"
                  >
                    {c}
                  </span>
                ))}

                {post.tags?.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs text-slate-300 bg-slate-800/20"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* actual content (assumes sanitized HTML) */}
              <div
                className="leading-relaxed text-slate-200 prose-a:text-teal-300 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              {/* CTA / read more area */}
              <footer className="mt-10 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-blue-500 flex items-center justify-center text-slate-900 font-semibold">
                      MZ
                    </div>
                    <div>
                      <div className="text-sm font-medium">Matt Zelenak</div>
                      <div className="text-xs text-slate-400">Front End Engineer</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                      aria-label="Share on Twitter"
                    >
                      Share
                    </Link>
                    <Link
                      href="#comments"
                      className="text-sm text-slate-300 hover:text-white"
                    >
                      Comments
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </section>

          {/* Right column — TOC + related */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <div className="w-72 space-y-6">
              {/* Read / actions card */}
              <div className="rounded-xl bg-slate-800/30 p-4 shadow backdrop-blur">
                <div className="text-xs text-slate-400 uppercase tracking-wide">Article</div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-100">{formattedDate}</div>
                    {post.readingTime && (
                      <div className="text-xs text-slate-400">{post.readingTime}</div>
                    )}
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center px-3 py-1 rounded-md bg-teal-400/10 text-teal-300 text-sm"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>

              {/* Table of contents (optional) */}
              <nav className="rounded-xl bg-slate-800/20 p-4 text-sm text-slate-300 sticky top-28 shadow-inner">
                <div className="text-xs text-slate-400 uppercase mb-3">On this page</div>
                <ul className="space-y-2">
                  {/* Replace with auto-generated TOC */}
                  <li>
                    <Link href="#overview" className="hover:text-white block">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="#best-practices" className="hover:text-white block">
                      Best practices
                    </Link>
                  </li>
                  <li>
                    <Link href="#tools" className="hover:text-white block">
                      Tools
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Related posts */}
              <div className="rounded-xl bg-slate-800/20 p-4">
                <div className="text-xs text-slate-400 uppercase mb-3">Related posts</div>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/blog/related-1" className="block hover:text-white">
                      Designing systems that scale
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/related-2" className="block hover:text-white">
                      Accessibility-first interfaces
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}