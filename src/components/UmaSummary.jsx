import { useState, useEffect, useRef, Suspense} from "react"
import cosaFacciamo2 from "../assets/images/Cosafacciamo2.webp"
import members from "../data/members.json"
import { BodyHeart, Road } from "./Icons.jsx"
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
      alt: "Pratica Navakarana Vinyasa nel ritiro della Cappadocia",
    },
    {
      thumbnail: { src: LR02400, width: 400, height: 267 },
      fullSize: { src: LR02FULL, width: 3000, height: 2000 },
      alt: "Escursione in Cappadocia",
    },
    {
      thumbnail: { src: LR03400, width: 400, height: 267 },
      fullSize: { src: LR03FULL, width: 3000, height: 2000 },
      alt: "Foto di gruppo dei partecipanti al ritiro in Cappadocia",
    },
    {
      thumbnail: { src: LR04400, width: 400, height: 267 },
      fullSize: { src: LR04FULL, width: 3000, height: 2000 },
      alt: "Mongolfiere in Cappadocia",
    },
    {
      thumbnail: { src: LR05400, width: 400, height: 267 },
      fullSize: { src: LR05FULL, width: 3000, height: 2000 },
      alt: "Pratica dell'Anubhuti al lume di candela",
    },
    {
      thumbnail: { src: LR06400, width: 400, height: 267 },
      fullSize: { src: LR06FULL, width: 3000, height: 2000 },
      alt: "Posizione yoga Sirsasana",
    },
    {
      thumbnail: { src: LR07400, width: 400, height: 267 },
      fullSize: { src: LR07FULL, width: 3000, height: 2000 },
      alt: "Pratica di contenimento di Anubhuti",
    },
    {
      thumbnail: { src: LR08400, width: 400, height: 267 },
      fullSize: { src: LR08FULL, width: 3000, height: 2000 },
      alt: "Anubhuti pratica il divertimento",
    },
    {
      thumbnail: { src: LR09400, width: 400, height: 267 },
      fullSize: { src: LR09FULL, width: 3000, height: 2000 },
      alt: "Pratica di Anubhuti nella natura",
    },
    {
      thumbnail: { src: LR10400, width: 400, height: 267 },
      fullSize: { src: LR10FULL, width: 3000, height: 2000 },
      alt: "Pratica Navakarana Vinyasa con l'assistenza degli istruttori",
    },
    {
      thumbnail: { src: LR11400, width: 400, height: 267 },
      fullSize: { src: LR11FULL, width: 3000, height: 2000 },
      alt: "Pratica Navakarana Vinyasa nella natura",
    },
    {
      thumbnail: { src: LR12400, width: 400, height: 267 },
      fullSize: { src: LR12FULL, width: 3000, height: 2000 },
      alt: "Abbracci dopo la pratica di Anubhuti",
    },
    {
      thumbnail: { src: LR13400, width: 400, height: 267 },
      fullSize: { src: LR13FULL, width: 3000, height: 2000 },
      alt: "Maglietta del progetto UMĀ",
    },
    {
      thumbnail: { src: LR14400, width: 400, height: 267 },
      fullSize: { src: LR14FULL, width: 3000, height: 2000 },
      alt: "Tour in mongolfiera nel ritiro della Cappadocia",
    },
    {
      thumbnail: { src: LR15400, width: 400, height: 267 },
      fullSize: { src: LR15FULL, width: 3000, height: 2000 },
      alt: "Posizione Parivrtta Trikonasana",
    },
    {
      thumbnail: { src: LR16400, width: 400, height: 267 },
      fullSize: { src: LR16FULL, width: 3000, height: 2000 },
      alt: "Posizione del guerriero I",
    },
    {
      thumbnail: { src: LR17400, width: 400, height: 267 },
      fullSize: { src: LR17FULL, width: 3000, height: 2000 },
      alt: "Foto di gruppo dei partecipanti",
    },
    {
      thumbnail: { src: LR18400, width: 400, height: 267 },
      fullSize: { src: LR18FULL, width: 3000, height: 2000 },
      alt: "Pratica di Anubhuti",
    },
    {
      thumbnail: { src: LR19400, width: 400, height: 267 },
      fullSize: { src: LR19FULL, width: 3000, height: 2000 },
      alt: "Gruppo di partecipanti al ritiro in mongolfiera della Cappadocia",
    },
    {
      thumbnail: { src: LR20400, width: 400, height: 267 },
      fullSize: { src: LR20FULL, width: 3000, height: 2000 },
      alt: "Abbraccio",
    },
    {
      thumbnail: { src: LR21400, width: 400, height: 267 },
      fullSize: { src: LR21FULL, width: 3000, height: 2000 },
      alt: "Puaderno del progetto UMĀ",
    },
    {
      thumbnail: { src: LR22400, width: 400, height: 267 },
      fullSize: { src: LR22FULL, width: 3000, height: 2000 },
      alt: "Posizione yoga Hasta Uttanasana",
    },
    {
      thumbnail: { src: LR23400, width: 400, height: 267 },
      fullSize: { src: LR23FULL, width: 3000, height: 2000 },
      alt: "Posizione Anjaneyasana con profonda flessione all'indietro assistita da un istruttore.",
    },
    {
      thumbnail: { src: LR24400, width: 400, height: 267 },
      fullSize: { src: LR24FULL, width: 3000, height: 2000 },
      alt: "Gratitudine alla fine della pratica",
    },
    {
      thumbnail: { src: LR25400, width: 400, height: 267 },
      fullSize: { src: LR25FULL, width: 3000, height: 2000 },
      alt: "Pratica di Navakarana Vinyasa",
    }
  ]

