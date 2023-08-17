import Link from "next/link";

const navigationMap = [
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
  return (
    <div className="fixed bottom-8 left-[50%] z-50 max-w-[400px] translate-x-[-50%] rounded-full border border-[#fdfdfd08] bg-[#fdfdfd0f] p-1">
      <div className="flex items-center justify-center gap-2">
        {navigationMap.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="flex h-12 w-12 items-baseline justify-center rounded-full border border-[#fdfdfd08] bg-black"
          ></Link>
        ))}
      </div>
    </div>
  );
}
