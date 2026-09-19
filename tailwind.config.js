/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF4E4',
        sand: '#F3EAD4',
        shell: '#EDE3CB',
        forest: '#0C2B21',
        'forest-light': '#183F30',
        ink: '#26463A',
        moss: '#3C5548',
        sage: '#8A9A8F',
        mist: '#6B7C71',
        gold: '#C3B48A',
        'gold-light': '#D8C79A'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      keyframes: {
        scrollcue: {
          '0%': { transform: 'translateY(-60%)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(60%)', opacity: '0' }
        },
        overlayIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        sheetIn: {
          from: { opacity: '0', transform: 'translateY(24px) scale(.985)' },
          to: { opacity: '1', transform: 'none' }
        }
      },
      animation: {
        scrollcue: 'scrollcue 2.4s ease-in-out infinite',
        overlayIn: 'overlayIn .3s ease',
        sheetIn: 'sheetIn .42s cubic-bezier(.16,1,.3,1)'
      }
    }
  },
  plugins: []
};
