/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        10: '10px'
      },
      colors:{
        dark:{
          100: '#F8F7Fa'
        }
      }
    },
  },
  plugins: [],
}
