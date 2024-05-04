const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
    fontFamily: {
      body: ["Barlow Semi Condensed"],
    },
    screens: {
      phone: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [require("daisyui")],
};
