import { useState, useRef } from "react";
import HeroReW from "../components/HeroReW"
import NewSetter from "../components/NewSetter"
import ScrollToTop from "../components/ScrollToTop"
import retreats from "../data/retreats.json"
import { getTextDate } from "../constants/index.js"
import {useRevealOnScroll} from "../hooks/useRevealHook.jsx"

function ImageCardGlass({event}) {
  return (
    <div className="w-full h-fit flex flex-col">
        {/* Mobile: imagen arriba, card debajo */}
        <div className="block sm:hidden w-full min-h-[180px] max-h-[280px] rounded-2xl overflow-hidden mb-2">
            <img
            src={event?.image}
            alt={event?.title}
            className="w-full h-full object-contain object-center rounded-2xl bg-dorado"
            />
        </div>
        <div className="block sm:hidden w-full">
            <div className="bg-verdeBosque bg-opacity-40 backdrop-blur-xl rounded-2xl p-4 border h-fit flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="title uppercase text-base leading-tight font-semibold">{event?.title}</h2>
                    <p className="subtitle text-xs leading-relaxed">
                        <span className="font-bold inline-block">DATA: </span>
                        {event?.dateStart === event?.dateEnd
                            ? getTextDate(event?.dateStart)
                            : ` ${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}
                    </p>
                    <p className="subtitle text-xs leading-relaxed">
                        <span className="font-bold inline-block">LUOGO: </span>
                        {event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}
                    </p>
                    <p className="textDetail italic text-xs leading-relaxed line-clamp-3 flex-1">{event.subtitle}</p>
                    <a href={`/${event.type}/${event.slug}`} alt={`To ${event.slug}`} className="mt-auto pt-3">
                        <button className="my-2 btn-primary textButton uppercase text-xs w-full sm:w-auto">
                            Scopri
                        </button>
                    </a>
                </div>
            </div>
        </div>
        {/* Tablet: imagen y card lado a lado */}
        <div className="hidden sm:flex lg:hidden flex-col gap-4 h-auto mb-3">
            <div className="w-full h-fit min-h-[200px] max-h-[200px] rounded-2xl overflow-hidden"> {/*   */}
                <img
                    src={event?.image}
                    alt={event?.title}
                    className="w-full h-full object-cover object-center rounded-2xl"
                />
            </div>
            <div className="w-full flex items-stretch">
                <div className="bg-verdeBosque bg-opacity-40 backdrop-blur-xl rounded-2xl p-4 border w-full flex flex-col justify-between min-h-[100px] max-h-fit">
                    <div className="flex flex-col gap-2 flex-1">
                        <h2 className="title uppercase text-base leading-tight font-semibold">{event?.title}</h2>
                        <p className="subtitle text-xs leading-relaxed">
                            <span className="font-bold inline-block">DATA: </span>
                            {event?.dateStart === event?.dateEnd
                            ? getTextDate(event?.dateStart)
                            : ` ${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}
                        </p>
                        <p className="subtitle text-xs leading-relaxed">
                            <span className="font-bold inline-block">LUOGO: </span>
                            {event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}
                        </p>
                        <p className="textDetail italic text-xs leading-relaxed line-clamp-4 flex-1">{event.smallDescription}</p>
                    </div>
                    <a href={`/${event.type}/${event.slug}`} alt={`To ${event.slug}`} className="mt-auto pt-3">
                        <button className="my-2 btn-primary textButton uppercase text-xs">
                            Scopri
                        </button>
                    </a>
                </div>
            </div>
        </div>
        {/* Desktop: imagen de fondo y card superpuesta */}
        <div className="hidden lg:block relative w-full min-h-[400px] max-h-[550px] aspect-video rounded-2xl shadow-lg group overflow-hidden">
            <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${event?.image})` }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center h-full p-4">
                <div className="bg-verdeBosque bg-opacity-40 backdrop-blur-xl rounded-2xl p-6 lg:border shadow-2xl  max-w-2xl w-full mx-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="title uppercase text-lg leading-tight font-semibold">{event?.title}</h2>
                        <p className="subtitle text-base leading-relaxed">
                            <span className="font-bold inline-block">DATA: </span>
                            {event?.dateStart === event?.dateEnd
                            ? getTextDate(event?.dateStart)
                            : ` ${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}
                        </p>
                        <p className="subtitle text-base leading-relaxed">
                            <span className="font-bold inline-block">LUOGO: </span>
                            {event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}
                        </p>
                        <p className="textDetail italic text-base leading-relaxed line-clamp-5">{event.smallDescription}</p>
                    </div>
                    <a href={`/${event.type}/${event.slug}`} alt={`To ${event.slug}`}>
                        <button className="my-2 btn-primary textButton uppercase text-base">
                            Scopri
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}


function RetreateWorkshop() {
    const orderedEvents = [...retreats].sort((a,b) => new Date(b.dateStart)- new Date(a.dateStart))
    const currentDate = new Date();
    const upcomingEvents = orderedEvents.filter(
        (event) => new Date(event.dateStart) > currentDate
    );
    const pastEvents = orderedEvents.filter(
        (event) => new Date(event.dateStart) < currentDate
    );
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    useRevealOnScroll(sectionRef, {
        threshold: 0.5,
        rootMargin: '0px 0px -10% 0px',
        onReveal: () => setIsVisible(true)
        })
    

    return(
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-dorado via-terracota via-60% to-terracota">
            <ScrollToTop />
            <HeroReW />
            <section id="uma-retreat" className="h-fit w-full px-6 flex flex-col items-center md:px-16 pt-16 md:pt-20">
                <div className="flex flex-col justify-center items-center space-y-2 max-w-7xl pb-6 relative">
                        <span className="absolute -top-6 left-0 h-0.5 bg-claro/70 w-full" />
                        <h3 className="subtitle text-lg lg:text-xl text-white text-center italic">Uniamo l’arte del movimento alla profondità della ricerca interiore: attraverso il corpo liberiamo emozioni, attraverso la presenza superiamo i limiti.
                        </h3>
                        <h3 className="subtitle text-lg lg:text-xl text-center italic">Ai ritiri UMĀ celebriamo sia l’unità che l’individualità. La nostra casa è lo spazio  che creiamo insieme a chi partecipa: ci muoviamo, respiriamo ed espandiamo insieme, onorando ciò che ci unisce e ciò che ci rende meravigliosamente unici.</h3>
                        <h3 className="subtitle text-lg lg:text-xl text-white text-center italic">Un solo ritmo. Tante voci. Un solo sentiero. Tanti viaggi
                        </h3>
                        <span className="absolute bottom-0 left-0 h-0.5 bg-claro/70 w-full" />
                </div>
                <div ref={sectionRef} className="w-full py-4">
                        <h3 className="textTitleSection p-2 md:p-6">PROSSIMI EVENTI</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-4 max-w-7xl mx-auto">
                        {upcomingEvents.map(event => (
                            <div key={event.slug} className="w-full min-h-[500px] sm:min-h-[450px] lg:min-h-[400px]">
                                <ImageCardGlass event={event} />
                            </div>))}
                    </div>
                </div>
            </section>
            <section ref={sectionRef} id="eventi-passati" className="w-full px-4 sm:px-6 md:px-16">
                <h3 className="textTitleSection p-2 md:p-6">EVENTI PASSATI</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-4 max-w-7xl mx-auto">
                    {pastEvents.map(event => (
                        <div key={event.slug} className="w-full lg:min-h-[300px]">{/*min-h-fit sm:min-h-[550px]  */}
                            <ImageCardGlass event={event} />
                        </div>))}
                </div>
            </section>
        </div>
        <NewSetter />
        </>
    )
}

export default RetreateWorkshop