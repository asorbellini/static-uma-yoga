import { useState, useRef, Suspense } from "react"
import cosaFacciamo2 from "../assets/images/Cosafacciamo2.png"
import members from "../data/members.json"
import { ArrowDown } from "./Icons.jsx"
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
    const sectionRef = useRef(null)
    useRevealOnScroll(sectionRef, {
            threshold: 0.3,
            rootMargin: '0px 0px -10% 0px',
            onReveal: () => setIsVisible(true)
        })
    return(
        <div>
            <section ref={sectionRef} id="uma-summary" className="min-h-screen relative w-full px-4 pt-12 md:pt-16 bg-claro">
                <div className="px-2 md:px-12 pb-4">
                    <h3 className="textTitleSection py-4">CHI SIAMO</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                        {members.map((member, index) => (
                            <div className="flex-1 hover:scale-105 transition-all duration-1000">
                                <a href={`/chi-siamo/${member.memberName}`}>
                                    <div className={` w-full justify-items-center items-center justify-center transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-10 "}`}>
                                        <img
                                        src={member.images?.[1]}
                                        alt={`Image ${member.Name}`}
                                        className={`h-[45vh] object-contain sm:object-cover shadow-lg ${index === 0 ? "rounded-3xl sm:rounded-bl-full" : index === 2 ? "rounded-3xl sm:rounded-tr-full" : "rounded-3xl sm:rounded-none"}`} />
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
                <div className="flex items-center justify-center w-full">
                    <div className="btn-secondary group">
                        <a href="#cosa-facciamo">
                            <button type="button" className="animate-pulse md:animate-none group-hover:animate-pulse ">
                                <ArrowDown />
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <section id="cosa-facciamo" className="h-auto w-full p-4 pt-12 md:pt-16 bg-claro flex flex-col">
                <div className="px-2 md:px-12 md:pb-4">
                    <h2 className="textTitleSection py-4">COSA FACCIAMO</h2>
                    <div className="flex flex-col sm:flex-row items-center relative text-center">
                        <div className="justify-items-center space-y-3">
                            <div className="space-y-1">
                                <h3 className="title">RETREAT E WORKSHOP</h3>
                                <p className="textDetail center max-w-2xl">
                                    Creiamo esperienze che nutrono corpo e coscienza: retreat immersivi, workshop tematici e percorsi che intrecciano filosofia, pratica fisica e introspezione.
                                </p>
                            </div>
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
                    </div>
                </div>
            </section>
            <section className="h-auto w-full p-4 bg-claro flex flex-col">
                <h2 className="textTitleSection py-4 px-2 md:px-12">ULTIMI EVENTI</h2>
                    <Suspense fallback={<ComponentLoading />}>
                        <div className="px-2 md:px-12">
                            <HorizontalGallery images={LastRetreatsImages}/>
                        </div>
                    </Suspense>
                <h2 className="textTitleSection py-4 px-2 md:px-12">DICONO DI NOI</h2>
                <div className="px-2 md:px-12">
                    <ReviewsCarrousel reviews={reviews}/> 
                </div>
            </section>
        </div>
    )
}

export default UmaSummary