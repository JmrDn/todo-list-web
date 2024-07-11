/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slideIn:{
          '0%':{
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%':{transform: 'translateY(0)', opacity: '1'}
          
        },
        slideOut:{
          '0%':{
            transform: 'translateX(0)',
          },
          '100%':{transform: 'translateX(-100%)'}
        },
      },
      animation:{
        slideIn: 'slideIn .5s ease-in-out ',
        slideOut: 'slideOut 1s ease-in-out ',
      },
     translate:{
      '-100%': '-200%',
     } ,  
     fontFamily:{
      "kanit": ['Kanit','sans-serif'],
     }
      
    },
  },
  plugins: [],
}