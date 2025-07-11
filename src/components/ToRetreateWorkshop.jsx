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
        <section ref={sectionRef} className="bg-gradient-to-br from-verdeBosque to-verdeOliva overflow-hidden px-12"> {/*py-12 md:py-10 */}
            <div>
                <div className="flex flex-col-reverse md:flex-row items-center gap-4">
                    {/* Texto a la izquierda */}
                    <div
                        className={`w-full md:w-1/2 text-[#ffffff] transition-all duration-1000 ease-out px-4 my-5 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="title text-center md:text-left uppercase"> {/*text-2xl md:text-4xl font-light leading-snug */}
                            Guarda tutti gli eventi 
                        </h2>
                        <p className="font-sans text-white text-base md:text-lg lg:text-xl font-normal drop-shadow-text text-center md:text-left"> {/* */}
                            Guarda tutti gli eventi, retreat e masterclass in programma, questa sezione è in costante aggiornamento.
                        </p>
                        <div className={`${isMobile ? "flex justify-center" : ""}`}>
                            <a href="/retreat-e-workshop" target="_self" >
                                <button className="border-4 border-terracota hover:border-dorado hover:bg-claro transition-all duration-500  px-6 py-3 my-2 flex justify-center items-center textButton hover:text-oscuro max-w-fit">
                                    SCORPI
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* ✅ Imagen a la derecha (o abajo en mobile) */}
                    <div
                        className={`w-full md:w-1/2 flex justify-end transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                        }`}
                    >
                        <div
                        className={`${isMobile ? "h-[166px]" : "h-[250px]"} rounded-b-full overflow-hidden `}
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