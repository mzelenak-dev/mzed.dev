import "./globals.css";
import { Inter } from 'next/font/google'
import { getBlogPosts } from "@/lib/getBlogPosts";
import React from "react";

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Matt Zed Zelenak Portfolio',
  description: 'Portfolio Resume for Matt Zed Zelenak',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const blogPosts = getBlogPosts();
  console.log(`blogPosts is ${blogPosts}`);
  // const _children = React.cloneElement(children as React.ReactElement, blogPosts);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient relative mx-auto h-full w-full px-5 py-4 text-slate-400 bg-slate-900 leading-relaxed selection:bg-teal-300 selection:text-teal-900`}>
        <div id="spotlight-overlay" className="hidden lg:block"></div>
        {children}
      </body>
    </html>
  );
}
