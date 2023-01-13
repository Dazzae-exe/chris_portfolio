/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      screens: {
        mobile: "420px",
        "mobile-xs": "360px",
      },
    },
  },
  plugins: [],
};
