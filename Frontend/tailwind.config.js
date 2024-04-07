/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        kaddu:{
          100:"#F0ECE5",
          200:"#F1EAFF",
          300:"#EB8D00",
          400:"#A964E3",
          
        },
      
      },
    },
  },
  plugins: [],
}