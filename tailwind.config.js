/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blackPrimary: "#373737",
        blackSecondary: "#2F2F2F",
        bluePrimary: "#717CFF",
        blueSecondary: "#8471FF",
        blueTertiary: "#3C5B9A",
        grayPrimary: "#7D7D7D",
        whiteSecondary: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
