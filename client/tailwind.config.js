/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — tweak here to retheme the whole app
        cream:   '#FDF3E4',
        panel:   '#F5EDE2',
        red:     '#B9231F',
        redHov:  '#8F1A17',
        ink:     '#1A1A1A',
        muted:   '#7A6A5A',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0,0,0,0.07)',
        scroll: '4px 8px 24px rgba(0,0,0,0.18)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)' },
        },
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.6 },
        },
      },
      animation: {
        fadeUp:  'fadeUp 0.6s ease both',
        sway:    'sway 4s ease-in-out infinite',
        pulse2:  'pulse2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
