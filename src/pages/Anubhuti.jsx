import { useState, useRef } from "react"
import HeroComponent from "../components/HeroComponent.jsx"
import imgAnubhuti from "../assets/images/Anubhuti/Anubhuti.png"
import logoAnubhuti from "../assets/images/LogoAnubhuti.png"
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import members from "../data/members.json"
import HorizontalGallery from "../components/Gallery.jsx"
import anub1 from "../assets/images/Anubhuti/anub1.png"
import anub2 from "../assets/images/Anubhuti/anub2.png"
import anub3 from "../assets/images/Anubhuti/anub3.png"
import anub4 from "../assets/images/Anubhuti/anub4.png"
import anub5 from "../assets/images/Anubhuti/anub5.png"
import anub6 from "../assets/images/Anubhuti/anub6.png"
import anub7 from "../assets/images/Anubhuti/anub7.png"


const AnubhutiImages = [
    {
        src: anub1,
        alt: "anubhuti practice",
        title: "Yoga Practice",
    },
    {
        src: anub2,
        alt: "yoga session",
        title: "Yoga Session",
    },
    {
        src: anub3,
        alt: "meditation",
        title: "Meditation",
    },
    {
        src: anub4,
        alt: "yoga pose",
        title: "Yoga Pose",
    },
    {
        src: anub5,
        alt: "yoga class",
        title: "Yoga Class",
    },
    {
        src: anub6,
        alt: "yoga retreat",
        title: "Yoga Retreat",
    },
    {
        src: anub7,
        alt: "navakarana vinyasa",
        title: "Navakarana Vinyasa",
    }
]

