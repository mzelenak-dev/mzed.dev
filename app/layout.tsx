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
      <body className={`${inter.className} antialiased bg-gradient relative mx-auto h-full w-full px-6 text-slate-400 bg-slade-900 leading-relaxed selection:bg-teal-300 selection:text-teal-900`}>
        <div id="spotlight-overlay"></div>
        {children}
      </body>
    </html>
  );
}
