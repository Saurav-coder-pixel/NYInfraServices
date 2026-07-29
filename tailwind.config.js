/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   { DEFAULT: '#0A3D78', light: '#1255A0', dark: '#072B56' },
        secondary: { DEFAULT: '#5F6368', light: '#8A8F96', dark: '#3A3D42' },
        accent:    { DEFAULT: '#F4B400', light: '#FFD04D', dark: '#C99000' },
        success:   { DEFAULT: '#2E7D32', light: '#43A047', dark: '#1B5E20' },
        neutral:   { 50: '#F5F7FA', 100: '#EEF1F6', 200: '#D8DCE5', 900: '#1F1F1F' },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A3D78 0%, #1255A0 100%)',
        'gradient-dark':    'linear-gradient(135deg, #072B56 0%, #0A3D78 100%)',
        'gradient-accent':  'linear-gradient(135deg, #F4B400 0%, #FFD04D 100%)',
      },
      boxShadow: {
        'premium':  '0 4px 24px rgba(10,61,120,0.12)',
        'accent':   '0 4px 24px rgba(244,180,0,0.25)',
        'card':     '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(10,61,120,0.18)',
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease forwards',
        'fade-in':      'fadeIn 0.4s ease forwards',
        'slide-left':   'slideLeft 0.6s ease forwards',
        'slide-right':  'slideRight 0.6s ease forwards',
        'float':        'float 3s ease-in-out infinite',
        'pulse-slow':   'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':    'spin 8s linear infinite',
        'counter':      'counterAnim 2s ease forwards',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: 0, transform: 'translateY(32px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideLeft: { '0%': { opacity: 0, transform: 'translateX(32px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        slideRight:{ '0%': { opacity: 0, transform: 'translateX(-32px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem', xl: '2.5rem' },
      },
    },
  },
  plugins: [],
}
