import { useState, useEffect, useRef } from "react"
import imageUrlAlba from "../assets/images/AboutAlba.png"
import imageUrlDiletta from "../assets/images/AboutDiletta.png"
import imageUrlTiziano from "../assets/images/AboutTiziano.png" 

import { ArrowDown } from "./Icons"


function AboutUmaSummary(){
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
            <section ref={sectionRef} id="about-uma-summary" className="min-h-screen w-full px-4 bg-gradient-to-tr from-claro to-verdeOliva">
        {/* CHI SIAMMO titulo de sección */}
                <div className="px-12 pt-24 pb-12 flex flex-col sm:flex-row gap-3 items-center">
                    <div className="basis-1/3">
                        <h3 className="text-lg md:text-2xl rounded font-rose text-white text-left font-light uppercase">
                        UMĀ è uno spazio che conduce l’una all’altra, annullando virtualmente la distanza fisica che ci separa.
                        </h3>
                    </div>
                    <div className="basis-2/3">
                        <p className="text-sm md:text-base rounded font-rose text-white text-left font-light">Alba vive e insegna nel nord Italia, a Milano, Diletta nel meridione, a Napoli.
                        Per noi lo yoga è soprattutto un mezzo che promuove l’evoluzione del sistema corpo-mente per fare ritorno a casa, alla propria vera natura ontologica che è eterna (sat), cosciente (cit) e beata (ānanda). Durante la pratica sul tappetino e nei momenti di studio dei testi sacri, è così che ci sentiamo: a casa, ed è questa l’intenzione con cui è nata UMĀ, creare un metaspazio che unisca i nostri progetti e percorsi yoga e in cui tu possa sentirti a casa.
                        </p>
                    </div>
                </div>
                <div className="px-12">
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                    <div className={`basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                                        <img
                                        src={imageUrlAlba}
                                        alt="`Image Alba"
                                        className=" h-[45vh] object-cover shadow rounded-t-full " />
                                    </div>
                                    <div className="p-2 md:p-4 basis-1/2">
                                        <h2 className="font-rose text-base text-center font-semibold text-white">Alba Muzzarelli</h2>
                                        <p className="font-sans text-white">Nata con il Sole in Acquario, la Luna in Pesci e con Ariete come Ascendente, Alba è un’insaziabile curiosa, qualità che nel 2014 la conduce per la prima volta su un tappetino da yoga.</p>
                                        <div className="bg-terracota justify-center my-2 rounded-full px-6 py-3  hover:bg-dorado hover:border-[#5a66c5b]  transition-all duration-500">
                                            <a href="/chi-siamo/alba-muzzarelli">
                                                <button className="text-white text-sm font-semibold tracking-wide">
                                                    SCOPRI DI PIÙ
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className={`basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                                    <img
                                    src={imageUrlDiletta}
                                    alt='Image Diletta'
                                    className="h-[45vh] object-cover shadow rounded-t-full" />
                                </div>
                                <div className="p-2 md:p-4 basis-1/2">
                                    <h2 className="font-rose text-base text-center font-semibold text-white">Diletta Muzzarelli</h2>
                                    <p className="font-sans text-white">Diletta incontra lo Yoga da bambina. Grazie alla pratica accede a un metaspazio amorevole e inclusivo in cui sperimenta una piena libertà di ascolto ed espressione che la guida ad approfondirne lo studio.</p>
                                    <div className="bg-terracota justify-center my-2 rounded-full px-6 py-3  hover:bg-dorado hover:border-[#5a66c5b]  transition-all duration-500">
                                        <a href="/chi-siamo/diletta-muzzarelli">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI DI PIÙ
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className={`basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                                    <img
                                    src={imageUrlTiziano}
                                    alt='Image Tiziano'
                                    className="h-[45vh] object-cover shadow rounded-t-full" />
                                </div>
                                <div className="p-2 md:p-4 basis-1/2">
                                    <h2 className="font-rose text-base text-center font-semibold text-white">Tiziano Sorbellini</h2>
                                    <p className="font-sans text-white">Tiziano, creatore della pratica Anubhūti e autore di libri come "Semi del nulla" e "Anubhuti".</p>
                                    <div className="bg-terracota justify-center my-2 rounded-full px-6 py-3  hover:bg-dorado hover:border-[#5a66c5b]  transition-all duration-500">
                                        <a href="/chi-siamo/tiziano-sorbellini">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI DI PIÙ
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUmaSummary