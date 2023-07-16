/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./main.js", "./index.html"],
  theme: {
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      main: ["DM Sans", "sans-serif"],
    },
    extend: {
      keyframes: {
        burger: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-250px)" },
        },
      },
      animation: {
        burger: "burger 1s ease 0s 1 normal forwards",
      },
    },
  },
  plugins: ["tailwindcss"],
};
