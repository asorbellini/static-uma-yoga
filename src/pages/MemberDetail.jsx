
import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import members from "../data/members.json"
import { ArrowDown, ArrowUp, InstagramIcon } from "../components/Icons"
import Footer from "../components/Footer.jsx"
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"
import imageUrlNavakaranaVinyasa from "../assets/images/NavakaranaVinyasa.png"

const ExpandableButton = ({ title, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const width = window.innerWidth
    const contentRef = useRef(null)
    useEffect(() => {
    if (width < 768) {
        setIsOpen(true);
    }
    }, [width]);
    useEffect(() => {
        if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
        }
    }, [children, isOpen])
    return (
        <div className="w-full">
        {/* Línea superior */}
            <div className="w-full h-px bg-white" />
            {/* Botón expandible */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full hover:bg-gradient-to-r hover:from-verdeBosque hover:to-verdeOliva transition-colors duration-300 px-1 py-4 flex items-center justify-between text-white"
            >
                <span className="subtitle uppercase">{title}</span>
                {/* Icono de flecha */}
                <div className={`w-4 h-4 transition-transform duration-[500ms] ease-out ${isOpen ? "-rotate-180" : "rotate-90" }`}>
                    <ArrowUp className="" stroke="#ffffff" />
                </div>
            </button>

            {/* Línea inferior */}
            <div className="w-full h-px bg-white" />
            {/* Contenido expandible */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out opacity-${isOpen ? "100" : "0"}`}
                style={{ height: isOpen ? `${contentHeight}px` : "0px" }}
                    >
                <div ref={contentRef} className="bg-transparent px-1 py-6 text-oscuro space-y-4">
                    {children.map((paragraph, index) => (
                        <p key={index} className="textDetail ">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}


const ProgettiTiziano = ({info}) => {
    return (
        <div className="w-full items-center justify-between text-oscuro">
            <h3 className="textTitleSection text-oscuro drop-shadow-none uppercase">Progetti e proposte</h3>
            <div
                className="overflow-hidden transition-all duration-500 ease-in-out opacity-100" >
                <div className="bg-transparent py-6 text-oscuro space-y-4">
                    <div className="flex flex-col md:flex-row md:space-y-0 space-y-3">
                        {info?.podcast &&
                            <div className="flex-1">
                                <div className="flex flex-col px-2 md:px-4">
                                    <div className="basis-1/3 md:basis-1/2 justify-items-center">
                                        <div className="w-fit h-[40vh]">
                                            <img src={`${info?.podcast?.image?.url}`} alt={`${info?.podcast?.images?.alt}`} className="h-full aspect-auto rounded-3xl"/>
                                        </div>
                                    </div>
                                    <div className="basis-2/3 md:basis-1/2 md:py-4 space-y-2">
                                        <h1 className="title uppercase text-oscuro drop-shadow-none mt-2">{info?.podcast?.title}</h1>
                                        <p className="textButton italic text-oscuro drop-shadow-none uppercase">{info?.podcast?.type}</p>
                                        <p className="textDetail text-oscuro drop-shadow-none font-normal">{info?.podcast?.description}</p>
                                        <p className="textButton italic text-oscuro drop-shadow-none">Puoi ascoltarlo su:</p>
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
                        {info?.books?.map((book) => (
                            <div className="flex-1">
                                <div className="flex flex-col px-2 md:px-4">
                                    <div className="basis-1/3 md:basis-1/2 justify-items-center">
                                        <div className="w-fit h-[40vh]">
                                            <img src={`${book?.image?.url}`} alt={`${book?.image?.alt}`} className="h-full aspect-auto rounded-3xl"/>
                                        </div>
                                    </div>
                                    <div className="basis-2/3 md:basis-1/2 md:py-4 space-y-2">
                                        <h1 className="title uppercase text-oscuro drop-shadow-none mt-2">{book?.title}</h1>
                                        <p className="textButton italic text-oscuro drop-shadow-none">LIBRO: {book?.type}</p>
                                        {book?.description?.map((p,index)=>(
                                            <p className="textDetail text-oscuro drop-shadow-none font-normal" key={index}>{p}</p>
                                        ))}
                                        <p className="textButton italic text-oscuro drop-shadow-none">Puoi ottenerlo su:</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

function MemberDetail(){
    const { memberName } = useParams();
    const member = members.find(m => m.memberName === memberName);

    if (!member) return <p>Miembro no encontrado</p>;
    member?.classes.map((detail)=>{console.log(detail)})
    return(
        <div className="min-h-screen" 
        style={{background:"linear-gradient(135deg, #D4AF7F 0%, #3D735C 50%, #2E5E55 100%)"}}>
        <ScrollToTop />
        {/* Presentación del miembro */}
            <section className="relative w-full px-4 pt-16 md:pt-28 pb-6 h-fit md:min-h-screen">
                {/* Contenedor principal */}
                <div className="relative px-2 md:px-12 py-4">
                    {/* Contenedor de imagen y título */}
                    <div className="flex flex-col md:flex-row items-start gap-3 ">
                        {/* Columna izquierda - Imagen */}
                        <div className="w-full md:flex-1">
                            <div className="relative justify-items-center">
                                <img
                                src={member.images?.[1]}
                                alt={`${member.Name} - ${member.id}`}
                                className="h-[50vh] md:h-[70vh] w-auto object-cover rounded-2xl shadow-2xl opacity-95"
                                />
                                <h2 className="w-full absolute -top-6 left-1/2 -translate-x-1/2 textTitleSection tracking-wider">
                                    {member.Name}
                                </h2>
                            </div>
                        </div>
                        <div className="flex-1 text-left space-y-2">
                            <h2 className="subtitle uppercase">{member.profession}</h2>
                            {memberName == "tiziano-sorbellini" ? 
                            <p className="textDetail">{member.description}</p> : <p className="textDetail">{member.smallDescription}</p>}
                            {memberName == "tiziano-sorbellini" ? <></> : <ExpandableButton title="Formazione" children={member.training} />}
                            <h2 className="subtitle uppercase">Seguimi su</h2>
                            <a href={member.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">
                                <div className="p-2">
                                    <InstagramIcon fillColor="#ffffff" />
                                </div>
                            </a>
                            {memberName != "tiziano-sorbellini" ?
                                <div className="flex flex-row p-4 justify-center">
                                    <a href="/press-e-media">
                                        <button type="button" className="btn-primary uppercase font-bold">Scopri la nostra partecipazione in press</button>
                                    </a>
                                </div>
                                :
                                <div className="flex flex-row p-4 justify-center">
                                    <a href="#progetti-e-proposte">
                                        <button type="button" className="btn-primary uppercase font-bold">Scopri i miei progetti e proposte</button>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {member?.classes && 
                    <div className="hidden md:flex md:justify-center md:w-full">
                        <a href="#classi">
                            <ArrowDown />
                        </a>
                    </div>}
            </section>
            {memberName == "tiziano-sorbellini" 
                ?
                <section className="bg-claro px-6 md:px-16 pt-12 md:pt-20 md:pb-4 text-oscuro" id="progetti-e-proposte">
                    <ProgettiTiziano info={member.projects}/>
                </section>
                :
                member?.classes && 
                <section className="bg-claro px-6 md:px-16 pt-12  md:pt-20 md:pb-4 text-oscuro" id="classi">
                    <div className="w-full items-center justify-between text-oscuro">
                        <h3 className="textTitleSection text-oscuro drop-shadow-none uppercase">Le mie classi</h3>
                        <div className="flex flex-col md:flex-row gap-3 mt-4">
                            {/* Provisorio p/indicar clases */}
                            {member?.classes?.map((classi, index) => (
                                <div key={index} className="flex-1 text-white hover:scale-105">
                                    <div className="items-center justify-items-center">
                                        <img
                                        src={imageUrlNavakaranaVinyasa}
                                        alt='Image Navakarana Vinyasa'
                                        className="h-[310px] object-cover shadow aspect-square rounded-full" />
                                        <h2 className="textDetail text-center text-oscuro font-semibold drop-shadow-none uppercase p-2">{classi.title}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="justify-self-center">
                            <a href="/contatti">
                                <button className="btn-primary">
                                    <p className="textButton">RICHIEDI INFORMAZIONI</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            }
            <ToRetreateWorkshop />
            <Footer />
        </div>
    )
}

export default MemberDetail