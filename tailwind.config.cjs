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
        "go-fade": {
          "0%": { transform: "translateY(0)", opacity: "1"},
          "100%": { transform: "translateY(-8px)", opacity: "0"},
        },
        "out-fade": {
          "0%": { transform: "translateY(-8px)", opacity: "0"},
          "100%": { transform: "translateY(0)", opacity: "1"},
        },
      },
      animation: {
        "slow-spin": "slow-spin 10s ease-in-out infinite",
        "go-fade": "go-fade 0.4s ease-in-out",
        "out-fade": "out-fade 1.4s ease-in-out"
      }
    },
  },
  plugins: [],
};
