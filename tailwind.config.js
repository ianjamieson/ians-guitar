/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    colors: {
      black: 'black',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange': {
        50: '#fce6e1',
        200: '#ecaea0',
        500: '#d88b79',
      },
      'gray': {
        50: '#f7f7f7',
        100: '#f0f0f0',
        200: '#d9d9d9',
        300: '#c3c3c3',
        400: '#959595',
        500: '#686868',
        600: '#5e5e5e',
        700: '#4e4e4e',
        800: '#3e3e3e',
        900: '#333333',
      },
    },
    extend: {
      maxWidth: {
        container: '1024px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
