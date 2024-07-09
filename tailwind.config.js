// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        swGray: '#7e7863',    // RGB: (126, 120, 99)
        swGold: '#ad7d37',    // RGB: (173, 125, 55)
        swBlue: '#2e557c',    // RGB: (46, 85, 124)
        swDarkRed: '#381010', // RGB: (56, 16, 16)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
