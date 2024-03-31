/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fall: 'fall 1s linear'
      },
      animation:{
        fall: 'fall 1.8s linear'
      },
      animation:{
        bounce: 'bounce 1.2s 1.8s linear forwards'
      },
      keyframes: {
        fall: {
          '0%' : { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 40%, 75%, 95%' : { transform: 'translateY(0)', opacity:'1' },
          '15%': { transform: 'translateY(-25px)' },
          '65%': { transform: 'translateY(-15px)' },
          '85%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(45px)',opacity:'1' },
        }
    },

  },
  plugins: [],
}
}
