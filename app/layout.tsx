import "./globals.css";
import { Inter } from 'next/font/google'
import React from "react";
import Spotlight from "@/components/Spotlight";

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Matt Zed Zelenak Portfolio',
  description: 'Portfolio Resume for Matt Zed Zelenak',
}

export default async function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient relative mx-auto h-full w-full text-slate-400 bg-slate-900 leading-relaxed selection:bg-teal-300 selection:text-teal-900 xl:px-0 lg:py-5 lg:px-5 px-3 py-3`}>
        <div id="spotlight-overlay" className="hidden lg:block absolute -z-10"></div>
        {children}
        <Spotlight />
      </body>
    </html>
  );
}
