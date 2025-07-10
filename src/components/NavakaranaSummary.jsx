import { useState , useEffect, useRef } from "react";
import Navakarana from "../assets/images/Navakarana/Navakarana.png"

function NavakaranaSummary() {
    const [isVisible, setIsVisible] = useState(false)
      const sectionRef = useRef(null)
      // Intersection Observer para animaciones
      useEffect(() => {
          const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
              setIsVisible(true)
              }
          },
          { threshold: 0.3 },
          )
          if (sectionRef.current) {
              observer.observe(sectionRef.current)
          }
          return () => observer.disconnect()
      }, [])
    return (
        <div>
            <section ref={sectionRef} id="about-navakarana" className="min-h-screen w-full pt-12 md:pt-24 px-4 bg-claro">
                <div className="flex flex-col md:flex-row px-12 gap-3 items-center">
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
                        <h3 className="w-text-xl md:text-3xl rounded font-serif text-oscuro text-left font-semibold uppercase py-2">
                            Cos'è il Navakaraṇa vinyāsa
                        </h3>
                        <p className="text-sm md:text-lg rounded font-sans text-oscuro text-left font-normal pb-2">
                            Navakaraṇa è una pratica di vinyāsa vigorosa ed energica che consiste in coreografie dinamiche
                            caratterizzate da una combinazione armonica di movimento e staticità ottenuta attraverso la regolazione del
                            respiro e del prāṇa (energia vitale).
                        </p>
                        <div className="flex items-center justify-start">
                                <div className="bg-[#581414] justify-center my-2 rounded-full px-6 py-3 hover:bg-[#a33c3c] hover:border-[#a33c3c] transition-all duration-500">
                                    <a href="/retreat-e-workshop">
                                        <button className="text-white text-sm font-semibold tracking-wide">GUARDA GLI EVENTI</button>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start pt-12">
                    <h3 className="w-text-xl md:text-3xl rounded font-serif text-oscuro text-center font-semibold uppercase py-2 md:w-[50vw]">
                        Perchè sceglierlo:
                    </h3>
                    <p className="text-sm md:text-lg rounded font-sans text-oscuro text-center font-normal pb-2 md:w-[50vw]">
                        Navakaraṇa vinyāsa è un metodo di auto trasformazione risultato dell’integrazione di molteplici conoscenze quali l’anatomia, la kinesiologia, la psicologia, la manipolazione del corpo, la musicoterapia, l’autoguarigione e diverse tecniche tantriche. In questo metodo troverai verità, tradizione, ricerca e innovazione per promuovere un autentico stato di benessere psico-fisico.
                    </p>
                    {/* <div className="flex items-center justify-start">
                        <a href="/classi">
                            <button className="text-oscuro font-rose text-sm font-semibold tracking-wide underline hover:text-[#581414]">Guarda la classe</button>
                    </div> */}
                </div>
                <div className="flex flex-col sm:flex-row gap-8 mt-4 p-12  h-full justify-center text-center ">
                    <div className="flex-1 border-2 rounded-t-2xl border-[#a33c3c]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-rose text-lg md:text-xl font-semibold text-[#581414]">Battito delle mani</h2>
                            <p className="text-oscuro text-base font-normal font-sans">Navakaraṇa Vinyāsa è uno stile di yoga dinamico. La classe è guidata con tempo e melodia e le istruzioni essenziali e concise sono fornite con il battito delle mani.</p>
                        </div>
                    </div>
                    <div className="flex-1 border-2 rounded-t-2xl border-[#a33c3c]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-rose text-lg md:text-xl font-semibold text-[#581414]">La voce</h2>
                            <p className="text-oscuro text-base font-normal font-sans">La voce dell’insegnante è sintonizzata su un tono sonoro che facilita il fluire armonioso, la respirazione ritmica, la concentrazione e la chiarezza mentale.</p>
                        </div>
                    </div>

                    <div className="flex-1 border-2 rounded-t-2xl border-[#a33c3c]">
                        <div className="p-2 md:p-4">
                            <h2 className="font-rose text-lg md:text-xl font-semibold text-[#581414]">Le coreografie</h2>
                            <p className="text-oscuro text-base font-normal font-sans">Le coreografie delle sequenze di Navakaraṇa sono disposte metodologicamente in modo da offrire più opzioni per tutti i livelli.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavakaranaSummary