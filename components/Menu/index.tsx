"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaGithub,
  FaHouseChimneyWindow,
  FaTwitter,
  FaCodepen,
  FaLinkedinIn,
  FaUserAstronaut,
  FaHammer,
} from "react-icons/fa6";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-10 left-[50%] z-50 flex translate-x-[-50%] gap-2 rounded-full border border-slate-700 bg-slate-800/50 p-2 text-slate-500 backdrop-blur-md sm:text-xl [&>a:hover]:text-sky-300 [&>a[data-active=true]]:text-sky-300 [&>a]:bg-slate-900">
      <Link
        title="Home"
        href="/"
        data-active={pathname == "/"}
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaHouseChimneyWindow />
      </Link>
      <Link
        title="Projects"
        href="/projects"
        data-active={pathname == "/projects"}
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaHammer />
      </Link>
      <Link
        title="About"
        href="/about"
        data-active={pathname == "/about"}
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaUserAstronaut />
      </Link>
      <Link
        title="Github"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaGithub />
      </Link>
      <Link
        title="Twitter"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaTwitter />
      </Link>
      <Link
        title="LinkedIn"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        title="Codepen"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex aspect-square w-8 items-center justify-center rounded-full transition xs:w-10 sm:w-10"
      >
        <FaCodepen />
      </Link>
    </nav>
  );
}
