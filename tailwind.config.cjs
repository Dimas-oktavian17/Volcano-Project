/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main.js", "./index.html"],
  theme: {
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      main: ["DM Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: ["tailwindcss"],
};
