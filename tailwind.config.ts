import type { Config } from 'tailwindcss';

// Brand colours: change them here and they update across the whole website.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFFAF9',
          100: '#D5F2EF',
          200: '#ABE4DF',
          300: '#76CFC8',
          400: '#3FB2AB',
          500: '#1F958F',
          600: '#167873',
          700: '#15615E',
          800: '#144E4C',
          900: '#12403F',
          950: '#072625',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7, 38, 37, 0.04), 0 8px 24px -8px rgba(7, 38, 37, 0.10)',
        lift: '0 2px 4px rgba(7, 38, 37, 0.04), 0 24px 48px -16px rgba(7, 38, 37, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
