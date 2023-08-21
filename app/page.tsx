import Loader from "@/components/Loader";
import Image from "next/image";
import ProfileImage from "../public/assets/images/profile-4.jpg";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoCodepen,
} from "react-icons/io";

export default function Home() {
  return (
    <main className="grid min-h-full gap-2 p-2 lg:max-h-screen lg:grid-cols-4 lg:grid-rows-6">
      {/* [&>*]:outline */}
      <Loader text="home" />
      <div className="grid-item top-0 lg:sticky lg:col-[1/3] lg:row-[1/6]">
        <div className="wrapper h-full w-full text-center lg:text-start">
          <div className="sticky-header">Home</div>
          <div className="flex w-full flex-col items-center px-5 py-16 lg:items-start">
            <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full border-[4px] border-teal-500 grayscale-[50%] transition hover:grayscale-0">
              <Image
                src={ProfileImage}
                objectFit="cover"
                alt="Godswill Ezihe"
                className=""
              />
            </div>
            <div className="my-5 flex flex-col gap-1">
              <span className="text-4xl font-semibold leading-tight text-slate-100">
                Godswill Ezihe
              </span>
              <span className="text-lg font-semibold text-slate-500">
                Software Engineer
              </span>
            </div>
            <div className="mb-10 flex max-w-md flex-col items-center gap-5 lg:items-start">
              <p>
                I'm a software engineer from Nigeria, focused on building
                performant and scalable applications that are infused with
                excellent user experience
              </p>
              <a
                href="#"
                className="sm rounded bg-teal-300 px-8 py-4 font-semibold text-teal-900 sm:w-max"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item min-h-[50vh] lg:col-[3/5] lg:row-[1/4] lg:min-h-0">
        <div className="wrapper">
          <div className="grid h-full w-full">
            <div className="sticky-header">About</div>
          </div>
        </div>
      </div>
      <div className="grid-item min-h-[50vh] lg:col-[3/5] lg:row-[4/7] lg:min-h-0">
        <div className="wrapper">
          <div className="grid h-full w-full">
            <div className="sticky-header">Projects</div>
          </div>
        </div>
      </div>
      <div className="grid-item lg:col-[1/3] lg:row-[6/7]">
        <div className="wrapper h-full">
          <div className="flex h-full w-full flex-col">
            <div className="sticky-header">Socials</div>
            <div className="flex px-5 pb-5">
              <ul className="flex items-center justify-center gap-6 text-3xl lg:justify-start">
                <li>
                  <a
                    href="http://#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 transition hover:bg-slate-600/50 hover:text-teal-300"
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
                    className="inline-flex items-center justify-center p-2 transition hover:bg-slate-600/50 hover:text-teal-300"
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
                    className="inline-flex items-center justify-center p-2 transition hover:bg-slate-600/50 hover:text-teal-300"
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
                    className="inline-flex items-center justify-center p-2 transition hover:bg-slate-600/50 hover:text-teal-300"
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
    </main>
  );
}
