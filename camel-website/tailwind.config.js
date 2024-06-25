/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: " #FFFAF4",
        background2: "#fff3e4",
        "primary-text": "#121212",
        "secondary-text": "#645c5c",
        accent: "#e1251a",
        highlight: "#f43a3a77",
        darkBackground:"#222831",
        darkBackground2:"#31363F",
        "dark-primary-text":"#ffffff",
        "dark-secondary-text":"#858DFF",

        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient-default": "conic-gradient(from 225deg, #e1251a, #f43a3a77, #121212, #f43a3a77, #e1251a, #121212)",
        "conic-gradient-white": "conic-gradient(from 225deg, #e1251a, #f43a3a77, #121212, #f43a3a77, #e1251a, #121212)",
        "conic-gradient-pink": "conic-gradient(from 225deg, #FF5C8E, #f8c6d3, #121212, #f8c6d3, #FF5C8E, #121212)",
        "conic-gradient-blue": "conic-gradient(from 225deg, #1A97F5, #d6eaf7, #121212, #d6eaf7, #1A97F5, #121212)",
        "conic-gradient-orange": "conic-gradient(from 225deg, #FB9678, #fcd3c0, #121212, #fcd3c0, #FB9678, #121212)",
        "conic-gradient-purple": "conic-gradient(from 225deg, #7352FF, #d3caf6, #121212, #d3caf6, #7352FF, #121212)",
        "conic-gradient-green": "conic-gradient(from 225deg, #03C9D7, #abedf1, #121212, #abedf1, #03C9D7, #121212)",
        "conic-gradient-indigo": "conic-gradient(from 225deg, #1E4DB7, #d1dcf0, #121212, #d1dcf0, #1E4DB7, #121212)",
        "custom-gradient": "linear-gradient(to right, #e1251a, #f43a3a77, #121212)",
      },
    },
  },
  plugins: [
    // plugin(function ({ addBase, addComponents, addUtilities }) {
    //   addBase({});
    //   addComponents({
    //     ".container": {
    //       "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
    //         {},
    //     },
    //     ".h1": {
    //       "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
    //         {},
    //     },
    //     ".h2": {
    //       "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
    //         {},
    //     },
    //     ".h3": {
    //       "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
    //     },
    //     ".h4": {
    //       "@apply text-[2rem] leading-normal": {},
    //     },
    //     ".h5": {
    //       "@apply text-2xl leading-normal": {},
    //     },
    //     ".h6": {
    //       "@apply font-semibold text-lg leading-8": {},
    //     },
    //     ".body-1": {
    //       "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
    //         {},
    //     },
    //     ".body-2": {
    //       "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
    //     },
    //     ".caption": {
    //       "@apply text-sm": {},
    //     },
    //     ".tagline": {
    //       "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
    //         {},
    //     },
    //     ".quote": {
    //       "@apply font-code text-lg leading-normal": {},
    //     },
    //     ".button": {
    //       "@apply font-code text-xs font-bold uppercase tracking-wider": {},
    //     },
    //   });
    //   addUtilities({
    //     ".tap-highlight-color": {
    //       "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
    //     },
    //     '.gradient-light': {
    //       background: 'conic-gradient(from 225deg, #BB86FC, #03DAC6, #B0B0B0, #E0E0E0)',
    //     },
    //     '.aspect-square': {
    //       aspectRatio: '1/1',
    //     },
    //   });
    // }),
  ],
};
