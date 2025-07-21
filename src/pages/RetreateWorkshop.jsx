
import Footer from "../components/Footer"
import HeroReW from "../components/HeroReW"
import NewSetter from "../components/NewSetter"
import ScrollToTop from "../components/ScrollToTop"
import retreats from "../data/retreats.json"
import { ArrowDown } from "../components/Icons.jsx"
import { getTextDate } from "../constants/index.js"

function ImageCardGlass({event}) {
  return (
    <div className="flex flex-row lg:relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-lg group">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
        style={{backgroundImage: `url(${event?.image})`}} />

      {/* OVERLAY */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-black/30" />
        {/* Card */}
        <div className="absolute top-0 left-0 right-0 p-4">
            <div className="backdrop-blur-md rounded-2xl p-6 border shadow-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-1">
                    <h2 className="title uppercase">{event?.title}</h2>
                    <p className="subtitle"><p className="font-bold inline-block">DATA: </p>{event?.dateStart === event?.dateEnd ? getTextDate(event?.dateStart) : ` ${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}</p>
                    <p className="subtitle"><p className="font-bold inline-block">LUOGO: </p>{event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}</p>
                    <p className="textDetail italic">{event.smallDescription}</p>
                </div>
                <a href={`${event.type}/${event.slug}`} alt={`To ${event.slug}`}>
                    <button className="my-2 btn-primary textButton uppercase">
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
                    <h3 className="textTitleSection">
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
                                <ImageCardGlass event={event}/>
                                {/* <a href={`/${event.type}/${event.slug}`}>
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
                                </a> */}
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
            {/* WORKSHOP */}
            <section id="uma-workshop" className="min-h-screen w-full px-12 pt-20">
                <div className="justify-items-center">
                    <h3 className="textTitleSection">
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
                                < ImageCardGlass event={event}/>
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