const Proposte = ({info}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-oscuro">
            <h3 className="textTitleSection text-oscuro drop-shadow-none uppercase">Proposte</h3>
            <div
                className="overflow-hidden transition-all duration-500 ease-in-out opacity-100" >
                <div className="bg-transparent py-6 text-oscuro space-y-4">
                    <div className="flex flex-col lg:flex-col space-y-3">
                        {info?.books?.map((book) => (
                            <div className="pt-2 md:pt-4">
                                <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-x-3">
                                    <div className="basis-1/4 justify-items-center">
                                        <div className="w-fit h-[40vh] overflow-hidden">
                                            <img src={`${book?.image?.url}`} alt={`${book?.image?.alt}`} className="h-full md:h-auto lg:h-full aspect-auto rounded-3xl"/>
                                        </div>
                                    </div>
                                    <div className="basis-3/4">
                                        <h1 className="title uppercase text-oscuro pt-2 md:pt-0">{book?.title}</h1>
                                        <p className="textButton italic text-oscuro pt-1">LIBRO: {book?.type}</p>
                                        {book?.description?.map((p,index)=>(
                                            <p className="textDetail text-oscuro font-normal pt-1" key={index}>{p}</p>
                                        ))}
                                        <p className="textButton italic text-oscuro pt-1">Puoi ottenerlo su:</p>
                                        <div className="flex flex-row justify-between w-fit space-x-2">
                                            {book?.links?.map((link, index)=> (
                                                <a key={index} href={`${link.url}`} alt= {`Ottenerlo su ${link.via}`} target="_blank" rel="noopener noreferrer">
                                                    <img src={`${link.logo}`} alt= {`Logo ${link.via}`} className="w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"/>
                                                </a>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        ))}
                        {info?.podcast &&
                            <div>
                                <div className="flex flex-col sm:flex-row justify-center  items-center sm:items-start space-x-3">
                                    <div className="basis-1/4 justify-items-center">
                                        <div className="w-fit h-[40vh] sm:h-fit lg:h-[40vh]">
                                            <img src={`${info?.podcast?.image?.url}`} alt={`${info?.podcast?.images?.alt}`} className="h-full aspect-auto rounded-3xl"/>
                                        </div>
                                    </div>
                                    <div className="basis-3/4">
                                        <h1 className="title uppercase text-oscuro pt-2 md:pt-0">{info?.podcast?.title}</h1>
                                        <p className="textButton italic text-oscuro uppercase pt-1">{info?.podcast?.type}</p>
                                        <p className="textDetail text-oscuro drop-shadow-none font-normal pt-1">{info?.podcast?.description}</p>
                                        <p className="textButton italic text-oscuro drop-shadow-none pt-1">Puoi ascoltarlo su:</p>
                                        <div className="flex flex-row justify-between w-fit space-x-2">
                                            {info?.podcast?.links.map((link)=> (
                                                <a href={`${link?.url}`} alt= {`Ascoltarlo su ${link?.via}`} target="_blank" rel="noopener noreferrer">
                                                    <img src={`${link?.logo}`} alt= {`Logo ${link?.via}`} className="w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"/>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function Anubhuti() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  useRevealOnScroll(sectionRef, {
          threshold: 0.3,
          rootMargin: '0px 0px -10% 0px',
          onReveal: () => setIsVisible(true)
    })
    return (
        <>
        <div className="min-h-screen w-full bg-claro overflow-hidden">
            <ScrollToTop />
            <HeroComponent background="linear-gradient(45deg, #4A617A 0%, #93a4ab 50%, #4A617A 100%)" mainColor="#4A617A" logo={logoAnubhuti}  title="Anubhūti"/>
            <section ref={sectionRef} id="about-anubhuti" className="min-h-screen w-full pt-12 md:pt-24 px-4">
                <div className={`flex flex-row px-2 sm:px-12 gap-3 items-center transition-all duration-[1000ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                    <div className="w-full md:basis-2/5 md:relative md:h-[60vh]">
                        <img
                            src={imgAnubhuti}
                            alt="Anubhuti"
                            className="w-full h-[60vh] md:absolute md:-left-16 md:top-0 rounded-br-[8rem] object-cover"
                        />
                    </div>
                    <div className="w-full md:basis-3/5 flex flex-col items-start ">
                            <div >
                                <h3 className="w-text-xl title text-oscuro text-left drop-shadow-none font-semibold tracking-wider uppercase py-2">
                                    Cos'è il Anubhūti
                                </h3>
                                <p className="textDetail drop-shadow-none text-oscuro text-left pb-2">
                                    Anubhūti NON è un metodo è un complesso meccanismo di pratiche che valorizzano la natura dell’essere umano come esperienza viva, come processo di evoluzione costante, come universo dentro a infiniti universi in movimento. Siamo un corpo che vive, respira e agisce… e nostro corpo è il nostro tempo, il nostro spazio, ed è sopratutto un contenitore di memorie che vanno oltre la memoria mentale alla quale siamo abituati. Anubhūti, parola di origine sanscrita, ha visto un’evoluzione nel tempo: dal suo significato originario di “esperienza di unioni mistiche” o “esperienza che plasma”, si è frammentata nella lingua indiana in concetti come emozione, sensazione, percezione. Noi, attraverso questo percorso, lavoriamo sui singoli concetti moderni con l’obiettivo finale di ritornare al senso profondo del termine: creare un’esperienza che plasmi, che trasformi.
                                </p>
                            </div>
                        <div className="flex items-center justify-start">
                                <div className="btn-primary bg-[#4A617A] border-[#4A617A] justify-center my-2 hover:opacity-80 hover:border-[#4A617A] transition-all duration-500 ">
                                    <a href="/retreat-e-workshop">
                                        <button className="textButton font-semibold tracking-wide">GUARDA GLI EVENTI</button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start pt-8 md:pt-12 px-2 md:px-12">
                    <h3 className="title text-oscuro text-center drop-shadow-none font-semibold tracking-wider uppercase py-2 md:w-[50vw]">
                        Perché sceglierlo:
                    </h3>
                    <p className="textDetail text-oscuro text-center drop-shadow-none pb-2 lg:w-[50vw]">
                        Anubhūti è una pratica che invita a ritornare a sé attraverso il corpo, il movimento libero, l’approccio giocoso e l’ascolto profondo. Non si tratta di imitare forme esterne, ma di esplorare in modo autentico e guidato il proprio universo sensoriale, riconnettendosi alle emozioni, agli altri e a tutto ciò che ci circonda. È un viaggio che parte dal corpo e si espande, trasformando ogni gesto in consapevolezza e ogni esperienza in un’opportunità di presenza. Anubhūti apre uno spazio in cui riscoprire la propria verità interiore, attraverso un linguaggio fatto di sensazioni, connessioni e libertà espressiva.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 my-8 px-2 md:px-12 h-full justify-center text-center ">
                    <div className="flex-1 border-2 rounded-t-2xl border-[#4A617A]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-serif text-lg md:text-xl font-bold text-[#4A617A]">Metafore e poesia</h2>
                            <p className="text-oscuro text-base font-normal font-sans pt-2"> Anubhūti parla al cuore prima che alla mente. Utilizza metafore e poesia come strumenti di apertura, non per spiegare, ma per evocare. Il linguaggio poetico non è ornamento, ma mezzo per accedere a livelli più profondi della percezione, dove il senso si rivela attraverso immagini, sensazioni e intuizioni. Le metafore diventano ponti tra il visibile e l’invisibile, tra ciò che si sente ma non si sa dire, e ciò che attende di essere riconosciuto. In questo spazio simbolico, il praticante non segue concetti rigidi, ma si lascia guidare da suggestioni vive che parlano direttamente all’anima, risvegliando ricordi, emozioni e verità dimenticate</p>
                        </div>
                    </div>
                    <div className="flex-1 border-2 rounded-t-2xl border-[#4A617A]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-serif text-lg md:text-xl font-bold text-[#4A617A]">Connessione come pratica viva</h2>
                            <p className="text-oscuro text-base font-normal font-sans pt-2"> Anubhūti propone attività che guidano verso una riconnessione profonda: con sé stessi, con l’altro, con il momento presente e con tutto ciò che vive intorno a noi. Attraverso il movimento condiviso, l’ascolto reciproco, lo sguardo consapevole e l’apertura sensoriale, si crea uno spazio in cui la separazione si dissolve e si riscopre il senso di appartenenza. Ogni esperienza diventa un invito a percepire l’interdipendenza tra corpi, emozioni, respiri e ambienti. La pratica stimola una presenza attiva, radicata e sensibile, che rende ogni gesto relazione, ogni incontro possibilità, ogni attimo un ponte tra l’interno e l’esterno.</p>
                        </div>
                    </div>

                    <div className="flex-1 border-2 rounded-t-2xl border-[#4A617A]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-serif text-lg md:text-xl font-bold text-[#4A617A]">Il gioco come porta d’accesso all’autenticità</h2>
                            <p className="text-oscuro text-base font-normal font-sans pt-2"> Anubhūti integra l’approccio ludico come chiave di apertura, di libertà e di verità. Il gioco, in questo contesto, non è evasione, ma uno spazio vivo di esplorazione profonda. Attraverso il movimento spontaneo, l’ironia, l’improvvisazione e il contatto leggero con l’altro, si attiva una leggerezza consapevole che libera dal controllo e permette di accedere a parti autentiche di sé. Anubhūti lavora in profondità, anche quando sembra semplice. Anche dietro esercizi che appaiono quasi infantili – come un gesto, un suono, uno sguardo – si rivela il ritratto sottile delle nostre abitudini: posture mentali, automatismi emotivi, difese apprese. <p className="font-bold text-[#4A617A]">È lì che inizia la trasformazione.</p></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-claro px-6 md:px-16 pt-12 md:pt-20 md:pb-4" id="proposte">
                <Proposte info={members[2]?.projects} />
            </section>
            {/* GALERÍA DE IMÁGENES */}
            <div className="items-center justify-items-center mx-auto px-6 sm:px-16">
                <h3 className="w-text-xl md:text-3xl rounded font-serif text-oscuro text-center font-semibold uppercase py-2 md:w-[50vw]">GALLERY</h3>
                    <HorizontalGallery images={AnubhutiImages}/>
            </div>
        </div>
        <ToRetreateWorkshop />
        </>
    );
    }

export default Anubhuti;