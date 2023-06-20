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
      keyframes: {
        "go-fade": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-8px)", opacity: "0" },
        },
        "out-fade": {
          "0%": { transform: "translateY(-8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "go-fade": "go-fade 0.4s ease-in-out",
        "out-fade": "out-fade 1.4s ease-in-out",
      },
      colors: {
        "light-schema": "#FBFBFB",
        "dark-schema": "#2D2E2E",
      },
      boxShadow: {
        navbar:
          "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.011), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.016), 12.5px 12.5px 10px rgba(0, 0, 0, 0.02), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.024), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.029), 100px 100px 80px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
