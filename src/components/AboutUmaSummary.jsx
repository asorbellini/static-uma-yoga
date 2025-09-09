import { useState, useRef } from "react"
import imageUrlClassi from "../assets/images/Classi.png"
import members from "../data/members.json"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import { ArrowDown, BodyHeart, Road, Spiral } from "./Icons.jsx"

function AboutUmaSummary(){
    const [isVisible, setIsVisible] = useState(false)
    const contentRef = useRef(null)
    useRevealOnScroll(contentRef, {
        threshold: 0.3,
        rootMargin: '0px 0px -20% 0px',
        onReveal: () => setIsVisible(true)
        })

    return(
        <>
            <section id="about-uma" className="h-fit md:min-h-dvh flex items-center justify-center sm:justify-evenly w-full p-4 pt-4 md:pt-16 bg-claro">
                <div className="relative px-2 md:px-12">
                    <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <Spiral className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
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
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 py-4">
                        {members.map((member, index)=> (
                            <div className="flex-1 items-center justify-center transition-all duration-500 group" key={index}>
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
                    <div className="hidden md:flex flex-row items-center justify-center w-full hover:animate-pulse animate-pulse md:animate-none">
                        <a href="#perche-uma" className="flex items-center justify-center">
                            <ArrowDown />
                        </a>
                    </div>
                </div>
            </section>
            <section id="perche-uma" className="min-h-dvh w-full p-4 pt-4 md:pt-16 justify-items-center bg-claro overflow-hidden">
                <div className="relative">
                        <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <BodyHeart className="w-16 h-16" fillColor="#A66C5B" />
                        </div>
                </div>
                <div className="flex flex-col items-center justify-center px-2 md:px-12 pb-4 md:w-full lg:max-w-4xl xl:max-w-6xl">
                    <h3 className="textTitleSection drop-shadow-none font-semibold tracking-wider uppercase py-4 text-terracota">
                        Perché UMĀ 
                    </h3>
                    <div className="space-y-2">
                        <p className="subtitle text-center">In sanscrito, UMĀ è la luce della saggezza e della trasformazione, che guida con forza e dolcezza oltre l’illusione.</p>
                        <p className="subtitle text-center pb-4">Nella tradizione vedica è uno dei nomi della Dea Parvati, energia femminile primordiale, madre del mondo, compagna di Śiva. Colei che sussurra la saggezza, che guida, nutre e trasforma.
                        </p>
                        <p className="subtitle text-center">Ma UMĀ è anche origine fonica.</p>
                        <p className="subtitle text-center">Alcuni testi tantrici raccontano che UMĀ precede AUM, il suono sacro da cui tutto ha origine: è il grembo silenzioso e fecondo prima del suono, la potenza latente che si espande. È da UMĀ che nasce AUM, la sillaba cosmica, sintesi di tutte le vibrazioni.
                        </p>
                        <p className="subtitle text-center pb-4">La mezzaluna che abbraccia il nostro nome non è solo un simbolo, è un percorso.</p>
                        <p className="subtitle text-center">Un promemoria che siamo in continua evoluzione, in espansione. UMĀ è il luogo in cui prospettive diverse si intrecciano per aprire nuovi orizzonti interiori, per chi desidera andare oltre, oltre la mente, oltre i condizionamenti, oltre il conosciuto.
                        </p>
                        <p className="subtitle text-center pb-4"> Scegliere il nome UMĀ significa tornare lì dove tutto comincia: nel grembo del suono, del corpo, del cuore.</p>
                        <p className="subtitle text-center font-bold uppercase text-terracota">Il viaggio è dentro. L’espansione è infinita.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <Road className="w-16 h-16" fillColor="#A66C5B" />
                        </div>
                    </div>
                </div>
                <section className="min-h-screen w-full relative ">
                    <div className="flex flex-col lg:flex-row-reverse px-2 md:px-12 items-center justify-center">
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
                            <div ref={contentRef} className={`relative lg:absolute lg:top-0 transition-all duration-[1000ms] ease-out h-dvh rounded-3xl ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
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