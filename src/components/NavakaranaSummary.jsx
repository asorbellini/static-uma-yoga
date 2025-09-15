import { useState , useRef, useEffect } from "react";
import Navakarana from "../assets/images/Navakarana/Navakarana.webp"
import { useRevealOnScroll } from "../hooks/useRevealHook.jsx"

function NavakaranaSummary() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const sectionRef = useRef(null)
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])
    useRevealOnScroll(sectionRef, {
        threshold: isMobile ? 0.1 : 0.5,
        rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -30% 0px',
        onReveal: () => setIsVisible(true)
        })
    return (
        <div className="bg-claro">
            <section ref={sectionRef} id="about-navakarana-vinyasa" className="min-h-screen w-full pt-12 md:pt-24 px-4 bg-claro">
                <div className={`flex flex-row px-2 md:px-12 gap-3 items-center transition-all duration-[500ms] ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                    <div className="w-full md:basis-2/5 md:relative md:h-[60vh]">
                        <img
                            src={Navakarana}
                            alt="Navakarana Vinyasa"
                            className={`w-full h-[60vh] md:absolute md:-left-16 md:top-0 rounded-br-[8rem] object-cover transition-all duration-[1000ms] ease-out ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                            }`}
                        />
                    </div>
                    <div className="w-full md:basis-3/5 flex flex-col items-start">
                        <h3 className="title text-oscuro text-center drop-shadow-none font-semibold tracking-wider uppercase py-2">
                            Cos'è il Navakaraṇa vinyāsa
                        </h3>
                        <p className="textDetail drop-shadow-none text-oscuro text-left pb-2">
                            Navakaraṇa è una pratica di vinyāsa vigorosa ed energica che consiste in coreografie dinamiche
                            caratterizzate da una combinazione armonica di movimento e staticità ottenuta attraverso la regolazione del
                            respiro e del prāṇa (energia vitale).
                        </p>
                        <div className="flex items-center justify-start">
                            <div className="btn-primary bg-[#581414] border-[#581414] hover:opacity-80 hover:border-[#581414] transition-all duration-500 ">
                                <a href="/retreat-e-workshop">
                                    <button className="textButton font-semibold tracking-wide">GUARDA GLI EVENTI</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start pt-12 px-2 md:px-12">
                    <h3 className="title text-oscuro text-center drop-shadow-none font-semibold tracking-wider uppercase py-2 md:w-[50vw]">
                        Perché sceglierlo:
                    </h3>
                    <p className="textDetail text-oscuro text-center drop-shadow-none pb-2 lg:w-[50vw]">
                        Navakaraṇa vinyāsa è un metodo di auto trasformazione risultato dell’integrazione di molteplici conoscenze quali l’anatomia, la kinesiologia, la psicologia, la manipolazione del corpo, la musicoterapia, l’autoguarigione e diverse tecniche tantriche. In questo metodo troverai verità, tradizione, ricerca e innovazione per promuovere un autentico stato di benessere psico-fisico.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 my-8 px-2 md:px-12 h-full justify-center text-center">
                    <div className="flex-1 border-2 rounded-t-2xl border-[#a33c3c]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-serif text-lg md:text-xl font-bold text-[#581414]">Battito delle mani</h2>
                            <p className="text-oscuro text-base font-normal font-sans">Navakaraṇa Vinyāsa è uno stile di yoga dinamico. La classe è guidata con tempo e melodia e le istruzioni essenziali e concise sono fornite con il battito delle mani.</p>
                        </div>
                    </div>
                    <div className="flex-1 border-2 rounded-t-2xl border-[#a33c3c]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-serif text-lg md:text-xl font-bold text-[#581414]">La voce</h2>
                            <p className="text-oscuro text-base font-normal font-sans">La voce dell’insegnante è sintonizzata su un tono sonoro che facilita il fluire armonioso, la respirazione ritmica, la concentrazione e la chiarezza mentale.</p>
                        </div>
                    </div>

                    <div className="flex-1 border-2 rounded-t-2xl border-[#a33c3c]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-serif text-lg md:text-xl font-bold text-[#581414]">Le coreografie</h2>
                            <p className="text-oscuro text-base font-normal font-sans">Le coreografie delle sequenze di Navakaraṇa sono disposte metodologicamente in modo da offrire più opzioni per tutti i livelli.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavakaranaSummary