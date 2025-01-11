/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato-Regular", "sans-serif"],
        "lato-bold": ["Lato-Bold", "sans-serif"],
        "lato-semibold": ["Lato-SemiBold", "sans-serif"],
        "lato-extrabold": ["Lato-ExtraBold", "sans-serif"],
        "lato-black": ["Lato-Black", "sans-serif"],
        "lato-light": ["Lato-Light", "sans-serif"],
        "lato-extralight": ["Lato-ExtraLight", "sans-serif"],
        "lato-medium": ["Lato-Medium", "sans-serif"],
        "lato-thin": ["Lato-Thin", "sans-serif"],
      },
      colors : {
        "black": "#202532",
        "primary": "#676EDA",
        "secondary": "#8292B3",
        "ternary": "#CED2DA",
        "notif" : "#EE420B"
      },
    },
  },
  plugins: [],
}