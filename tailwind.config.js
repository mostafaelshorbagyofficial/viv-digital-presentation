/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        viv: {
          burgundy: {
            DEFAULT: '#641F2B',
            dark: '#48131D',
            deep: '#320C13',
            light: '#7E2A38',
            subtle: '#8C3544',
          },
          yellow: {
            DEFAULT: '#F4C95D',
            light: '#FCE39E',
            soft: '#FEF1D0',
            dark: '#D8A836',
          },
          cream: {
            DEFAULT: '#FFF3DC',
            soft: '#FAF4EA',
            muted: '#F5E9D3',
            dark: '#E8D5B7',
          },
          chocolate: {
            DEFAULT: '#3A2420',
            dark: '#261613',
            light: '#543832',
          },
        },
        gold: {
          50: '#FAF6E9',
          100: '#F4EAC8',
          200: '#EBD893',
          300: '#F4C95D',
          400: '#DAB637',
          500: '#C99E1F',
          accent: '#F4C95D',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          soft: '#F4EFEA',
          muted: '#E9E2D8',
          dark: '#D8CEBF',
        },
        noir: {
          DEFAULT: '#141110',
          rich: '#1A1615',
          card: '#221D1C',
          border: '#332B29',
          elevated: '#2A2321',
        },
        espresso: {
          DEFAULT: '#3A2420',
          light: '#543832',
          dark: '#261613',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        accent: ['Syne', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      }
    },
  },
  plugins: [],
};
