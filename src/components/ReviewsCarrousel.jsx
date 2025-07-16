import { useState, useEffect } from "react"

function ReviewsCarousel({ reviews }) {
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

  const { author, comments, rating = 0, date } = reviews[index]

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-xl bg-verdeBosque shadow-md transition-all duration-500 ease-in-out">
      <p className="text-xl italic text-white mb-2 text-center">“{comments}”</p>

      <div className="text-sm text-white text-center mb-2">
         {author} {date && <span className="text-gray-200">({date})</span>}
      </div>

      {/* Estrellitas */}
      <div className="text-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          ← Precedente
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Prossimo →
        </button>
      </div>
    </div>
  )
}

export default ReviewsCarousel
