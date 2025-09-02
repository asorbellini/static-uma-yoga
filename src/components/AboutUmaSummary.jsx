import { useState, useRef } from "react"
import imageUrlClassi from "../assets/images/Classi.png"
import members from "../data/members.json"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import { ArrowDown } from "./Icons.jsx"

function AboutUmaSummary(){
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    useRevealOnScroll(sectionRef, {
    threshold: 0.3,
    rootMargin: '0px 0px -10% 0px',
    onReveal: () => setIsVisible(true)
    })

    return(
        <>
            <section id="about-uma-summary" className="min-h-screen w-full px-4 pt-16 bg-terracota">
                <div className="px-2 md:px-12 pb-4">
                    <div className="flex flex-col justify-center items-center py-8">
                        <div>
                            <h3 className="subtitle text-lg md:text-2xl text-oscuro text-center italic">
                            Tre percorsi, tre personalità, tre modi di guardare il mondo che si incontrano in un’unica direzione: <strong className="uppercase">l’espansione.</strong>
                            </h3>
                            <h3 className="subtitle text-lg md:text-2xl text-oscuro text-center italic">
                            Dall’intreccio dei nostri vissuti nasce un approccio che unisce corpo, emozioni e 
                            consapevolezza in un’esperienza viva e trasformativa.
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 py-8">
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
                    <div className="flex flex-row items-center justify-center w-full hover:animate-pulse animate-pulse md:animate-none p-12">
                              <a href="#perche-uma">
                                  <ArrowDown />
                              </a>
                    </div>
                </div>
            </section>
            <section id="perche-uma" className="h-fit w-full pt-16 pb-8 px-4 bg-gradient-to-bl from-terracota via-terracota via-50% to-dorado justify-items-center overflow-hidden">
                <div className="flex flex-col items-center justify-center px-2 md:px-12 py-8  md:w-full lg:max-w-3xl xl:max-w-5xl">
                    <h3 className="textTitleSection drop-shadow-none font-semibold tracking-wider uppercase pb-8">
                        Perchè UMĀ 
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
                        <p className="subtitle text-center font-bold uppercase">Il viaggio è dentro. L’espansione è infinita.</p>
                    </div>
                </div>
                <section ref={sectionRef} className="min-h-screen w-full relative ">
                    <div className="flex flex-col md:flex-row-reverse px-2 md:px-12 items-center justify-center">
                        <div className="flex-1 flex flex-col md:flex-col">
                            <h1 className="text-center lg:text-start textTitleSection py-4 sm:py-6 md:py-12 relative z-30">
                                <span className="uppercase">expand beyond your</span><span className="text-5xl lg:text-6xl italic font-handwriting tracking-wider items-center">self</span>
                            </h1>
                            <h3 className="text-center md:text-start  title font-sans font-normal italic relative z-30 pb-8">
                                Torna a UMĀ, e da lì lascia che ogni tua vibrazione prenda forma.
                            </h3>
                        </div>
                        <div className="flex-1 h-screen">
                            <div className={`relative md:absolute md:top-0 transition-all duration-[1000ms] ease-out h-screen rounded-3xl ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
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