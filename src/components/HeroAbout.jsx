import ChiSiamo from "../assets/images/ChiSiamo.png"
import { ArrowDown } from "./Icons";

function HeroAbout() {
  return (
    <div className="relative w-full h-[100vh] flex flex-row items-center justify-center bg-gradient-to-b to-terracota from-dorado">
      <div className="absolute w-full px-12">
        {/* Imagen */}
                <img
                    src={ChiSiamo}
                    alt="chi siamo"
                    className="w-full h-[50vh] sm:h-[70vh] object-cover md:object-contain opacity-90"
                />
        {/* CHI SIAMO superpuesto en la parte superior de imágen*/}
                <h2 className="w-full absolute -top-6 left-1/2 -translate-x-1/2 sectionTitle">
                    CHI SIAMO
                </h2>
      </div>
      <div className="absolute bottom-10 z-20 flex flex-row items-center justify-center hover:animate-pulse">
          <a href="#about-uma-summary">
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default HeroAbout;