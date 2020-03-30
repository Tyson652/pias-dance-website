import { Sizes, Space, FontSizes, BorderWidths, Radii } from "./themeArrays"

export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
  },
  fonts: {
    body: "'Open Sans', Helvetica, sans-serif",
    heading: "'Bebas Neue', sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  breakpoints: ["690px", "960px", "1100px", "1750px"],
  borderWidths: BorderWidths(),
  radii: Radii(),
  sizes: Sizes(),
  space: Space(),
  fontSizes: FontSizes(),
  boxShadowStyles: {
    lightShadow: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.11)",
    },
    mediumShadow: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
    },
    darkShadow: {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    darkerShadow: {
      boxShadow: "3px -3px 80px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  styles: {
    h1: {
      fontFamily: "heading",
      fontSize: [50, 80],
    },
    h3: {
      fontFamily: "heading",
      fontSize: [40, 60],
    },
    h4: {
      fontFamily: "heading",
      fontSize: [30, 50],
      margin: "40px 0 20px 0",
    },
    h5: {
      fontFamily: "heading",
      fontSize: [20, 30],
      margin: "20px 0 20px 0",
      textAlign: "left",
    },
    p: {
      fontSize: [18, 20],
      padding: "0 40px 0 40px",
      margin: 0,
    },
    button: {
      border: "2px solid #000",
      padding: 10,
    },
  },
}
