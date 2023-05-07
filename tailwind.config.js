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
      xs: "0.75rem",
      xxs: "0.45rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "9xl": "8rem",
      giant: "12rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
