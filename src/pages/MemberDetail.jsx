
import { useState, useEffect, useRef } from "react"
import { redirect, useParams } from "react-router-dom"
import members from "../data/members.json"
import { Wave, ArrowUp, InstagramIcon, CloseIcon } from "../components/Icons"
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"
import imageUrlNavakaranaVinyasa from "../assets/images/NavakaranaVinyasa.png"

const ExpandableButton = ({ title, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const width = window.innerWidth
    const contentRef = useRef(null)
    useEffect(() => {
        if (title === "Biografia" && width >= 768) {
            setIsOpen(true);
        }
        }, [title, width]);
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
                className="group w-full hover:bg-dorado  group-hover:opacity-90 transition-all duration-300 px-1 py-4 flex items-center justify-between"
            >
                <span className="subtitle uppercase text-white group-hover:text-oscuro">{title}</span>
                {/* Icono de flecha */}
                <div className={`w-4 h-4 transition-transform duration-[500ms] ease-out ${isOpen ? "rotate-0" : "-rotate-180" }`}>
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
                <div ref={contentRef} className="bg-transparent px-1 py-6 space-y-4">
                    {children.map((paragraph, index) => (
                        <p 
                        key={index} 
                        className="textDetail text-white "dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>
            </div>
        </div>
    )
}


function MemberDetail(){
    const { memberName } = useParams();
    const member = members.find(m => m.memberName === memberName);

    if (!member) return redirect('/')
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardInteraction = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
    return(
        <>
        <div className="min-h-screen" 
        style={{background:"linear-gradient(135deg, #D4AF7F 0%, #3D735C 50%, #2E5E55 100%)"}}>
        <ScrollToTop />
        {/* Presentación del miembro */}
            <section className="relative w-full px-4 pt-16 md:pt-28 pb-12 md:pb-16 lg:pb-20">
                {/* Contenedor principal */}
                <div className="relative px-2 md:px-12 py-4">
                    {/* Contenedor de imagen y título */}
                    <div className="flex flex-col md:flex-row items-start gap-3 ">
                        {/* Columna izquierda - Imagen */}
                        <div className="w-full md:flex-1">
                            <div className="flex justify-center items-center relative">
                                <img
                                src={member.images?.src}
                                alt={`${member.Name} - ${member.id}`}
                                className="h-[50vh] md:h-[70vh] w-auto object-cover rounded-2xl shadow-2xl opacity-95"
                                />
                                <h2 className="w-full absolute -top-6 left-1/2 -translate-x-1/2 textTitleSection tracking-wider text-white">
                                    {member.Name}
                                </h2>
                            </div>
                        </div>
                        <div className="flex-1 text-left space-y-2 ">
                            <h2 className="subtitle uppercase  text-white">{member.profession}</h2>
                            {memberName != "tiziano-sorbellini" 
                                ? <>
                                    <p className="textDetail text-white">{member.smallDescription}</p>
                                    <ExpandableButton title="Formazione" children={member.training} />
                                </>
                                : <ExpandableButton title="Biografia" children={member.description} />}
                            <h2 className="subtitle uppercase text-white">Seguimi su</h2>
                            <a href={member.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">
                                <button type="button">
                                    <InstagramIcon fillColor="#ffffff" />
                                </button>
                            </a>
                            {(member?.classes || member?.projects) &&
                            <div className="hidden md:flex md:justify-center md:items-start md:w-full">
                                <a href={member?.classes ? "#classi" : "#proposte"} className="btn-scopri text-white textButton z-30" >
                                    SCOPRI {member?.classes ? "LE MIE CLASSI" : "I MIEI PROPOSTE"}
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>
                {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <Wave />
                </div>  */}
            </section>
            {member?.classes 
                ? (<section className="bg-claro px-6 md:px-16 pb-8" id="classi">
                        <div className="w-full items-center justify-between max-w-7xl mx-auto">
                            <h3 className="title drop-shadow-none uppercase text-center py-2">{`Pratica con me online e a ${memberName == "alba-muzzarelli" ? "Milano" : "Napoli"}`}</h3>
                                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center mb-8 ">
                                {member?.classes?.map((classi, index) => (
                                <div key={`${classi.title}-${index}`} className="w-full flex justify-center">
                                    <div
                                    className="cursor-pointer transition-all duration-300 group"
                                    onMouseEnter={() => setExpandedIndex(index)}
                                    onMouseLeave={() => setExpandedIndex(null)}
                                    onTouchStart={() => handleCardInteraction(index)}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={expandedIndex === index}
                                    aria-label={`${classi?.title} - click per detalles`}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault()
                                        handleCardInteraction(index)
                                        }
                                    }}
                                    >
                                    {/* Card Container */}
                                    <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-60 active:opacity-60">
                                        <img
                                        src={classi?.urlImage}
                                        alt={classi?.title}
                                        className="h-56 w-56 md:h-40 md:w-40 lg:h-56 lg:w-56 object-cover shadow-lg aspect-square rounded-full transition-transform duration-300 group-hover:scale-105 active:scale-105 group-hover:shadow-xl"
                                        loading="lazy"
                                        />
                                            <h2 className="title font-semibold drop-shadow-none uppercase p-2 text-xs sm:text-sm md:text-base mt-3 text-oscuro text-center">
                                            {classi?.title}
                                            </h2>
                                    </div>

                                    {/* Overlay - desktop absolute, mobile fixed panel */}
                                    {/* Desktop / Tablet overlay (hover / focus) */}
                                    <div
                                        className={`absolute inset-0 z-30 hidden md:flex items-center justify-center overflow-y-auto transition-all duration-300 rounded-2xl ${
                                            expandedIndex === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                       }`}
                                   >
                                        {/* Backdrop */}
                                        <div className="absolute inset-0 bg-verdeOliva/90 backdrop-blur-md rounded-2xl w-full h-full" />
                                        {/* Content Container */}
                                        <div className="relative z-30 w-full h-full min-h-fit flex flex-col items-start justify-start mx-auto p-6 md:p-8 overflow-y-auto rounded-2xl">
                                            <button
                                                onClick={() => setExpandedIndex(null)}
                                                className="absolute top-3 right-3 p-2 bg-white/50 hover:bg-white/90 rounded-full transition-colors active:bg-white focus:outline-none focus:ring-2 focus:ring-white z-20"
                                                aria-label="Chiudere description"
                                            >
                                                <CloseIcon />
                                            </button>
                                            <div className="py-4">
                                                <h3 className="subtitle text-center text-white uppercase py-2 font-medium">
                                                    {classi?.title}
                                                </h3>
                                                <p className="textDetail text-white leading-relaxed">
                                                    {classi?.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile fixed panel (two-column layout inside) */}
                                    {expandedIndex === index && (
                                        <div className="md:hidden fixed inset-x-0 bottom-0 z-50">
                                            <div className="max-w-3xl mx-auto bg-verdeOliva/95 backdrop-blur-md rounded-t-2xl p-4 shadow-xl max-h-[80vh] overflow-y-auto">
                                                <div className="flex items-start justify-between">
                                                    <h3 className="subtitle text-white uppercase font-medium">{classi?.title}</h3>
                                                    <button
                                                        onClick={() => setExpandedIndex(null)}
                                                        className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                                        aria-label="Chiudere description"
                                                    >
                                                        <CloseIcon />
                                                    </button>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 items-start">
                                                    <div>
                                                        <p className="textDetail text-white leading-relaxed">
                                                            {classi?.detail}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="justify-self-center pt-4">
                                <a href="/contatti">
                                    <button className="btn-primary">
                                        <p className="textButton">RICHIEDI INFORMAZIONI</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>)
            : (<section className="bg-claro px-6 md:px-16 pb-8" id="proposte">
                <div className="w-full items-center justify-between">
                    <h3 className="title drop-shadow-none uppercase text-center">I miei proposte</h3>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        {member?.projects?.books?.map((book, index) => (
                            <div key={index+1} className="flex-1 sm:basis-1/4 lg:flex-1 hover:scale-105 relative group ">
                                <a href={`/anubhuti#proposte`}>
                                    <div className="flex flex-col items-center justify-center">
                                        <img
                                        src={book?.image?.url}
                                        alt={book?.image?.alt}  
                                        className="h-[310px] object-cover shadow-md hover:shadow-lg aspect-[3/4] rounded-3xl" />
                                        <h3 className="subtitle text-oscuro font-semibold uppercase mb-4">{book.title}</h3>
                                    </div>
                                </a>
                            </div>
                            )
                        )}
                        {member?.projects?.podcast &&
                            <div className="flex-1 sm:basis-1/4 lg:flex-1 hover:scale-105 relative group ">
                                <a href={`/anubhuti#proposte`}>
                                    <div className="flex flex-col items-center justify-center">
                                        <img
                                        src={member?.projects?.podcast?.image?.url}
                                        alt={member?.projects?.podcast?.image?.alt}  
                                        className="h-[310px] object-cover shadow-md hover:shadow-lg aspect-square rounded-3xl" />
                                        <h3 className="subtitle text-oscuro font-semibold uppercase mb-4">{member?.projects?.podcast?.title}</h3>
                                        {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 h-[310px] bg-verdeOliva rounded-full">
                                            <p className="text-white text-sm rounded-full p-10">{member?.projects?.podcast?.smallDescription}</p>
                                        </div> */}
                                    </div>
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </section>)
            }
        </div>
        <ToRetreateWorkshop />
        </>
    )
}

export default MemberDetail