import { useParams } from "react-router-dom";
import retreats from "../data/retreats.json"
import ReviewsCarousel from "../components/ReviewsCarrousel.jsx";
import { ArrowDown } from "../components/Icons.jsx";
import {getTextDate} from "../constants/index.js"
import Footer from "../components/Footer.jsx";

function ReWDetail(){
    const { type, slug } = useParams();
    const RW = retreats.find(rw => rw.type === type && rw.slug == slug);
    if (!RW) return <p>RWname no encontrado</p>;
    const today = new Date()
    const eventoPasado = new Date(RW.dateEnd + "T23:59:59") < today
    return (
        <div className="min-h-screen w-full bg-terracota items-center">
            <div className="h-screen flex flex-col items-center justify-center text-white px-4">
                <div className="z-10">
                        <img
                        src={RW.image}
                        alt={RW.title}
                        className="w-full object-cover shadow-lg" />
                </div>
                {eventoPasado && 
                <div className="mb-6 p-4 bg-dorado text-oscuro border-l-4 border-terracota rounded">
                ⚠️ Questo evento è passato.
                    </div>}
                <div className="z-20 flex flex-row items-center justify-center hover:animate-pulse">
                    <a href="#detail">
                        <ArrowDown />
                    </a>
                </div>
            </div>
            <section id="detail" className="min-h-screen mt-24">
                <div className="mt-24 px-12 text-white">
                    <h1 className="sectionTitle py-4 uppercase">{RW.title}</h1>
                    <h2 className="secondaryTitle text-center py-2">“{RW.subtitle}“</h2>
                    <h3 className="subtitle text-center py-2">{RW.dateStart === RW.dateEnd ? `${getTextDate(RW.dateStart)}` : `Dal ${getTextDate(RW.dateStart)} - ${getTextDate(RW.dateEnd)}`}</h3>
                    {RW.description.map((d, index) => <p key={index} dangerouslySetInnerHTML={{ __html: d }} />)}
                    <section className="my-16 px-4">
                        <h2 className="text-3xl font-bold text-center mb-6 underline">Recensioni dei partecipanti</h2>
                        {RW.reviews?.length > 0 && (<ReviewsCarousel reviews={RW.reviews} />)}
                    </section>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ReWDetail