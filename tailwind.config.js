/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    
    require('tailwind-scrollbar'),
],
  daisyui: {
    themes: ["light", "dark", "cupcake","synthwave"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          saira:["Saira",'sans-serif']
        }

    },
  },
  plugins: [require("daisyui")],
}

