/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "390px", max: "819px" },
      md: { min: "820px", max: "1079px" },
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
      width: "390px",
      xWidth: "500px",
      xLwidth: "700px",
      inputLarge: "332px",
      inputMedium: "332px",
      inputSamll: "226px",
      buttonLarge: "332px",
      buttonMedium: "139px",
      buttonSmall: "98px",
      buttonConfirmed: "140px",
      auto: "w-auto",
      full: "w-full",
      harf: "w-1/2",
      widthZero: "w-0",
    },
    height: {
      height: "844px",
      xheight: "1000px",
      xLheight: "1200px",
      inputLarge: "63px",
      inputmedium: "48px",
      input: "48px",
      buttonLarge: "63px",
      buttonMedium: "63px",
      buttonSmall: "44.42px",
      buttonConfirmed: "44px",
      full: "h-full",
      screen: "h-screen",
      asdf: "1200px", //스크롤 방지 확인용
    },
    maxWidth: {
      maxWidth: "390",
      modalMaxWidth: "332px",
    },
    maxHeight: {
      maxHeight: "844",
      modalMaxHeight: "293px",
    },
    minWidth: {
      modalMinWidth: "305px",
    },
    minHeight: {
      modalMinHeight: "251px",
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
      xBold: "900"
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
