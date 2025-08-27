import { useState, useEffect } from "react"

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
    <div className="h-56 md:h-64 lg:h-72 w-full max-w-xl mx-auto p-3 md:p-6 rounded-xl bg-verdeBosque shadow-md transition-all duration-500 ease-in-out flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-evenly">
        <p className="text-base md:text-lg lg:text-xl italic text-white text-center min-h-16 md:min-h-20">“{comments}”</p>
        {experience&& <p className="text-sm lg:text-base italic text-white text-center">~ {experience} ~</p>}
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
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="btn-scopri px-3 py-1"
        >← Precedente
        </button>
        <button
          onClick={handleNext}
          className="btn-scopri px-3 py-1 "
        >Prossimo →
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarrousel
