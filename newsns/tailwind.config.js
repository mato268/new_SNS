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
      inputLarge: '332px',
      inputMedium: '332px',
      inputSamll: '226px',
      auto: 'w-auto',
      full: 'w-full',
      harf: 'w-1/2',
      widthZero: 'w-0',
    },
    height: {
      inputLarge: '63px',
      inputmedium: '48px',
      input: '48px',
    },
    extend: {},
  },
  plugins: [],
}