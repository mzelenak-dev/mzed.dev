import Employer from "@/components/Employer";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 my-12">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Matt Zelenak</a></h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
          <p className="mt-4 max-w-xs leading-normal">I build scalable, performant, accessible, intuitive &amp; beautiful software that can run anywhere.</p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <a className="group flex items-center py-3 active" href="#about">
                  <span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  ></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#experience">
                  <span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  ></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projects">
                  <span
                    className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  ></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 shrink-0 text-xs">
            <a className="block hover:text-slate-200" href="https://github.com/mzelenak-dev" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 shrink-0 text-xs">
            <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/mzed/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </header>
      <main className="lg:w-[52%] flex flex-col gap-16">
        <section id="about" className="flex flex-col gap-2 lg:section-divider">
          <p>As a senior front-end engineer with over a decade of experience, I specialize in building scalable, accessible, and high-performance web applications using modern frameworks like React, TypeScript, and Next.js. I bring a systems-thinking approach to UI architecture—crafting reusable, maintainable components that empower teams and stand the test of time. My work is grounded in empathy—for both users and fellow engineers—which drives my commitment to accessibility, thoughtful design, and clean developer experience. I take ownership of quality through rigorous testing practices, performance optimization, and an eye for detail. I thrive in cross-functional environments, translating complex requirements into intuitive interfaces, while mentoring teammates and contributing to a culture of technical excellence. Calm under pressure and curious by nature, I continuously seek out opportunities to grow, adapt, and help teams build software that truly delivers.</p>
          <p>Outside of engineering, I enjoy building creative side projects that explore new front-end technologies and design systems. I have a passion for clean UI and accessible UX, which often spills into experimenting with Figma, motion design, and typography. I study music theory and play guitar, drums and keyboards (poorly). To maintain balance, I meditate regularly and stay active through weight training and walking/hiking. I also enjoy the process of growing my own food, trying new coffee beans, and cooking healthy, nourishing meals. I love to read of science fiction, biography and systems-thinking books, and I occasionally write technical content and reflections on software, process, and growth. In downtime, I gravitate toward immersive storytelling and open-world exploration in games like The Legend of Zelda: Breath of the Wild / Tears of the Kingdom.</p>
        </section>
        <section id="experience" className="lg:section-divider">
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
      <footer></footer>
    </div>
  );
}
