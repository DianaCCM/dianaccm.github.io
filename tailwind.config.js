/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: { "primary-dark": "black" },
    },
    fontFamily: {
      "press-start": ['"Press Start 2P"', "cursive"],
      roboto: ["Roboto", "sans-serif"],
      "princess-sofia": ["Princess Sofia", "cursive"],
    },
    fontSize: {
      xs: "0.65rem",
      xxs: "0.45rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "9xl": "8rem",
      giant: "12rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
