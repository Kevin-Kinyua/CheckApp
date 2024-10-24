/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
         'primary':"#5f6FFF",
         'primary2':"#2720ff",
         'secondary':"#7c2ae8",
         'success':"#00bf63",
         'warning':"#ff3131",
         'alert':"#ff914d"
         
       },
       gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
       }
    },
  },
  plugins: [],
}