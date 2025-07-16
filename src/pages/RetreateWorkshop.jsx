
import Footer from "../components/Footer"
import HeroReW from "../components/HeroReW"
import NewSetter from "../components/NewSetter"
import ScrollToTop from "../components/ScrollToTop"
import retreats from "../data/retreats.json"
import { ArrowDown } from "../components/Icons.jsx"
import { getTextDate } from "../constants/index.js"


function RetreateWorkshop() {
    const orderedEvents = [...retreats].sort((a,b) => new Date(b.dateStart)- new Date(a.dateStart))
    let retreat = []
    let workshop = [] 
    orderedEvents.forEach((event)=>{
        if (event.type == "retreat") {
            retreat.push(event)
        } else if (event.type == "workshop") {
            workshop.push(event)
        }
    })
    return(
        <div className="min-h-screen w-full bg-gradient-to-br from-dorado via-dorado via-20% to-terracota">
            <ScrollToTop />
            <HeroReW />
            {/* RETREAT */}
            <section id="uma-retreat" className="min-h-screen w-full px-16 pt-20">
                <div className="justify-items-center text-center">
                    <h3 className="sectionTitle">
                    RETREAT
                    </h3>
                    <p className="subtitle max-w-3xl p-2 text-center">
                        Guarda tutti i retreat in programma, questa sezione è in costante aggiornamento ma se vuoi ricevere tutte le novità in anteprima puoi iscriverti alla newsletter qui sotto.
                    </p>
                </div>
                <div className="">
                    <div className="flex flex-col sm:flex-row gap-6 my-4">
                        {retreat.slice(0,3).map(event => (
                            <div className="flex-1 overflow-hidden">
                                <a href={`/${event.type}/${event.slug}`}>
                                    <div className="relative justify-items-center ">
                                        <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-[40vh] object-contain" />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="title hover:underline transition-all uppercase">{event.title}</h2>
                                        <p className="subtitle"><p className="font-bold inline-block">DATA:</p>{event.dateStart === event.dateEnd ? getTextDate(event.dateStart) : ` ${getTextDate(event.dateStart)} - ${getTextDate(event.dateEnd)}`}</p>
                                        <p className="subtitle"><p className="font-bold inline-block">LUOGO:</p>{event.location?.place}, {event.location?.city}, {event.location?.region}, {event.location?.country}</p>
                                        <p className="textDetail">{event.smallDescription}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center hover:animate-pulse">
                    <a href="#uma-workshop">
                        <ArrowDown />
                    </a>
                </div>
            </section>
            {/* RETREAT */}
            <section id="uma-workshop" className="min-h-screen w-full px-12 pt-20">
                <div className="justify-items-center">
                    <h3 className="sectionTitle">
                    WORKSHOP
                    </h3>
                    <p className="subtitle max-w-3xl p-2 text-center">
                        Guarda tutti i workshop in programma, questa sezione è in costante aggiornamento ma se vuoi ricevere tutte le novità in anteprima puoi iscriverti alla newsletter qui sotto.
                    </p>
                </div>
                <div className="px-12">
                    <div className="flex flex-col sm:flex-row gap-6 my-4">
                        {workshop.slice(0,3).map(event => (
                            <div className="flex-1 overflow-hidden">
                                <a href={`/${event.type}/${event.slug}`}>
                                    <div className="relative justify-items-center ">
                                        <img
                                        src={event.image}
                                        alt={event.title}
                                        className=" h-[45vh] object-cover" />
                                    </div>
                                    <div className="px-12 mt-4">
                                        <h2 className="title hover:underline transition-all uppercase">{event.title}</h2>
                                        <p className="subtitle"><p className="font-bold inline-block">DATA:</p>{event.dateStart === event.dateEnd ? getTextDate(event.dateStart) : ` ${getTextDate(event.dateStart)} - ${getTextDate(event.dateEnd)}`}</p>
                                        <p className="subtitle"><p className="font-bold inline-block">LUOGO:</p>{event.location?.place}, {event.location?.city}, {event.location?.region}, {event.location?.country}</p>
                                        <p className="textDetail">{event.smallDescription}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <NewSetter />
            <Footer />
        </div>
    )
}

export default RetreateWorkshop