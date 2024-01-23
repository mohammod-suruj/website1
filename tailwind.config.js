/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'btn-bg': '#FF4240',
        'btn-1': '#f8fdf0',
        'btn-2': '#fffcef',
        'btn-3': '#eff5fe',




        
        
      },
      height: {
        'h-1' :'34rem',
      },
    },
  },
  plugins: [require("daisyui")],
}

