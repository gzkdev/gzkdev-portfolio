/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeIcon: "url(/assets/svgs/home.svg)",
        bulbIcon: "url(/assets/svgs/bulb.svg)",
        palleteIcon: "url(/assets/svgs/pallete.svg)",
        githubIcon: "url(/assets/svgs/github.svg)",
        twitterIcon: "url(/assets/svgs/twitter.svg)",
        emailIcon: "url(/assets/svgs/email.svg)",
      },
    },
  },
  plugins: [],
};
