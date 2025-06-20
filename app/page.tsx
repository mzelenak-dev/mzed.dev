import Employer from "@/components/Employer";
import SocialButtons from "@/components/SocialButtons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:mx-auto w-full max-w-[1280px] lg:flex lg:justify-between lg:gap-40 my-12">
      <header className="relative lg:sticky lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-gray-100 text-4xl font-bold tracking-tight sm:text-5xl"><a href="/">Matt Zelenak</a></h1>
          <div className="absolute top-0 right-0 lg:top-auto lg:right-auto lg:bottom-0 lg:left-0">
            <SocialButtons />
          </div>
          <h2 className="text-gray-100 mt-3 text-lg font-medium tracking-tight sm:text-xl">Software Engineer</h2>
          <p className="text-slate-100 mt-4 leading-normal">Crafting scalable software with clarity, curiosity, and care—driven by clean architecture, deep collaboration, and a relentless commitment to quality, growth, and user experience.</p>
          <nav className="nav hidden lg:visible" aria-label="In-page jump links">
            <ul className="mt-16">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#experience">Employers</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#writing">Writing</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col gap-16">
        <section id="about" className="flex flex-col gap-2">
          <p>As a senior front-end engineer with 10+ years of experience, I build scalable, accessible, high-performance web apps with React, TypeScript, and Next.js. I focus on reusable UI systems, clean developer experience, and accessible design. I take ownership through testing, performance tuning, and attention to detail. I thrive in cross-functional teams, turning complex needs into intuitive interfaces while mentoring others and promoting technical excellence.</p>
          <p>Outside of engineering, I build side projects that explore new technologies. I’m passionate about clean UI &amp; accessible UX. To stay balanced I study and play music, meditate, lift weights, walk, and hike. I grow my own food, try new coffee beans, and cook healthy meals. I enjoy reading science fiction &amp; biographies, and occasionally write content. In downtime, I enjoy games like The Legend of Zelda: Breath of the Wild.</p>
        </section>
        <section id="experience">
          <ul className="flex flex-col gap-10">
            <Employer
              name="COMPANY"
              title="JOB TITLE"
              years={[1900, 2000]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
              keywords={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
            />
            <Employer
              name="COMPANY"
              title="JOB TITLE"
              years={[1900, 2000]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
              keywords={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
            />
            <Employer
              name="COMPANY"
              title="JOB TITLE"
              years={[1900, 2000]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
              keywords={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
            />
            <Employer
              name="COMPANY"
              title="JOB TITLE"
              years={[1900, 2000]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
              keywords={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
            />
            <Employer
              name="COMPANY"
              title="JOB TITLE"
              years={[1900, 2000]}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem a nisl faucibus vulputate. Sed sed magna nec neque venenatis sodales. Vivamus volutpat tortor elit. Aenean tristique risus vitae tristique condimentum. Mauris diam sapien, dapibus mattis neque at, molestie elementum neque."
              keywords={['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item', 'item']}
            />
          </ul>
        </section>
        <section id="work"></section>
      </main>
    </div>
  );
}
