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
        "dargon-fade": {
          "0%": { opacity: "0.2" },
          "100%": { opacity: ".8" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        "vertical-scroll": "vertical-scroll 30s linear infinite",
        scaleUpDown: "scaleUpDown 3s alternate-reverse infinite",
        fadeEffect: "fadeEffect 3s ease infinite running ",
        "dargon-fade": "dargon-fade 3s ease infinite running ",
        wiggle: "wiggle 1s infinite ease-in-out",
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
