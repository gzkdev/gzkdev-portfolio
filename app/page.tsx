import Loader from "@/components/Loader";
import Image from "next/image";
import ProfileImage from "../public/assets/images/profile-4.jpg";
import { FaArrowUpLong, FaCode } from "react-icons/fa6";
import { Projects } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Loader text="gzkdev" />
      <HomeSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

function HomeSection() {
  return (
    <section
      id="home"
      className="flex w-full flex-col items-center justify-center gap-5 py-20 text-center lg:min-h-full"
    >
      <div className="aspect-square min-w-[140px] max-w-[240px] cursor-crosshair overflow-hidden rounded-full bg-slate-200 grayscale-[30%] hover:grayscale-[10%]">
        <Image src={ProfileImage} alt="Godswill Ezihe" />
      </div>
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-300">
          Godswill Ezihe
        </h2>
        <div className="text-lg">Software Engineer</div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="flex min-h-full w-full flex-col items-center gap-5 text-center">
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="text-4xl font-bold text-slate-300">Projects</div>
      </div>
      <ul className="grid w-full max-w-4xl gap-5 px-5 pb-28 pt-5 text-center sm:grid-cols-2 [&>li]:rounded-3xl [&>li]:bg-slate-800/50">
        {/* md:grid-rows-4 md:[&>li:nth-child(2)]:row-span-2 md:[&>li:nth-child(3)]:row-span-2 */}
        {Projects.slice(0, 3).map((project, index) => (
          <li key={index} className="border border-slate-800">
            <div className="mx-auto flex h-full w-full max-w-[300px] flex-col items-center justify-center gap-5 px-10 py-10">
              <div className="text-2xl font-semibold tracking-tight text-slate-300">
                {project.name}
              </div>
              <div>{project.description}</div>
              <div className="mt-5 flex items-center gap-5">
                <a
                  title="Code"
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky flex aspect-square w-16 items-center justify-center gap-1 rounded-full border border-slate-900 bg-slate-700 transition"
                >
                  <FaCode />
                </a>
                <a
                  title="Demo"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky flex aspect-square w-16 items-center justify-center gap-1 rounded-full border border-slate-900 bg-slate-900 text-slate-200 transition hover:text-sky-300"
                >
                  <FaArrowUpLong className="rotate-[30deg]" />
                </a>
              </div>
            </div>
          </li>
        ))}
        <li className="border border-slate-800">
          <div className="mx-auto flex h-full w-full max-w-[300px] flex-col items-center justify-center gap-5 px-10 py-10">
            <div className="text-2xl font-semibold tracking-tight text-slate-300">
              All Projects
            </div>
            <a
              title="Demo"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky mt-5 flex min-w-[140px] items-center justify-center gap-1 rounded-full border border-slate-900 bg-slate-900 p-5 text-slate-200 transition hover:text-sky-300"
            >
              View
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}

// function ContactSection(){
//   return ()
// }
