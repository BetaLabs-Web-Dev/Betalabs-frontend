/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'prata': ['Prata', 'serif'],
      },
      colors: {
        'custom-red': '#C65858',
      },
      screens: {
        'ml': '832px',
      },
    },
  },
  plugins: [],
}