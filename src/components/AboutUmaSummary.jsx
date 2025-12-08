import { useState,useEffect, useRef } from "react"
import imageUrlClassi from "../assets/images/Classi.png"
import members from "../data/members.json"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import { BodyHeart, Road, Spiral } from "./Icons.jsx"

function AboutUmaSummary(){
    const [isVisibleChiSiamo, setIsVisibleChiSiamo] = useState(false)
    const [isVisibleUma, setIsVisibleuma] = useState(false)
    const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined") && window.innerWidth <= 768)
    
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])
    const ChiSiamoRef = useRef(null)
    const umaRef = useRef(null)
    useRevealOnScroll(ChiSiamoRef, {
        threshold: isMobile ? 0.1 : 0.5,
        rootMargin: isMobile ? '0px 0px -5% 0px' : '-64px 0px -20% 0px',
        onReveal: () => setIsVisibleChiSiamo(true)
        })
    useRevealOnScroll(umaRef, {
        threshold: isMobile ? 0.3 : 0.5,
        rootMargin: isMobile ? '0px 0px -5% 0px' : '-64px 0px -20% 0px',
        onReveal: () => setIsVisibleuma(true)
        })
    
    return(
        <>
            <section id="about-uma" className="h-fit flex items-center justify-center sm:justify-evenly w-full px-4 bg-claro">
                <div className="relative px-2 md:px-12">
                    <div className="flex flex-col justify-center items-center py-4">
                        <div>
                            <h3 className="subtitle text-lg md:text-2xl text-oscuro text-center italic max-w-xs sm:max-w-full">
                            Tre percorsi, tre personalità, tre modi di guardare il mondo che si incontrano in un’unica direzione: <strong className="uppercase text-terracota">l’espansione.</strong>
                            </h3>
                            <h3 className="subtitle text-lg md:text-2xl text-oscuro text-center italic max-w-xs sm:max-w-full">
                            Dall’intreccio dei nostri vissuti nasce un approccio che unisce corpo, emozioni e 
                            consapevolezza in un’esperienza viva e trasformativa.
                            </h3>
                        </div>
                    </div>
                    <div ref={ChiSiamoRef} className={`flex flex-col sm:flex-row gap-6 sm:gap-3 transition-all duration-500 ease-in-out ${isVisibleChiSiamo ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10"}`}>
                        {members.map((member, index)=> (
                            <div className="flex-1 items-center justify-center transition-all duration-500 group" key={member.memberName}>
                                <a href={`/chi-siamo/${member.memberName}`}>
                                    <div className="flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105">
                                        <img
                                        src={member.images?.src}
                                        alt={`Image ${member.Name}`}
                                        className="h-[40vh] w-[60vw] sm:w-fit aspect-[9/16] object-cover shadow-lg shadow-terracota rounded-t-full" />
                                    </div>
                                    <div className="sm:p-2">
                                        <h2 className="title text-center underline sm:no-underline group-hover:text-terracota transition-all py-2">{member.Name}</h2>
                                        <p className="textDetail">{member.smallDescription}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex relative items-center justify-center w-full">
                        <a href="#perche-uma" className="flex items-center justify-center">
                            <button type="button" className="animate-pulse">
                                <BodyHeart className="w-16 h-16" fillColor="#A66C5B" />
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <section id="perche-uma" className="min-h-dvh w-full px-4 justify-items-center bg-claro overflow-hidden">
                <div className="flex flex-col items-center justify-center px-2 md:px-12 w-full max-w-6xl mx-auto">
                    <h3 className="textTitleSection drop-shadow-none font-semibold tracking-wider uppercase py-4 text-terracota">
                        Perché UMĀ 
                    </h3>
                    <div className="space-y-2">
                        <p className="subtitle text-center">In sanscrito, UMĀ è la luce della saggezza e della trasformazione, che guida con forza e dolcezza oltre l’illusione.</p>
                        <p className="subtitle text-center">Nella tradizione vedica è uno dei nomi della Dea Parvati, energia femminile primordiale, madre del mondo, compagna di Śiva. Colei che sussurra la saggezza, che guida, nutre e trasforma.
                        </p>
                        <p className="subtitle text-center">Ma UMĀ è anche origine fonica.</p>
                        <p className="subtitle text-center">Alcuni testi tantrici raccontano che UMĀ precede AUM, il suono sacro da cui tutto ha origine: è il grembo silenzioso e fecondo prima del suono, la potenza latente che si espande. È da UMĀ che nasce AUM, la sillaba cosmica, sintesi di tutte le vibrazioni.
                        </p>
                        <p className="subtitle text-center">La mezzaluna che abbraccia il nostro nome non è solo un simbolo, è un percorso.</p>
                        <p className="subtitle text-center">Un promemoria che siamo in continua evoluzione, in espansione. UMĀ è il luogo in cui prospettive diverse si intrecciano per aprire nuovi orizzonti interiori, per chi desidera andare oltre, oltre la mente, oltre i condizionamenti, oltre il conosciuto.
                        </p>
                        <p className="subtitle text-center"> Scegliere il nome UMĀ significa tornare lì dove tutto comincia: nel grembo del suono, del corpo, del cuore.</p>
                        <p className="subtitle text-center font-bold uppercase text-terracota pb-4">Il viaggio è dentro. L’espansione è infinita.</p>
                    </div>
                </div>
                <section className="min-h-screen w-full relative">
                    <div className="flex flex-col lg:flex-row-reverse px-2 md:px-12 pb-8 items-center justify-center">
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <h1 className="textTitleSection py-4 z-30">
                                <span className="uppercase">expand beyond your</span><span className="text-5xl lg:text-6xl italic font-handwriting tracking-wider">self</span>
                            </h1>
                            <h3 className="title font-sans text-center font-normal italic z-30 pb-4 sm:max-w-sm lg:max-w-lg">
                                Torna a UMĀ, e da lì lascia che ogni tua vibrazione prenda forma.
                            </h3>
                            <div className="btn-primary z-30 mb-4">
                                <a href="/retreat-e-workshop">
                                    <button className="textButton">
                                        SCOPRI TUTTI GLI EVENTI
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 h-dvh">
                            <div ref={umaRef} className={`relative lg:absolute lg:top-0 transition-all duration-500 ease-in-out h-dvh rounded-3xl ${isVisibleUma ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                <img
                                    src={imageUrlClassi}
                                    alt="Yoga Practice"
                                    className="w-full h-full object-cover rounded-3xl "
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUmaSummary