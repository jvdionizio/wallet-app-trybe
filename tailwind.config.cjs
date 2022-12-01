module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      '2md': 28,
      lg: 32,
      xl: 36,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',

      white: '#fff',

      red: {
        500: '#F01827',
        600: '#BF131F',
      },

      green: {
        300: '#29A85B',
        500: '#19733E',
      },

      gray: {
        900: '#121214',
        800: '#202024',
        600: '#575757',
        400: '#7c7c8a',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      blue: {
        500: '#1557B7',
        300: '#1C77FF',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Ubuntu, sans-serif',
      },
    },
  },
  plugins: [],
};
