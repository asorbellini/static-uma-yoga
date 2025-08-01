import { useState, useEffect, useRef } from "react"
import cosaFacciamo2 from "../assets/images/Cosafacciamo2.png"
import members from "../data/members.json"
import { ArrowDown } from "../components/Icons.jsx"

function UmaSummary(){
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    // Intersection Observer para animaciones
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
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
            <section ref={sectionRef} id="uma-summary" className="min-h-screen relative w-full px-4 pt-12 md:pt-16 bg-gradient-to-b from-terracota via-terracota via-80% to-dorado">
                <div className="px-2 md:px-12 pb-4">
                    <h3 className="textTitleSection py-4">CHI SIAMO</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                        {members.map((member, index) => (
                            <div className="flex-1 hover:scale-105 transition-all duration-1000">
                                <a href={`/chi-siamo/${member.memberName}`}>
                                    <div className={` w-full justify-items-center items-center justify-center transition-all duration-300 ease-out ${isVisible ? "opacity-100 translate-x-0 sm:translate-x-0 sm:translate-y-0" : "opacity-0 -translate-x-10 sm:translate-x-0 sm:-translate-y-10"}`}>
                                        <img
                                        src={member.images?.[1]}
                                        alt={`Image ${member.Name}`}
                                        className={`h-[45vh] object-contain sm:object-cover shadow ${index === 0 ? "rounded-3xl sm:rounded-bl-full" : index === 2 ? "rounded-3xl sm:rounded-tr-full" : "rounded-3xl sm:rounded-none"}`} />
                                    </div>
                                    <div className="sm:p-2">
                                        <h2 className="title text-center underline sm:no-underline hover:underline transition-all py-2">{member.Name}</h2>
                                        <p className="textDetail">{member.smallDescription}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="btn-secondary group">
                        <a href="#cosa-facciamo">
                            <button type="button" className="animate-pulse md:animate-none group-hover:animate-pulse ">
                                <ArrowDown />
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <section id="cosa-facciamo" className="h-auto w-full p-4 pt-12 md:pt-16 bg-gradient-to-t from-terracota via-terracota via-50% to-dorado flex flex-col">
                <div className="px-2 md:px-12 md:pb-4">
                    <h2 className="textTitleSection py-4">COSA FACCIAMO</h2>
                    <div className="flex flex-col sm:flex-row items-center relative text-left">
                        <div className="justify-items-center sm:w-1/3 space-y-1">
                            <h3 className="title">RETREAT E WORKSHOP</h3>
                            <p className="textDetail">
                                Un momento di serenità in cui ogni respiro si allinea con la bellezza dell'ambiente circostante, lasciandovi connessi, ringiovaniti e pronti ad affrontare una giornata di esplorazione.
                            </p>
                            <div className="btn-primary">
                                <a href="/retreat-e-workshop">
                                    <button className="textButton">
                                        SCOPRI TUTTI GLI EVENTI
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full py-2 sm:p-2 md:relative md:w-[40vw] md:h-[50vh] lg:h-[60vh]">
                            <img
                                src={cosaFacciamo2}
                                alt="Cosa Facciamo"
                                className="w-full h-full object-cover rounded-br-full rounded-tl-full shadow-2xl"
                                />
                        </div>
                        <div className="justify-items-center sm:w-1/3 space-y-3">
                            <div className="space-y-1">
                                <h3 className="title text-center">CLASSI YOGA LIVE STREAMING</h3>
                                <p className="textDetail">
                                Pratica dove vuoi seguendo i nostri corsi in live streaming o comincia un percorso yoga personalizzato online.
                                </p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="title text-center">CLASSI YOGA LIVE</h3>
                                <p className="textDetail">
                                Pratica con noi seguendo i nostri corsi live o comincia in presenza un percorso yoga personalizzato.
                                </p>
                            </div>
                            <div className="flex flex-row space-x-2">
                                <div className="btn-primary">
                                    <a href="/chi-siamo/alba-muzzarelli#classi">
                                        <button className="textButton">
                                            SCOPRI I CLASSI CON ALBA
                                        </button>
                                    </a>
                                </div>
                                <div className="btn-primary">
                                    <a href="/chi-siamo/diletta-muzzarelli#classi">
                                        <button className="textButton">
                                            SCOPRI I CLASSI CON DILETTA
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* VER SI INCLUIR ESTA PARTE
            <section id="nostre-classi" className="min-h-screen w-full pt-28 px-4 bg-terracota " > 
                <div className="p-2 md:p-4 ">
                    <h3 className="text-2xl md:text-4xl rounded font-serif text-white text-center font-light">
                    LE NOSTRE CLASSI
                    </h3>
                    <p className="font-serif text-base text-center font-semibold text-white pt-4">
                        Pratica con noi per cominciare un percorso di autotrasformazione fisica e mentale seguendo i nostri corsi in presenza o in live streaming.
                    </p>
                </div>
                
                <div className="px-12">
                    <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <div className="flex-1 bg-gradient-to-r from-dorado from-40% to-claro to-90% rounded-3xl">
                            <div className="p-2 md:p-4">
                                <h2 className="font-serif text-base text-center font-semibold uppercase underline underline-offset-1">Vinyāsa Yoga del Risveglio (in presenza)</h2>
                                <p className="font-sans py-4">Una pratica fluida attraverso cui risvegliare corpo e mente con consapevolezza e intenzione per cominciare la giornata con energia e presenza mentale.
                                La classe è caratterizzata da numeserif variazioni e da un’attenzione particolare agli allineamenti del corpo e alla dinamica del respiro. Il corso è accessibile a tutti.</p>
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
                                <h2 className="font-serif text-base text-center font-semibold text-oscuro uppercase underline underline-offset-1">Vinyāsa krama (in presenza)</h2>
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
                                <h2 className="font-serif text-base text-center font-semibold  text-oscuro uppercase underline underline-offset-1">Gentle Vinyāsa</h2>
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