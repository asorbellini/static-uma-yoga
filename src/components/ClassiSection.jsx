import { useState, useEffect, useRef } from "react"
import imageUrlNavakaranaVinyasa from "../assets/images/NavakaranaVinyasa.png"
import imageUrlGentleVinyasa from "../assets/images/GentleVinyasa.png"
import imageUrlVinyasaDelRisveglio from "../assets/images/VinyasaDelRisveglio.png"
import imageUrlVinyasaFlow from "../assets/images/VinyasaFlow.png"
import imageUrlClassi from "../assets/images/Classi.png"

function ClassiSection() {
    const [isVisible, setIsVisible] = useState(false)
        const sectionRef = useRef(null)
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
    return(
        <div>
            <section id="classi" className="min-h-screen w-full px-4 bg-gradient-to-tr from-terracota from-0% via-dorado via-50% to-terracota to-90% flex flex-col items-center justify-center">
                <div className="p-2 md:p-4 ">
                    <p className="font-rose text-lg text-center font-semibold text-white pt-4">
                        Pratica con noi per cominciare un percorso di autotrasformazione fisica e mentale seguendo i nostri corsi in presenza o in live streaming.
                    </p>
                </div>
                <div className="px-12">
                    <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center ">
                                <img
                                src={imageUrlNavakaranaVinyasa}
                                alt='Image Navakarana Vinyasa'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-rose text-base font-semibold uppercase">NavakaraṆa vinyāsa</h2>
                                <p className="font-sans">Insegnanti: Alba e Dilleta Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center">
                                <img
                                src={imageUrlGentleVinyasa}
                                alt='Image Gentle Vinyasa'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-rose text-base font-semibold uppercase">gentle vinyāsa</h2>
                                <p className="font-sans">Insegnante: Alba Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center">
                                <img
                                src={imageUrlVinyasaDelRisveglio}
                                alt='Image Vinyasa del Risveglio'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-rose text-base font-semibold uppercase">vinyāsa yoga de risveglio</h2>
                                <p className="font-sans">Insegnante: Diletta Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center">
                                <img
                                src={imageUrlVinyasaFlow}
                                alt='Image Vinyasa Flow'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-rose text-base font-semibold uppercase">vinyāsa flow</h2>
                                <p className="font-sans">Insegnante: Alba Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className="min-h-screen w-full px-4 flex items-center bg-gradient-to-br from-terracota from-0% via-dorado via-50% to-terracota to-90% relative overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-screen px-12">
                    <div className="flex-1 flex flex-col justify-center text-white py-12">
                        <h1 className="font-rose text-3xl md:text-4xl lg:text-5xl font-light">
                        UMĀ È UNO SPAZIO CHE CONDUCE L'UNA ALL'ALTRA
                        </h1>
                        <p className="font-sans text-base md:text-lg leading-relaxed my-12">
                        Uno spazio sacro di crescita ed evoluzione personale che unisce e presenta i nostri progetti e percorsi
                        yoga e in cui Tu possa riconoscerti e sentirti a casa.
                        </p>
                        <div className="flex items-start justify-start ">
                            <div className="bg-verdeBosque justify-center my-2 rounded-full px-6 py-3 hover:bg-verdeOliva hover:border-verdeBosque transition-all duration-500">
                                <a href="/chi-siamo">
                                    <button className="text-white text-sm font-semibold tracking-wide">
                                        SCOPRI DI PIÙ SU CHI SIAMO
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* Lado derecho - Imagen */}
                        <div className={`absolute right-0 top-0 overflow-hidden transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                            <img
                                src={imageUrlClassi}
                                alt="Yoga Practice"
                                className="w-[40vw] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default ClassiSection