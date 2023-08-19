import Loader from "@/components/Loader";

export default function Projects() {
  return (
    <main>
      <div className="mx-auto w-full max-w-[900px] px-5 py-20">
        <Loader text="projects" />
        <h1 className="font-enigma text-step-5 leading-tight tracking-tighter">
          Projects
        </h1>
      </div>
    </main>
  );
}
