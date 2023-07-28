/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A8A8",
        secondary: "#036666",
        tertiary: "#004343",
        header: "#005656",
        bgcolor: "#F0F7F7",
        gray: "#898989",
      },
      spacing: {
        230: "230px",
        208: "208px",
        123: "123px",
      },
      fontFamily: {
        poppins: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
