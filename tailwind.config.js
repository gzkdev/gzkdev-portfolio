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
      fontSize: {
        "step--2": "clamp(0.63rem, calc(0.84rem + -0.27vw), 0.78rem)",
        "step--1": "clamp(0.88rem, calc(0.96rem + -0.09vw), 0.94rem)",
        "step-0": "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
        "step-1": "clamp(1.35rem, calc(1.20rem + 0.73vw), 1.77rem)",
        "step-2": "clamp(1.62rem, calc(1.31rem + 1.53vw), 2.50rem)",
        "step-3": "clamp(1.94rem, calc(1.39rem + 2.77vw), 3.53rem)",
        "step-4": "clamp(2.33rem, calc(1.41rem + 4.63vw), 5.00rem)",
        "step-5": "clamp(2.80rem, calc(1.32rem + 7.42vw), 7.07rem)",
      },
      fontFamily: {
        enigma: "Enigma, Sans-serif",
      },
    },
  },
  plugins: [],
};
