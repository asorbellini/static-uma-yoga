
import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import members from "../data/members.json"
import { ArrowDown, ArrowUp, InstagramIcon } from "../components/Icons"
import Footer from "../components/Footer.jsx"
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"

const ExpandableButton = ({ title, children}) => {
   const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)
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

function MemberDetail(){
    const { memberName } = useParams();
    const member = members.find(m => m.memberName === memberName);

    if (!member) return <p>Miembro no encontrado</p>;

    return(
        <div className="min-h-screen" 
        style={{background:"linear-gradient(135deg, #D4AF7F 0%, #7DA87D 50%, #21524C 100%)"}}>
        <ScrollToTop />
        {/* Presentación del miembro */}
            <section className="relative w-full px-4 pt-28">
                {/* Contenedor principal */}
                <div className="relative px-2 md:px-12 ">
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
                        <div className="flex-1 text-left space-y-2 md:space-y-6">
                            <h2 className="subtitle uppercase">{member.profession}</h2>
                            <p className="textDetail">{member.smallDescription}</p>
                            <ExpandableButton title="Formazione" children={member.training} />
                            <h2 className="subtitle uppercase">Seguimi su</h2>
                            <a href={member.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">
                                <div className="p-2">
                                    <InstagramIcon fillColor="#ffffff" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {member?.classi && 
                    <div className="flex justify-center">
                        <a href="#classi">
                            <ArrowDown />
                        </a>
                    </div>}
            </section>
            <section className="flex w-full p-4 justify-center" >
                <a href="/press-e-media">
                    <button type="button" className="btn-primary uppercase font-bold">Scopri la nostra partecipazione in press</button>
                </a>
            </section>
            <ToRetreateWorkshop />
            <Footer />
        </div>
    )
}

export default MemberDetail