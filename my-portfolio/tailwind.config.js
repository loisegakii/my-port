/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Segoe UI', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          950: '#020b18',
          900: '#0d1b2a',
          800: '#1a2d42',
        },
        brand: {
          DEFAULT: '#0ea5e9',
          dark:    '#0284c7',
          light:   '#38bdf8',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
      },
    },
  },
  plugins: [],
};