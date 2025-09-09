'use client';

import Employer from "@/components/Employer";
import SocialButtons from "@/components/SocialButtons";
import Link from "next/link";
import useSpotlight from "@/hooks/useSpotlight";
import BlogList from "@/components/BlogList";
import HamburgerButton from "@/components/HamburgerButton";

export default function Home() {
  useSpotlight();

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl py-6 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex items-center justify-between items-start md:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Matt Zelenak</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Engineer</h2>
              </div>
              <div className="block lg:hidden">
                <HamburgerButton />
              </div>
            </div>
            <p className="mt-4 lg:max-w-xs max-w-full leading-normal">Building scalable, human-centered applications that bridge business goals with seamless user experiences.</p>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#work">Employers</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#writing">Writing</Link></li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <SocialButtons />
          </div>
        </header>
        <main id="content" className="lg:w-[52%] pt-10 lg:pt-24 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 relative z-[1]">
            <div className="sticky top-0 z-20 -mx-5 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">ABOUT</h2>
            </div>
            <div>
              <p className="mb-4">As a senior front-end engineer with 10+ years of experience, I build scalable, accessible, high-performance web apps with React, TypeScript, and Next.js. I focus on reusable UI systems, clean developer experience, and accessible design. I take ownership through testing, performance tuning, and attention to detail. I thrive in cross-functional teams, turning complex needs into intuitive interfaces while mentoring others and promoting technical excellence.</p>
              <p className="mb-4">Outside of engineering, I build side projects that explore new technologies. I am passionate about clean UI &amp; accessible UX. To stay balanced I study and play music, meditate, lift weights, walk, and hike. I grow my own food, try new coffee beans, and cook healthy meals. I enjoy reading science fiction &amp; biographies, and occasionally write content. In downtime, I enjoy games like The Legend of Zelda: Breath of the Wild.</p>
            </div>
          </section>
          <section id="work" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-5 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">PROJECTS/WORK</h2>
            </div>
            <div>
              <p>this is some extra text just to test that the section is being grabbed by the banner on scroll in sm or md viewport</p>
            </div>
          </section>
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-5 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">EMPLOYMENT</h2>
            </div>
            <ul className="flex flex-col gap-10 px-1">
              <Employer
                name="COMPANY"
                title="JOB TITLE"
                years={[1900, 2000]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
                list={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
              />
              <Employer
                name="COMPANY"
                title="JOB TITLE"
                years={[1900, 2000]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
                list={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
              />
              <Employer
                name="COMPANY"
                title="JOB TITLE"
                years={[1900, 2000]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
                list={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
              />
              <Employer
                name="COMPANY"
                title="JOB TITLE"
                years={[1900, 2000]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
                list={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
              />
              <Employer
                name="COMPANY"
                title="JOB TITLE"
                years={[1900, 2000]}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
                list={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
              />
            </ul>
          </section>
          <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-5 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">WRITING</h2>
            </div>
            <BlogList />
          </section>
        </main>
      </div>
    </div>
  );
}
