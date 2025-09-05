import { useParams } from "react-router-dom";
import { Suspense } from "react";
import {getTextDate} from "../constants/index.js"
import retreats from "../data/retreats.json"
import { ArrowDown } from "../components/Icons.jsx";
import { ComponentLoading } from "../components/LoadingFootPrints.jsx";
import HorizontalGallery from "../components/Gallery.jsx";
import ReviewsCarrousel from "../components/ReviewsCarrousel.jsx";
import NewSetter from "../components/NewSetter.jsx";

const renderers = {
    p: (d) => (
        <div className="py-2">
            {d.text.map((p, index) => (
                <p key={index} className="textDetail pb-1 text-white drop-shadow-text">{p}</p>
            ))}
        </div>
    ),
    subtitle: (d) => (
        <h2 className="title uppercase py-2 text-white drop-shadow-text">{d.text}</h2>
    ),
    br: () => (
        <br />
    ),
    ul: (d) => (
        <ul className="text-white">
        {Array.isArray(d.items) && d.items.map((item, index) => (
            <li key={index} className="list-disc list-inside textDetail pl-2 text-white drop-shadow-text">{item}</li>
        ))}
        </ul>
    ),
    ol: (d) => (
        <ol className="list-decimal list-inside pl-2 ">
        {Array.isArray(d.items) && d.items.map((item, index) => (
            <li key={index} className="textDetail font-semibold py-1 text-white drop-shadow-text">{item?.question}
                <p className="textDetail text-white drop-shadow-text">{item?.answer}</p>
            </li>
        ))}
        </ol>
  )
}

