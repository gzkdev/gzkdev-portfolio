export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 text-center"
    >
      <div className="flex h-full w-full max-w-4xl flex-col items-center justify-center gap-10 px-5 pb-28">
        <div className="flex flex-wrap items-center justify-center gap-5  text-slate-700">
          <div
            className="text2 flex aspect-square w-8 items-center justify-center"
            title="Visual Studio Code"
          >
            <VsCodeLogo />
          </div>
          •
          <div
            title="Next JS"
            className="flex aspect-square w-8 items-center justify-center"
          >
            <NextJsLogo />
          </div>
          •
          <div
            title="Tailwind CSS"
            className="flex aspect-square w-8 items-center justify-center"
          >
            <TailwindCSSLogo />
          </div>
          •
          <div
            title="Vercel"
            className="flex aspect-square w-8 items-center justify-center"
          >
            <VercelLogo />
          </div>
        </div>
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

function VsCodeLogo() {
  return (
    <svg viewBox="0 0 256 254" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="logosVisualStudioCode0"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stop-color="#FFF" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <path
          id="logosVisualStudioCode1"
          d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649l-76.262 57.889l76.262 57.888V68.956Z"
        />
      </defs>
      <mask id="logosVisualStudioCode2" fill="#fff">
        <use href="#logosVisualStudioCode1" />
      </mask>
      <path
        fill="#0065A9"
        d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z"
        mask="url(#logosVisualStudioCode2)"
      />
      <path
        fill="#007ACC"
        d="m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z"
        mask="url(#logosVisualStudioCode2)"
      />
      <path
        fill="#1F9CF0"
        d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z"
        mask="url(#logosVisualStudioCode2)"
      />
      <path
        fill="url(#logosVisualStudioCode0)"
        fill-opacity=".25"
        d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65l-76.262 57.89l76.262 57.888V68.956Z"
        mask="url(#logosVisualStudioCode2)"
      />
    </svg>
  );
}
function TailwindCSSLogo() {
  return (
    <svg viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="logosTailwindcssIcon0"
          x1="-2.778%"
          x2="100%"
          y1="32%"
          y2="67.556%"
        >
          <stop offset="0%" stop-color="#2298BD" />
          <stop offset="100%" stop-color="#0ED7B5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logosTailwindcssIcon0)"
        d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
      />
    </svg>
  );
}

function NextJsLogo() {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="logosNextjsIcon0"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stop-color="#FFF" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="logosNextjsIcon1"
          x1="50%"
          x2="49.953%"
          y1="0%"
          y2="73.438%"
        >
          <stop offset="0%" stop-color="#FFF" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
      </defs>
      <mask id="logosNextjsIcon3" fill="#fff">
        <use href="#logosNextjsIcon2" />
      </mask>
      <g mask="url(#logosNextjsIcon3)">
        <circle cx="128" cy="128" r="128" />
        <path
          fill="url(#logosNextjsIcon0)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
        />
        <path
          fill="url(#logosNextjsIcon1)"
          d="M163.556 76.8h17.067v102.4h-17.067z"
        />
      </g>
    </svg>
  );
}

function VercelLogo() {
  return (
    <svg viewBox="0 0 256 222" xmlns="http://www.w3.org/2000/svg">
      <path d="m128 0l128 221.705H0z" />
    </svg>
  );
}
