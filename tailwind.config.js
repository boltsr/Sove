module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      '2xl': ['16px', {
        letterSpacing: '-0.01em',
      }],
      // Or with a default line-height as well
      '3xl': ['28px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
      // Or with a default line-height as well
      '4xl': ['20px', {
        letterSpacing: '-0.02em',
      }],
      '5xl': ['14px', {
        letterSpacing: '-0.02em',
      }],
      '6xl': ['24px', {
        letterSpacing: '-0.02em',
      }],
      '7xl': ['12px', {
        letterSpacing: '-0.02em',
      }],
      '8xl': ['38px', {
        letterSpacing: '-0.02em',
      }],
      '9xl': ['18px', {
        letterSpacing: '-0.02em',
      }],
      '10xl': ['16px', {
        letterSpacing: '-0.02em',
      }],

    },
    backgroundColor: {
      'primary': '#FEC004',
      'secondary': '#000000',
      'radio': '#2274a5',
      'danger': '#e3342f',
      'account':'#383838',
      'exit':'#686868'
    },
    borderColor: {
      'primary': '#E9EAE9',
      'secondary': '#FEC004',
      'radio': '#2274a5',
      'danger': '#e3342f',
    },  
    textColor: {
       'primary': '#E9EAE9',
       'secondary': '#FEC004',
       'danger': '#e3342f',
       'status': '#d9d9d9'
     },
     margin: {
      xsm: '10px',
      sm: '30px',
      md: '35px',
      lg: '40px',
      xl: '50px',
      xlg: '70px',
      elg: '90px',
     },
     fontFamily: {
      'display': ['Montserrat'],
     },
     width: {
      '1/7': '64px',
      '2/7': '180px',
      '3/7': '140px',
      '4/7': '160px',
      '5/7': '320px',
      '6/7': '400px',
      '7/7': '40px',

    },
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      vlg: '30px',
      xl: '40px',
      xlg: '45px',
      thl: '642px',
    } 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
