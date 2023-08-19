"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import {
  useMotionValue,
  useTransform,
  motion,
  MotionValue,
  useSpring,
} from "framer-motion";

type Navigation = {
  name: string;
  url: string;
  icon?: string;
  rel: "A" | "E";
};

const siteMap: Navigation[] = [
  {
    name: "Home",
    url: "/",
    icon: "bg-homeIcon",
    rel: "A",
  },
  {
    name: "About",
    url: "/about",
    icon: "bg-palleteIcon",
    rel: "A",
  },
  {
    name: "Projects",
    url: "/projects",
    icon: "bg-bulbIcon",
    rel: "A",
  },
  {
    name: "Github",
    url: "/",
    icon: "bg-githubIcon",
    rel: "E",
  },
  {
    name: "Twitter",
    url: "/",
    icon: "bg-twitterIcon",
    rel: "E",
  },
  {
    name: "Email",
    url: "/",
    icon: "bg-emailIcon",
    rel: "E",
  },
];

export default function MenuBar() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-8 left-[50%] z-50 flex max-h-12 max-w-max translate-x-[-50%] items-end justify-center  gap-2 rounded-full border border-[#fdfdfd08] bg-[#fdfdfd0f] p-1 py-0.5"
    >
      {siteMap.map((navigation) => (
        <NavigationLink
          key={navigation.name}
          mouseX={mouseX}
          navigation={navigation}
        />
      ))}
    </div>
  );
}

function NavigationLink({
  mouseX,
  navigation,
}: {
  mouseX: MotionValue;
  navigation: Navigation;
}) {
  const router = useRouter();
  const ref = useRef<HTMLAnchorElement>(null);
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds?.width / 2;
  });
  let computeWidth = useTransform(distance, [-200, 0, 100], [40, 80, 40]);
  let width = useSpring(computeWidth, {
    damping: 15,
    mass: 0.1,
    stiffness: 200,
  });

  return navigation.rel == "A" ? (
    <motion.a
      ref={ref}
      title={navigation.name}
      style={{ width }}
      href={navigation.url}
      onClick={(e) => {
        e.preventDefault();
        router.push(navigation.url);
      }}
      className={`flex aspect-square items-center justify-center rounded-full border border-[#fdfdfd08] bg-[#000] bg-center bg-no-repeat [background-size:50%] ${navigation.icon}`}
    ></motion.a>
  ) : (
    <motion.a
      ref={ref}
      title={navigation.name}
      href={navigation.url}
      style={{ width }}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex aspect-square items-center justify-center rounded-full border border-[#fdfdfd08] bg-[#000] bg-center bg-no-repeat [background-size:50%] ${navigation.icon}`}
    ></motion.a>
  );
}
