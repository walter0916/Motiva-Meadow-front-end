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
        pacifico: ["Pacifico", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        'meadow-main': "url(./public/meadow.jpeg)",
        'meadow-2nd': "url(./public/meadow.jpg)",
        'meadow-3rd': "url(https://i.imgur.com/skf9okk.jpg)",
      },
      screens: {
        'iphone': {'raw' : '(max-height: 950px)'},
        'laptop': {'raw' : '(min-height: 951px)'},
        'ipad': {'raw': '(min-height: 951px) and (max-height: 1369px)'},
      },
    },
  },
  plugins: [],
}

