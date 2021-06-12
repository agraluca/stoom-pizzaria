export default {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: "1.2rem",
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
    },
    sizes: {
      xsmall: "1.0rem",
      small: "1.2rem",
      medium: "1.4rem",
      large: "1.8rem",
      xlarge: "2.4rem",
    },
  },
  colors: {
    orange: "#EB882E",
    green: "#5F9C44",
    red: "#BF1D2D",
    white: "#ffffff",
    black: "#0B090C",
    gray: "#f3f3f3",
    darkGray: "#777777",
    yellow: "#FFEC02",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;
