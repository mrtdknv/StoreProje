/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {},
  plugins: [
    createThemes({
      halloween: {
        primary: "gray", //buton renggi
        secondary: "black", //bellideğil
        buttonColor: "red", // arka plan
        textColor: "white",
      },
      summer: {
        primary: "red",
        secondary: "green",
        buttonColor: "blue",
        textColor: "yellow",
      },
      winter: {
        primary: "red",
        secondary: "yellow",
        buttonColor: "black",
        textColor: "pink",
      },
    }),
  ],
};
