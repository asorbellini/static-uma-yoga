import { Suspense, useEffect, useRef, useState } from "react";
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import FormazioneNV1 from "../assets/images/FormazioneNV1.webp";
import FormazioneNV2 from "../assets/images/FormazioneNV3.webp";
import FormazioneNV3 from "../assets/images/formazioneNV2.webp";
import FormazioneNV4 from "../assets/images/NavakaranaVinyasa.png";
import { Spiral, BothFeets, BodyHeart, Road, Wave } from "./Icons";

const description = [
    {icon: "Spiral",
        subtitle: "Impara un metodo, non uno stile",
    description: ["Il sistema originale di Navakaraṇa si fonda su 36 sequenze e 12 serie, strutturate con rigore scientifico e radicate in una visione spirituale.",
        "Un approccio codificato per sviluppare forza, equilibrio, consapevolezza e libertà interiore."]},
    {icon: "BodyHeart" ,subtitle: "Precisione, respiro, sicurezza",
    description: ["Ogni pratica lavora sull’intero corpo con progressione intelligente e attenzione biomeccanica. ",
        "Attraverso lo studio della struttura del movimento, del respiro e dell’assistenza, impari a costruire lezioni efficaci, sicure e adattabili a ogni praticante."]},
    {icon: "Road",subtitle: "Il suono come veicolo di consapevolezza",
    description: ["Nel metodo Navakaraṇa, il nāda, la vibrazione del suono, è parte integrante della pratica. ",
        "Voce, ritmo e vibrazione diventano strumenti di trasmissione: il movimento si fa meditazione, e la meditazione diventa vita."]},
    {icon: "BothFeets",subtitle: "Tradizione viva, approccio contemporaneo",
    description: ["Radici antiche e linguaggio moderno si intrecciano in un metodo che evolve con te. ",
        "Navakaraṇa è rigoroso, musicale e libero: un ponte tra la precisione della tradizione e la creatività dell’esperienza personale."]},
    {icon: "Spiral",subtitle: "Guida di insegnanti riconosciute e devote",
    description: ["Con Alba e Diletta, la formazione è un dialogo continuo tra tecnica e presenza. ",
        "La loro esperienza, dedizione e devozione rendono ogni incontro un atto di trasmissione reale, dove l’apprendimento si fa relazione, e la relazione, trasformazione."]},
    {icon: "Road",subtitle: "Una metodologia completa e adattabile",
    description: ["Analisi, osservazione, assistenza e correzione: ogni dettaglio conta. ",
        "Diventi un insegnante capace di unire rigore tecnico e sensibilità artistica, precisione e ispirazione."]},
    {icon: "BodyHeart",subtitle: "Un luogo sacro di apprendimento",
    description: ["La formazione si svolge a Casalecchio di Reno (BO), in un luogo che custodisce storia, memoria e presenza. ",
        "L’edificio che oggi ospita l’Accademia Navakaraṇa Vinyāsa fu costruito dal nonno di Alba e Diletta e oggi vive come uno spazio sacro di pratica e trasmissione, dove silenzio, suono e devozione si incontrano."]},
    {icon: "BothFeets",subtitle: "Crescita reale, dentro e fuori la pratica",
    description: ["La Formazione Navakaraṇa non offre soltanto un titolo, ma un processo di trasformazione interiore. ",
        "È un cammino per chi desidera unire disciplina e libertà, tradizione e creatività, tecnica e devozione. ",
        "Un invito a immergersi nella pratica con profondità e autenticità, lasciando che il movimento diventi preghiera e il respiro, tempio vivente."]},
    ]
const ICON_MAP = {
    "Spiral": Spiral, 
    "BodyHeart": BodyHeart,
    "Road": Road,
    "BothFeets": BothFeets,
};

function CardInfo({ item, isExpanded, onExpandToggle, onMouseEnter, onMouseLeave }) {
    const IconComponent = ICON_MAP[item?.icon];

    const IconDiv = IconComponent ? (
        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center opacity-10">
            <IconComponent className="w-48 h-48" fillColor="#b64c4c" />
        </div>
    ) : null;

    return (
        <div
            className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer group"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onExpandToggle}
        >
                {IconDiv}
                <div className={`min-h-[200px] lg:min-h-full p-4 sm:p-5 lg:p-6 flex flex-col transition-all duration-500 justify-center`}>
                    <>
                        <h3 className="textTitleSection text-center tracking-wider text-[#581414] drop-shadow-md transition-all duration-500">{item.subtitle}</h3>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="textDetail font-normal text-center text-oscuro leading-relaxed">{item.description}</p>
                        </div>
                    </>
                </div>
        </div>
    );
}

