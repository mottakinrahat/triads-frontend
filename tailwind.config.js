/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
      '.text-shadow': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      },
      '.text-shadow-sm': {
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-lg': {
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.8)',
      },
    }, ['responsive', 'hover']);
  },],
}

