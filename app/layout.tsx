import Link from "next/link";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Matt Zed Zelenak Portfolio',
  description: 'Portfolio Resume for Matt Zed Zelenak',
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gradient leading-relaxed text-slate-400 selection:selected-text`}
      >
        <div className="relative">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
