import { useEffect, useImperativeHandle, forwardRef } from 'react'
import { useLazyImage } from '../hooks/useLazyImage'
import { BothFeets } from './Icons'
import { ComponentLoading } from './LoadingFootPrints.jsx'

/**
 * Componente de imagen con lazy loading
 * @param {Object} props - Propiedades del componente
 * @param {string} props.thumbnailSrc - URL de la imagen miniatura
 * @param {string} props.fullSizeSrc - URL de la imagen de alta calidad
 * @param {string} props.alt - Texto alternativo
 * @param {string} props.title - Título de la imagen
 * @param {string} props.className - Clases CSS adicionales
 * @param {Function} props.onLoad - Callback cuando la imagen se carga
 * @param {Function} props.onError - Callback cuando hay error
 * @param {Object} props.lazyOptions - Opciones para el lazy loading
 * @param {boolean} props.forceHighQuality - Forzar carga de alta calidad
 * @param {boolean} props.showLoadingIndicator - Mostrar indicador de carga
 */
const LazyImage = forwardRef(({
  thumbnailSrc,
  fullSizeSrc,
  alt = '',
  title = '',
  className = '',
  onLoad,
  onError,
  lazyOptions = {},
  forceHighQuality = false,
  showLoadingIndicator = true,
  ...props
  }, ref) => {
    const {
      imgRef,
      imageState,
      loadHighQuality,
      isHighQuality,
      isLoadingHighQuality,
      error,
      resetImage
    } = useLazyImage(thumbnailSrc, fullSizeSrc, lazyOptions)

  // Exponer el método loadHighQuality a través de la ref
  useImperativeHandle(ref, () => ({
    loadHighQuality
  }))

  // Resetear cuando cambian las props de imagen
  useEffect(() => {
    if (resetImage) {
      resetImage()
    }
  }, [thumbnailSrc, fullSizeSrc])

  // Forzar carga de alta calidad si se solicita
  useEffect(() => {
    if (forceHighQuality && !isHighQuality) {
      loadHighQuality()
    }
  }, [forceHighQuality, isHighQuality, loadHighQuality])

  // Callbacks
  useEffect(() => {
    if (imageState.isLoaded && onLoad) {
      onLoad(imageState)
    }
  }, [imageState.isLoaded, onLoad])

  useEffect(() => {
    if (error && onError) {
      onError(error)
    }
  }, [error, onError])

  // Debug logs
  console.log('LazyImage render:', {
    isLoadingHighQuality,
    showLoadingIndicator,
    isLoaded: imageState.isLoaded,
    src: imageState.src,
    isHighQuality: imageState.isHighQuality
  })

  return (
    <div className="relative">
      {imageState.isLoaded && (
        <img
          ref={imgRef}
          src={imageState.src}
          alt={alt}
          title={title}
          className={`transition-all duration-500 ${className}`}
          {...props}
        />
      )}

      {/* Loading indicator para alta calidad */}
      {isLoadingHighQuality && showLoadingIndicator && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-dorado/80 backdrop-blur-sm rounded-lg z-40 min-h-[200px]"> 
          <ComponentLoading 
            size="default"
            color="#2c2c2c"
          />
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600 text-sm rounded-lg">
          <div className="text-center">
            <div className="text-2xl mb-2"><BothFeets fillColor="#A66C5B" /></div>
            <div>Errore durante il caricamento dell'immagine</div>
          </div>
        </div>
      )}
    </div>
  )
})

LazyImage.displayName = 'LazyImage'

export default LazyImage
