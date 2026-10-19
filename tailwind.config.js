/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bubble: {
          pink: '#FF94B9',
          yellow: '#FFDE59',
          blue: '#5CE1E6',
          green: '#7ED957',
          orange: '#FF914D',
          purple: '#C977FA',
          cream: '#FFFDF0',
          mint: '#D8F3DC',
        }
      },
      fontFamily: {
        kids: ['"Nunito"', '"Quicksand"', '"Comic Sans MS"', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
