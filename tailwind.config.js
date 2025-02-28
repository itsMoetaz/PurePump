/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBlue': '#105498',
        'foufa':'#479AEB',
        'primaryOrange': '#FF8811',
        'primaryWhite': '#F9F9F9',
        'primaryBlack': '#000000',
      },
      fontFamily: {
        primaryFont: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

