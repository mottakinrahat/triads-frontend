/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        // marquee: {
        //   "0%": { transform: "translateY(100%)" },
        //   "100%": { transform: "translateY(-100%)" },
        // },
        "vertical-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scaleUpDown: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.2)" },
        },
        fadeEffect: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "vertical-scroll": "vertical-scroll 30s linear infinite",
        scaleUpDown: "scaleUpDown 3s alternate-reverse infinite",
        fadeEffect: "fadeEffect 3s ease infinite running ",
      },

      colors: {
        "primary-color": "#fd0101",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          },
          ".text-shadow-sm": {
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
