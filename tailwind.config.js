/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6E9',
          100: '#F4EAC8',
          200: '#EBD893',
          300: '#E2C55E',
          400: '#DAB637',
          500: '#C99E1F',
          600: '#A78117',
          700: '#7E6012',
          800: '#55400D',
          900: '#2E2207',
          accent: '#D4AF37',
          champagne: '#E6D5B8',
          light: '#F5EBE1',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          soft: '#F4EFEA',
          muted: '#E9E2D8',
          dark: '#D8CEBF',
        },
        noir: {
          DEFAULT: '#0D0C0B',
          rich: '#141312',
          card: '#1A1816',
          border: '#282420',
          elevated: '#211E1B',
        },
        espresso: {
          DEFAULT: '#251D18',
          light: '#3D312A',
          dark: '#16110E',
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
