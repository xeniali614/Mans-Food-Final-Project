/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fbf8f1',
        ink: '#29382f',
        clay: '#c76f51',
        sage: '#9eaa8b',
        mustard: '#d8ad4c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
