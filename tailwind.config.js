/** @type {import('tailwindcss').Config} */
import {bgcafe} from './src/bg-cafe.jpg';
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:{
      fontFamily:{
        fontDM :['DM Sans', 'sans-serif']
      },
      fontWeight:{
        font0:'2rem',
        font1: '1rem',
        font2:'0.875rem',
        font3:'0.625rem',
        font4:'0.75rem'
      }
    },
  plugins: [],
}
}

