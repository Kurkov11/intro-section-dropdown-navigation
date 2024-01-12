
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        'md': '1310px',
        'desktop': '1411px'
      },
      width: {
        'logo': '84px'
      },
      height: {
        'logo': '27px',
        'inherit': 'inherit',
        'main-and-img-desktop': '600px'
      },
      maxHeight: {
        'inherit': 'inherit',
        'main-and-img-desktop': '600px',
        'main-and-img-md': '500px'
      },
      fontFamily: {
        epilogue: ['Epilogue']
      },
      colors: {
        almostBlack: 'hsl(0, 0%, 8%)',
        mediumGray: 'hsl(0, 0%, 41%)',
        almostWhite: 'hsl(0, 0%, 98%)'
      },
      aspectRatio: {
        arrowRatio: '10/6'
      },
      padding: {
        'buttonDesktop': '13px 25px'
      },
      inset: {
        'companyLeft': '20rem',
        'featuresLeft': '8.2rem',
        'menuTop': '4.5rem'
      }
    },
    fontSize: {
      headingSize: '2.2rem',
      paragraphSize: '17px',
      desktopHeadingSize: '5.5rem',
      desktopParagraphSize: '14px',
      tabletHeadingSize: '4.5rem',

    }
  },
  plugins: [],
}

