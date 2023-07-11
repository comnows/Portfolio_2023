/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      '60px': '60px'
    },
    extend: {
      colors: {
        'blue-charcoal': '#04031e',
        'dark-royal-blue': '#02066f',
        'hawkes-blue': '#cbe5ff',
        'midnight-blue': '#011d32',
        'black-pearl': '#021F23',
        'aqua-green': '#17e2ad',
        'midnight-purple': '#290038',
        'pale-mauve': '#fcd6ff'
      },
      width: {
        '768px': '768px',
        '15vw': '15vw'
      },
      height: {
        '15vh': '15vh'
      }
    },
  },
  plugins: [],
}

