/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: [
  //   'btn-primary',
  // ],
  
  theme: {
    extend: {
      fontFamily:{
          'sans':['Inter','sans-serif']
      }
    },
  },
  plugins: [tailwindScrollbar],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {
//       fontFamily:{
//         'sans':['Inter','sans-serif']
//     }

//     },
//   },
//   plugins: [],
// }

