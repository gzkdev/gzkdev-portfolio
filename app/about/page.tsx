import Loader from "@/components/Loader";

export default function About() {
  return (
    <main>
      <div className="mx-auto w-full max-w-[900px] px-5 py-20">
        <Loader text="about" />
        <h1 className="font-enigma text-step-5 leading-tight tracking-tighter">
          About
        </h1>
      </div>
    </main>
  );
}
