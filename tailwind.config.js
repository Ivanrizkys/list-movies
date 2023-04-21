/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "transform": 'translateX(25%)',
            "animation-timing-function": 'cubic-bezier(0.8, 0, 1, 1)'
          },
          "50%": {
            transform: 'translateY(0)',
            "animation-timing-function": 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        "cta": 'slide 1s infinite'
      }
    }
  },
  plugins: []
}
