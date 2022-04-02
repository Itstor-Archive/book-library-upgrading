const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey1": "#28292C",
        "dark-grey2": "#1C1D1F",
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },

  },
  plugins: [],
}
