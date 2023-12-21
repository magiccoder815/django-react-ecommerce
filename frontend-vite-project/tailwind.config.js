/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',

    },
    container:{
      center:true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
        'roboto': ['Roboto']
      },
      colors:{
        primary :'#E21818',
        second : '#00235B',
        three: '#FFDD83',
        four : '#98DFD6'

      },



    },
  },
  plugins: [],
}

