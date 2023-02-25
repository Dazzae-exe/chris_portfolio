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
        "slow-spin": {
          "0%": { transform: "rotate3d(1, 1, 1, 45deg)" },
          "50%": { transform: "rotate3d(2, 3, 1, 360deg)" },
          "100%": {transform: "rotate3d(1, 1, 1, 45deg)"}
        },
      },
      animation: {
        "slow-spin": "slow-spin 10s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
