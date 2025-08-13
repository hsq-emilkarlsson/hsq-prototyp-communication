/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        husqvarna: {
          orange: '#FF6B00',
          dark: '#273A60',
          blue: '#273A60',
          light: '#f5f5f5',
          gray: '#BEBEBE',
          border: '#E0E0E0',
          green: '#5EC577'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
