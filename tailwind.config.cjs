/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#201354',
        secondary:'#0f0b1f'
      }
    },
  },
  plugins: [],
}