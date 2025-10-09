import { Suspense, useEffect, useState } from "react"
import { getTextDate } from "../constants"
import NewsLetter from "../components/NewsLetter.jsx";

function LinkPreview({url}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${url}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [url]);

  return (
    <div className="justify-items-center items-center">
      {data &&
          <img src={data?.logo?.url || data?.image?.url} alt={data?.title || data?.publisher} className="w-10 h-10 rounded-lg aspect-square object-fill"/>
}
    </div>
  );
}

function Press() {
    return(
        <>
            <div className="min-h-screen bg-verdeBosque">
                <div className="relative h-[40vh] w-full flex flex-row items-center justify-center text-white bg-gradient-to-br from-verdeOliva to-verdeBosque" > 
                    <div className="absolute top-1/4 z-20 p-12 text-center">
                        <h1 className="text-2xl md:text-5xl p-2 md:p-4 rounded font-serif font-semibold uppercase">PRESS E MEDIA</h1>
                        <p className="textDetail italic font-thin text-center text-white">Scopri la nostra partecipazione alla stampa e ai media</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-16 justify-center text-center gap-3 bg-gradient-to-tr from-verdeOliva to-verdeBosque pb-8 sm:pb-12 ">
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://www.youtube.com/@DeniseDellagiacoma'})}
                            <h1 className="title uppercase text-white px-2">IL PODCAST DI DENISE</h1>
                        </div>
                        <a href="https://youtu.be/BpIY5-QJdk8?si=oI7lYDT4F2d3xt16" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2025-07-01')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">"Lo yoga come cammino di vita – La storia di Alba Muzzarelli"</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                                Ascolta tutto
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://www.starssystem.it/lifestyle/mindfulness/curiosita-uccide-il-gatto/'})}
                            <h1 className="title text-white px-2 uppercase">starssystem</h1>
                        </div>
                        <a href="https://www.starssystem.it/lifestyle/mindfulness/curiosita-uccide-il-gatto/" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2024-03-13')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">"La curiosità uccide il gatto? - di Tiziano Sorbellini"</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                            Leggi tutto
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://www.starssystem.it/lifestyle/mindfulness/il-coraggio-di-desiderare/'})}
                            <h1 className="title text-white px-2 uppercase">starssystem</h1>
                        </div>
                        <a href="https://www.starssystem.it/lifestyle/mindfulness/il-coraggio-di-desiderare/" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2024-01-25')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">"Il coraggio di desiderare - di Tiziano Sorbellini"</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                            Leggi tutto
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://www.glamour.mx/articulos/que-es-el-navakarana-yoga'})}
                            <h1 className="title uppercase text-white px-2">GLAMOUR MEXICO</h1>
                        </div>
                        <a href="https://www.glamour.mx/articulos/que-es-el-navakarana-yoga" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2023-10-17')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">"Navakarana yoga, el método para fluir al ritmo de la música (y de la luna)"</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                                Leggi tutto
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://vanityfair.it/article/navakarana-yoga-il-metodo-per-fluire-al-ritmo-di-musica-e-della-luna'})}
                            <h1 className="title uppercase text-white px-2">VANITY FAIR</h1>
                        </div>
                        <a href="https://www.vanityfair.it/article/navakarana-yoga-il-metodo-per-fluire-al-ritmo-di-musica-e-della-luna" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2023-08-23')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">"Navakarana Yoga, il metodo per fluire al ritmo di musica (e della luna)"</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                                Leggi tutto
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://www.pressreader.com/italy/vivere-lo-yoga/20220607/283390540504799'})}
                            <h1 className="title uppercase text-white">VIVERE LO YOGA</h1>
                        </div>
                        <a href="https://www.pressreader.com/italy/vivere-lo-yoga/20220607/283390540504799" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2022-06-07')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">Alba Muzzarelli</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                                Leggi tutto
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 text-white group p-2 shadow-dorado shadow-md rounded-3xl hover:scale-105 hover:bg-verdeOliva transition-all duration-300">
                        <div className="flex flex-row justify-center items-center">
                            {LinkPreview({url: 'https://www.corrieredellospettacolo.net/2021/07/08/alba-muzzarelli-lo-yoga-come-stile-di-vita/'})}
                            <h1 className="title uppercase text-white px-2">CORRIERE DELLO SPETTACOLO</h1>
                        </div>
                        <a href="https://www.corrieredellospettacolo.net/2021/07/08/alba-muzzarelli-lo-yoga-come-stile-di-vita/" target="_blank" rel="noopener noreferrer" >
                            <p>{getTextDate('2021-07-21')} </p>
                            <h2 className="subtitle text-center italic group-hover:text-dorado text-white">"Alba Muzzarelli, lo yoga come stile di vita"</h2>
                            <button className="btn-secondary text-white hover:text-dorado">
                                Leggi tutto
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </>
    )
}

export default Press