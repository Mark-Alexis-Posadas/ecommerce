/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
