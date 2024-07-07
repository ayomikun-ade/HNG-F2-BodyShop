/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   blue: "#1fb6ff",
    //   purple: "#7e5bef",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   yellow: "#ffc82c",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // "dark-pink": "#991e66",
    // peach: "#d5bbb1",
    // "light-green": "#9cc4b2",
    // "light-pink": "#c98ca7",
    // "dark-green": "#426b69",
    // },
    fontFamily: {
      title: ["Space Grotesk", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    backgroundImage: {
      header: "url('/src/assets/header.png)",
    },
    extend: {},
  },
  plugins: [],
};
