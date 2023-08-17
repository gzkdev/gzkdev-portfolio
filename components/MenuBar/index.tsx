"use client";
import {
  useMotionValue,
  useTransform,
  motion,
  MotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

type Navigation = {
  name: string;
  url: string;
  icon: null;
};

const navigationMap: Navigation[] = [
  {
    name: "Home",
    url: "/",
    icon: null,
  },
  {
    name: "About",
    url: "/about",
    icon: null,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: null,
  },
  {
    name: "Github",
    url: "/",
    icon: null,
  },
  {
    name: "Twitter",
    url: "/",
    icon: null,
  },
  {
    name: "Email",
    url: "/",
    icon: null,
  },
];

export default function MenuBar() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-8 left-[50%] z-50 flex max-h-12 max-w-max translate-x-[-50%] items-end justify-center gap-2  rounded-full border border-[#fdfdfd08] bg-[#fdfdfd0f] p-1 py-0.5"
    >
      {navigationMap.map((navigation) => (
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
  const ref = useRef<HTMLSpanElement>(null);
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

  return (
    <Link href={navigation.url}>
      <motion.span
        ref={ref}
        style={{ width }}
        className="flex aspect-square items-baseline justify-center rounded-full border border-[#fdfdfd08] bg-black"
      ></motion.span>
    </Link>
  );
}
