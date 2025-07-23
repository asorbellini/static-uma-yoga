import Footer from "../components/Footer"
import { getTextDate } from "../constants"

function Press() {
    return(
        <div className="min-h-screen bg-verdeBosque">
            <div className="relative h-[40vh] w-full flex flex-row items-center justify-center text-white bg-gradient-to-br from-verdeOliva to-verdeBosque" > 
                <div className="absolute top-1/4 z-20 p-12 text-center">
                    <h1 className="text-2xl md:text-5xl p-2 md:p-4 rounded font-serif font-semibold uppercase">PRESS E MEDIA</h1>
                    <p className="textDetail italic font-thin text-center">Scopri la nostra partecipazione alla stampa e ai media</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-16 py-12 justify-center text-center gap-3 bg-gradient-to-tr from-verdeOliva to-verdeBosque">
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva">
                    <div className="justify-items-center items-center h-20">
                        <img src="/images/PortadaAlba.png" alt="portada revista" className="h-full"/>
                    </div>
                    <h1 className="title uppercase group-hover:text-dorado">VIVERE LO YOGA</h1>
                    <p>{getTextDate('2022-06-07')} </p>
                    <a href="https://www.pressreader.com/italy/vivere-lo-yoga/20220607/283390540504799" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva">
                    <img src="" alt="portada revista" />
                    <h1 className="title uppercase group-hover:text-dorado">CORRIERE DELLO SPETTACOLO</h1>
                    <p>{getTextDate('2021-07-21')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"Alba Muzzarelli, lo yoga come stile di vita"</h2>
                    <a href="https://www.corrieredellospettacolo.net/2021/07/08/alba-muzzarelli-lo-yoga-come-stile-di-vita/" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva">
                    <img src="" alt="portada revista" />
                    <h1 className="title uppercase group-hover:text-dorado">MAT YOU CAN</h1>
                    <p>{getTextDate('2022-09-29')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"Alba Muzzarelli, insegnante di yoga online"</h2>
                    <a href="https://youtu.be/IDRNmUcxX6c?si=k0Y1eJ16VK5CsVCB" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva">
                    <img src="" alt="portada revista" />
                    <h1 className="title uppercase group-hover:text-dorado">Tu style</h1>
                    <p>{getTextDate('2021-02-25')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"E tu di che stile yoga sei?"</h2>
                    <a href="https://www.tustyle.it/diary/yoga-maratona-online-stili-docenti-ceccarelli-lorenza-minola-loyoga-app-alba-muzzarelli/" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Press