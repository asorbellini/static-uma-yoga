import { useState, useEffect, useRef } from "react"
import imageUrlAlba from "../assets/images/PortadaAlba.png"
import imageUrlDiletta from "../assets/images/PortadaDiletta.png"
import imageUrlTiziano from "../assets/images/PortadaTiziano.png" 
import cosaFacciamo2 from "../assets/images/Cosafacciamo2.png"

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
            <section ref={sectionRef} id="uma-summary" className="min-h-screen relative w-full px-4 bg-gradient-to-b from-terracota via-terracota via-80% to-dorado ">
        {/* CHI SIAMMO titulo de sección */}
                <div className="p-4 pt-20 ">
                    <h3 className="sectionTitle">
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
                                    <h2 className="title text-right hover:underline transition-all mb-2">Alba Muzzarelli</h2>
                                    <p className="textDetail">Nata con il Sole in Acquario, la Luna in Pesci e con Ariete come Ascendente, Alba è un’insaziabile curiosa, qualità che nel 2014 la conduce per la prima volta su un tappetino da yoga.</p>
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
                                    <h2 className="title text-center hover:underline hover:underline-offset-1 transition-all  mb-2 ">Diletta Muzzarelli</h2>
                                    <p className="textDetail">Diletta incontra lo Yoga da bambina. Grazie alla pratica accede a un metaspazio amorevole e inclusivo in cui sperimenta una piena libertà di ascolto ed espressione che la guida ad approfondirne lo studio.</p>
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
                                    <h2 className="title text-left hover:underline transition-all mb-2 ">Tiziano Sorbellini</h2>
                                    <p className="textDetail">Tiziano, creatore della pratica Anubhūti e autore di libri come "Semi del nulla" e "Anubhuti".</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <div className="bg-verdeBosque border-2 border-verdeBosque hover:bg-verdeOliva transition-all duration-500 rounded-full px-6 py-3 my-2 flex justify-center items-center text-white hover:text-oscuro hover:border-verdeBosque ">
                        <a href="/chi-siamo">
                            <button className="textButton">
                                SCOPRI DI PIÙ SU CHI SIAMO
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <section id="cosa-facciamo" className="min-h-screen w-full px-4 bg-gradient-to-t from-terracota via-terracota via-50% to-dorado  flex flex-col">
                <div className="py-12">
                    <h2 className="sectionTitle">
                    COSA FACCIAMO
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center md:px-12 gap-4 relative">
                    <div className="md:w-1/3 text-left items-center ">
                        <h3 className="secondaryTitle">RETREAT E WORKSHOP</h3>
                        <p className="textDetail">
                            Un momento di serenità in cui ogni respiro si allinea con la bellezza dell'ambiente circostante, lasciandovi connessi, ringiovaniti e pronti ad affrontare una giornata di esplorazione.
                        </p>
                        <div className="border-2 border-verdeBosque hover:border-verdeOliva hover:bg-claro transition-all duration-500  px-6 py-3 my-2 flex justify-center items-center text-white hover:text-oscuro max-w-fit">
                            <a href="/retreat-e-workshop">
                                <button className="textButton">
                                    SCOPRI DI PIÙ
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="relative w-[40vw] h-[50vh] xl:h-[60vh] z-10">
                        <img
                            src={cosaFacciamo2}
                            alt="Cosa Facciamo"
                            className="w-full h-full object-cover rounded-br-full rounded-tl-full shadow-2xl"
                        />
                    </div>
                    <div className="md:w-1/3 text-left space-y-8">
                        <div>
                            <h3 className="secondaryTitle">CLASSI YOGA LIVE STREAMING</h3>
                            <p className="textDetail">
                            Pratica dove vuoi seguendo i nostri corsi in live streaming o comincia un percorso yoga personalizzato online.
                            </p>
                        </div>
                        <div>
                            <h3 className="secondaryTitle">CLASSI YOGA LIVE</h3>
                            <p className="textDetail">
                            Pratica con noi seguendo i nostri corsi live o comincia in presenza un percorso yoga personalizzato.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/*
            <section id="nostre-classi" className="min-h-screen w-full pt-28 px-4 bg-terracota " > 
                <div className="p-2 md:p-4 ">
                    <h3 className="text-2xl md:text-4xl rounded font-rose text-white text-center font-light">
                    LE NOSTRE CLASSI
                    </h3>
                    <p className="font-rose text-base text-center font-semibold text-white pt-4">
                        Pratica con noi per cominciare un percorso di autotrasformazione fisica e mentale seguendo i nostri corsi in presenza o in live streaming.
                    </p>
                </div>
                
                <div className="px-12">
                    <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <div className="flex-1 bg-gradient-to-r from-dorado from-40% to-claro to-90% rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-rose text-base text-center font-semibold uppercase underline underline-offset-1">Vinyāsa Yoga del Risveglio (in presenza)</h2>
                                <p className="font-sans py-4">Una pratica fluida attraverso cui risvegliare corpo e mente con consapevolezza e intenzione per cominciare la giornata con energia e presenza mentale.
                                La classe è caratterizzata da numerose variazioni e da un’attenzione particolare agli allineamenti del corpo e alla dinamica del respiro. Il corso è accessibile a tutti.</p>
                                <div className="flex items-center justify-center ">
                                    <div className="bg-verdeBosque justify-center my-2 rounded-full px-6 py-3  hover:bg-verdeOliva hover:border-verdeBosque  transition-all duration-500">
                                        <a href="/classi/vinyasa-yoga-del-risveglio">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-claro from-10% via-dorado via-50% to-claro rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-rose text-base text-center font-semibold text-oscuro uppercase underline underline-offset-1">Vinyāsa krama (in presenza)</h2>
                                <p className="font-sans py-4">Una pratica intensa, dinamica, nella quale gli asana (posture) sono intimamente connessi al respiro e si susseguono, a ritmo sostenuto, in un flusso continuo, per favorire il riequilibrio del sistema corpo-mente e facilitare uno stato di rinnovata freschezza energetica.
                                </p>
                                <div className="flex items-center justify-center ">
                                    <div className="bg-verdeBosque justify-center my-2 rounded-full px-6 py-3  hover:bg-verdeOliva hover:border-verdeBosque transition-all duration-500">
                                        <a href="/classi/gentle-vinyasa">
                                            <button className="text-white text-sm font-semibold tracking-wide">
                                                SCOPRI
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-gradient-to-l from-dorado from-40% to-claro to-90% rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-rose text-base text-center font-semibold  text-oscuro uppercase underline underline-offset-1">Gentle Vinyāsa</h2>
                                <p className="font-sans py-4">Gentle Vinyāsa propone un flusso di posture morbido, gentile ma efficace, prevedendo delle semplici sequenze che variano in base alle necessità di ogni praticante.
                                Questa dolce pratica migliora la consapevolezza e la percezione del proprio corpo, scioglie rigidità muscolari, nutre la forza e l’elasticità del movimento.
                                </p>
                                <div className="flex items-center justify-center ">
                                    <div className="bg-verdeBosque justify-center my-2 rounded-full px-6 py-3  hover:bg-verdeOliva hover:border-verdeBosque  transition-all duration-500">
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
            </section>*/}
        </div>
    )
}

export default UmaSummary