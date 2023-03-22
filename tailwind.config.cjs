/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      },
      colors: {
        primary: {
          lightCyan: 'hsl(193, 38%, 86%)',
          neonGreen: 'hsl(150, 100%, 66%)'
        },
        neutral: {
          grayishBlue: 'hsl(217, 19%, 38%)',
          darkGrayishBlue: 'hsl(217, 19%, 24%)',
          darkBlue: 'hsl(218, 23%, 16%)'
        }
      }
    },
  },
  plugins: [],
};
