
import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import members from "../data/members.json"
import { Wave, ArrowUp, InstagramIcon } from "../components/Icons"
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
        setIsOpen(false);
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
                        <p key={index} className="textDetail text-white ">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}


function MemberDetail(){
    const { memberName } = useParams();
    const member = members.find(m => m.memberName === memberName);

    if (!member) return <p>Miembro no encontrado</p>;
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
                            <div className="relative justify-items-center">
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
                            {memberName == "tiziano-sorbellini" ? 
                            <p className="textDetail  text-white">{member.description}</p> : <p className="textDetail  text-white">{member.smallDescription}</p>}
                            {memberName == "tiziano-sorbellini" ? <></> : <ExpandableButton title="Formazione" children={member.training} />}
                            <h2 className="subtitle uppercase text-white">Seguimi su</h2>
                            <a href={member.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">
                                <button type="button">
                                    <InstagramIcon fillColor="#ffffff" />
                                </button>
                            </a>
                            {memberName === "tiziano-sorbellini" &&
                                <div className="flex flex-row p-4 justify-center">
                                    <a href="/anubhuti#proposte">
                                        <button type="button" className="btn-scopri text-white textButton uppercase font-semibold">Scopri i miei progetti e proposte</button>
                                    </a>
                                </div>
                            }
                            {member?.classes && 
                            <div className="hidden md:flex md:justify-center md:items-start md:w-full">
                                <a href="#classi" className="btn-scopri text-white textButton z-30" >
                                    SCOPRI LE MIE CLASSI 
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <Wave />
                </div> 
            </section>
            {memberName != "tiziano-sorbellini" && member?.classes 
                ? <section className="bg-claro px-6 md:px-16 pt-12 md:pt-20 pb-4" id="classi">
                    <div className="w-full items-center justify-between">
                        <h3 className="title drop-shadow-none uppercase text-center">{`Pratica con me online e a ${memberName == "alba-muzzarelli" ? "Milano" : "Napoli"}`}</h3>
                        <p className="textDetail"></p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            {member?.classes?.map((classi, index) => (
                                <div key={index} className="flex-1 sm:basis-1/4 lg:flex-1 text-white hover:scale-105 relative group ">
                                    <div className="items-center justify-items-center">
                                        <img
                                        src={classi?.urlImage || imageUrlNavakaranaVinyasa}
                                        alt={classi?.title}  
                                        className="h-[310px] object-cover shadow aspect-square rounded-full" />
                                        <h2 className="textDetail text-center font-semibold drop-shadow-none uppercase p-2">{classi.title}</h2>
                                        {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 h-[310px] bg-verdeOliva rounded-full">
                                            <p className="text-white text-sm rounded-full p-10">{classi?.detail}</p>
                                        </div> */}
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
                : <></>
            }
        </div>
        <ToRetreateWorkshop />
        </>
    )
}

export default MemberDetail