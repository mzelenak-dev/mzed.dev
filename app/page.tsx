'use client';

import Link from "next/link";
import { useEffect } from "react";
import Employer from "@/components/Employer";
import SocialButtons from "@/components/SocialButtons";

export default function Home() {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight-overlay') as HTMLElement;
    const spotlightEffect = (e:MouseEvent) => {
      spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    }
    
    document.addEventListener("mousemove", spotlightEffect);

    return () => {
      document.removeEventListener("mousemove", spotlightEffect);
    }
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl py-6 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Matt Zelenak</a></h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Engineer</h2>
            <p className="mt-4 lg:max-w-xs max-w-full leading-normal">Building scalable, human-centered applications that bridge business goals with seamless user experiences.</p>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#experience">Employers</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#writing">Writing</Link></li>
              </ul>
            </nav>
          </div>
          <SocialButtons />
        </header>
        <main id="content" className="lg:w-[52%] pt-10 lg:pt-24 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 relative z-[1]">
            <div>
              <p className="mb-4">As a senior front-end engineer with 10+ years of experience, I build scalable, accessible, high-performance web apps with React, TypeScript, and Next.js. I focus on reusable UI systems, clean developer experience, and accessible design. I take ownership through testing, performance tuning, and attention to detail. I thrive in cross-functional teams, turning complex needs into intuitive interfaces while mentoring others and promoting technical excellence.</p>
              <p className="mb-4">Outside of engineering, I build side projects that explore new technologies. I am passionate about clean UI &amp; accessible UX. To stay balanced I study and play music, meditate, lift weights, walk, and hike. I grow my own food, try new coffee beans, and cook healthy meals. I enjoy reading science fiction &amp; biographies, and occasionally write content. In downtime, I enjoy games like The Legend of Zelda: Breath of the Wild.</p>
            </div>
          </section>
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <ul className="flex flex-col gap-10">
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
          <section id="work" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"></section>
        </main>
      </div>
    </div>
  );
}
