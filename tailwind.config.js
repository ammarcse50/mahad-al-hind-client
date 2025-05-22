// tailwind.config.js
export default {
  daisyui: {
    themes: ["light", "black", "dark", "cupcake", "synthwave"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#159e53',
        blackish: '#0a0a0a',
        darkish: '#181818',      // Moved from mytheme
        whiteist: '#F5F5F5',     // Moved from mytheme
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
