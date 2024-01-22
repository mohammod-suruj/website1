/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'btn-bg': '#FF4240',
        
        
      },
      height: {
        'h-1' :'34rem',
      },
    },
  },
  plugins: [require("daisyui")],
}

