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
        'inter': ['Inter']
      },
      colors: {
        'custom-red': '#C65858',
      },
      screens: {
        'ml': '832px',
        'vsm': '480px'
      },
    },
  },
  plugins: [],
}