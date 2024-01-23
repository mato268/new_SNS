/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      buttonLarge: "63px",
      buttonMedium: "63px",
      buttonSmall: "44.42px",
      buttonConfirmed: "44px",
      asdf: "1200px", //스크롤 방지 확인용
    },
    maxWidth: {
      maxWidth: "332px",
    },
    maxHeight: {
      maxHeight: "293px",
    },
    minWidth: {
      minWidth: "305px",
    },
    minHeight: {
      minHeight: "251px",
    },
    extend: {},
  },
  plugins: [],
};
