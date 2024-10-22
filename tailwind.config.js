/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        character: "rgba(173, 170, 170)",
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
