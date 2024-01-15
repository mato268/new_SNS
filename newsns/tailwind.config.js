/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fdfcf7',
      'deepdark': '#323d41',
      'yellow': '#fcf893',
      'gray': '#a7a7a7',
      'red': '#e13b36',
      'green': '#00cd2d',
    },
    width: {
      buttonLarge: '332px',
      buttonMedium: '139px',
      buttonSmall: '98px',
      Confirmed: '140px',
      inputLarge: '332px',
      inputMedium: '332px',
      outline: '226px',
    },
    height: {
      buttonLarge: '63px',
      buttonMedium: '63px',
      buttonSmall: '44.42px',
      Confirmed: '44px',
      inputLarge: '63px',
      inputmedium: '48px',
      outline: '48px',
    },
    extend: {},
  },
  plugins: [],
}
