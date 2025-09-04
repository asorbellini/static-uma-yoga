import { Suspense, useEffect, useState } from "react"
import { getTextDate } from "../constants"
import { ComponentLoading } from "../components/LoadingFootPrints";

function LinkPreview({url}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.microlink.io?url=${url}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [url]);

  return (
    <div className="justify-items-center items-center mb-2">
      {data &&
          <img src={data.image.url} alt={data.title} className="w-28 h-28 rounded-3xl aspect-auto object-fill"/>
}
    </div>
  );
}

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
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva rounded-3xl">
                    <div className="justify-items-center items-center mb-2">
                        <Suspense fallback={<ComponentLoading />}>
                            <img src="https://i.ytimg.com/pl_c/PLtDlpMIfDcOH4dt8BzlCKE-cFeC4WomAF/studio_square_thumbnail.jpg?sqp=CKzjksUG-oaymwEICOADEOADSFqi85f_AwYIlcP3sgY=&rs=AOn4CLA9GFR3q7ewLggwcs33i96VDm6TAQ" alt="IL PODCAST DI DENISE" className="w-28 h-28 rounded-3xl aspect-square object-fill"/>    
                        </Suspense>
                    </div>
                    <h1 className="title uppercase group-hover:text-dorado">IL PODCAST DI DENISE</h1>
                    <p>{getTextDate('2025-07-01')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"Lo yoga come cammino di vita – La storia di Alba Muzzarelli"</h2>
                    <a href="https://youtu.be/BpIY5-QJdk8?si=57mVAhZPL6aHHtqf" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Ascolta tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva rounded-3xl">
                    {LinkPreview({url: 'https://www.glamour.mx/articulos/que-es-el-navakarana-yoga'})}
                    <h1 className="title uppercase group-hover:text-dorado">GLAMOUR MEXICO</h1>
                    <p>{getTextDate('2023-10-17')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"Navakarana yoga, el método para fluir al ritmo de la música (y de la luna)"</h2>
                    <a href="https://www.glamour.mx/articulos/que-es-el-navakarana-yoga" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva rounded-3xl">
                    {LinkPreview({url: 'https://vanityfair.it/article/navakarana-yoga-il-metodo-per-fluire-al-ritmo-di-musica-e-della-luna'})}
                    <h1 className="title uppercase group-hover:text-dorado">VANITY FAIR</h1>
                    <p>{getTextDate('2023-08-23')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"Navakarana Yoga, il metodo per fluire al ritmo di musica (e della luna)"</h2>
                    <a href="https://www.vanityfair.it/article/navakarana-yoga-il-metodo-per-fluire-al-ritmo-di-musica-e-della-luna" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva rounded-3xl">
                    <div className="justify-items-center items-center mb-2">
                        <img src={`https://t.prcdn.co/img?file=345m2022060700000000001001&page=1&width=240`} alt="Vivere lo yoga" className="w-28 h-28 rounded-3xl"/>
                    </div>
                    <h1 className="title uppercase group-hover:text-dorado">VIVERE LO YOGA</h1>
                    <p>{getTextDate('2022-06-07')} </p>
                    <a href="https://www.pressreader.com/italy/vivere-lo-yoga/20220607/283390540504799" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
                <div className="flex-1 text-white group p-2 border-2 border-verdeOliva rounded-3xl">
                    {LinkPreview({url: 'https://www.corrieredellospettacolo.net/2021/07/08/alba-muzzarelli-lo-yoga-come-stile-di-vita/'})}
                    <h1 className="title uppercase group-hover:text-dorado">CORRIERE DELLO SPETTACOLO</h1>
                    <p>{getTextDate('2021-07-21')} </p>
                    <h2 className="subtitle text-center italic group-hover:text-dorado">"Alba Muzzarelli, lo yoga come stile di vita"</h2>
                    <a href="https://www.corrieredellospettacolo.net/2021/07/08/alba-muzzarelli-lo-yoga-come-stile-di-vita/" target="_blank" rel="noopener noreferrer" >
                        <button className="btn-secondary">
                            Leggi tutto
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Press