import imageUrlNavakaranaVinyasa from "../assets/images/NavakaranaVinyasa.png"
import imageUrlGentleVinyasa from "../assets/images/GentleVinyasa.png"
import imageUrlVinyasaDelRisveglio from "../assets/images/VinyasaDelRisveglio.png"
import imageUrlVinyasaFlow from "../assets/images/VinyasaFlow.png"


function ClassiSection() {
    return(
        <div>
            <section id="classi" className="min-h-screen w-full px-4 bg-gradient-to-tr from-[#a66c5b] from-0% via-[#d4af7f] via-50%  to-[#a66c5b] to-90% flex flex-col items-center justify-center">
                <div className="p-2 md:p-4 ">
                    <p className="font-quicksand text-lg text-center font-semibold text-white pt-4">
                        Pratica con noi per cominciare un percorso di autotrasformazione fisica e mentale seguendo i nostri corsi in presenza o in live streaming.
                    </p>
                </div>
                <div className="px-12">
                    <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center ">
                                <img
                                src={imageUrlNavakaranaVinyasa}
                                alt='Image Navakarana Vinyasa'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-quicksand text-base font-semibold uppercase">NavakaraṆa vinyāsa</h2>
                                <p className="font-sans">Insegnanti: Alba e Dilleta Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center">
                                <img
                                src={imageUrlGentleVinyasa}
                                alt='Image Gentle Vinyasa'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-quicksand text-base font-semibold uppercase">gentle vinyāsa</h2>
                                <p className="font-sans">Insegnante: Alba Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center">
                                <img
                                src={imageUrlVinyasaDelRisveglio}
                                alt='Image Vinyasa del Risveglio'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-quicksand text-base font-semibold uppercase">vinyāsa yoga de risveglio</h2>
                                <p className="font-sans">Insegnante: Diletta Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                        <div className="flex-1 text-white hover:scale-105">
                            <a href="/classi/navakarana-vinyasa">
                            <div className="p-2 items-center justify-items-center">
                                <img
                                src={imageUrlVinyasaFlow}
                                alt='Image Vinyasa Flow'
                                className="h-[310px] object-cover shadow aspect-square rounded-full" />
                            </div>
                            <div className="p-2 md:p-4 text-center ">
                                <h2 className="font-quicksand text-base font-semibold uppercase">vinyāsa flow</h2>
                                <p className="font-sans">Insegnante: Alba Muzzarelli</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default ClassiSection