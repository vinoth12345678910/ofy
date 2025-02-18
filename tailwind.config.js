/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Add your paths here
  theme: {
    extend: {},
  },
  
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ['winter', 'dracula'],
  },
};


