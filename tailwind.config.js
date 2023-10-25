/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html.{html,js}"],
  theme: {
    float: {
      left: 'left',
      right: 'right',
      none: 'none',
    },
    extend: {
      screens: {'xs': {'min': '360px', 'max': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... },

        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: '	#000000',     // Replace with your primary color
        secondary: '#3366FF',   // Replace with your secondary color
        tertiary: '#33FF99',    // Replace with your tertiary color
      },
    },

  fontFamily: {
   bebas: ['Bebas Neue', 'sans-serif']
},
  plugins: [ function ({ addUtilities }) {
    const newUtilities = {
      '.float-left': {
        float: 'left',
      },
      '.float-right': {
        float: 'right',
      },
      '.float-none': {
        float: 'none',
      },
    };
    addUtilities(newUtilities, ['responsive']);
  },],
}
}
