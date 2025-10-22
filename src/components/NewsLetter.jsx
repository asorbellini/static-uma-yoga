import { useState, useEffect, useRef, useCallback } from "react"
import NewsLetterImage from "../assets/images/NewsLetterImage.png"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"

function NewsLetter(){
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const sectionRef = useRef(null)

    const checkMobile = useCallback(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    useEffect(() => {
        checkMobile()
        let timeoutId
        const throttledResize = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(checkMobile, 100)
        }
        
        window.addEventListener("resize", throttledResize, { passive: true })
        return () => {
            window.removeEventListener("resize", throttledResize)
            clearTimeout(timeoutId)
        }
    }, [checkMobile])

    useRevealOnScroll(sectionRef, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px',
        onReveal: () => setIsVisible(true)
    })

    return (
        <section ref={sectionRef} className="bg-dorado/60 overflow-hidden">
            <div className="py-4">
                <div className="flex flex-col md:flex-row items-center justify-between space-x-3 px-6 md:px-16">
                    <div
                        className={`w-full md:w-1/2 text-oscuro transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="secondaryTitle text-oscuro font-light mb-2 text-center md:text-left drop-shadow-none">
                            RESTA AGGIORNATO CON UMĀ YOGA – ISCRIVITI ALLA NOSTRA NEWSLETTER
                        </h2>
                        <div className={`${isMobile ? "flex justify-center" : ""}`}>
                            <a 
                              href="https://stats.sender.net/forms/aQWqJ0/view"
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                                <button 
                                  className="btn-primary"
                                  aria-label="Iscriviti alla newsletter UMĀ"
                                >
                                    ISCRIVITI ORA
                                </button>
                            </a>
                        </div>
                    </div>
                    <div
                        className={`w-full md:w-1/2 flex ${isMobile ? "justify-center" : "justify-end"} transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div
                        className={`absolute -right-16 -translate-y-1/2 ${isMobile ? "hidden" : "w-[400px]"} rounded-l-full overflow-hidden `}
                        >
                        <img
                            src={NewsLetterImage}
                            alt="Alba practising Hasta Uttanasana"
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter