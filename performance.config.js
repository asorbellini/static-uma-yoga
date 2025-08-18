// Configuración de performance para UMĀ Yoga Project
export default {
  // Configuración de lazy loading
  lazyLoading: {
    images: true,
    components: true,
    routes: true
  },
  
  // Configuración de cache
  cache: {
    images: {
      maxAge: 31536000, // 1 año
      immutable: true
    },
    fonts: {
      maxAge: 31536000, // 1 año
      immutable: true
    },
    static: {
      maxAge: 86400, // 1 día
      immutable: false
    }
  },
  
  // Configuración de compresión
  compression: {
    gzip: true,
    brotli: true,
    level: 6
  },
  
  // Configuración de preload
  /* preload: {
    critical: [
      '/fonts/Rosemartin.woff2',
      '/images/homebg1.png'
    ],
    fonts: true,
    images: false
  }, */
  
  // Configuración de service worker
  serviceWorker: {
    enabled: true,
    cacheName: 'uma-yoga-v1',
    strategies: {
      images: 'cache-first',
      fonts: 'stale-while-revalidate',
      api: 'network-first'
    }
  }
}
