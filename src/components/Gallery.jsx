
import { useState, useRef, useEffect } from "react"
import { CloseIcon, NextSlideArrow, PrevSlideArrow, ZoomIcon } from "./Icons"

const HorizontalGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const sliderRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const galleryImages = images

  // Calcular el ancho del contenedor
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const scrollToSlide = (index) => {
    if (sliderRef.current && containerWidth > 0) {
      // Calcular el desplazamiento para centrar la imagen
      const imageWidth = 350 // Ancho aproximado de cada imagen + gap
      const centerOffset = (containerWidth - imageWidth) / 2
      const scrollPosition = index * imageWidth - centerOffset

      sliderRef.current.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const nextSlide = () => {
    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    scrollToSlide(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    scrollToSlide(prevIndex)
  }

  const openLightbox = (image, index) => {
    setLightboxImage({ ...image, index })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  // Centrar la primera imagen al cargar
  useEffect(() => {
    if (containerWidth > 0) {
      scrollToSlide(0)
    }
  }, [containerWidth])

  return (
    <div className="relative w-full py-8">
      {/* Controles de navegación */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white text-oscuro rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
          aria-label="Imagen anterior"
        >
          <PrevSlideArrow />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white text-oscuro rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
          aria-label="Imagen siguiente"
        >
          <NextSlideArrow />
        </button>
      </div>

      {/* Contenedor de la galería */}
      <div className="overflow-hidden" ref={sliderRef}>
        <div
          className={`flex gap-4 transition-transform duration-500 ease-out px-4 w-[${galleryImages.length * 350}px]`}
          
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 relative group cursor-pointer transition-all duration-500 ${
                index === currentIndex ? "opacity-100 scale-105 z-10" : "opacity-70 scale-95"
              }`}
              onClick={() => {
                scrollToSlide(index)
                setTimeout(() => openLightbox(image, index), 300)
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="h-[160px] w-[195px] md:h-[280px] md:w-[340px] object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
                loading="lazy"
              />

              {/* Overlay al hover */}
              <div className="absolute inset-0 bg-oscuro/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="bg-white/90 rounded-full p-3">
                  <ZoomIcon />
                </div>
              </div>

              {/* Indicador de imagen activa */}
              {index === currentIndex && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 bg-oscuro rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de posición */}
      <div className="hidden md:flex md:justify-center md:mt-8 md:space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-oscuro w-6" : "bg-oscuro hover:bg-oscuro/50"
            }`}
            aria-label={`Vai all'immagine ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div className="fixed inset-0 bg-oscuro/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-h-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-full object-contain"
            />

            {lightboxImage.title && (
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-light bg-oscuro/50 rounded-lg px-4 py-2 inline-block">
                  {lightboxImage.title}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 z-10"
            aria-label="Chiudere"
          >
            <CloseIcon />
          </button>
          <button
            onClick={() => {
              const prevIndex = lightboxImage.index > 0 ? lightboxImage.index - 1 : galleryImages.length - 1
              setLightboxImage({ ...galleryImages[prevIndex], index: prevIndex })
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
            aria-label="Precedente"
          >
            <PrevSlideArrow />
          </button>

          <button
            onClick={() => {
              const nextIndex = lightboxImage.index < galleryImages.length - 1 ? lightboxImage.index + 1 : 0
              setLightboxImage({ ...galleryImages[nextIndex], index: nextIndex })
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
            aria-label="Prossimo"
          >
            <NextSlideArrow />
          </button>
        </div>
      )}
    </div>
  )
}

export default HorizontalGallery
