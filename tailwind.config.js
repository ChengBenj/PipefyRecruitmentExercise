const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '256': '64rem',
        'fit-content': "fit-content"
      },
      colors: {
        "title": "#048cff",
        "subtitle": "#2e475c",
        "border": "#c7d6e9"
      }
    },
    colors: {
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      'background-color': "#e9eff6"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
