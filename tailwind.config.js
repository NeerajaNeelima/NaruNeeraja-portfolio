/** @type {import('tailwindcss').Config} */
const tailwindColors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: tailwindColors.purple,
        secondary: tailwindColors.pink,
      },
    },
  },
  plugins: [],
};
