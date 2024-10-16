const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['helvetica-w01-light', 'helvetica-w02-light', 'sans-serif'],

      },

      screens:{
       widescreen:{'raw': '(min-aspect-ratio: 3/2)'},
       tallscreen: {'raw': '(min-aspect-ratio: 13/20)'},
      },

      keyframes:{
         menuO: {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
         },

         animation:{
          menuO : 'menuO 0.5s ease-in-out forwards',
         }

      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: "#F3EDE9",
        text: "#4A4A4A",
        goodGreen: "#C5B9A6",
      },
    },
  },
  plugins: [],
};
