/** @type {import('tailwindcss').Config} */
export default {

  daisyui: {
    themes: ["light", "black",'dark', "cupcake", "synthwave"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
      mytheme:{
          
        "darkish": "#181818"

      }
    },
  },
  plugins: [require("daisyui")],
};
