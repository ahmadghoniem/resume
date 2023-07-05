/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        trianglz: "#244A71",
        tealgreen: "#13BF8E",
      },
      fontFamily: {
        opensans: ["Open Sans"],
        domine: ["Domine"],
      },
    },
  },
  plugins: [],
};
