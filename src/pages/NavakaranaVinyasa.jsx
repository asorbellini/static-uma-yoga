
import HorizontalGallery from "../components/Gallery.jsx";
import HeroNavakarana from "../components/HeroNavakarana.jsx";
import navak1 from "../assets/images/Navakarana/navak1.png"
import navak2 from "../assets/images/Navakarana/navak2.png"
import navak3 from "../assets/images/Navakarana/navak3.png"
import navak4 from "../assets/images/Navakarana/navak4.png"
import navak5 from "../assets/images/Navakarana/navak5.png"
import navak6 from "../assets/images/Navakarana/navak6.png"
import navak7 from "../assets/images/Navakarana/navak7.png"
import NavakaranaSummary from "../components/NavakaranaSummary.jsx";
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx";
import Footer from "../components/Footer.jsx";


const NavakaranaImages = [
    {
      src: navak2,
      alt: "yoga practice",
      title: "Yoga Practice",
    },
    {
      src: navak3,
      alt: "yoga session",
      title: "Yoga Session",
    },
    {
      src: navak4,
      alt: "meditation",
      title: "Meditation",
    },
    {
      src: navak5,
      alt: "yoga pose",
      title: "Yoga Pose",
    },
    {
      src: navak6,
      alt: "yoga class",
      title: "Yoga Class",
    },
    {
      src: navak7,
      alt: "yoga retreat",
      title: "Yoga Retreat",
    },
    {
      src: navak1,
      alt: "navakarana vinyasa",
      title: "Navakarana Vinyasa",
    },
  ]

function NavakaranaVinyasa() {
  
  return (
    <div className="min-h-screen w-full bg-claro">
        <HeroNavakarana />
        <NavakaranaSummary />
        {/* GALERÍA DE IMÁGENES */}
        <div className="items-center justify-items-center mx-auto px-6 sm:px-16">
          <h3 className="w-text-xl md:text-3xl rounded font-serif text-oscuro text-center font-semibold uppercase py-2 md:w-[50vw]">GALLERY</h3>
          <HorizontalGallery images={NavakaranaImages}/>
        </div>
        <ToRetreateWorkshop />
        <Footer />
    </div>  
  );
}

export default NavakaranaVinyasa;