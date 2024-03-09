/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Oleo': ['Oleo Script', 'sans-serif']
      },
      backgroundColor:{
        'darkLigth': ['#202020']
      }
    },
  },
  plugins: [],
}

