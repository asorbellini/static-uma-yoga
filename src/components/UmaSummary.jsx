import { useState, useRef, Suspense} from "react"
import cosaFacciamo2 from "../assets/images/Cosafacciamo2.webp"
import members from "../data/members.json"
import { ArrowDown, BodyHeart, Road, Spiral } from "./Icons.jsx"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import HorizontalGallery from "./Gallery.jsx"
import {ComponentLoading} from "./LoadingFootPrints.jsx"
import LR01400 from "../assets/images/LastRetreats/LR01400px.webp"
import LR02400 from "../assets/images/LastRetreats/LR02400px.webp"
import LR03400 from "../assets/images/LastRetreats/LR03400px.webp"
import LR04400 from "../assets/images/LastRetreats/LR04400px.webp"
import LR05400 from "../assets/images/LastRetreats/LR05400px.webp"
import LR06400 from "../assets/images/LastRetreats/LR06400px.webp"
import LR07400 from "../assets/images/LastRetreats/LR07400px.webp"
import LR08400 from "../assets/images/LastRetreats/LR08400px.webp"
import LR09400 from "../assets/images/LastRetreats/LR09400px.webp"
import LR10400 from "../assets/images/LastRetreats/LR10400px.webp"
import LR11400 from "../assets/images/LastRetreats/LR11400px.webp"
import LR12400 from "../assets/images/LastRetreats/LR12400px.webp"
import LR13400 from "../assets/images/LastRetreats/LR13400px.webp"
import LR14400 from "../assets/images/LastRetreats/LR14400px.webp"
import LR15400 from "../assets/images/LastRetreats/LR15400px.webp"
import LR16400 from "../assets/images/LastRetreats/LR16400px.webp"
import LR17400 from "../assets/images/LastRetreats/LR17400px.webp"
import LR18400 from "../assets/images/LastRetreats/LR18400px.webp"
import LR19400 from "../assets/images/LastRetreats/LR19400px.webp"
import LR20400 from "../assets/images/LastRetreats/LR20400px.webp"
import LR21400 from "../assets/images/LastRetreats/LR21400px.webp"
import LR22400 from "../assets/images/LastRetreats/LR22400px.webp"
import LR23400 from "../assets/images/LastRetreats/LR23400px.webp"
import LR24400 from "../assets/images/LastRetreats/LR24400px.webp"
import LR25400 from "../assets/images/LastRetreats/LR25400px.webp"

import LR01FULL from "../assets/images/LastRetreats/LR01full.webp"
import LR02FULL from "../assets/images/LastRetreats/LR02full.webp"
import LR03FULL from "../assets/images/LastRetreats/LR03full.webp"
import LR04FULL from "../assets/images/LastRetreats/LR04full.webp"
import LR05FULL from "../assets/images/LastRetreats/LR05full.webp"
import LR06FULL from "../assets/images/LastRetreats/LR06full.webp"
import LR07FULL from "../assets/images/LastRetreats/LR07full.webp"
import LR08FULL from "../assets/images/LastRetreats/LR08full.webp"
import LR09FULL from "../assets/images/LastRetreats/LR09full.webp"
import LR10FULL from "../assets/images/LastRetreats/LR10full.webp"
import LR11FULL from "../assets/images/LastRetreats/LR11full.webp"
import LR12FULL from "../assets/images/LastRetreats/LR12full.webp"
import LR13FULL from "../assets/images/LastRetreats/LR13full.webp"
import LR14FULL from "../assets/images/LastRetreats/LR14full.webp"
import LR15FULL from "../assets/images/LastRetreats/LR15full.webp"
import LR16FULL from "../assets/images/LastRetreats/LR16full.webp"
import LR17FULL from "../assets/images/LastRetreats/LR17full.webp"
import LR18FULL from "../assets/images/LastRetreats/LR18full.webp"
import LR19FULL from "../assets/images/LastRetreats/LR19full.webp"
import LR20FULL from "../assets/images/LastRetreats/LR20full.webp"
import LR21FULL from "../assets/images/LastRetreats/LR21full.webp"
import LR22FULL from "../assets/images/LastRetreats/LR22full.webp"
import LR23FULL from "../assets/images/LastRetreats/LR23full.webp"
import LR24FULL from "../assets/images/LastRetreats/LR24full.webp"
import LR25FULL from "../assets/images/LastRetreats/LR25full.webp"

