/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        poppins: ["Poppins", "san-serif"],
        handlee: ["Handlee", "cursive"]
      }
    },
  },
  plugins: [],
}

