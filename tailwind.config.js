/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#eff4fb",
          100: "#d6e1f3",
          200: "#a9bfe2",
          300: "#7a9bce",
          400: "#4f78b8",
          500: "#2f5a9c",
          600: "#1f4582",
          700: "#143464",
          800: "#0c2750",
          900: "#081c3d",
          950: "#04122a",
        },
        gold: {
          400: "#e8c474",
          500: "#d4a943",
          600: "#b88a2c",
          700: "#946d22",
        },
        sky2: "#3b82f6",
      },
      fontFamily: {
        display: ["'Unbounded'", "system-ui", "sans-serif"],
        sans: ["'Manrope'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(8, 28, 61, 0.08)",
        card: "0 18px 40px rgba(8, 28, 61, 0.10)",
        glow: "0 22px 60px rgba(20, 52, 100, 0.30)",
      },
      backgroundImage: {
        "navy-grad": "linear-gradient(135deg, #143464 0%, #081c3d 100%)",
        "navy-radial": "radial-gradient(1200px 600px at 50% -10%, #1f4582 0%, transparent 60%)",
        "gold-grad": "linear-gradient(135deg, #e8c474 0%, #d4a943 50%, #b88a2c 100%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        ringPulse: {
          "0%":   { transform: "scale(1)",   opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0"   },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floaty:    "floaty 6s ease-in-out infinite",
        ringPulse: "ringPulse 2.4s ease-out infinite",
        fadeUp:    "fadeUp .8s ease forwards",
      },
    },
  },
  plugins: [],
}
