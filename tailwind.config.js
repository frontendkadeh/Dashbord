/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [ "./src/**/*.{html,js}",  // برای فایل‌های HTML و JS در پوشه src
    "./index.html" ],
  theme: {
    extend: {
      borderRadius :{
        15 : "15px"
      },
      fontFamily : {
        awesome : ['font-awesome'],
        irSans : ['iran-sans']
      },
      colors : {
        halfWhite : '#FBFEFB',
        dark : '#380C69'
        
      },
      width: {
        200 : '200px'
      },
      height : {
        50 : '40px'
      }
    },
  },
  plugins: [],
}

