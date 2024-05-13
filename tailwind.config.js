/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {},
  plugins: [
    createThemes({
      halloween: {
        primary: "orange",
        secondary: "yellow",
        buttonColor: "red",
      },
      summer: {
        primary: "pink",
        secondary: "red",
        buttonColor: "blue",
      },
      winter: {
        primary: "blue",
        secondary: "green",
        buttonColor: "red",
      },
      party: {
        primary: "steelblue",
        secondary: "darkblue",
        buttonColor: "red",
      },
    }),
  ],
};
