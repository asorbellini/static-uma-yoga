// Configuración de build optimizada para UMĀ Yoga Project
export default {
  // Configuración de compresión
  compression: {
    gzip: true,
    brotli: true
  },
  
  // Configuración de chunks
  chunks: {
    vendor: ['react', 'react-dom'],
    router: ['react-router-dom'],
    utils: ['lodash', 'date-fns']
  },
  
  // Configuración de imágenes
  images: {
    formats: ['webp', 'avif'],
    quality: 85,
    progressive: true
  },
  
  // Configuración de fuentes
  fonts: {
    preload: true,
    display: 'swap'
  }
}
