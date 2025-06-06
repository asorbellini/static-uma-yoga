
import FotoPortadaAlba from "../assets/images/PortadaAlba.png"
import FotoPortadaDiletta from "../assets/images/PortadaDiletta.png"
import FotoPortadaTiziano from "../assets/images/PortadaTiziano.png" 
import { ArrowDown } from "./Icons"

const SummaryMembers = [{
    'fullName':'Alba Muzzarelli',
    'imageUrl':FotoPortadaAlba,
    'shortDescription':'Nata con il Sole in Acquario, la Luna in Pesci e con Ariete come Ascendente, Alba è un’insaziabile curiosa, qualità che nel 2014 la conduce per la prima volta su un tappetino da yoga.',
},
{
    'fullName':'Diletta Muzzarelli',
    'imageUrl':FotoPortadaDiletta,
    'shortDescription':'Diletta incontra lo Yoga da bambina. Grazie alla pratica accede a un metaspazio amorevole e inclusivo in cui sperimenta una piena libertà di ascolto ed espressione che la guida ad approfondirne lo studio.',
},
{
    'fullName':'Tiziano Sorbellini',
    'imageUrl':FotoPortadaTiziano,
    'shortDescription':'Tiziano, creatore della pratica Anubhuti e autore di libri come "Semi del nulla" e "Anubhuti".',
},
]


function UmaSummary(){
    return(
        <section id="uma-summary" className="min-h-screen w-full pt-28 px-4 bg-gradient-to-t from-[#ccbe9d] to-[#9c8e6e] "> {/* to-[#aa935c]  */}
            <div className="">
                <h3 className="text-2xl md:text-5xl/4 p-2 md:p-4 rounded font-quicksand text-neutral-300 text-center underline-offset-2">
                Conocerci
                </h3>
            </div>
            <div className="">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis quidem tempore eum nisi voluptatem nihil perferendis reprehenderit magnam cumque. Quibusdam, consequuntur. Vel sapiente veniam ipsam placeat accusantium iste esse.
                </p>
                <div className="flex flex-col sm:flex-row gap-10 mt-4">
                        {SummaryMembers.map((member, index) => (
                            <div className="w-full">
                                <div className="justify-items-center">
                                    <img
                                    key={index}
                                    src={`${member.imageUrl}`}
                                    alt={`Imagen ${member.fullName}`}
                                    className="h-[200px] sm:h-[310px] lg:h-[350px] object-cover shadow rounded-t-full" />
                                </div>
                                <div>
                                    <h2 className="font-quicksand text-base text-center font-medium">{member.fullName}</h2>
                                    <p className="font-sans">{member.shortDescription}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex justify-center my-2">
                <a href="/chi-siamo">
                    <button className="bg-white text-[#2c2c2c] px-6 py-3 text-sm tracking-wide">
                        CHI SIAMO
                    </button>
                </a>
            </div>
            <div className="z-20 flex items-center justify-center hover:animate-pulse">
                <a href="#cosa-facciamo">
                    <ArrowDown />
                </a>
            </div>
        </section>
    )
}

export default UmaSummary