import ReviewsCarrousel from "./ReviewsCarrousel.jsx" 
import reviews from "../data/lastreviews.json"

const LastRetreatsImages = [
    {
      thumbnail: { src: LR01400, width: 400, height: 267 },
      fullSize: { src: LR01FULL, width: 3000, height: 2000 },
      alt: "cappadocia(1)",
      title: "Cappadocia yoga retreat 1",
    },
    {
      thumbnail: { src: LR02400, width: 400, height: 267 },
      fullSize: { src: LR02FULL, width: 3000, height: 2000 },
      alt: "yoga session",
      title: "Yoga Session",
    },
    {
      thumbnail: { src: LR03400, width: 400, height: 267 },
      fullSize: { src: LR03FULL, width: 3000, height: 2000 },
      alt: "meditation",
      title: "Meditation",
    },
    {
      thumbnail: { src: LR04400, width: 400, height: 267 },
      fullSize: { src: LR04FULL, width: 3000, height: 2000 },
      alt: "yoga pose",
      title: "Yoga Pose",
    },
    {
      thumbnail: { src: LR05400, width: 400, height: 267 },
      fullSize: { src: LR05FULL, width: 3000, height: 2000 },
      alt: "yoga class",
      title: "Yoga Class",
    },
    {
      thumbnail: { src: LR06400, width: 400, height: 267 },
      fullSize: { src: LR06FULL, width: 3000, height: 2000 },
      alt: "yoga retreat",
      title: "Yoga Retreat",
    },
    {
      thumbnail: { src: LR07400, width: 400, height: 267 },
      fullSize: { src: LR07FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR08400, width: 400, height: 267 },
      fullSize: { src: LR08FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR09400, width: 400, height: 267 },
      fullSize: { src: LR09FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR10400, width: 400, height: 267 },
      fullSize: { src: LR10FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR11400, width: 400, height: 267 },
      fullSize: { src: LR11FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR12400, width: 400, height: 267 },
      fullSize: { src: LR12FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR13400, width: 400, height: 267 },
      fullSize: { src: LR13FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR14400, width: 400, height: 267 },
      fullSize: { src: LR14FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR15400, width: 400, height: 267 },
      fullSize: { src: LR15FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR16400, width: 400, height: 267 },
      fullSize: { src: LR16FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR17400, width: 400, height: 267 },
      fullSize: { src: LR17FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR18400, width: 400, height: 267 },
      fullSize: { src: LR18FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR19400, width: 400, height: 267 },
      fullSize: { src: LR19FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR20400, width: 400, height: 267 },
      fullSize: { src: LR20FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR21400, width: 400, height: 267 },
      fullSize: { src: LR21FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR22400, width: 400, height: 267 },
      fullSize: { src: LR22FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR23400, width: 400, height: 267 },
      fullSize: { src: LR23FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR24400, width: 400, height: 267 },
      fullSize: { src: LR24FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
    {
      thumbnail: { src: LR25400, width: 400, height: 267 },
      fullSize: { src: LR25FULL, width: 3000, height: 2000 },
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    }
  ]

function UmaSummary(){
    const [isVisible, setIsVisible] = useState(false)
    const isMobile =  window.innerWidth <= 768
    const componentRef = useRef(null)
    useRevealOnScroll(componentRef, {
            threshold: isMobile ? 0.1 : 0.5,
            rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -20% 0px',
            onReveal: () => setIsVisible(true)
        })
    return(
        <div>
            <section id="uma-summary" className="h-auto sm:h-screen md:min-h-dvh flex items-center justify-center sm:justify-evenly w-full px-4 pt-4 sm:pt-16 bg-claro">
                <div className="px-2 md:px-12 relative" ref={componentRef} >
                    <div className="hidden absolute -top-16 left-1/2 -translate-x-1/2 sm:flex items-center justify-center">
                        <Spiral className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
                    <h3 className="textTitleSection py-4">CHI SIAMO</h3>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
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
                    <div className="hidden absolute -top-16 left-1/2 -translate-x-1/2 sm:flex items-center justify-center">
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
                    <div className="hidden absolute -bottom-16 left-1/2 -translate-x-1/2 sm:flex items-center justify-center">
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