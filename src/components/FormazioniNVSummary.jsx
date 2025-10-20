import { useEffect, useRef, useState } from "react";
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"
import Navakarana from "../assets/images/Navakarana/Navakarana.webp"
import { Spiral, BothFeets, BodyHeart, Road } from "./Icons";

const description = [
    {icon: "Spiral",
        subtitle: "Impara un metodo, non uno stile",
    description: ["Il sistema originale di Navakaraṇa si fonda su 36 sequenze e 12 serie, strutturate con rigore scientifico e radicate in una visione spirituale.",
        "Un approccio codificato per sviluppare forza, equilibrio, consapevolezza e libertà interiore."]},
    {icon: "BodyHeart" ,subtitle: "Precisione, respiro, sicurezza",
    description: ["Ogni pratica lavora sull’intero corpo con progressione intelligente e attenzione biomeccanica.",
        "Attraverso lo studio della struttura del movimento, del respiro e dell’assistenza, impari a costruire lezioni efficaci, sicure e adattabili a ogni praticante."]},
    {icon: "Road",subtitle: "Il suono come veicolo di consapevolezza",
    description: ["Nel metodo Navakaraṇa, il nāda, la vibrazione del suono, è parte integrante della pratica.",
        "Voce, ritmo e vibrazione diventano strumenti di trasmissione: il movimento si fa meditazione, e la meditazione diventa vita."]},
    {icon: "BothFeets",subtitle: "Tradizione viva, approccio contemporaneo",
    description: ["Radici antiche e linguaggio moderno si intrecciano in un metodo che evolve con te.",
        "Navakaraṇa è rigoroso, musicale e libero: un ponte tra la precisione della tradizione e la creatività dell’esperienza personale."]},
    {icon: "Spiral",subtitle: "Guida di insegnanti riconosciute e devote",
    description: ["Con Alba e Diletta, la formazione è un dialogo continuo tra tecnica e presenza.",
        "La loro esperienza, dedizione e devozione rendono ogni incontro un atto di trasmissione reale, dove l’apprendimento si fa relazione, e la relazione, trasformazione."]},
    {icon: "Road",subtitle: "Una metodologia completa e adattabile",
    description: ["Analisi, osservazione, assistenza e correzione: ogni dettaglio conta.",
        "Diventi un insegnante capace di unire rigore tecnico e sensibilità artistica, precisione e ispirazione."]},
    {icon: "BodyHeart",subtitle: "Un luogo sacro di apprendimento",
    description: ["La formazione si svolge a Casalecchio di Reno (BO), in un luogo che custodisce storia, memoria e presenza.",
        "L’edificio che oggi ospita l’Accademia Navakaraṇa Vinyāsa fu costruito dal nonno di Alba e Diletta e oggi vive come uno spazio sacro di pratica e trasmissione, dove silenzio, suono e devozione si incontrano."]},
    {icon: "BothFeets",subtitle: "Crescita reale, dentro e fuori la pratica",
    description: ["La Formazione Navakaraṇa non offre soltanto un titolo, ma un processo di trasformazione interiore.",
        "È un cammino per chi desidera unire disciplina e libertà, tradizione e creatività, tecnica e devozione.",
        "Un invito a immergersi nella pratica con profondità e autenticità, lasciando che il movimento diventi preghiera e il respiro, tempio vivente."]},
    ]

