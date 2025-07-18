import ChiSiamo from "../assets/images/ChiSiamo.png"
import { ArrowDown } from "./Icons";

function HeroAbout() {
  return (
    <div className="relative w-full h-screen flex flex-row items-center justify-center bg-gradient-to-b to-terracota from-dorado">
      <div className="flex flex-col sm:absolute w-full px-12">
        <h2 className="w-full sm:absolute sm:-top-6 left-1/2 sm:-translate-x-1/2 sm:z-20 textTitleSection">
            CHI SIAMO
        </h2>
        <img
            src={ChiSiamo}
            alt="chi siamo"
            className="w-full h-[70vh] object-contain opacity-90"
        />
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