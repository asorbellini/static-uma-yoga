// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      keyframes: {
      walk1: {
        "0%": { transform: "translateY(200%) scale(0)" },
        "50%": { transform: "translateY(100%) scale(1)" },
        "100%": { transform: "translateY(0%) scale(1)" },
      },
      walk2: {
        "0%": { transform: "translateY(200%) scale(0)" },
        "60%": { transform: "translateY(80%) scale(1)" },
        "100%": { transform: "translateY(0%) scale(1)" },
      },
    },
    animation: {
      walk1: "walk1 1.6s ease-out forwards",
      walk2: "walk2 2s ease-out forwards",
    },
    },
  },
  plugins: [],
}