function CardInfo({ info }) {
  return (
    <div className="relative w-full aspect-video md:aspect-[6/1] min-h-[250px] lg:min-h-[150px] rounded-xl group overflow-hidden transition-all duration-500  backdrop-blur-md lg:h-auto" >
        <div className="bg-gradient-to-br from-[#581414] via-[#a33c3c] to-[#b64c4c] absolute inset-0 w-full h-full transition-colors duration-500 lg:group-hover:bg-[#581414]/50"/>
        {/* Capa del Ícono de Fondo */}
        {info?.icon === "Spiral" && (
            <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center opacity-10">
                <Spiral className="w-52 h-52" fillColor="#ffffff" />
            </div>
        )}
        {info?.icon === "BodyHeart" && (
            <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-4 opacity-10">
                <BodyHeart className="w-52 h-52" fillColor="#ffffff" />
            </div>
        )}
        {info?.icon === "Road" && (
            <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-4 opacity-10">
                <Road className="w-52 h-52" fillColor="#ffffff" />
            </div>
        )}
        {info?.icon === "BothFeets" && (
            <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-4 opacity-10">
                <BothFeets className="w-52 h-52" fillColor="#ffffff" />
            </div>
        )}
        <div className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center p-4 transition-all duration-500 bg-transparent" >
            {/* Título */}
            <h2 className="title font-medium text-center tracking-wider text-white drop-shadow-md transition-all duration-500 lg:group-hover:mb-2 rounded-full lg:bg-transparent p-4 md:p-2">{info?.subtitle}</h2>       
            <div className="block lg:hidden group-hover:block opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 w-full text-center">
                <div className="flex flex-col gap-1 px-4">
                    {info?.description.map((desc, index) => 
                        (<p key={index} className="subtitle italic text-white text-center">{desc}</p>)
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

function FormazioniNVSummary() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const sectionRef = useRef(null)
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])
    useRevealOnScroll(sectionRef, {
        threshold: isMobile ? 0.1 : 0.9,
        rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -30% 0px',
        onReveal: () => setIsVisible(true)
        })
    return(
        <div className="bg-claro">
            <section   id="about-formazioni" className="w-full pt-4 sm:pt-16 px-4 bg-claro relative">
                <div className="flex flex-col items-center justify-center px-2 md:px-12 max-w-6xl mx-auto">
                    <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2">
                        La Formazione Navakaraṇa è un viaggio di trasformazione profonda: un percorso tecnico, esperienziale e iniziatico che unisce biomeccanica, respiro, ritmo e suono.
                        <br />
                        Non è soltanto un corso per insegnare,  è un cammino per diventare strumento consapevole di trasmissione, dove corpo, voce e presenza si fondono in una danza sacra di movimento e consapevolezza.
                    </p>
                    <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2">
                        Fondata sull’insegnamento e sulla visione del maestro Dario Calvaruso, creatore del sistema originale Navakaraṇa, questa formazione onora la sua trasmissione viva e rigorosa, mantenendo intatta la connessione con la radice del metodo e con lo spirito della pratica.
                    </p>
                    <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2">
                        Guidata da Alba e Diletta, le uniche formatrici autorizzate in Italia e praticanti devote del metodo, la formazione nasce dal desiderio di condividere la saggezza di Navakaraṇa in modo autentico, vibrante e fedele alla tradizione. Insieme, accompagnano ogni partecipante in un processo di crescita che intreccia precisione tecnica, sensibilità artistica e profondità interiore.
                    </p>
                </div>
                <div ref={sectionRef} className={`hidden sm:absolute md:top-0 inset-x-0 sm:flex justify-center items-center py-4 opacity-30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}>
                    <div className="flex flex-col md:flex-row justify-evenly items-center space-x-2 md:space-x-8 lg:space-x-16">
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase">TRAIN</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase hidden md:block">&bull;</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase">TRANSFORM</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase hidden md:block">&bull;</h3>
                        <h3 className="textTitleSection text-[#581414] text-center drop-shadow-none font-semibold tracking-wider uppercase">TEACH</h3>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 gap-2 md:gap-6 pt-12 px-2 md:px-12 mx-auto">
                {description.map((info, index) => (
                    <CardInfo key={index} info={info} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center py-4">
                <p className="textDetail font-normal text-oscuro text-center drop-shadow-none pb-2">
                    Non impari un uno stile. Impari un metodo. Diventi parte di una trasmissione.
                    <br />
                    Se senti il richiamo, la Formazione Navakaraṇa è la tua prossima soglia.
                </p>
            </div>
        </div>
    );
}

export default FormazioniNVSummary