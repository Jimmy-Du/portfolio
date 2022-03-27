module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
        '4xl': '3840px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