function UmaSummary(){
    const [isVisibleChiSiamo, setIsVisibleChiSiamo] = useState(false)
    const [isVisibleCosaFacciamo, setIsVisibleCosaFacciamo] = useState(false)
    const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined") && window.innerWidth <= 768)

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768)
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])
    const chiSiamoRef = useRef(null)
    const cosaFacciamoRef = useRef(null)
    useRevealOnScroll(chiSiamoRef, {
            threshold: isMobile ? 0.1 : 0.5,
            rootMargin: isMobile ? '0px 0px -5% 0px' : '-64px 0px -20% 0px',
            onReveal: () => setIsVisibleChiSiamo(true)
        })
    useRevealOnScroll(cosaFacciamoRef, {
          threshold: isMobile ? 0.1 : 0.5,
          rootMargin: isMobile ? '0px 0px -5% 0px' : '-64px 0px -20% 0px',
          onReveal: () => setIsVisibleCosaFacciamo(true)
      })
    
    return(
        <div>
            <section id="uma-summary" className="h-auto lg:h-fit flex items-start justify-center w-full px-4 bg-claro">
                <div className="px-2 md:px-12 relative" ref={chiSiamoRef} >
                    <h3 className="textTitleSection py-4">CHI SIAMO</h3>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                        {members.map((member, index) => (
                            <div className="flex-1 items-center justify-center transition-all duration-500 group" key={member.memberName}>
                                <a href={`/chi-siamo/${member.memberName}`}>
                                    <div className={`flex items-center justify-center transition-all duration-500 ease-in-out group-hover:scale-105  ${isVisibleChiSiamo ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10 "}`}>
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
                    <div className="hidden sm:flex sm:relative items-center justify-center w-full">
                      <a href="#cosa-facciamo">
                          <button type="button" className="flex items-center justify-center animate-pulse ">
                              <BodyHeart className="w-16 h-16" fillColor="#A66C5B"/>
                          </button>
                      </a>
                    </div>
                </div>
            </section>
            <section id="cosa-facciamo" className="h-auto lg:h-fit w-full flex flex-col items-start justify-center px-4 bg-claro ">
                <div className="px-2 md:px-12">
                    <h2 className="textTitleSection py-4">COSA FACCIAMO</h2>

                    <div ref={cosaFacciamoRef} className={`grid grid-cols-1 lg:grid-cols-4 gap-3 transition-all duration-500 ease-in-out ${isVisibleCosaFacciamo ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10 "}`}>
                        <div className="sm:col-span-1 flex flex-col justify-start items-center">
                            <div className="max-w-xl space-y-1">
                                <h3 className="title text-center">RETREAT E WORKSHOP</h3>
                                <p className="textDetail">
                                    Creiamo esperienze che nutrono corpo e coscienza: retreat immersivi, workshop tematici e percorsi che intrecciano filosofia, pratica fisica e introspezione.
                                </p>
                                <div className="flex justify-center items-center">
                                  <div className="btn-primary justify-center items-center mt-2">
                                      <a href="/retreat-e-workshop">
                                          <button className="textButton">
                                              SCOPRI TUTTI GLI EVENTI
                                          </button>
                                      </a>
                                  </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 flex items-center justify-center">
                          <div className="w-full sm:w-[40vw] lg:w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] flex items-center justify-center">
                              <img
                                  src={cosaFacciamo2}
                                  alt="Cosa Facciamo"
                                  loading="lazy"
                                  className="w-full h-full object-cover mx-auto
                                    rounded-tl-full rounded-br-full shadow-terracota shadow-lg"
                                  />
                          </div>
                        </div>
                        <div className="sm:col-span-1 flex flex-col justify-end items-center sm:items-end">
                            <div className="max-w-xl text-center space-y-1">
                                <h3 className="title">FORMAZIONI</h3>
                                <p className="textDetail center max-w-xl">
                                    La Formazione per insegnanti nel metodo Navakaraṇa guidata da Alba e Diletta, è un viaggio di trasformazione profonda: un percorso tecnico, esperienziale e iniziatico che unisce biomeccanica, respiro, ritmo e suono. 
                                </p>
                                <div className="flex justify-center items-center">
                                  <div className="btn-primary justify-center mt-2">
                                      <a href="/formazioni-navakarana-vinyasa">
                                          <button className="textButton">
                                              SCOPRI TUTTO SULLE FORMAZIONI
                                          </button>
                                      </a>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:relative items-center justify-center w-full">
                      <a href="#eventi-passati">
                          <button type="button" className="flex items-center justify-center animate-pulse">
                              <Road className="w-16 h-16" fillColor="#A66C5B"/>
                          </button>
                      </a>
                    </div>
                </div>
            </section>
            <section id="eventi-passati" className="h-auto lg:h-fit w-full items-center justify-center lg:justify-evenly bg-claro flex flex-row px-4 pb-8">
                <div className="px-2 md:px-12 overflow-hidden">
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