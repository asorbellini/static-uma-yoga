
import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import members from "../data/members.json"
import { ArrowDown, ArrowUp, InstagramIcon } from "../components/Icons"
import Footer from "../components/Footer.jsx"
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"

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
                className="w-full hover:bg-gradient-to-r hover:from-verdeBosque hover:to-verdeOliva transition-colors duration-300 px-6 py-4 flex items-center justify-between text-white"
            >
                <span className="text-lg font-rose font-light tracking-wide uppercase">{title}</span>
                {/* Icono de flecha */}
                <div className={`${isOpen ? "-rotate-180" : "rotate-90" }`}>
                    <ArrowUp />
                </div>
            </button>

            {/* Línea inferior */}
            <div className="w-full h-px bg-white" />
            {/* Contenido expandible */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out opacity-${isOpen ? "100" : "0"}`}
        style={{ height: isOpen ? `${contentHeight}px` : "0px" }}
            >
                <div ref={contentRef} className="bg-transparent px-6 py-6 text-oscuro space-y-4">
                    {children.map((paragraph, index) => (
                        <p key={index} className="p-2 text-oscuro leading-relaxed">
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
        <div className="min-h-screen bg-gradient-to-br from-dorado via-dorado to-verdeBosque">
        {/* Presentación del miembro */}
            <section className="relative w-full px-4 pt-28">
                {/* Contenedor principal */}
                <div className="relative max-w-6xl mx-auto ">
                    {/* Contenedor de imagen y título */}
                    <div className="flex flex-col md:flex-row items-start gap-3 ">
                        {/* Columna izquierda - Imagen */}
                        <div className="flex-1">
                            <div className="relative justify-items-center">
                                <img
                                src={member.fotografia?.[1]}
                                alt={`${member.Name} - ${member.id}`}
                                className="h-[50vh] md:h-[70vh] w-auto object-cover rounded-2xl shadow-2xl opacity-95"
                                />
                                {/* Overlay sutil */}
                                <h2 className="w-full absolute -top-6 left-1/2 -translate-x-1/2 text-3xl md:text-4xl lg:text-5xl rounded font-rose text-white font-bold text-center drop-shadow-2xl">
                                    {member.Name}
                                </h2>
                            </div>
                        </div>
                        <div className="flex-1 text-left space-y-6">
                            <h2 className="uppercase">{member.profession}</h2>
                            <p>{member.smallDescription}</p>
                            <ExpandableButton title="Formazione" children={member.training} />
                            <h2 className="uppercase">Seguimi su</h2>
                            <a href={member.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">
                                <div className="p-2">
                                    <InstagramIcon />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="#">
                        <ArrowDown />
                    </a>
                </div>
            </section>
            <ToRetreateWorkshop />
            <Footer />
        </div>
    )
}

export default MemberDetail