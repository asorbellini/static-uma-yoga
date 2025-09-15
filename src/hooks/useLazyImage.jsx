import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Hook personalizado para lazy loading de imágenes
 * @param {string} thumbnailSrc - URL de la imagen miniatura
 * @param {string} fullSizeSrc - URL de la imagen de alta calidad
 * @param {Object} options - Opciones de configuración
 * @returns {Object} - Estado y métodos del lazy loading
 */
export const useLazyImage = (thumbnailSrc, fullSizeSrc, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    enablePreload = true,
    preloadDelay = 100,
    loadOnlyOnDemand = false,
    showLoadingOnHighQuality = true,
    hideThumbnailInitially = false
  } = options

  const [imageState, setImageState] = useState({
    src: hideThumbnailInitially ? '' : thumbnailSrc,
    isLoaded: !hideThumbnailInitially,
    isHighQuality: false,
    isLoading: hideThumbnailInitially && showLoadingOnHighQuality,
    isLoadingHighQuality: hideThumbnailInitially && showLoadingOnHighQuality,
    error: null
  })

  const [isInView, setIsInView] = useState(false)
  const [shouldLoadHighQuality, setShouldLoadHighQuality] = useState(hideThumbnailInitially)
  const imgRef = useRef(null)
  const observerRef = useRef(null)

  // Intersection Observer para detectar cuando la imagen entra en viewport
  useEffect(() => {
    if (!imgRef.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (enablePreload && !loadOnlyOnDemand) {
            setTimeout(() => {
              setShouldLoadHighQuality(true)
            }, preloadDelay)
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observerRef.current.observe(imgRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, enablePreload, preloadDelay, loadOnlyOnDemand])

  // Si hideThumbnailInitially es true, cargar directamente la alta calidad
  useEffect(() => {
    if (hideThumbnailInitially && fullSizeSrc && !imageState.isHighQuality) {
      setShouldLoadHighQuality(true)
    }
  }, [hideThumbnailInitially, fullSizeSrc, imageState.isHighQuality])

  // Cargar imagen de alta calidad cuando sea necesario
  useEffect(() => {
    if (!shouldLoadHighQuality || !fullSizeSrc || imageState.isHighQuality) return

    setImageState(prev => ({ 
      ...prev, 
      isLoading: true,
      isLoadingHighQuality: showLoadingOnHighQuality,
      isLoaded: !hideThumbnailInitially // Si hideThumbnailInitially es true, no mostrar nada hasta que esté lista
    }))

    const img = new Image()
    
    img.onload = () => {
      setImageState(prev => ({
        ...prev,
        src: fullSizeSrc,
        isLoaded: true,
        isHighQuality: true,
        isLoading: false,
        isLoadingHighQuality: false,
        error: null
      }))
    }

    img.onerror = () => {
      setImageState(prev => ({
        ...prev,
        isLoading: false,
        isLoadingHighQuality: false,
        error: 'Error'
      }))
    }

    img.src = fullSizeSrc
  }, [shouldLoadHighQuality, fullSizeSrc, imageState.isHighQuality, showLoadingOnHighQuality])

  useEffect(() => {
    if (thumbnailSrc && !imageState.src) {
      setImageState(prev => ({
        ...prev,
        src: thumbnailSrc,
        isLoaded: true
      }))
    } else if (!thumbnailSrc && fullSizeSrc && !imageState.src) {
      // Si no hay miniatura, usar la imagen original como miniatura
      setImageState(prev => ({
        ...prev,
        src: fullSizeSrc,
        isLoaded: true
      }))
    }
  }, [thumbnailSrc, fullSizeSrc, imageState.src])

  // Forzar carga de alta calidad (para lightbox)
  const loadHighQuality = useCallback(() => {
    if (!fullSizeSrc || imageState.isHighQuality) return

    setImageState(prev => ({ 
      ...prev, 
      isLoading: true,
      isLoadingHighQuality: showLoadingOnHighQuality,
      isLoaded: !hideThumbnailInitially
    }))

    const img = new Image()
    
    img.onload = () => {
      setImageState(prev => ({
        ...prev,
        src: fullSizeSrc,
        isLoaded: true,
        isHighQuality: true,
        isLoading: false,
        isLoadingHighQuality: false,
        error: null
      }))
    }

    img.onerror = () => {
      setImageState(prev => ({
        ...prev,
        isLoading: false,
        isLoadingHighQuality: false,
        error: 'Error al cargar imagen de alta calidad'
      }))
    }

    img.src = fullSizeSrc
  }, [fullSizeSrc, imageState.isHighQuality, showLoadingOnHighQuality, hideThumbnailInitially])

  const resetImage = useCallback(() => {
    setImageState({
      src: thumbnailSrc,
      isLoaded: true,
      isHighQuality: false,
      isLoading: false,
      isLoadingHighQuality: false,
      error: null
    })
    setShouldLoadHighQuality(false)
  }, [thumbnailSrc])

  return {
    imgRef,
    imageState,
    isInView,
    loadHighQuality,
    resetImage,
    isHighQuality: imageState.isHighQuality,
    isLoading: imageState.isLoading,
    isLoadingHighQuality: imageState.isLoadingHighQuality,
    error: imageState.error
  }
}

export default useLazyImage
