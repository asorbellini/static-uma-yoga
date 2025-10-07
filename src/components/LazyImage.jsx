import { useEffect, useImperativeHandle, forwardRef } from 'react'
import { useLazyImage } from '../hooks/useLazyImage'
import { BothFeets } from './Icons'
import { LoadingFootPrints} from './LoadingFootPrints.jsx'

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
  }, [imageState.isLoaded, onLoad, isLoadingHighQuality])

  useEffect(() => {
    if (error && onError) {
      onError(error)
    }
  }, [error, onError])

  const shouldShowImage = imageState.isLoaded && imageState.src
  const shouldShowLoading = isLoadingHighQuality && showLoadingIndicator
  return (
    <div className="relative">
      {shouldShowImage && (
        <img
          ref={imgRef}
          src={imageState.src}
          alt={alt}
          title={title}
          className={`transition-opacity duration-500 ${className} ${shouldShowLoading ? "opacity-0 h-dvh w-dvw" : "opacity-100"}`}
          {...props}
        />
      )}

      {/* Loading indicator para alta calidad */}
      {shouldShowLoading && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm rounded-lg z-50">
          <div>
              <LoadingFootPrints 
                  size="large" 
                  color='#ffffff'
              />
          </div> 
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
