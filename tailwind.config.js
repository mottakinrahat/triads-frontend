/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1440px",
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
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

