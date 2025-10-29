import { useState, useEffect, useRef } from "react"
import { ArrowUp, NextSlideArrow, PrevSlideArrow } from "./Icons"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"


function ReviewsCarrousel({ reviews }) {
  const autoPlayInterval = 5000; // 5 seconds
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)

  const responsiveConfig = () => {
    if (typeof window === "undefined") return { cardWidth: 350, gap: 16, visibleCards: 1, showArrows: true, enableSwipe: false, }

    const width = window.innerWidth
    if (width < 768) {
      return {
        cardWidth: Math.min(350, width - 40),
        gap: 16,
        visibleCards: 1,
        showArrows: false,
        enableSwipe: true,
      }
    } else if (width < 1024) {
      return {
        cardWidth: 340,
        gap: 20,
        visibleCards: 2,
        showArrows: true,
        enableSwipe: false,
      }
    } else {
      return {
        cardWidth: 380,
        gap: 24,
        visibleCards: 3,
        showArrows: true,
        enableSwipe: false,
      }
    }
  }
  useRevealOnScroll(containerRef, {
    threshold: 0.5,
    rootMargin: '0px 0px -20% 0px',
    onReveal: () => setIsVisible(true)
  })

  const [config, setConfig] = useState(responsiveConfig())

  useEffect(() => {
    const updateConfig = () => {
      const newConfig = responsiveConfig()
      setConfig(newConfig)
    }
    setTimeout(updateConfig, 100)

    window.addEventListener("resize", updateConfig)
    return () => window.removeEventListener("resize", updateConfig)
  }, [])

  const calculateTransform = () => {
    return -currentIndex * (config.cardWidth + config.gap)
  }

  const scrollToSlide = (index) => {
    if (isTransitioning || index < 0) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const nextSlide = () => {
    if (isTransitioning) return
    const maxIndex = Math.max(0, reviews.length - config.visibleCards)
    const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0
    scrollToSlide(nextIndex)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    const maxIndex = Math.max(0, reviews.length - config.visibleCards)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex
    scrollToSlide(prevIndex)
  }

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isTransitioning) return

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
  }, [currentIndex, isTransitioning])

  // Autoplay - pauses when any card is expanded
  useEffect(() => {
    if (!isVisible || expandedCards.size > 0 || isTransitioning) {
      return
    }

    const interval = setInterval(() => {
      const maxIndex = Math.max(0, reviews.length - config.visibleCards)
      const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0
      scrollToSlide(nextIndex)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, expandedCards.size, isTransitioning, autoPlayInterval, reviews.length, config.visibleCards, isVisible])

  const toggleExpand = (index) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }
  const containerWidth = config.visibleCards * config.cardWidth + (config.visibleCards) * config.gap

  if (!reviews || reviews.length === 0) {
    return <div className="hidden"></div>
  }

  return (
    <div className="w-full bg-claro rounded-xl p-4">
      <div className="relative w-full mx-auto flex justify-center">
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ width: `${containerWidth}px`, minHeight: "250px" }}
        >
          <div
            className="flex items-start transition-transform duration-500 ease-in-out"
            style={{
              gap: `${config.gap}px`,
              transform: `translateX(${calculateTransform()}px)`,
            }}
          >
            {reviews.map((review, index) => {
              const isExpanded = expandedCards.has(index)
              const shouldTruncate = review.comments.length > 150

              return (
                <div
                  key={index}
                  className="flex-shrink-0 relative" 
                  style={{
                    width: `${config.cardWidth}px`,
                  }}
                >
                  <div className="h-auto px-4">
                    {/* Stars */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? "text-yellow-600 " : "text-claro/30"}>
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Review text */}
                    <div className="mb-2">
                      <p
                        className={`text-sm sm:text-base lg:text-lg italic text-oscuro text-start font-normal ${
                          !isExpanded && shouldTruncate ? "line-clamp-4" : ""
                        }`}
                      >
                        {review.comments}
                      </p>
                    </div>

                    {/* Read more button */}
                    {shouldTruncate 
                    ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleExpand(index)
                        }}
                        className="flex items-center gap-2 text-oscuro hover:text-oscuro/60 transition-colors duration-200 group"
                      >
                        <span className="font-normal">{isExpanded ? "Comprimi" : "Leggi di più"}</span>
                        <ArrowUp
                          className={`w-4 h-4 -rotate-180 transition-transform duration-200 ${
                            isExpanded ? "rotate-0" : ""
                          } group-hover:translate-y-0.5`}
                          stroke="#2C2C2C"
                        />
                      </button>
                    )
                    : (
                      <div className="h-6" />)
                  }

                    {/* Author info */}
                    {(review.author || review.date) && (
                      <div className="mt-4 py-2 md:py-4 border-t-2 border-dorado">
                        {review.author && <p className="text-base text-oscuro font-medium">{review.author} <span className="font-normal text-xs">({review.date})</span></p>}
                        { review?.experience &&
                          <span className="italic text-oscuro text-sm font-normal">~ {review.experience} ~</span>
                          }
                      </div>
                    )}
                  </div>

                  {/* Vertical divider */}
                  {index < reviews.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[2px] bg-dorado" />
                  )}
                </div>
              )
            })}
          </div>

          {config.showArrows 
          ? (
            <>
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 text-oscuro z-30 disabled:opacity-50"
                aria-label="Previous review"
              >
                <PrevSlideArrow />
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 text-oscuro z-30 disabled:opacity-50"
                aria-label="Next review"
              >
                <NextSlideArrow />
              </button>
            </>
          )
        : (
          <div className="flex justify-center gap-2 my-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => !isTransitioning && scrollToSlide(idx)}
                disabled={isTransitioning}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-dorado w-8" : "bg-oscuro/30 hover:bg-oscuro/60 w-2"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
          )}
        </div>
      </div>
    </div>
    )
}

export default ReviewsCarrousel