function ReWDetail(){
    const { type, slug } = useParams();
    const RW = retreats.find(rw => rw.type === type && rw.slug == slug);
    if (!RW) return <p>RWname no encontrado</p>;
    const today = new Date()
    const eventoPasado = new Date(RW.dateEnd + "T23:59:59") < today
    return (
        <>
            <div className="min-h-screen w-full items-center justify-center px-6 md:px-16" 
            style={{background:"linear-gradient(135deg, #D4AF7F 0%, #3D735C 50%, #2E5E55 100%)"}}>
                <div className="flex flex-col items-center justify-between text-white h-screen max-h-screen pt-12 md:pt-20">
                    {eventoPasado && 
                    <div className="p-4 bg-terracota text-white text-center rounded w-full max-w-2xl">
                    Questo evento è passato.
                    </div>}
                    <div className="relative h-full w-full max-w-4xl aspect-auto justify-items-center rounded-2xl flex items-center justify-center ">
                        <div className="relative w-full aspect-[auto] md:aspect-[16/10] max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                            {RW?.soldout === true && 
                            <div className="absolute top-[20%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 border-t-2 border-b-2 bg-white/70 border-red-600 -rotate-45 z-40 shadow-sm">
                                <p className="textDetail text-red-600 font-bold drop-shadow-sm p-2">SOLD OUT</p>
                            </div>
                            }
                            <img
                            src={RW.image}
                            alt={RW.title}
                            className="w-full h-full object-fill md:object-cover object-center" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full py-2">
                        <a href="#detail" 
                        className="btn-scopri group group-hover:*">
                            <button type="button" className="textButton">
                                SCOPRI
                            </button>
                        </a>
                    </div>
                </div>
                <section id="detail" className="max-w-6xl mx-auto pt-12 md:pt-20 ">
                        <h1 className="textTitleSection py-4 uppercase text-white drop-shadow-text">{RW?.title}</h1>
                        {RW?.subtitle.length > 0 && 
                            <h2 className="title text-center py-2 italic  text-white drop-shadow-text">“{RW?.subtitle}“</h2>
                        }
                        <h3 className="subtitle text-center pb-2 font-light  text-white drop-shadow-text">
                        {RW?.dateStart === RW?.dateEnd 
                            ? `${getTextDate(RW?.dateStart)}` 
                            : `Dal ${getTextDate(RW?.dateStart)} - ${getTextDate(RW?.dateEnd)}`}
                        </h3>
                        <h3 className="subtitle text-center pb-2 font-light italic text-white drop-shadow-text">
                            {RW?.location?.url.length > 0 
                            ? <a href={RW?.location?.url}  target="_blank" rel="noopener noreferrer" className="underline hover:text-dorado">
                                {RW?.location?.place}</a>
                            : <>{RW?.location?.place}</>
                            }, {RW?.location?.city}, {RW?.location?.region}, {RW?.location?.country}</h3>
                        {eventoPasado && 
                            <p className="textDetail text-center pb-2 font-light text-dorado drop-shadow-text">
                                <span className="uppercase">Investimento: </span>{RW?.cost}</p>
                        }
                        {RW?.quote.length > 0 && 
                        <>
                            {RW.quote.map((phrase, index) => (
                                <div key={index} className="justify-self-center border-l-4 border-terracota max-w-5xl p-4">
                                    {phrase.text.length > 0 && 
                                    <>
                                        {phrase.text.map((paragraph, index) => (
                                            <p key={index} className="italic font-light text-lg text-white">{paragraph}</p>
                                        ))}
                                        <p className="italic font-light text-lg text-white text-end">{phrase.author}</p>
                                    </>
                                    }
                                </div>
                            ))}
                        </>
                        }
                        <div className="relative ">
                            {RW.description.map((d, index) => {
                                const Renderer = renderers[d.type];
                                return Renderer ? <div key={index}>{Renderer(d)}</div> : null
                                })}
                        </div>
                        {!eventoPasado && 
                            <div className="flex justify-self-center py-2">
                                <a href="/contatti">
                                    <button className="btn-primary bg-terracota hover:opacity-80 border-terracota hover:border-terracota transition-all duration-500 ">
                                        <p className="textButton">RICHIEDI INFORMAZIONI</p>
                                    </button>
                                </a>
                            </div>
                        }
                        <div className="flex flex-col md:flex-row py-4 space-y-2 space-x-2">
                            <div className="flex-1 space-y-1 justify-items-start">
                                <h3 className="font-serif text-white text-base font-light uppercase tracking-wider  drop-shadow-text">Dettagli</h3>
                                {RW?.dateStart === RW?.dateEnd 
                                    ? <p className="font-sans text-white text-base font-light"><strong>Giorno:</strong>{`Giorno: ${getTextDate(RW?.dateStart)}, dalle ${RW?.timeStart} alla ${RW?.timeEnd}`}</p>
                                    : (<>
                                        <p className="font-sans text-white text-base font-light"><strong>Inizio: </strong>{`${getTextDate(RW?.dateStart)}, ${RW?.timeStart}`}</p>
                                        <p className="font-sans text-white text-base font-light"><strong>Fine: </strong>{`${getTextDate(RW?.dateEnd)}, ${RW?.timeEnd}`}</p>
                                    </>)
                                }
                                <p className="font-sans text-white text-base font-light"><strong>Luogo: </strong><a href={RW?.location?.url}  target="_blank" rel="noopener noreferrer" className="hover:underline">{RW?.location?.place}</a>, {RW?.location?.city}, {RW?.location?.region}, {RW?.location?.country} <a href={RW?.location?.maps}  target="_blank" rel="noopener noreferrer" className="underline hover:text-dorado cursor-pointer">+ Google Maps</a></p>
                                <p className="font-sans text-white text-base font-light drop-shadow-text"><strong>Categoria: </strong>
                                    {RW?.type
                                    ? RW.type.charAt(0).toUpperCase()+RW.type.slice(1)
                                    : ""}
                                </p>
                            </div>
                            <div className="flex-1 justify-items-start">
                                <h3 className="font-serif text-white text-base font-light drop-shadow-text uppercase tracking-wider text-start">ORGANIZZATORI</h3>
                                {RW?.hosts.map((host,index) => (
                                    <p key={index} className="font-sans text-white text-base font-light space-y-1">{host}</p>
                                ))}  
                            </div>
                        </div>
                        {RW?.imagesGallery?.length > 0 &&
                        <div className="relative justify-center items-center">
                            <h2 className="title font-bold text-center py-2 uppercase text-white">GALLERY</h2>
                            <Suspense fallback={<ComponentLoading />}>
                                <HorizontalGallery images={RW.imagesGallery} /> 
                            </Suspense>
                        </div>
                        }
                        {RW?.reviews?.length > 0 &&
                        <div className="py-16 px-4">
                            <h2 className="title font-bold text-center py-2 uppercase text-white">Recensioni dei partecipanti</h2>
                            <ReviewsCarrousel reviews={RW.reviews} />
                        </div>}
                </section>
            </div>
            <NewSetter />
        </>
    )
}

export default ReWDetail