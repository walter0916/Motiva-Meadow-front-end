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
        neucha: ["Neucha", "cursive"],
        gloriaHallelujah: ["Gloria Hallelujah", "cursive"],
      },
      backgroundImage: {
        'meadow-main': "url(./public/meadow.jpeg)",
        'meadow-2nd': "url(./public/meadow.jpg)",
        'meadow-3rd': "url(https://i.imgur.com/skf9okk.jpg)",
      }
    },
  },
  plugins: [],
}

