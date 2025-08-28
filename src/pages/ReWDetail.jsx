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
        d.text.map((p, index) => (
            <p key={index} className="textDetail pb-1 text-oscuro drop-shadow-none">{p}</p>
        ))),
    subtitle: (d) => (
        <h2 className="title uppercase py-2 text-oscuro drop-shadow-none">{d.text}</h2>
    ),
    br: () => (
        <br />
    ),
    ul: (d) => (
        <ul className="text-oscuro">
        {Array.isArray(d.items) && d.items.map((item, index) => (
            <li key={index} className="list-disc list-inside textDetail pl-2 text-oscuro drop-shadow-none">{item}</li>
        ))}
        </ul>
    ),
    ol: (d) => (
        <ol className="list-decimal list-inside pl-2 ">
        {Array.isArray(d.items) && d.items.map((item, index) => (
            <li key={index} className="textDetail font-semibold py-1 text-oscuro drop-shadow-none">{item.question}
                <p className="textDetail text-oscuro drop-shadow-none">{item.answer}</p>
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
            <div className="min-h-screen w-full bg-dorado items-center justify-center justify-items-center px-6 md:px-16">
                <div className="flex flex-col items-center justify-center text-oscuro h-screen max-h-screen pt-12 md:pt-20">
                    {eventoPasado && 
                    <div className="p-4 bg-terracota text-white rounded w-full max-w-2xl">
                    ⚠️ Questo evento è passato.
                        </div>}
                    <div className="relative h-full w-full max-w-4xl aspect-auto rounded-2xl ">
                        {RW?.soldout === true && 
                        <div className="absolute top-10 -left-2 border-2 bg-white/90 border-red-600 rounded -rotate-45 z-40 shadow-sm">
                            <p className="textDetail text-red-600 font-bold drop-shadow-sm p-2">SOLD OUT</p>
                        </div>
                        }
                            <img
                            src={RW.image}
                            alt={RW.title}
                            className="h-full w-full object-contain" />
                    </div>
                    <div className="flex items-center justify-center w-full py-2">
                        <div className="btn-secondary group">
                            <a href="#detail">
                                <button type="button" className="animate-pulse md:animate-none group-hover:animate-pulse">
                                    <ArrowDown />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <section id="detail" className="max-w-6xl pt:12 md:pt-20 ">
                        <h1 className="textTitleSection py-4 uppercase text-oscuro drop-shadow-none">{RW?.title}</h1>
                        <h2 className="title text-center py-2 italic  text-oscuro drop-shadow-none">“{RW?.subtitle}“</h2>
                        <h3 className="subtitle text-center pb-2 font-light  text-oscuro drop-shadow-none">
                        {RW?.dateStart === RW?.dateEnd 
                            ? `${getTextDate(RW?.dateStart)}` 
                            : `Dal ${getTextDate(RW?.dateStart)} - ${getTextDate(RW?.dateEnd)}`}
                        </h3>
                        <h3 className="subtitle text-center pb-2 font-light italic text-oscuro drop-shadow-none"><a href={RW?.location?.url}  target="_blank" rel="noopener noreferrer" className="underline hover:text-terracota">{RW?.location?.place}</a>, {RW?.location?.city}, {RW?.location?.region}</h3>
                        {eventoPasado && 
                            <p className="textDetail text-center pb-2 font-light text-verdeBosque drop-shadow-none">
                                <span className="uppercase">Investimento: </span>{RW?.cost}</p>
                        }
                        {RW?.quote.length > 0 && 
                        <div className="relative border-2 border-terracota">
                                {RW.quote.map((phrase, index) => (
                                    <div key={index}>
                                        <p>{phrase.text}</p>
                                        <p>{phrase.author}</p>
                                    </div>
                                ))}
                        </div>
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
                                    <button className="btn-primary">
                                        <p className="textButton">RICHIEDI INFORMAZIONI</p>
                                    </button>
                                </a>
                            </div>
                        }
                        <div className="flex flex-col md:flex-row py-4 space-y-2 space-x-2">
                            <div className="flex-1 space-y-1">
                                <h3 className="font-serif text-oscuro text-base font-light uppercase tracking-wider  drop-shadow-none">Dettagli</h3>
                                {RW?.dateStart === RW?.dateEnd 
                                    ? <p className="font-sans py-2"><strong>Giorno:</strong>{`Giorno: ${getTextDate(RW?.dateStart)}, dalle ${RW?.timeStart} alla ${RW?.timeEnd}`}</p>
                                    : (<>
                                        <p className="font-sans text-oscuro text-base font-light"><strong>Inizio: </strong>{`${getTextDate(RW?.dateStart)}, ${RW?.timeStart}`}</p>
                                        <p className="font-sans text-oscuro text-base font-light"><strong>Fine: </strong>{`${getTextDate(RW?.dateEnd)}, ${RW?.timeEnd}`}</p>
                                    </>)
                                }
                                <p className="font-sans text-oscuro text-base font-light"><strong>Luogo: </strong><a href={RW?.location?.url}  target="_blank" rel="noopener noreferrer" className="hover:underline">{RW?.location?.place}</a>, {RW?.location?.city}, {RW?.location?.region}, {RW?.location?.country} <a href={RW?.location?.maps}  target="_blank" rel="noopener noreferrer" className="underline hover:text-terracota">+ Google Maps</a></p>
                                <p className="font-sans text-oscuro text-base font-light drop-shadow-none"><strong>Categoria: </strong>
                                    {RW?.type
                                    ? RW.type.charAt(0).toUpperCase()+RW.type.slice(1)
                                    : ""}
                                </p>
                            </div>
                            <div className="flex-1 justify-items-end">
                                <h3 className="font-serif text-oscuro text-base font-light drop-shadow-none uppercase tracking-wider text-start">ORGANIZZATORI</h3>
                                {RW?.hosts.map((host,index) => (
                                    <p key={index} className="font-sans text-oscuro text-base font-light space-y-1">{host}</p>
                                ))}  
                            </div>
                        </div>
                        {RW?.imagesGallery?.length > 0 &&
                        <div className="relative justify-center items-center">
                            <Suspense fallback={<ComponentLoading />}>
                                <HorizontalGallery images={RW.imagesGallery} /> 
                            </Suspense>
                        </div>
                        }
                        {RW?.reviews?.length > 0 &&
                        <div className="py-16 px-4">
                            <h2 className="title font-bold text-center py-2">Recensioni dei partecipanti</h2>
                            <ReviewsCarrousel reviews={RW.reviews} />
                        </div>}
                </section>
            </div>
            <NewSetter />
        </>
    )
}

export default ReWDetail