import { useState, useEffect, useRef } from "react"
import imageUrlAlba from "../assets/images/PortadaAlba.png"
import imageUrlDiletta from "../assets/images/PortadaDiletta.png"
import imageUrlTiziano from "../assets/images/PortadaTiziano.png" 
import cosaFacciamo from "../assets/images/CosaFacciamo.png"
import cosaFacciamo2 from "../assets/images/cosaFacciamo2.png"

import { ArrowDown } from "./Icons"




function UmaSummary(){
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
            <section ref={sectionRef} id="uma-summary" className="min-h-screen w-full px-4 bg-gradient-to-t from-[#D4AF7F] to-[#a66c5b]">
        {/* CHI SIAMMO titulo de sección */}
                <div className="p-2 md:p-4 pt-24 md:pt-24">
                    <h3 className="text-2xl md:text-4xl rounded font-quicksand text-white text-center font-light">
                    CHI SIAMMO
                    </h3>
                </div>
                <div className="px-12">
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <div className="flex-1 hover:scale-110 transition-all duration-1000">
                            <a href="/chi-siamo/alba-muzzarelli">
                                <div className={`justify-items-center sm:justify-items-end transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                    <img
                                    src={imageUrlAlba}
                                    alt="`Image Alba"
                                    className=" h-[45vh] object-cover shadow rounded-bl-full " />
                                </div>
                                <div className="p-2 md:p-4">
                                    <h2 className="font-quicksand text-base text-right font-semibold text-[#2c2c2c] hover:underline transition-all">Alba Muzzarelli</h2>
                                    <p className="font-sans text-[#2c2c2c]">Nata con il Sole in Acquario, la Luna in Pesci e con Ariete come Ascendente, Alba è un’insaziabile curiosa, qualità che nel 2014 la conduce per la prima volta su un tappetino da yoga.</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex-1 hover:scale-110 transition-all duration-1000">
                            <a href="/chi-siamo/diletta-muzzarelli">
                                <div className={`justify-items-center sm:justify-items-center transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                                    <img
                                    src={imageUrlDiletta}
                                    alt='Image Diletta'
                                    className="h-[45vh] object-cover shadow" />
                                </div>
                                <div className="p-2 md:p-4">
                                    <h2 className="font-quicksand text-base text-center font-semibold text-[#2c2c2c] hover:underline transition-all">Diletta Muzzarelli</h2>
                                    <p className="font-sans text-[#2c2c2c]">Diletta incontra lo Yoga da bambina. Grazie alla pratica accede a un metaspazio amorevole e inclusivo in cui sperimenta una piena libertà di ascolto ed espressione che la guida ad approfondirne lo studio.</p>
                                </div>
                            </a>
                        </div>

                        <div className="flex-1 hover:scale-110 transition-all duration-1000">
                            <a href="/chi-siamo/tiziano-sorbellini">
                                <div className={`justify-items-center sm:justify-items-start transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                                    <img
                                    src={imageUrlTiziano}
                                    alt='Image Tiziano'
                                    className="h-[45vh] object-cover shadow rounded-tr-full" />
                                </div>
                                <div className="p-2 md:p-4">
                                    <h2 className="font-quicksand text-base text-left font-semibold text-[#2c2c2c] hover:underline transition-all">Tiziano Sorbellini</h2>
                                    <p className="font-sans text-[#2c2c2c]">Tiziano, creatore della pratica Anubhūti e autore di libri come "Semi del nulla" e "Anubhuti".</p>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="bg-[#5C7C5C] justify-center my-2 rounded-full px-6 py-3  hover:bg-[#7DA87D] hover:border-[#5C7C5C]  transition-all duration-500">
                        <a href="/chi-siamo">
                            <button className="text-white text-sm font-semibold tracking-wide">
                                SCOPRI DI PIÙ SU CHI SIAMO
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="min-h-screen w-full px-4 bg-gradient-to-b from-[#D4AF7F] to-[#a66c5b] flex flex-col items-center justify-center">
                <div className="relative w-full px-12 mt-24">
            {/* Imagen */}
                    <img
                        src={cosaFacciamo}
                        alt="Cosa Facciamo"
                        className="w-full h-[50vh] sm:h-[70vh] object-cover md:object-contain"
                    />

            {/* COSA FACCIAMO superpuesto en la parte superior de imágen*/}
                    <h2 className="w-full absolute -top-6 left-1/2 -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl rounded font-quicksand text-white font-light text-center drop-shadow-2xl">
                        COSA FACCIAMO
                    </h2>
                </div>
                 
                <div className="flex flex-col sm:flex-row md:relative w-full min-h-[70vh] mt-20 px-12 text-white">          
                        <div className="flex flex-col md:absolute md:top-0 md:left-12 md:max-w-lg z-30 ">
                            <div className="p-2 md:p-4">
                                <h3 className="font-quicksand text-xl font-semibold ">CLASSI YOGA LIVE STREAMING</h3>
                                <p className="font-sans">Pratica dove vuoi seguendo i nostri corsi in live streaming o comincia un percorso yoga personalizzato online.</p>
                            </div>
                            <div className="p-2 md:p-4">
                                <h3 className="font-quicksand text-xl font-semibold">CLASSI YOGA LIVE</h3>
                                <p className="font-sans">Pratica con noi seguendo i nostri corsi live o comincia in presenza un percorso yoga personalizzato.</p>
                            </div>
                        </div>
                        <div className="flex md:absolute md:bottom-0 md:right-12 md:max-w-xl z-30">
                                <div className="p-2 md:p-4">
                                    <h3 className="font-quicksand text-xl text-left font-semibold">RETREATS</h3>
                                    <p className="font-sans">Un momento di serenità in cui ogni respiro si allinea con la bellezza dell'ambiente circostante, lasciandovi connessi, ringiovaniti e pronti ad affrontare una giornata di esplorazione.</p>
                                </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20">
                                <img
                                src={cosaFacciamo2}
                                alt="`Cosa Facciamo 2"
                                className="w-[40vw] h-[50vh] xl:h-[60vh] object-cover rounded-br-full rounded-tl-full shadow-lg" />
                        </div>
                </div>
        {/*Flecha a siguiente sección */}
                <div className="z-20 flex items-center justify-center hover:animate-pulse mt-8">
                    <a href="#nostre-classi">
                        <ArrowDown />
                    </a>
                </div>
            </section>


            <section id="nostre-classi" className="min-h-screen w-full pt-28 px-4 bg-[#a66c5b] " > {/*bg-gradient-to-t from-[#CCBE9D] to-[#a66c5b]  */}
                <div className="p-2 md:p-4 ">
                    <h3 className="text-2xl md:text-4xl rounded font-quicksand text-white text-center font-light">
                    LE NOSTRE CLASSI
                    </h3>
                    <p className="font-quicksand text-base text-center font-semibold text-white pt-4">
                        Pratica con noi per cominciare un percorso di autotrasformazione fisica e mentale seguendo i nostri corsi in presenza o in live streaming.
                    </p>
                </div>
                
                <div className="px-12">
                    <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <div className="flex-1 bg-gradient-to-r from-[#D4AF7F] from-40% to-[#CCBE9D] to-90% rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-quicksand text-base text-center font-semibold uppercase underline underline-offset-1">Vinyāsa Yoga del Risveglio (in presenza)</h2>
                                <p className="font-sans py-4">Una pratica fluida attraverso cui risvegliare corpo e mente con consapevolezza e intenzione per cominciare la giornata con energia e presenza mentale.
                                La classe è caratterizzata da numerose variazioni e da un’attenzione particolare agli allineamenti del corpo e alla dinamica del respiro. Il corso è accessibile a tutti.</p>
                                <div className="flex items-center justify-center ">
                                    <div className="bg-[#5C7C5C] justify-center my-2 rounded-full px-6 py-3  hover:bg-[#7DA87D] hover:border-[#5C7C5C]  transition-all duration-500">
                                        <a href="/classi/vinyasa-yoga-del-risveglio">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-[#CCBE9D] from-10% via-[#D4AF7F] via-50% to-[#CCBE9D] rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-quicksand text-base text-center font-semibold text-[#2c2c2c] uppercase underline underline-offset-1">Vinyāsa krama (in presenza)</h2>
                                <p className="font-sans py-4">Una pratica intensa, dinamica, nella quale gli asana (posture) sono intimamente connessi al respiro e si susseguono, a ritmo sostenuto, in un flusso continuo, per favorire il riequilibrio del sistema corpo-mente e facilitare uno stato di rinnovata freschezza energetica.
                                </p>
                                <div className="flex items-center justify-center ">
                                    <div className="bg-[#5C7C5C] justify-center my-2 rounded-full px-6 py-3  hover:bg-[#7DA87D] hover:border-[#5C7C5C]  transition-all duration-500">
                                        <a href="/classi/gentle-vinyasa">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-l from-[#D4AF7F] from-40% to-[#CCBE9D] to-90% rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-quicksand text-base text-center font-semibold  text-[#2c2c2c] uppercase underline underline-offset-1">Gentle Vinyāsa</h2>
                                <p className="font-sans py-4">Gentle Vinyāsa propone un flusso di posture morbido, gentile ma efficace, prevedendo delle semplici sequenze che variano in base alle necessità di ogni praticante.
                                Questa dolce pratica migliora la consapevolezza e la percezione del proprio corpo, scioglie rigidità muscolari, nutre la forza e l’elasticità del movimento.
                                </p>
                                <div className="flex items-center justify-center ">
                                    <div className="bg-[#5C7C5C] justify-center my-2 rounded-full px-6 py-3  hover:bg-[#7DA87D] hover:border-[#5C7C5C]  transition-all duration-500">
                                        <a href="/classi/vinyasa-flow">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI
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

export default UmaSummary