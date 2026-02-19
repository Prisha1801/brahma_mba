/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bviom-green': {
          50: '#ecfdf3',
          100: '#d1fae5',
          200: '#a7f3ce',
          300: '#6ee7a8',
          400: '#34d87e',
          500: '#009448',
          600: '#007a3b',
          700: '#006030',
          800: '#004d26',
          900: '#003a1d',
          DEFAULT: '#009448',
        },
        'bviom-dark': '#0a1628',
        'bviom-navy': '#0f2137',
        'bviom-red': '#dc3545',
        'bviom-gold': '#f5a623',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 148, 72, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 148, 72, 0.16)',
        'elevated': '0 20px 60px rgba(10, 22, 40, 0.12)',
        'glow': '0 0 40px rgba(0, 148, 72, 0.2)',
      },
    },
  },
  plugins: [],
}
