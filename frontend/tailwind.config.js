/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          "110":"#f4f5f4"
        },
        green:{
          "150":"#21c55d"
        }
      }
    },
  },
  plugins: [],
}

