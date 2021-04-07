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
      'light-black-layout': 'rgba(20, 20, 20, 0.8)',
      'green-pastel' : '#34C5B8',
      'purple-pastel': '#5668F8', 
      'black-footer':'#2e3234'
      
    }),
    animation: {
      'anim':'wiggle 3s forwards',
      'unAnim':'wiggle 3s forwards',
    },
    keyframes: {
      wiggle: {
        '0%': { backgoundColor: 'white' },
        '50%': { backgoundColor: 'transparent' },
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'lightest-red' :'#ff5c79',
       'light-red':'#f52a50',
     }),
    backgroundImage: theme => ({ 
      'working-layout' : "url('./media/working-layout.jpg')",
      'writing-layout' : "url('./media/writing.jpg')",
      'office-layout' : "url('./media/office.jpg')",
      'working-people' : "url('./media/working-people.jpg')",
      'business-choose':"url('./media/business_choose.jpg')",
      'man1' : "url('./media/man1.jpg')",
      'man2' : "url('./media/man2.jpg')",
      'woman1' : "url('./media/woman1.jpg')",
      'photo-1' : "url('./media/photo-1.jpg')",
      'photo-2' : "url('./media/photo-2.jpg')",
      'photo-3' : "url('./media/photo-3.jpg')",
      'photo-4' : "url('./media/photo-4.jpg')",
      'photo-5' : "url('./media/photo-5.jpg')",
      'photo-6' : "url('./media/photo-6.jpg')",
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