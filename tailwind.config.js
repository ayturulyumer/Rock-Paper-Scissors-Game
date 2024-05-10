const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        gray: "inset 1px 12px 5px rgba(186,191,210,1)",
      },
    },
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
};
