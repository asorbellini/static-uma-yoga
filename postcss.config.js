// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Optimizaciones adicionales para producción
    'cssnano': process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false
      }]
    } : false
  },
}
