// 'use client';

import Employer from "@/components/Employer";
import SocialButtons from "@/components/SocialButtons";
import NavigationList from "@/components/NavigationList";
import HamburgerButton from "@/components/HamburgerButton";
import BlogList from "@/components/BlogList";
import StickySectionHeader from "@/components/StickySectionHeader";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl font-sans m2:p-6 xl:p-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex justify-between items-start md:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200">Matt Zelenak</h1>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200">Full Stack Engineer</h2>
              </div>
              <div className="block md:hidden">
                <HamburgerButton />
              </div>
              <div className="hidden md:block lg:hidden">
                <NavigationList
                  orientation='row'
                  spacing={6}
                />
              </div>
            </div>
            <p className="mt-4 lg:max-w-xs max-w-full leading-normal">Building scalable, human-centered applications that bridge business goals with seamless user experiences.</p>
            <nav className="nav hidden lg:block w-max mt-16">
              <div className="hidden md:block">
                <NavigationList
                  orientation='col'
                  spacing={6}
                />
              </div>
            </nav>
          </div>
          <div className="hidden md:block">
            <SocialButtons />
          </div>
        </header>
        <main id="content" className="lg:w-[52%] pt-10 lg:pt-24 lg:py-24">
          <section id="about" className="relative ">
            <StickySectionHeader sectionTitle="ABOUT" />
            <div>
              <p className="mb-4">As a senior front-end engineer with 10+ years of experience, I build scalable, accessible, high-performance web apps with React, TypeScript, and Next.js. I focus on reusable UI systems, clean developer experience, and accessible design. I take ownership through testing, performance tuning, and attention to detail. I thrive in cross-functional teams, turning complex needs into intuitive interfaces while mentoring others and promoting technical excellence.</p>
              <p className="mb-4">Outside of engineering, I build side projects that explore new technologies. I am passionate about clean UI &amp; accessible UX. To stay balanced I study and play music, meditate, lift weights, walk, and hike. I grow my own food, try new coffee beans, and cook healthy meals. I enjoy reading science fiction &amp; biographies, and occasionally write content. In downtime, I enjoy games like The Legend of Zelda: Breath of the Wild.</p>
            </div>
          </section>
          <section id="work" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionHeader sectionTitle="PROJECTS/WORK" />
          </section>
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionHeader sectionTitle="EMPLOYMENT" />
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
            <StickySectionHeader sectionTitle="WRITING" />
            <BlogList />
          </section>
        </main>
        <footer className="bg-black w-auto h-10">

        </footer>
      </div>
    </div>
  );
}
