import { useState, useEffect, useRef } from "react"
import ToRetreateWorkshopImage from "../assets/images/ToRWImage.png"

function ToRetreateWorkshop(){
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
        <section ref={sectionRef} className="bg-gradient-to-tr from-[#2b2517] to-[#aa935c] overflow-hidden px-12"> {/*py-12 md:py-10 */}
            <div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    {/* Texto a la izquierda */}
                    <div
                        className={`w-full md:w-1/2 text-[#ffffff] transition-all duration-1000 ease-out px-4 my-5 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="text-2xl md:text-4xl font-light leading-snug mb-4 text-center md:text-left uppercase">
                            Guarda tutti gli eventi 
                        </h2>
                        <p className="text-lg md:text-2xl font-light leading-snug mb-8 text-center md:text-left">
                            Guarda tutti gli eventi, retreat e masterclass in programma, questa sezione è in costante aggiornamento.
                        </p>
                        <div className={`${isMobile ? "flex justify-center" : ""}`}>
                            <a href="/retreat-e-workshop" target="_blank">
                                <button className="bg-dorado text-oscuro px-6 py-3 text-sm tracking-wide font-semibold hover:bg-[#beac83] transition-colors duration-300">
                                    SCORPI DI PIU
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* ✅ Imagen a la derecha (o abajo en mobile) */}
                    <div
                        className={`w-full md:w-1/2 flex ${isMobile ? "justify-center" : "justify-center"} my-4 transition-all duration-1000 ease-out${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <div
                        className={`absolute ${isMobile ? "h-full w-[166px]" : "h-[300px] w-[500px] "} rounded-br-full rounded-bl-full overflow-hidden hover:scale-105 transition-all`}
                        >
                        <img
                            src={ToRetreateWorkshopImage}
                            alt="Uma members"
                            className="w-full h-auto object-cover"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToRetreateWorkshop