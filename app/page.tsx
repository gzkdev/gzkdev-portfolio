import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main className="grid min-h-full gap-1 p-1 lg:grid-cols-4 lg:grid-rows-4">
      <Loader text="about" />
      <div className="grid-item top-0 min-h-[80vh] lg:sticky lg:col-[1/3] lg:row-[1/6] lg:h-[99vh]">
        <div className="wrapper"> 1</div>
      </div>
      <div className="grid-item min-h-[60vh] lg:col-[3/5]">
        <div className="wrapper"> 2</div>
      </div>
      <div className="grid-item min-h-[50vh] lg:col-[3/5]">
        <div className="wrapper"> 3</div>
      </div>
      <div className="grid-item min-h-[10vh] lg:col-[3/5]">
        <div className="wrapper"> 4</div>
      </div>
      <div className="grid-item min-h-[10vh] lg:col-[3/5]">
        <div className="wrapper"> 5</div>
      </div>
    </main>
  );
}
