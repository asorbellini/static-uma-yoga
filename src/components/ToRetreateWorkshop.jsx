import { useState, useEffect, useRef } from "react"
import ToRetreateWorkshopImage from "../assets/images/ToRWImage.png"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"

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

    useRevealOnScroll(sectionRef, {
            threshold: 0.3,
            rootMargin: '0px 0px -10% 0px',
            onReveal: () => setIsVisible(true)
    })

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-verdeBosque from-10% to-verdeOliva to-80% overflow-hidden px-4 md:px-12">
            <div>
                <div className="flex flex-col md:flex-row items-center gap-3">
                    {/* Texto a la izquierda */}
                    <div
                        className={`w-full md:w-1/2 text-[#ffffff] transition-all duration-1000 ease-out px-2 md:px-12 my-5 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="title text-center md:text-left uppercase py-1">
                            Guarda tutti gli eventi 
                        </h2>
                        <p className="textDetail text-center md:text-left pb-4"> {/* */}
                            Guarda tutti gli eventi, retreat e masterclass in programma, questa sezione è in costante aggiornamento.
                        </p>
                        <div className={`${isMobile ? "flex justify-center" : ""}`}>
                            <a href="/retreat-e-workshop" target="_self" >
                                <button className="btn-primary textButton max-w-fit">
                                    SCOPRI
                                </button>
                            </a>
                        </div>
                    </div>
                    {/* ✅ Imagen a la derecha */}
                    <div
                        className={`md:w-1/2 flex justify-end transition-all duration-1000 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                        }`}
                    >
                        <div
                        className={`${isMobile ? "hidden" : "h-[250px]"} rounded-b-full overflow-hidden `}
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