function FormazioniNVSummary() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    const handleCardClick = (i) => {
            setExpandedIndex(expandedIndex === i ? null : i);
    };

    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useRevealOnScroll(sectionRef, {
        threshold: isMobile ? 0.1 : 0.9,
        rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -30% 0px',
        onReveal: () => setIsVisible(true)
        })

    const renderLayoutBlock = (start, end, imageSrc, imageFirst = false) => {
        const cardData = Array.isArray(description) ? description.slice(start, end) : [];
        
        const cardBlock = (
            <div className="grid grid-cols-1" key={`cards-${start}`}>
                {cardData.map((item, localIndex) => {
                    const globalIndex = start + localIndex; 
                    
                    return (
                        <CardInfo
                            key={globalIndex}
                            item={item}
                            isExpanded={expandedIndex === globalIndex || hoveredIndex === globalIndex}
                            onExpandToggle={() => handleCardClick(globalIndex)}
                            onMouseEnter={() => setHoveredIndex(globalIndex)}    
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    );
                })}
            </div>
        );

        const imageBlock = (
            <div key={`img-${start}`} className="relative rounded-lg overflow-hidden shadow-lg group">
                <div className="aspect-square w-full flex items-center justify-center z-0">
                    <Suspense fallback="caricamento...">
                        <img
                            src={imageSrc}
                            alt="Decorative image"
                            className="w-full h-full object-cover object-center z-10"
                        />
                    </Suspense>
                </div>
            </div>
        );

        return imageFirst ? [imageBlock, cardBlock] : [cardBlock, imageBlock];
    };
    
    // 4. Estructura de Bloques
    const layoutBlocksMobile = [
        renderLayoutBlock(0, 2, FormazioneNV1, true), 
        renderLayoutBlock(2, 4, FormazioneNV2, true),  
        renderLayoutBlock(4, 6, FormazioneNV3, true), 
        renderLayoutBlock(6, 8, FormazioneNV4, true),  
    ];

    const layoutBlocksDesktop = [
        renderLayoutBlock(0, 2, FormazioneNV1, false), 
        renderLayoutBlock(2, 4, FormazioneNV2, true),  
        renderLayoutBlock(4, 6, FormazioneNV3, false), 
        renderLayoutBlock(6, 8, FormazioneNV4, true),  
    ];

    return(
        <div className="bg-claro">
            <section id="about-formazioni" className="w-full pt-4 sm:pt-16 px-4 bg-claro relative">
                <div className="flex flex-col items-center justify-center px-2 md:px-12 max-w-6xl mx-auto">
                    <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2 leading-relaxed">
                        La Formazione Navakaraṇa è un viaggio di trasformazione profonda: un percorso tecnico, esperienziale e iniziatico che unisce biomeccanica, respiro, ritmo e suono.
                        <br />
                        Non è soltanto un corso per insegnare, è un cammino per diventare strumento consapevole di trasmissione, dove corpo, voce e presenza si fondono in una danza sacra di movimento e consapevolezza.
                    </p>
                    <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2 leading-relaxed">
                        Fondata sull’insegnamento e sulla visione del maestro <a href="https://navakarana.com/lineage/" target="_blank" rel="noopener noreferrer"></a>Dario Calvaruso, creatore del sistema originale Navakaraṇa, questa formazione onora la sua trasmissione viva e rigorosa, mantenendo intatta la connessione con la radice del metodo e con lo spirito della pratica.
                    </p>
                    <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2 leading-relaxed">
                        Guidata da Alba e Diletta, le uniche formatrici autorizzate in Italia e praticanti devote del metodo, la formazione nasce dal desiderio di condividere la saggezza di Navakaraṇa in modo autentico, vibrante e fedele alla tradizione. Insieme, accompagnano ogni partecipante in un processo di crescita che intreccia precisione tecnica, sensibilità artistica e profondità interiore.
                    </p>
                </div>
                
                
                <div ref={sectionRef} className={`hidden sm:absolute md:top-0 inset-x-0 sm:flex justify-center items-center py-4 transition-all duration-500 ${isVisible ? "opacity-30 translate-y-0" : "opacity-0 translate-y-40"}`}>
                     <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase px-2">TRAIN</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase hidden md:block px-2">&bull;</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase px-2">TRANSFORM</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase hidden md:block px-2">&bull;</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase px-2">TEACH</h3>
                </div>
                
                {isMobile 
                    ? (layoutBlocksMobile.map((block, i) => (
                        <div 
                            key={i} 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 pt-12 px-2 md:px-12 mx-auto max-w-7xl">
                            {block}
                        </div>
                    )))
                    : (layoutBlocksDesktop.map((block, i) => (
                        <div 
                            key={i} 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 pt-12 px-2 md:px-12 mx-auto max-w-7xl">
                            {block}
                        </div>)))
                }
                
                
                <div className="flex flex-col items-center justify-center px-2 md:px-12 max-w-5xl mx-auto py-8">
                    <p className="title text-[#581414]  font-normal text-center drop-shadow-md pb-2">
                        Non impari un uno stile. Impari un metodo.
                        <br /> 
                        Diventi parte di una trasmissione.
                        <br />
                        Se senti il richiamo, la Formazione Navakaraṇa è la tua prossima soglia.
                    </p>
                </div>
                <div className="flex justify-center items-center pb-8">
                    <div className="btn-primary bg-[#581414] border-[#581414] hover:opacity-80 hover:border-[#581414] transition-all duration-500 justify-center">
                        <a href="https://navakarana.com/courses/alumnui-grounding-opening-april-2026-bologna/" target="_blank" rel="noopener noreferrer">
                            <button className="textButton">       
                                RICHIEDI INFORMAZIONI
                            </button>
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default FormazioniNVSummary