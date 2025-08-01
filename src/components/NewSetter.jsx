import { useState, useEffect, useRef } from "react"
import NewSetterImage from "../assets/images/NewSetterImage.png"

function NewSetter(){
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

    // Intersection Observer para animaciones
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true)
            }
        },
        { threshold: 0.3 },
        )
        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="bg-claro overflow-hidden">
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
                            <a href="https://mailchi.mp/5adff419986c/benvenut" target="_blank" rel="noopener noreferrer" >
                                <button className="btn-primary">
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
                            src={NewSetterImage}
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

export default NewSetter