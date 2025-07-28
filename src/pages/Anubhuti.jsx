import { useState, useRef, useEffect } from "react"
import HeroComponent from "../components/HeroComponent.jsx"
import imgAnubhuti from "../assets/images/Anubhuti/Anubhuti.png"
import logoAnubhuti from "../assets/images/LogoNavakarana.png"
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"
import Footer from "../components/Footer"

function Anubhuti() {
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
    <div className="min-h-screen w-full bg-claro overflow-hidden">
        <HeroComponent background="linear-gradient(45deg, #4A617A 0%,  #93a4ab 50%, #4A617A 100%)" mainColor="#4A617A" logo={logoAnubhuti}  title="Anubhūti"/>
        <section ref={sectionRef} id="about-Anubhūti" className="min-h-screen w-full pt-12 md:pt-24 px-4">
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
                            <h3 className="w-text-xl md:text-3xl rounded font-serif text-oscuro text-left font-semibold uppercase py-2">
                                Cos'è il Anubhūti
                            </h3>
                            <p className="text-sm md:text-lg rounded font-serif text-oscuro text-left font-light pb-2">
                                Questa pratica è un invito a scavare con curiosità nella profondità di se stessi per superare la timidezza, sviluppare l’ascolto e stimolare l’espressione creativa.
                            </p>
                        </div>
                    <div className="flex items-center justify-start">
                            <div className="btn-primary bg-[#4A617A] justify-center my-2 hover:bg-[#93a4ab] hover:border-[#93a4ab] transition-all duration-500  hover:text-white">
                                <a href="/retreat-e-workshop">
                                    <button className="textButton font-semibold tracking-wide">GUARDA GLI EVENTI</button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-8 md:pt-12 px-2 md:px-12">
                <h3 className="w-text-xl md:text-3xl rounded font-serif text-oscuro text-center font-semibold uppercase py-2 md:w-[50vw]">
                    Perchè sceglierlo:
                </h3>
                <p className="text-sm md:text-lg rounded font-sans text-oscuro text-center font-normal pb-2 lg:w-[50vw]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum hic quaerat accusantium architecto distinctio commodi numquam aliquam qui minima assumenda consequuntur sequi asperiores eos harum cum iste, dolores itaque placeat.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 my-8 px-2 md:px-12 h-full justify-center text-center ">
                <div className="flex-1 border-2 rounded-t-2xl border-[#4A617A]">
                    <div className="p-2 md:p-4">
                        <h2 className="font-serif text-lg md:text-xl font-bold text-[#4A617A]">Battito delle mani</h2>
                        <p className="text-oscuro text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam labore ad sapiente similique nobis consequatur nam itaque dolorem saepe voluptate. Reprehenderit obcaecati ducimus labore recusandae magni commodi, architecto libero totam.</p>
                    </div>
                </div>
                <div className="flex-1 border-2 rounded-t-2xl border-[#4A617A]">
                    <div className="p-2 md:p-4">
                        <h2 className="font-serif text-lg md:text-xl font-bold text-[#4A617A]">La voce</h2>
                        <p className="f text-oscuro text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque quae expedita magnam ab. Sapiente aliquam hic, rem dolorem quos velit eaque tenetur nisi, iure rerum odit ab eligendi voluptatum.</p>
                    </div>
                </div>

                <div className="flex-1 border-2 rounded-t-2xl border-[#4A617A]">
                    <div className="p-2 md:p-4">
                        <h2 className="font-serif text-lg md:text-xl font-bold text-[#4A617A]">Le coreografie</h2>
                        <p className="text-oscuro text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, dolore dolorem? Perspiciatis officiis minima velit? Impedit odit obcaecati asperiores corporis? Similique, numquam! Eum ut iure est quidem saepe iusto nesciunt.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* GALERÍA DE IMÁGENES */}
        {/* SECCIÓN DE EVENTOS */}
        <ToRetreateWorkshop />
        <Footer />
    </div>
  );
}

export default Anubhuti;