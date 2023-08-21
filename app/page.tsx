// import Loader from "@/components/Loader";
import Image from "next/image";
import ProfileImage from "../public/assets/images/profile-4.jpg";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoCodepen,
} from "react-icons/io";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="grid min-h-full gap-[--grid-gutter] p-[--grid-gutter] [--grid-gutter:0px] lg:grid-cols-4 lg:grid-rows-4">
      <div className="grid-item top-[--grid-gutter] lg:sticky lg:col-[1/3] lg:row-[1/5] lg:max-h-[calc(100vh-(2*var(--grid-gutter)))]">
        <div className="wrapper h-full w-full">
          <div className="sticky-header">
            <Menu />
          </div>
          <div className="flex w-full flex-col gap-5 px-5 py-5 pb-10 lg:items-start lg:pb-5">
            <div className="relative aspect-square w-full max-w-[144px] cursor-nw-resize overflow-hidden border-2 border-teal-500 grayscale-[50%] transition hover:border-transparent hover:grayscale-[30%] [&:hover>*]:scale-110 [&:hover>*]:transition">
              <Image src={ProfileImage} alt="Godswill Ezihe" />
            </div>
            <div className="grid gap-1 leading-tight">
              <h2 className="text-4xl font-bold tracking-tight text-slate-100">
                Godswill Ezihe
              </h2>
              <span className="text-sm font-medium uppercase text-slate-500">
                Software Engineer
              </span>
            </div>
            <div className="grid max-w-md gap-5 lg:items-start">
              <p>
                Hi there, I'm a software engineer from Nigeria. I focus on
                building performant and scalable applications that are infused
                with excellent user experience
              </p>
              <ul className="flex max-w-max items-center justify-center gap-0.5 text-2xl lg:justify-start">
                <li>
                  <a
                    href="http://#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex aspect-square w-12 items-center justify-center bg-slate-600/50 transition hover:text-teal-300"
                    title="Twitter"
                  >
                    <IoLogoTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="http://#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex aspect-square w-12 items-center justify-center bg-slate-600/50 transition hover:text-teal-300"
                    title="Github"
                  >
                    <IoLogoGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="http://#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex aspect-square w-12  items-center justify-center bg-slate-600/50 transition hover:text-teal-300"
                    title="LinkedIn"
                  >
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="http://#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex aspect-square w-12  items-center justify-center bg-slate-600/50 transition hover:text-teal-300"
                    title="Codepen"
                  >
                    <IoLogoCodepen />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item min-h-[70vh] lg:col-[3/5]">
        <div className="wrapper">
          <div className="grid h-full w-full">
            <div className="sticky-header">About</div>
          </div>
        </div>
      </div>
      <div className="grid-item min-h-[50vh] lg:col-[3/5]">
        <div className="wrapper">
          <div className="grid h-full w-full">
            <div className="sticky-header">Projects</div>
          </div>
        </div>
      </div>
      {/* <div className="grid-item min-h-[70vh] lg:col-[3/5]">
        <div className="wrapper">
          <div className="grid h-full w-full">
            <div className="sticky-header">Articles</div>
          </div>
        </div>
      </div> */}
    </main>
  );
}
