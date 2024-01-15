module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_4c": "#0000004c",
          "900_e5": "#020202e5",
        },
        gray: { 300: "#dbdbdb", 400: "#b5b5b5", 600: "#7a7a7a" },
        white: { A700_4c: "#ffffff4c", A700: "#ffffff" },
        blue_gray: {
          100: "#d9d9d9",
          800: "#1b3c5d",
          "100_01": "#cccccc",
          "900_72": "#0e274072",
        },
        red: { 600: "#e53838", 800: "#cc181e" },
        lime: { 800: "#b1a21e" },
        indigo: { 400: "#428bca" },
        teal: { 300: "#48c78e" },
      },
      fontFamily: {
        roboto: "Roboto",
        oswald: "Oswald",
        merriweather: "Merriweather",
        dancingscript: "Dancing Script",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
