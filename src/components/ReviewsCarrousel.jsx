import { useState, useEffect } from "react"
import { NextSlideArrow, PrevSlideArrow } from "./Icons"

function ReviewsCarrousel({ reviews }) {
  const [index, setIndex] = useState(0)
  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [reviews.length])

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const { author, comments, rating = 0, date, experience = null} = reviews[index]

  return (
    <div className="h-56 md:h-64 w-full max-w-xl mx-auto p-3 md:p-6 rounded-xl bg-terracota transition-all duration-500 ease-in-out flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-evenly relative">
        <p className="text-base md:text-lg lg:text-xl italic text-white text-center min-h-16 md:min-h-20 drop-shadow-title">“{comments}”</p>
        {experience&& <p className="text-sm lg:text-base italic text-white text-center drop-shadow-title">~ {experience} ~</p>}
        <div className="text-sm text-white text-center">
          {author} {date && <span className="text-gray-200">({date})</span>}
        </div>
        {/* Estrellitas */}
        <div className="text-center text-xl">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < rating ? "text-yellow-500" : "text-claro/55"}
            >★
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 btn-scopri p-3 rounded-full"
        >
          <PrevSlideArrow />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 btn-scopri p-3 rounded-full "
        >
          <NextSlideArrow />
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarrousel
