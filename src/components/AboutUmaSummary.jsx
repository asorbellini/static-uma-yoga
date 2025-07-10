import { useState, useEffect, useRef } from "react"
import imageUrlAlba from "../assets/images/AboutAlba.png"
import imageUrlDiletta from "../assets/images/AboutDiletta.png"
import imageUrlTiziano from "../assets/images/AboutTiziano.png" 
import imageUrlClassi from "../assets/images/Classi.png"
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
            <section id="about-uma-summary" className="min-h-screen w-full px-4 bg-gradient-to-b from-terracota to-dorado relative">
                <div className="px-12 pt-20 pb-8 flex flex-col sm:flex-row gap-3 items-center">
                    <div className="basis-1/3 p-[1rem]">
                        <h3 className="text-lg md:text-2xl font-rose text-white text-left uppercase drop-shadow-2xl">
                        UMĀ è uno spazio che conduce l’una all’altra, annullando virtualmente la distanza fisica che ci separa.
                        </h3>
                    </div>
                    <div className="basis-2/3">
                        <p className="text-base md:text-lg text-white text-left drop-shadow-2xl font-normal" >Alba vive e insegna nel nord Italia, a Milano, Diletta nel meridione, a Napoli.
                        Per noi lo yoga è soprattutto un mezzo che promuove l’evoluzione del sistema corpo-mente per fare ritorno a casa, alla propria vera natura ontologica che è eterna (sat), cosciente (cit) e beata (ānanda). Durante la pratica sul tappetino e nei momenti di studio dei testi sacri, è così che ci sentiamo: a casa, ed è questa l’intenzione con cui è nata UMĀ, creare un metaspazio che unisca i nostri progetti e percorsi yoga e in cui tu possa sentirti a casa.
                        </p>
                    </div>
                </div>
                <div className="px-12">
                    <div className="flex flex-col sm:flex-row gap-3 py-4">
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className="basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out">
                                    <img
                                    src={imageUrlAlba}
                                    alt="`Image Alba"
                                    className=" h-[45vh] object-cover shadow rounded-t-full " />
                                </div>
                                <div className="p-[1rem] basis-1/2">
                                    <h2 className="font-rose text-xl text-center text-white drop-shadow-xl font-semibold pb-2">Alba Muzzarelli</h2>
                                    <p className="font-sans text-base text-start text-white drop-shadow-xl font-normal">Nata con il Sole in Acquario, la Luna in Pesci e con Ariete come Ascendente, Alba è un’insaziabile curiosa, qualità che nel 2014 la conduce per la prima volta su un tappetino da yoga.</p>
                                    <div className="bg-verdeBosque hover:bg-verdeOliva transition-all duration-500 rounded-full px-6 py-3 my-2 flex justify-center items-center text-white hover:text-oscuro">
                                        <a href="/chi-siamo/alba-muzzarelli">
                                            <button className=" text-sm font-semibold tracking-wide justify-items-center">
                                                SCOPRI DI PIÙ SU ALBA
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className="basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out" >
                                    <img
                                    src={imageUrlDiletta}
                                    alt='Image Diletta'
                                    className="h-[45vh] object-cover shadow rounded-t-full" />
                                </div>
                                <div className="p-[1rem] basis-1/2">
                                    <h2 className="font-rose text-xl text-center text-white drop-shadow-xl font-semibold pb-2">Diletta Muzzarelli</h2>
                                    <p className="font-sans text-base text-start text-white drop-shadow-xl font-normal">Diletta incontra lo Yoga da bambina. Grazie alla pratica accede a un metaspazio amorevole e inclusivo in cui sperimenta una piena libertà di ascolto ed espressione che la guida ad approfondirne lo studio.</p>
                                    <div className="bg-verdeBosque hover:bg-verdeOliva transition-all duration-500 rounded-full px-6 py-3 my-2 flex justify-center items-center text-white hover:text-oscuro">
                                        <a href="/chi-siamo/diletta-muzzarelli">
                                            <button className=" text-sm font-semibold tracking-wide justify-items-center">
                                                SCOPRI DI PIÙ SU DILETTA
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className="basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out">
                                    <img
                                    src={imageUrlTiziano}
                                    alt='Image Tiziano'
                                    className="h-[45vh] object-cover shadow rounded-t-full" />
                                </div>
                                <div className="p-[1rem] basis-1/2">
                                    <h2 className="font-rose text-xl text-center text-white drop-shadow-xl font-semibold pb-2">Tiziano Sorbellini</h2>
                                    <p className="font-sans text-base text-start text-white drop-shadow-xl font-normal">Tiziano, creatore della pratica Anubhūti e autore di libri come "Semi del nulla" e "Anubhuti".</p>
                                    <div className="bg-verdeBosque hover:bg-verdeOliva transition-all duration-500 rounded-full px-6 py-3 my-2 flex justify-center items-center text-white hover:text-oscuro">
                                        <a href="/chi-siamo/tiziano-sorbellini">
                                            <button className=" text-sm font-semibold tracking-wide justify-items-center">
                                                SCOPRI DI PIÙ SU TIZIANO
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className="min-h-screen w-full py-8 px-4 flex items-center bg-gradient-to-b via-terracota from-dorado via-50% to-dorado  to-90% relative overflow-hidden">
                <div className="flex flex-col lg:flex-row min-h-screen px-12">
                    <div className="flex-1 flex flex-col justify-center text-white py-12">
                        <h1 className="font-rose text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl">
                        UMĀ È UNO SPAZIO PER EXPANDERSI OLTRE TE STESSO
                        </h1>
                        <p className="font-sans text-base md:text-lg font-normal drop-shadow-2xl my-12">
                        Uno spazio sacro di crescita ed evoluzione personale che unisce e presenta i nostri progetti e percorsi
                        yoga e in cui Tu possa riconoscerti e sentirti a casa.
                        </p>
                    </div>
                    <div className="flex-1">
                        {/* Lado derecho - Imagen */}
                        <div className={`absolute right-0 top-0 overflow-hidden transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                            <img
                                src={imageUrlClassi}
                                alt="Yoga Practice"
                                className="w-full h-screen object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUmaSummary