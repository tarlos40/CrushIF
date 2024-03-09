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
        'Oleo': ['Oleo Script', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif']
      },
      backgroundColor:{
        'darkLigth': ['#202020']
      },

      fontSize:{
        'CrushClamp': "clamp(1.25rem, 1.199rem + 0.355vw, 1.625rem)",
        'IftoClamp': "clamp(1rem, 0.932rem + 0.4734vw, 1.5rem)",
        'PostClamp': "clamp(0.75rem, 0.699rem + 0.355vw, 1.125rem)",
        'ButtonPostClamp': "clamp(0.625rem, 0.574rem + 0.355vw, 1rem)",
      }
    },
  },
  plugins: [],
}

