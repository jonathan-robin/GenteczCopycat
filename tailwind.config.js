module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({ 
      ...theme('colors'), 
      'fond' : '#222335',
      'red' : '#dc3545',
      'lightest-red' :'#ff5c79',
      'light-red':'#f52a50',
      'pink' : '#e83e8c',
      'gray-dark':'#343a40',
      'black-layout' : 'rgba(3, 3, 14, 0.85)',
    }),
    backgroundImage: theme => ({ 
      'working-layout' : "url('./media/working-layout.jpg')",
   
    }),
    fontFamily:{
      'title':['Poppins, sans-serif'], 
    },
    textColor: theme => ({ 
      ...theme('colors'), 
      'red-light': '#ff5c79',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}