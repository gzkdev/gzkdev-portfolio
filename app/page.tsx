import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main>
      <div className="mx-auto w-full max-w-[900px] px-5 py-20">
        <Loader text="gzkdev" />
        <h1 className="font-enigma text-step-5 leading-tight tracking-tighter">
          GZKDEV
        </h1>
      </div>
    </main>
  );
}
