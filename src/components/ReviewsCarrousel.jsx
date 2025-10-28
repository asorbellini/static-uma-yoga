import { useState, useEffect, useRef } from "react"
import { NextSlideArrow, PrevSlideArrow } from "./Icons"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"


function ReviewsCarrousel({ reviews }) {
  const [index, setIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState("forward")
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const touchStartX = useRef(0)
  const touchStartTime = useRef(0)
  useRevealOnScroll(containerRef, {
    threshold: 0.5,
    rootMargin: '0px 0px -20% 0px',
    onReveal: () => setIsVisible(true)
  })
  // Autoplay
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      handleNext()
    }, 15000)
    return () => clearInterval(interval)
  }, [index, isVisible])

  const handlePrev = () => {
    setFlipDirection("backward")
    setIsFlipping(true)
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
      setIsFlipping(false)
    },500)
  }

  const handleNext = () => {
    setFlipDirection("forward")
    setIsFlipping(true)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
      setIsFlipping(false)
    },500)
  }

  const onTouchStart = (e) => {
    const t = e.touches && e.touches[0]
    if (t) {
      touchStartX.current = t.clientX
      touchStartTime.current = Date.now()
    }
  }
  const onTouchEnd = (e) => {
    const t = (e.changedTouches && e.changedTouches[0]) || null
    if (!t) return
    const dx = t.clientX - touchStartX.current
    const dt = Date.now() - touchStartTime.current
    if (Math.abs(dx) > 50) {
      if (dx < 0) {
        handleNext()
      } else {
        handlePrev()
      }
    } else if (dt < 300) {
      handleNext()
    }

    
  }

  const { author, comments, rating = 0, date, experience = null} = reviews[index]

  return (
    <div
      ref={containerRef} 
      className="w-full max-w-2xl m-auto overflow-visible z-50 min-h-fit" 
      style={{ perspective: "1000px"}}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      >
      <div
        className={`h-80 md:h-96 w-full p-4 md:p-6 rounded-xl bg-terracota flex transition-transform duration-500 ease-in-out ${
          isFlipping ? (flipDirection === "forward" ? "animate-flip" : "animate-flip-back") : ""
        }`}
        style={{transformStyle: "preserve-3d", willChange: "transform"}}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-xl"/>
        <div className={`flex-1 flex flex-col justify-center gap-3 md:gap-4 z-20 ${isFlipping ? "opacity-0" : "opacity-100"}`}>
          <div className="px-2">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl italic text-white text-center drop-shadow-title">
              "{comments}"
            </p>
          </div>

          <div className="text-sm text-white text-center drop-shadow-text">
            {author} {date && <span className="text-white">({date})</span>}
          </div>

          {experience && (
            <p className="text-sm lg:text-base italic text-white text-center drop-shadow-title">~ {experience} ~</p>
          )}

          <div className="text-center text-xl drop-shadow-title">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "text-yellow-500" : "text-claro/55"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePrev}
        disabled={isFlipping}
        className={`hidden sm:block sm:absolute left-0 top-1/2 -translate-y-1/2 btn-scopri p-1 md:p-3 mx-2 md:mx-4 rounded-full hover:scale-110 transition-transform duration-500 ${isFlipping ? "opacity-50":""}`}
        aria-label="Recensione precedente"
      >
        <PrevSlideArrow />
      </button>

      <button
        type="button"
        onClick={handleNext}
        disabled={isFlipping}
        className={`hidden sm:block sm:absolute right-0 top-1/2 -translate-y-1/2 btn-scopri p-1 md:p-3 mx-2 md:mx-4 rounded-full hover:scale-110 transition-transform duration-500  ${isFlipping ? "opacity-50":""}`}
        aria-label="Prossima recensione"
      >
        <NextSlideArrow />
      </button>
    </div>
  )
} 

export default ReviewsCarrousel
