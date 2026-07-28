/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F2",
        cream: "#F3E9DD",
        blush: "#F0D9DC",
        lilac: "#C9B6D8",
        peach: "#F2B79A",
        gold: "#C9A15A",
        "gold-light": "#E4C687",
        ink: "#3A2E36",
        "ink-soft": "#6B5A64",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        signature: ["'Cinzel Decorative'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(58, 46, 54, 0.15)",
        gold: "0 8px 30px -8px rgba(201, 161, 90, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(120deg, #C9A15A 0%, #E4C687 45%, #C9A15A 100%)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slower": "spin 90s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
