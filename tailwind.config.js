/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'btn-bg': '#FF4240',
        
      },
    },
  },
  plugins: [require("daisyui")],
}

