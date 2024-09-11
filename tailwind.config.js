/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        signal: {
          "0%": {
              boxShadow: '0 0 0 0 #3b82f6'
          },

          '70%': {
              boxShadow: '0 0 0 40px #0000'
          },
        }
      },
      animation: {
        signal: 'signal 2s infinite'
      }
    },
  },
  plugins: [],
}
