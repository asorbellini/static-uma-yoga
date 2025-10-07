
import { useState, useRef, useEffect } from "react"
import { CloseIcon, NextSlideArrow, PrevSlideArrow, ZoomIcon } from "./Icons.jsx"
import LazyImage from "./LazyImage.jsx"

const HorizontalGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const lightboxImageRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const galleryImages = images

  const responsiveConfig = () => {
    if (typeof window === "undefined") return { imageWidth: 350, gap: 16, visibleCards: 1 }

    const width = window.innerWidth
    if (width < 640) {
      return {
        imageWidth: Math.min(280, width - 100),
        gap: 12,
        visibleCards: 1,
        showDots: true,
        showArrows: false,
        enableSwipe: true,
      }
    } else if (width < 768) {
      return {
        imageWidth: 300,
        gap: 16,
        visibleCards: 1.5,
        showDots: true,
        showArrows: true,
        enableSwipe: true,
      }
    } else if (width < 1024) {
      return {
        imageWidth: 320,
        gap: 20,
        visibleCards: 2,
        showDots: true,
        showArrows: true,
        enableSwipe: false,
      }
    } else {
      return {
        imageWidth: 350,
        gap: 24,
        visibleCards: 3,
        showDots: true,
        showArrows: true,
        enableSwipe: false,
      }
    }
  }

  const [config, setConfig] = useState(responsiveConfig())

  // Calcular el ancho del contenedor
  useEffect(() => {
    const updateWidth = () => {
      const newConfig = responsiveConfig()
      setConfig(newConfig)
      setIsMobile(window.innerWidth < 768)

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerWidth(rect.width)
      }
    }
    setTimeout(updateWidth, 100)

    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Calcular el transform para centrar la imagen activa
  const calculateTransform = (index) => {
    if (containerWidth === 0 || galleryImages.length === 0) return 0

    // Centro del contenedor
    const containerCenter = containerWidth / 2

    // Posición de la imagen actual
    const imagePosition = index * (config.imageWidth + config.gap)

    // Centro de la imagen actual
    const imageCenterPosition = imagePosition + config.imageWidth / 2

    // Calcular el desplazamiento necesario
    const translateX = containerCenter - imageCenterPosition

    // Limitar el desplazamiento 
    const maxTranslate = 0
    const minTranslate = containerWidth - galleryImages.length * (config.imageWidth + config.gap)

    return Math.max(minTranslate, Math.min(maxTranslate, translateX))
  }

  const scrollToSlide = (index) => {
    if (isTransitioning || index < 0 || index >= galleryImages.length) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    scrollToSlide(nextIndex)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    scrollToSlide(prevIndex)
  }

  // Touch/Swipe handlers
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleTouchStart = (e) => {
    if (!config.enableSwipe || isTransitioning) return
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!config.enableSwipe || isTransitioning) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!config.enableSwipe || !touchStart || !touchEnd || isTransitioning) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen || isTransitioning) return

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, lightboxOpen, isTransitioning])

  const openLightbox = (image, index) => {
    if (isTransitioning) return
    setLightboxImage({ ...image, index })
    setCurrentIndex(index) // Actualizar el índice del carrusel
    setLightboxOpen(true)
    // Forzar carga de alta calidad cuando se abre el lightbox
    setTimeout(() => {
      if (lightboxImageRef.current) {
        lightboxImageRef.current.loadHighQuality()
      }
    }, 100)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  // Inicializar cuando el contenedor esté listo
  useEffect(() => {
    if (containerWidth > 0 && galleryImages.length > 0) {
      setCurrentIndex(0)
    }
  }, [containerWidth, galleryImages.length])

  if (!galleryImages || galleryImages.length === 0) {
    return (
      <div className="hidden"></div>
    )
  }

  return (
    <div className="w-full py-4 md:py-8">
      {/* Contenedor principal */}
      <div className="relative w-full">
        {/* Contenedor de la galería con overflow hidden */}
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ minHeight: "200px" }}
        >

          {/* Contenedor de imágenes */}
          <div
            className="flex items-center transition-transform duration-500 ease-out"
            style={{
              gap: `${config.gap}px`,
              transform: `translateX(${calculateTransform(currentIndex)}px)`,
              width: `${galleryImages.length * (config.imageWidth + config.gap)}px`,
              height: "100%",
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 relative group cursor-pointer transition-all duration-500 ${
                  index === currentIndex ? "opacity-100 sm:scale-105 z-20" : "opacity-70 scale-95 z-10"
                }`}
                style={{
                  width: `${config.imageWidth}px`,
                }}
                onClick={() => {
                  if (!isTransitioning) {
                    if (index !== currentIndex) {
                      scrollToSlide(index)
                    } else {
                      setTimeout(() => openLightbox(image, index), 100)
                    }
                  }
                }}
              >
                <LazyImage
                  thumbnailSrc={image.thumbnail?.src || image.src}
                  fullSizeSrc={image.fullSize?.src || image.src}
                  alt={image.alt || `Imagen ${index + 1}`}
                  title={image.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
                  lazyOptions={{
                    threshold: 0.1,
                    rootMargin: '50px',
                    enablePreload: false, 
                    preloadDelay: 0,
                    loadOnlyOnDemand: true
                  }}
                  showLoadingIndicator={true}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-oscuro/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <div className="bg-white/90 rounded-full p-2 md:p-3">
                    <ZoomIcon />
                  </div>
                </div>

                {/* Título en dispositivos móviles */}
                {isMobile && image.title && (
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs p-2 rounded backdrop-blur-sm">
                    {image.title}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          {config.showArrows && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-oscuro rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-30"
                aria-label="Fotografia precedente"
              >
                <PrevSlideArrow />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-oscuro rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-30"
                aria-label="Fotografia prossima"
              >
                <NextSlideArrow />
              </button>
            </>
          )}
        </div>
        {/* Indicadores de posición */}
        {config.showDots && (
          <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && scrollToSlide(index)}
                disabled={isTransitioning}
                className={`inset-0 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-oscuro w-6" : "bg-oscuro/30 hover:bg-oscuro/60 w-2"
                }`}
                aria-label={`Fotografia ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div className="fixed inset-0 bg-oscuro/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full h-fit md:h-screen">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/60 text-white rounded-full p-3 transition-all duration-300 z-10"
              aria-label="Chiudere"
            >
              <CloseIcon />
            </button>

             <LazyImage
               ref={lightboxImageRef}
               thumbnailSrc={lightboxImage.thumbnail?.src || lightboxImage.src}
               fullSizeSrc={lightboxImage.fullSize?.src || lightboxImage.src}
               alt={lightboxImage.alt}
               title={lightboxImage.title}
               className="w-auto max-h-dvh object-contain"
               forceHighQuality={false} 
               showLoadingIndicator={true}
               lazyOptions={{
                 threshold: 0,
                 rootMargin: '0px',
                 enablePreload: false,
                 preloadDelay: 0,
                 loadOnlyOnDemand: true,
                 showLoadingOnHighQuality: true,
                 hideThumbnailInitially: true
               }}
             />

            {lightboxImage.title &&  (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-light bg-oscuro/50 rounded-lg px-4 py-2 inline-block">
                  {lightboxImage.title}
                </p>
              </div>
            )}
          </div>

          {!isMobile && (
            <>
              <button
                onClick={() => {
                  const prevIndex = lightboxImage.index > 0 ? lightboxImage.index - 1 : galleryImages.length - 1
                  setLightboxImage({ ...galleryImages[prevIndex], index: prevIndex })
                  setCurrentIndex(prevIndex) // Actualizar el índice del carrusel
                  // Forzar carga de alta calidad de la nueva imagen
                  /* setTimeout(() => {
                    if (lightboxImageRef.current) {
                      lightboxImageRef.current.loadHighQuality()
                    }
                  }, 100) */
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 text-white rounded-full p-3 transition-all duration-300"
                aria-label="Precedente"
              >
                <PrevSlideArrow />
              </button>

              <button
                onClick={() => {
                  const nextIndex = lightboxImage.index < galleryImages.length - 1 ? lightboxImage.index + 1 : 0
                  setLightboxImage({ ...galleryImages[nextIndex], index: nextIndex })
                  setCurrentIndex(nextIndex) // Actualizar el índice del carrusel
                  // Forzar carga de alta calidad de la nueva imagen
                  /* setTimeout(() => {
                    if (lightboxImageRef.current) {
                      lightboxImageRef.current.loadHighQuality()
                    }
                  }, 100) */
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 text-white rounded-full p-3 transition-all duration-300"
                aria-label="Prossimo"
              >
                <NextSlideArrow />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default HorizontalGallery
