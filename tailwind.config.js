// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        //rose: ['Rosemartin', 'cursive'],
        handwriting: ['"Dancing Script"', 'cursive'],
        cormorant: ['Cormorant']
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
      colors: {
        claro: '#EDE8DA',
        terracota: '#A66C5B',
        dorado: '#D4AF7F',
        verdeOliva: '#3D735C',
        verdeBosque: '#2E5E55',
        oscuro: '#2C2C2C',
      },
      dropShadow: {
        title: '0 2px 4px rgba(0,0,0,0.6)',
        text: '0 1px 4px rgba(0,0,0,0.4)'
      },
    },
  },
  plugins: [],
  // Optimizaciones para producción
  future: {
    hoverOnlyWhenSupported: true,
  },
}
