import pruebaRetreat from "../assets/images/pruebaRetreat.png"
import Footer from "../components/Footer"
import { ArrowDown } from "../components/Icons"
import NewSetter from "../components/NewSetter"

import ScrollToTop from "../components/ScrollToTop"

function RetreateWorkshop() {
    return(
        <div className="min-h-screen w-full bg-claro">
            <ScrollToTop />
            {/* HERO RETREAT E WORKSHOP */}
            <div className="relative h-[80vh] flex flex-row justify-center justify-items-center  items-end  text-white" >  
                <div className="absolute inset-0 bg-[url(C:\Users\Ayelén\Desktop\uma-yoga\uma\src\assets\images\Retreat.png)] bg-center bg-cover" /> {/* IMAGEN PROVISORIA */}
                <div className="relative z-10 p-12 text-center">
                    <h1 className="text-2xl md:text-5xl p-2 md:p-4 rounded font-rose font-semibold uppercase
                    ">RETREAT E WORKSHOP</h1>
                </div>
                <div className="absolute z-20 flex flex-row items-center justify-center hover:animate-pulse">
                    <a href="#uma-retreat">
                        <ArrowDown />
                    </a>
                </div>
            </div>

            {/* RETREAT */}
            <section id="uma-retreat" className="min-h-screen w-full px-4">
                    {/* CHI SIAMMO titulo de sección */}
                <div className="p-2 md:p-4 pt-24 md:pt-24">
                    <h3 className="text-2xl md:text-4xl rounded font-rose text-white text-center font-light">
                    RETREAT
                    </h3>
                    <p className="text-base md:text-lg rounded font-rose text-white text-center font-light">
                        Guarda tutti i retreat in programma, questa sezione è in costante aggiornamento ma se vuoi ricevere tutte le novità in anteprima puoi iscriverti alla newsletter qui sotto.
                    </p>
                </div>
                <div className="px-12">
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <div className="flex-1 overflow-hidden hover:scale-110 border-4 ">
                            <a href="/evento/cappadocia-yoga-retreat/">
                                <div className="relative justify-items-center ">
                                    <img
                                    src={pruebaRetreat}
                                    alt="Retreat 1"
                                    className=" h-[45vh] object-cover " />
                                </div>
                                <div className="px-12 mt-4">
                                    <h2 className="font-rose text-lg font-semibold text-oscuro hover:underline transition-all">CAPPADOCIA YOGA RETREAT</h2>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">DATA:</p> Maggio 30 2025 - Giugno 2 2025</p>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">LUOGO:</p> CAPPADOCIA - TURCHIA</p>
                                    <p className="text-base font-sans text-oscuro">Preparati a immergerti in un’esperienza unica, dove il misticismo della Cappadocia incontra la profondità delle pratiche di Navakaraṇa Vinyāsa e Anubhūti.</p>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 overflow-hidden hover:scale-110 border-4 ">
                            <a href="/evento/cappadocia-yoga-retreat/">
                                <div className="relative justify-items-center ">
                                    <img
                                    src={pruebaRetreat}
                                    alt="Retreat 1"
                                    className=" h-[45vh] object-cover " />
                                </div>
                                <div className="px-12 mt-4">
                                    <h2 className="font-rose text-lg font-semibold text-oscuro hover:underline transition-all">CAPPADOCIA YOGA RETREAT</h2>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">DATA: </p> Maggio 30 2025 - Giugno 2 2025</p>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">LUOGO: </p> CAPPADOCIA - TURCHIA</p>
                                    <p className="text-base font-sans text-oscuro">Preparati a immergerti in un’esperienza unica, dove il misticismo della Cappadocia incontra la profondità delle pratiche di Navakaraṇa Vinyāsa e Anubhūti.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* RETREAT */}
            <section id="uma-workshop" className="min-h-screen w-full px-4">
                    {/* CHI SIAMMO titulo de sección */}
                <div className="p-2 md:p-4 pt-24 md:pt-24">
                    <h3 className="text-2xl md:text-4xl rounded font-rose text-white text-center font-light">
                    WORKSHOP
                    </h3>
                    <p className="text-base md:text-lg rounded font-rose text-white text-center font-light">
                        Guarda tutti i workshop in programma, questa sezione è in costante aggiornamento ma se vuoi ricevere tutte le novità in anteprima puoi iscriverti alla newsletter qui sotto.
                    </p>
                </div>
                <div className="px-12">
                    <div className="flex flex-col sm:flex-row gap-6 mt-4">
                        <div className="flex-1 overflow-hidden hover:scale-110 border-4 ">
                            <a href="/evento/cappadocia-yoga-retreat/">
                                <div className="relative justify-items-center ">
                                    <img
                                    src={pruebaRetreat}
                                    alt="Retreat 1"
                                    className=" h-[45vh] object-cover " />
                                </div>
                                <div className="px-12 mt-4">
                                    <h2 className="font-rose text-lg font-semibold text-oscuro hover:underline transition-all">CAPPADOCIA YOGA RETREAT</h2>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">DATA:</p> Maggio 30 2025 - Giugno 2 2025</p>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">LUOGO:</p> CAPPADOCIA - TURCHIA</p>
                                    <p className="text-base font-sans text-oscuro">Preparati a immergerti in un’esperienza unica, dove il misticismo della Cappadocia incontra la profondità delle pratiche di Navakaraṇa Vinyāsa e Anubhūti.</p>
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 overflow-hidden hover:scale-110 border-4 ">
                            <a href="/evento/cappadocia-yoga-retreat/">
                                <div className="relative justify-items-center ">
                                    <img
                                    src={pruebaRetreat}
                                    alt="Retreat 1"
                                    className=" h-[45vh] object-cover " />
                                </div>
                                <div className="px-12 mt-4">
                                    <h2 className="font-rose text-lg font-semibold text-oscuro hover:underline transition-all">CAPPADOCIA YOGA RETREAT</h2>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">DATA: </p> Maggio 30 2025 - Giugno 2 2025</p>
                                    <p className="text-sm font-sans text-oscuro"><p className="font-bold inline-block">LUOGO: </p> CAPPADOCIA - TURCHIA</p>
                                    <p className="text-base font-sans text-oscuro">Preparati a immergerti in un’esperienza unica, dove il misticismo della Cappadocia incontra la profondità delle pratiche di Navakaraṇa Vinyāsa e Anubhūti.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <NewSetter />
            <Footer />
        </div>
    )
}

export default RetreateWorkshop