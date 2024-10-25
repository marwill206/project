const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["helvetica-w01-light", "helvetica-w02-light", "sans-serif"],
      },

      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out ",
        fadeIn2: "fadeIn 0.001s ease-in-out ",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "#F3EDE9",
        text: "#4A4A4A",
        goodGreen: "#C5B9A6",
        another_color: "#DEE4E9",
        another_color2: "#e5ddd4",
        footer: "#D5D5D5",
        main_color:"#fffcf9",
      },
    },
  },
  plugins: [],
};
