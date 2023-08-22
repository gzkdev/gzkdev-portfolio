export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 text-center"
    >
      <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-10 px-5 pb-28">
        <div className="max-w-sm">
          Loosely designed and engineered in Visual Studio Code by &nbsp;
          <a
            title="Godswill Ezihe - @gzkdev"
            href="http://github.com/gzkdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-300"
          >
            yours truly
          </a>
          . Built with Next.js and Tailwind CSS, deployed with Vercel
        </div>

        <div className="text-slate-600">
          &copy;2023 <span>Godswill Ezihe</span>
        </div>
      </div>
    </footer>
  );
}
