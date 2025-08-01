import ChiSiamo from "../assets/images/ChiSiamo.png"
import { ArrowDown } from "./Icons";

function HeroAbout() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b to-terracota from-dorado text-white"> 
      <div className="flex flex-col sm:absolute w-full px-6">
        <h2 className="w-full sm:absolute sm:-top-6 left-1/2 sm:-translate-x-1/2 sm:z-20 textTitleSection pt-16 sm:pt-0 ">
            CHI SIAMO
        </h2>
          <img
              src={ChiSiamo}
              alt="chi siamo"
              className="w-full h-[70vh] object-contain opacity-90 "
          />
      </div>
      <div className="py-2 z-20 sm:absolute sm:-bottom-2 sm:translate-x-1/4  items-center justify-center hover:animate-pulse animate-pulse md:animate-none">
          <a href="#about-uma-summary">
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default HeroAbout;