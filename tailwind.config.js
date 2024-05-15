/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {},
  plugins: [
    createThemes({
      halloween: {
        primary: "#1d2c51", //arka plan
        secondary: "black", //ikinci renk
        buttonColor: "#1e6091", // buton renkleri
        textColor: "white",
        logincardbg: "#193350",
        buttontextColor: "white",

        shadow: "white",
        text: "white",
        logininputbg: "#1e293b",
      },
      summer: {
        primary: "#c6d3de",
        secondary: "green",
        buttonColor: "blue",
        buttontextColor: "white",
        textColor: "black",
        logincardbg: "white",
        shadow: "black",
        text: "#1d2c51",
        logininputbg: "#edf2f4",
      },
    }),
  ],
};
