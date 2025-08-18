import { useState, useRef } from "react"
import imageUrlClassi from "../assets/images/Classi.png"
import members from "../data/members.json"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"

function AboutUmaSummary(){
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    useRevealOnScroll(sectionRef, {
    threshold: 0.3,
    rootMargin: '0px 0px -10% 0px',
    onReveal: () => setIsVisible(true)
    })

    return(
        <div>
            <section id="about-uma-summary" className="min-h-screen w-full px-4 pt-16 bg-terracota">
                <div className="px-2 md:px-12 pb-4">
                    <div className="flex flex-col sm:flex-row gap-3 items-center py-4">
                        <div className="basis-1/3 italic">
                            <h3 className="text-lg md:text-2xl font-serif text-white text-left uppercase drop-shadow-2xl">
                            UMĀ è uno spazio che conduce l’una all’altra, annullando virtualmente la distanza fisica che ci separa.
                            </h3>
                        </div>
                        <div className="basis-2/3">
                            <p className="textDetail" >Alba vive e insegna nel nord Italia, a Milano, Diletta nel meridione, a Napoli.
                            Per noi lo yoga è soprattutto un mezzo che promuove l’evoluzione del sistema corpo-mente per fare ritorno a casa, alla propria vera natura ontologica che è eterna (sat), cosciente (cit) e beata (ānanda). Durante la pratica sul tappetino e nei momenti di studio dei testi sacri, è così che ci sentiamo: a casa, ed è questa l’intenzione con cui è nata UMĀ, creare un metaspazio che unisca i nostri progetti e percorsi yoga e in cui tu possa sentirti a casa.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 py-4">
                        {members.map((member, index)=> (
                            <div className="flex-1" key={index}>
                                <div className="flex flex-col lg:flex-row gap-3 items-center h-full">
                                    <div className="lg:basis-1/2 justify-items-center transition-all duration-[1000ms] ease-out">
                                        <img
                                        src={member.images?.[2]}
                                        alt={`Image ${member.Name}`}
                                        className="w-full h-[45vh] object-cover shadow rounded-t-full " />
                                    </div>
                                    <div className="lg:basis-1/2 flex flex-col justify-between h-full lg:px-3 ">
                                        <div>
                                            <h2 className="title pb-2 text-center lg:max-w-[180px]">{member.Name}</h2>
                                            <p className="textDetail">{member.smallDescription}</p>
                                        </div>
                                        <div className="btn-secondary flex justify-center items-center group pt-2">
                                            <a href={`/chi-siamo/${member.memberName}`} className="relative">
                                                <button className="text-claro font-normal drop-shadow-text tracking-wide uppercase group-hover:text-oscuro transition-colors duration-500 ease-out">
                                                    {`SCOPRI DI PIÙ SU ${member.Name.split(" ")[0]}`}
                                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-claro group-hover:bg-oscuro transition-all duration-300" />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className="min-h-screen w-full py-4 sm:py-8 px-4 flex items-center bg-gradient-to-bl from-terracota via-terracota via-50% to-dorado relative overflow-hidden">
                <div className="flex flex-col md:flex-row px-2 md:px-12 md:items-center">
                    <div className="flex-1">
                        <h1 className="text-start textTitleSection py-4 sm:py-6 md:py-12 md:absolute md:top-0 md:max-w-md lg:relative lg:max-w-full z-30">
                        UMĀ È UNO SPAZIO PER EXPANDERSI OLTRE TE STESSO
                        </h1>
                    </div>
                    <div className="flex-1 h-screen">
                        <div className={`relative md:absolute right-0 md:top-0 overflow-hidden transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                            <img
                                src={imageUrlClassi}
                                alt="Yoga Practice"
                                className="w-full rounded-3xl lg:rounded-none lg:h-full object-contain "
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUmaSummary