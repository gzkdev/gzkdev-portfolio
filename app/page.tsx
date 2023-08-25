import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <a
        href="#content"
        className="fixed left-0 top-0 block -translate-x-full rounded bg-gradient-to-br px-6 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="py-16 lg:flex lg:justify-between lg:py-10">
        <div className="top-0 px-6 lg:sticky lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:p-16 xl:p-24">
          <header>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              <Link href="/">Godswill Ezihe</Link>
            </h1>
            <h2 className="py-2 text-xl leading-tight tracking-tight">
              Software Engineer
            </h2>
            <p className="max-w-xs py-4">
              {/* A software engineer focused on building fluid and immersive user
              experiences */}
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </header>
          <div>
            <ul className="flex items-center gap-5 py-4 text-2xl">
              <li>
                <a
                  title="Twitter"
                  href="http://#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  title="Twitter"
                  href="http://#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  title="LinkedIn"
                  href="http://#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  title="Codepen"
                  href="http://#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCodepen />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <main
          id="content"
          className="flex min-h-[200vh] flex-col lg:w-1/2 lg:pt-10"
        >
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <WritingSection />
        </main>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <div className="sticky top-0 z-20 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-10 px-6 lg:px-0">
        <div className="min-h-[30vh] bg-slate-600"></div>
        <div className="min-h-[30vh] bg-slate-600"></div>
        <div className="min-h-[30vh] bg-slate-600"></div>
        <div className="min-h-[30vh] bg-slate-600"></div>
        <div className="min-h-[30vh] bg-slate-600"></div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="sticky top-0 z-20 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-10 px-6 lg:px-0">
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="sticky top-0 z-20 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="flex flex-col gap-10 px-6 lg:px-0">
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
        <div className="min-h-[30vh] bg-slate-600 "></div>
      </div>
    </section>
  );
}

function WritingSection() {
  return null;
}
