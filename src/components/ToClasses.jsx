import { useState, useEffect, useRef } from "react"
import ToClassesImage from "../assets/images/ToClassesImage.png"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"

function ToClasses(){
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const sectionRef = useRef(null)

    // Detectar si es dispositivo móvil
    useEffect(() => {
        const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useRevealOnScroll(sectionRef, {
            threshold: 0.3,
            rootMargin: '0px 0px -10% 0px',
            onReveal: () => setIsVisible(true)
    })

    return (
        <section ref={sectionRef} className="bg-dorado overflow-hidden"> {/*py-12 md:py-10 */}
            <div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-12">
                    {/* Texto a la izquierda */}
                    <div
                        className={`w-full md:w-1/2 text-oscuro transition-all duration-1000 ease-out px-4 my-5 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="text-2xl md:text-4xl font-light leading-snug mb-4 text-center md:text-left">
                            SCOPRI LE CLASSI DI UMĀ YOGA 
                        </h2>
                        <p className="text-lg md:text-2xl font-light leading-snug mb-8 text-center md:text-left">
                            Pratica dove vuoi seguendo i nostri corsi in live streaming o comincia un percorso yoga personalizzato online.
                        </p>
                        <div className={`${isMobile ? "flex justify-center" : ""}`}>
                            <a href="/classi" target="_blank">
                                <button className="bg-verdeBosque text-white px-6 py-3 text-sm tracking-wide hover:bg-verdeOliva">
                                    SCORPI DI PIU
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* ✅ Imagen a la derecha (hidden en mobile) */}
                    <div
                        className={`w-full md:w-1/2 flex ${isMobile ? "justify-center" : "justify-center"} transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        }`}
                    >
                        <div
                        className={`absolute -right-12 -translate-y-1/2 ${isMobile ? "hidden" : "w-[400px]"} rounded-bl-full rounded-tr-full overflow-hidden `}
                        >
                        <img
                            src={ToClassesImage}
                            alt="Diletta practising"
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToClasses