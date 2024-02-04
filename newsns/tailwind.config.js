/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "381px" },
      md: { min: "390px", max: "819px" },
      lg: { min: "820px", max: "1079px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fdfcf7",
      deepdark: "#323d41",
      yellow: "#fcf893",
      gray: "#a7a7a7",
      red: "#e13b36",
      green: "#00cd2d",
    },
    width: {
      sm: "98px",
      md: "140px",
      lg: "226px",
      xl: "332px",
      auto: "w-auto",
      full: "100%",
      screen: "100vh",
      harf: "w-1/2",
      widthZero: "w-0",
    },
    height: {
      sm: "44px",
      md: "48px",
      lg: "63px",
      full: "100%",
      screen: "100vh",
    },
    maxHeight: {
      sm: "293px",
      md: "844px",
    },
    minWidth: {
      md: "305px",
    },
    minHeight: {
      sm: "25px",
      md: "251px",
    },
    fontFamily: {
      korea: ["Korea"],
      theJamsil: ["TheJamsil"],
    },
    fontSize: {
      xSmall: "0.75em",
      small: "0.87em",
      base: "1em",
      large: "1.125em",
      xLarge: "1.25em",
    },
    fontWeight: {
      thin: "100",
      normal: "400",
      bold: "700",
      xBold: "900",
    },
    lineHeight: {
      default: "1rem",
      normal: "1.5rem",
      loose: "2rem",
    },
    extend: {},
  },
  plugins: [],
};
