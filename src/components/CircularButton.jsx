import { useState, useEffect } from "react"

const CircularButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="relative inline-block">
      {/* Ripple effect */}
      <div
        className={`absolute inset-0 rounded-full bg-green-400/20 transition-all duration-1000 ${
          isHovered && !isMobile ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      ></div>

      <button
        className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-green-500/80 hover:bg-green-500 active:bg-green-600 rounded-full flex items-center justify-center text-white font-light tracking-wider transition-all duration-500 ease-out group ${
          isHovered && !isMobile ? "scale-110 shadow-2xl shadow-green-200/50" : "scale-100 shadow-lg"
        }`}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <span className="text-xs sm:text-sm uppercase transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
          SCOPRI
        </span>

        {/* Rotating border - Only on desktop */}
        {!isMobile && <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow"></div>}
      </button>
    </div>
  )
}

export default CircularButton
