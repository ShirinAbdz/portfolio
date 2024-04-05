/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
     extend: {
       screens: {

         'xs-max': {'max': '350px'},
         'sm-max': {'max': '639px'},
         'md-max': {'max': '767px'},
         'lg-max': {'max': '1023px'},
         'xl-max': {'max': '1279px'},
         '2xl-max': {'max': '1535px'},
       },
     },
  },
  variants: {},
  plugins: [],
 }