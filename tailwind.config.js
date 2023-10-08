/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light", // commnent it if you want to use custom primary colors 
      // {
      //   mytheme: {

      //     "primary": "#41ade6",

      //     "secondary": "#335db7",

      //     "accent": "#8bf4d1",

      //     "neutral": "#19171c",

      //     "base-100": "#f4eff6",

      //     "info": "#3923c6",

      //     "success": "#1fc78c",

      //     "warning": "#ecb50e",

      //     "error": "#f47971",
      //   },
      // },
    ],
  },
  plugins: [require("daisyui")],
  

}

