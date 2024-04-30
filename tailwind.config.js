/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {},
  },
  screens: {
    phone: "640px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
  plugins: [require("daisyui")],
};
