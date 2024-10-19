/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        character: "rgba(255, 255, 255, 0.31)",
        secondary: "#F5F5F5",
      },
      fontFamily: {
        serif: ["Abril Fatface", "serif"],
        noto: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
