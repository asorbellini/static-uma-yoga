import { useState, useRef, Suspense } from "react"
import cosaFacciamo2 from "../assets/images/Cosafacciamo2.png"
import members from "../data/members.json"
import { ArrowDown, BodyHeart, Road, Spiral } from "./Icons.jsx"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import HorizontalGallery from "./Gallery.jsx"
import {ComponentLoading} from "./LoadingFootPrints.jsx"
import lr1 from "../assets/images/LastRetreats/lr1.png"
import lr2 from "../assets/images/LastRetreats/lr2.png"
import lr3 from "../assets/images/LastRetreats/lr3.png"
import lr4 from "../assets/images/LastRetreats/lr4.png"
import lr5 from "../assets/images/LastRetreats/lr5.png"
import lr6 from "../assets/images/LastRetreats/lr6.png"
import lr7 from "../assets/images/LastRetreats/lr7.png"
import lr8 from "../assets/images/LastRetreats/lr8.png"
import lr9 from "../assets/images/LastRetreats/lr9.png"
import  ReviewsCarrousel from "./ReviewsCarrousel.jsx" 
import reviews from "../data/lastreviews.json"

const LastRetreatsImages = [
    {
      src: lr1,
      alt: "cappadocia(1)",
      title: "Cappadocia yoga retreat 1",
    },
    {
      src: lr2,
      alt: "yoga session",
      title: "Yoga Session",
    },
    {
      src: lr3,
      alt: "meditation",
      title: "Meditation",
    },
    {
      src: lr4,
      alt: "yoga pose",
      title: "Yoga Pose",
    },
    {
      src: lr5,
      alt: "yoga class",
      title: "Yoga Class",
    },
    {
      src: lr6,
      alt: "yoga retreat",
      title: "Yoga Retreat",
    },
    {
      src: lr7,
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
     {
      src: lr8,
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
     {
      src: lr9,
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
  ]

function UmaSummary(){
    const [isVisible, setIsVisible] = useState(false)
    const componentRef = useRef(null)
    useRevealOnScroll(componentRef, {
            threshold: 0.3,
            rootMargin: '0px 0px -20% 0px',
            onReveal: () => setIsVisible(true)
        })
    return(
        <div>
            <section id="uma-summary" className="h-auto sm:h-screen md:min-h-dvh flex items-center justify-center sm:justify-evenly w-full px-4 pt-4 sm:pt-16 bg-claro">
                <div className="px-2 md:px-12 relative">
                    <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <Spiral className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
                    <h3 className="textTitleSection py-4">CHI SIAMO</h3>
                    <div ref={componentRef} className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                        {members.map((member, index) => (
                            <div className="flex-1 items-center justify-center transition-all duration-500 group">
                                <a href={`/chi-siamo/${member.memberName}`}>
                                    <div className={`flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105  ${isVisible ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-10 "}`}>
                                        <img
                                        src={member.images?.src}
                                        alt={`Image ${member.Name}`}
                                        className={`h-[250px] sm:h-[60vh] w-[60vw] sm:w-fit aspect-[9/16] object-cover shadow-lg shadow-terracota rounded-full sm:rounded-none ${index === 0 ? "sm:rounded-bl-full" : index === 2 ? "sm:rounded-tr-full" : "sm:rounded-none"}`} />
                                    </div>
                                    <div className="sm:p-2">
                                        <h2 className="title text-center underline sm:no-underline group-hover:text-terracota transition-all py-2">{member.Name.split(" ")[0]}</h2>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-full sm:p-2">
                        <div className="btn-secondary group">
                            <a href="#cosa-facciamo">
                                <button type="button" className="flex items-center justify-center animate-pulse md:animate-none group-hover:animate-pulse ">
                                    <ArrowDown />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cosa-facciamo" className="h-auto lg:min-h-dvh w-full items-center justify-center lg:justify-evenly p-4 pt-4 md:pt-16 bg-claro flex flex-col">
                <div className="px-2 md:px-12 md:pb-4 relative">
                    <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <BodyHeart className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
                    <h2 className="textTitleSection py-4">COSA FACCIAMO</h2>
                    <div className="flex flex-col sm:flex-row items-center relative text-center">
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="space-y-1">
                                <h3 className="title">RETREAT E WORKSHOP</h3>
                                <p className="textDetail center max-w-2xl">
                                    Creiamo esperienze che nutrono corpo e coscienza: retreat immersivi, workshop tematici e percorsi che intrecciano filosofia, pratica fisica e introspezione.
                                </p>
                            </div>
                            <div className="btn-primary justify-center">
                                <a href="/retreat-e-workshop">
                                    <button className="textButton">
                                        SCOPRI TUTTI GLI EVENTI
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full py-2 sm:p-2 lg:relative lg:w-[40vw] lg:h-[50vh] xl:h-[60vh]">
                            <img
                                src={cosaFacciamo2}
                                alt="Cosa Facciamo"
                                loading="lazy"
                                className="w-full h-full object-cover rounded-br-full rounded-tl-full shadow-terracota shadow-lg"
                                />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-full sm:p-4">
                        <div className="btn-secondary group">
                            <a href="#eventi-passati">
                                <button type="button" className="flex items-center justify-center animate-pulse md:animate-none group-hover:animate-pulse ">
                                    <ArrowDown />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <Road className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
                </div>
            </section>
            <section id="eventi-passati" className="h-auto lg:min-h-dvh w-full items-center justify-center lg:justify-evenly bg-claro flex flex-row p-4 pt-0 sm:pt-16">
                <div className="px-2 md:px-12 pb-4 overflow-hidden">
                    <h2 className="textTitleSection py-4">ULTIMI EVENTI</h2>
                        <Suspense fallback={<ComponentLoading />}>
                                <HorizontalGallery images={LastRetreatsImages}/>
                        </Suspense>
                    <h2 className="textTitleSection py-4">DICONO DI NOI</h2>
                    <ReviewsCarrousel reviews={reviews}/> 
                </div>
            </section>
        </div>
    )
}

export default UmaSummary