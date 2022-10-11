/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        quantickaBG: "url('/bg.png')",
      },
    },
  },
  plugins: [],
}
