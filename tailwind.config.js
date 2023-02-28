/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14B8A6',
        dark: '#0f172a',
        secondary: 'rgb(100 116 139)',
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
    },
  },
  plugins: [],
}
