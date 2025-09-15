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
                name="Probability Consulting"
                title="Full Stack Software Engineer"
                years={[2013, 2025]}
                description="As a full-stack engineer at a small Indianapolis-based consulting startup, I designed and delivered end-to-end front-end applications while leading deployment, troubleshooting, and cloud-based DevOps on AWS and Azure. I contributed to mobile application development, ensuring seamless user experiences across platforms, and streamlined workflows for multiple clients. Leveraging modern full-stack practices, I consistently built scalable, maintainable, and high-performing solutions tailored to diverse business needs."
                list = {['JavaScript (ES6+)', 'TypeScript','React', 'Next.js', 'Redux', 'TailwindCSS', 'CSS3', 'Design Systems', 'Storybook', 'Vite', 'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Vitest', 'ESLint', 'Storybook/Testing', 'Github Actions']}
              />
              <Employer
                name="Salesforce"
                title="Sr. Software Engineer - Full Stack"
                years={[2016, 2023]}
                description="As a senior front-end full-stack engineer at Salesforce, I led the modernization of enterprise applications with React, TypeScript, and GraphQL while advancing design systems, accessibility, and performance. I championed best practices in testing, CI/CD, and cloud deployment, ensuring reliable, scalable, and high-performing releases across teams. Looking ahead, I bring expertise in serverless architectures, AI-driven development, and edge computing to future-proof front-end engineering at scale."
                list = {['JavaScript (ES6+)', 'TypeScript','React', 'Next.js', 'Svelte', 'GraphQL', 'Redux', 'Zustand', 'TailwindCSS', 'CSS3', 'SASS / SCSS', 'Styled Components', 'Design Systems', 'Storybook', 'Webpack', 'Vite', 'Babel', 'jQuery', 'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Vitest', 'ESLint', 'Storybook/Testing', 'Github Actions']}
              />
              <Employer
                name="SmarterHQ"
                title="Front End Software Engineer"
                years={[2014, 2016]}
                description="During my time building and maintaining the prediction engine, I designed and deployed full-stack applications using Angular and React on the front end, with a C#/.NET backend powered by SQL Server and REST APIs. I leveraged AWS services including EC2, Lambda, S3, CloudFormation, and API Gateway, integrating machine learning models while implementing CI/CD pipelines, DevOps best practices, and automated testing with Mocha and NUnit. Working in Agile and Scrum environments, I optimized performance, ensured scalability, and delivered reliable, enterprise-grade predictive solutions."
                list={['AWS','CloudFormation','EC2','S3','Lambda','API Gateway','Angular','React','Redux','JavaScript','HTML5','CSS3','SASS','Webpack','Babel','C#','.NET Framework','ASP.NET','SQL Server','REST APIs','Unit Testing','Mocha','NUnit','CICD','Pipelines','DevOps','Git','GitHub','Agile','Scrum','Continuous Integration','Continuous Deployment','Microservices','Performance Optimization','Machine Learning Integration']}
              />
              <Employer
                name="Media Fuel"
                title="Wordpress & Media Developer"
                years={[2012, 2014]}
                description="During my time at the startup, I led the development of client web domains and mobile tools, combining front-end and back-end technologies to deliver fully functional, responsive applications. I produced and managed 4K/UHD media campaigns, handling video editing, motion graphics, and audio mixing to create high-quality visual content. Collaborating closely with clients, I integrated content management, optimized performance, and ensured seamless deployment, consistently delivering innovative, polished digital experiences tailored to diverse business needs."
                list={['WordPress','PHP','MySQL','HTML5','CSS3','JavaScript','jQuery','Photoshop','After Effects','Premiere Pro','Final Cut Pro','Avid Media Composer','4K Cameras','HD Cameras','Lighting Setup','Audio Mixing','Video Editing','Motion Graphics','Content Management','Video Compression']}
              />
            </ul>
          </section>
          <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionHeader sectionTitle="WRITING" />
            <BlogList />
          </section>
        </main>
      </div>
    </div>
  );
}
