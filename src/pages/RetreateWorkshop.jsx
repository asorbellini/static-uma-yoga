import HeroReW from "../components/HeroReW"
import NewsLetter from "../components/NewsLetter.jsx"
import ScrollToTop from "../components/ScrollToTop"
import retreats from "../data/retreats.json"
import { getTextDate } from "../constants/index.js"
import { BodyHeart, Road, Spiral } from "../components/Icons.jsx";

function ImageCardGlass({event}) {
  return (
    <div className="w-full h-full flex flex-col">
        {/* Mobile: imagen arriba, card debajo */}
        <div className="block sm:hidden border-2 border-verdeBosque shadow-lg shadow-verdeBosque rounded-2xl">
            <div className="block sm:hidden w-full min-h-fit max-h-[280px] rounded-t-2xl overflow-hidden">
                <img
                src={event?.image}
                alt={event?.title}
                className="w-full h-full object-cover"
                />
            </div>
            <div className="block sm:hidden w-full">
                <div className="bg-verdeBosque bg-opacity-80 backdrop-blur-xl rounded-b-2xl p-4 h-fit flex flex-col justify-between">
                    <div className="flex flex-col gap-1 justify-center">
                        <h2 className="title uppercase text-base leading-tight font-semibold text-white">{event?.title}</h2>
                        <p className="subtitle text-xs w-full text-left leading-normal before:content-['DATA:'] before:font-bold before:mr-2 text-white">
                            {event?.dateStart === event?.dateEnd
                                ? getTextDate(event?.dateStart)
                                : ` ${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}
                        </p>
                        <p className="subtitle text-xs w-full text-left leading-normal before:content-['LUOGO:'] before:font-bold before:mr-2 text-white">
                            {event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}
                        </p>
                        <p className="textDetail italic text-xs leading-relaxed line-clamp-3 flex-1 text-white">{event.subtitle}</p>
                        <div className="flex items-center justify-center">
                            <a href={`/${event.type}/${event.slug}`} alt={`To ${event.slug}`}>
                                <button className="btn-scopri textButton uppercase text-xs w-full sm:w-auto">
                                    Scopri
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Tablet: imagen y card lado a lado */}
        <div className="hidden sm:flex lg:hidden flex-col items-center border-2 border-verdeBosque rounded-2xl">
            <div className="w-full h-[200px] rounded-t-2xl overflow-hidden">
                <img
                    src={event?.image}
                    alt={event?.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-full bg-verdeOliva bg-opacity-80 backdrop-blur-xl rounded-b-2xl p-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2 flex-1">
                    <h2 className="title uppercase text-base leading-tight font-semibold text-white">{event?.title}</h2>
                    <p className="subtitle text-xs w-full text-left leading-normal before:content-['DATA:'] before:font-bold before:mr-2 text-white">
                        {event?.dateStart === event?.dateEnd
                        ? getTextDate(event?.dateStart)
                        : ` ${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}
                    </p>
                    <p className="subtitle text-xs w-full text-left leading-normal before:content-['LUOGO:'] before:font-bold before:mr-2 text-white">
                        {event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}
                    </p>
                    <p className="textDetail italic text-xs leading-relaxed line-clamp-4 flex-1 text-white">{event.smallDescription}</p>
                </div>
                <a 
                    href={`/${event.type}/${event.slug}`} alt={`To ${event.slug}`}
                    aria-label={`Scopri di più su ${event?.title}`}
                    className="btn-scopri textButton uppercase text-xs mt-2">
                        Scopri
                </a>
            </div>
        </div>
        {/* Desktop: imagen de fondo y card superpuesta */}
        <div className="hidden lg:block relative w-full min-h-[400px] max-h-[550px] aspect-video rounded-2xl shadow-lg group overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-contain bg-repeat opacity-30 z-10"
                style={{ backgroundImage: `url(${event?.image})`}}
            />
            {/* Fondo principal en cover */}
            <div
                className="absolute inset-0 bg-center bg-contain bg-no-repeat transition-transform duration-300 group-hover:scale-105 z-20"
                style={{ backgroundImage: `url(${event?.image})`}}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center h-full p-4 z-30">
                <div className="bg-verdeOliva bg-opacity-80 backdrop-blur-xl rounded-2xl p-6 lg:border shadow-2xl  max-w-2xl w-full mx-4">
                    <div className="flex flex-col gap-2 justify-start items-center text-start">
                        <h2 className="title uppercase text-lg leading-tight font-semibold text-white text-center">{event?.title}</h2>
                        <p className="subtitle w-full text-left leading-normal before:content-['DATA:'] before:font-bold before:mr-2 text-white text-base ">
                            {event?.dateStart === event?.dateEnd
                            ? getTextDate(event?.dateStart)
                            : `${getTextDate(event?.dateStart)} - ${getTextDate(event.dateEnd)}`}
                        </p>
                        <p className="subtitle w-full text-left leading-normal before:content-['LUOGO:'] before:font-bold before:mr-2 text-white text-base ">
                            {event?.location?.place}, {event?.location?.city}, {event.location?.region}, {event.location?.country}
                        </p>
                        <p className="textDetail italic text-base leading-relaxed line-clamp-5 text-white">{event.smallDescription}</p>
                        <div className="justify-center">
                            <a href={`/${event.type}/${event.slug}`} alt={`To ${event.slug}`}>
                                <button className="btn-scopri textButton uppercase text-base">
                                    Scopri
                                </button>
                            </a>
                        </div>
                    </div>
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
    return(
        <>
        <div className="min-h-screen w-full">
            <ScrollToTop />
            <HeroReW />
            <section id="uma-retreat" className="h-fit w-full px-4 flex flex-col items-center bg-claro">
                <div className="px-2 md:px-12 pt-4 md:pt-16">
                    <div className="flex flex-col justify-center items-center space-y-2 max-w-7xl py-4 relative">
                            <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 pb-1">
                                <Spiral className="w-16 h-16" fillColor="#A66C5B"/>
                            </div>
                            <span className="absolute -top-0 left-0 h-0.5 bg-terracota/50 w-full" />
                            <h3 className="subtitle text-lg lg:text-xl text-center italic">Uniamo l’arte del movimento alla profondità della ricerca interiore: attraverso il corpo liberiamo emozioni, attraverso la presenza superiamo i limiti.
                            </h3>
                            <h3 className="subtitle text-lg lg:text-xl text-center italic">Ai ritiri UMĀ celebriamo sia l’unità che l’individualità. La nostra casa è lo spazio  che creiamo insieme a chi partecipa: ci muoviamo, respiriamo ed espandiamo insieme, onorando ciò che ci unisce e ciò che ci rende meravigliosamente unici.</h3>
                            <h3 className="subtitle text-lg lg:text-xl text-center italic">Un solo ritmo. Tante voci. Un solo sentiero. Tanti viaggi
                            </h3>
                            <span className="absolute bottom-0 left-0 h-0.5 bg-terracota/50 w-full" />
                    </div>
                    <div className="w-full relative">
                            <h3 className="textTitleSection p-2 md:p-4">PROSSIMI EVENTI</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
                            {upcomingEvents.map(event => (
                                <div key={event.slug} className="w-full">
                                    <ImageCardGlass event={event} />
                                </div>))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="eventi-passati" className="w-full p-4 bg-claro py-4 md:py-16 ">
                <div className="px-2 md:px-16 relative">
                    <div className="hidden sm:block absolute -top-16 left-1/2 -translate-x-1/2 pb-1">
                        <BodyHeart className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
                    <h3 className="textTitleSection p-2 md:p-4">EVENTI PASSATI</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
                        {pastEvents.map(event => (
                            <div key={event.slug} className="w-full">{/*min-h-fit sm:min-h-[550px]  */}
                                <ImageCardGlass event={event} />
                            </div>))}
                    </div>
                    <div className="hidden sm:block absolute -bottom-16 left-1/2 -translate-x-1/2 pb-1">
                        <Road className="w-16 h-16" fillColor="#A66C5B"/>
                    </div>
                </div>
            </section>
        </div>
        <NewsLetter />
        </>
    )
}

export default RetreateWorkshop