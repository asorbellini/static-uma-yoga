
import { BodyHeart, LeftFootPrint, RightFootPrint, Road, Spiral, Wave } from "./Icons";

function Hero() {
  return (
    <div className="min-h-dvh max-h-dvh flex flex-col bg-gradient-to-tl from-terracota via-terracota to-dorado px-6 md:px-16 relative">
      <div className="absolute top-0 right-0 w-full h-full bg-black/30 z-10"/>
      <div className="flex-1 flex items-center justify-center z-20">
        <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto">
          <div className="flex items-center justify-center relative ">
            <div className="flex items-center relative">
              <LeftFootPrint 
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 translate-x-2 md:translate-x-3 translate-y-2 rotate-12 transition-all duration-300" 
                fillColor="#ffffff" 
              />
              <RightFootPrint 
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 -translate-x-2 md:-translate-x-3 -translate-y-2 -rotate-12 transition-all duration-300" 
                fillColor="#ffffff" 
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Spiral 
              className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 transition-all duration-300" 
              fillColor="#ffffff"
            />
          </div>
          <div className="flex items-center justify-center">
            <BodyHeart 
              className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 transition-all duration-300" 
              fillColor="#ffffff"
            />
          </div>
          <div className="flex items-center justify-center">
            <Road 
              className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 transition-all duration-300" 
              fillColor="#ffffff" 
            />
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 pb-8 sm:pb-12 md:pb-16 z-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="welcomeTitle text-white mb-4 sm:mb-6 text-center">BENVENUTI A UMĀ</h1>
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <p className="subtitle text-white font-light leading-relaxed text-center">
              Umā è un movimento. Uno spazio in cui il <span className="italic">corpo</span> diventa un <span className="italic">percorso</span>, il respiro si trasforma in saggezza e la comunità si crea attraverso l' <span className="italic">esperienza condivisa</span>.
            </p>
            <p className="subtitle text-white font-light drop-shadow-title leading-relaxed text-center ">
              Esploriamo, ci trasformiamo, ci <span className="font-bold">expandiamo</span> - oltre i limiti, oltre le storie, <span className="font-bold">oltre il sé</span>.
            </p>
          </div>
          <div className="hidden sm:flex justify-center">
            <a 
              href="#uma-summary" 
              aria-label="Vai alla sezione successiva"
              className="btn-scopri z-30 group group-hover:*"
            >
              <button className="textButton">
                SCOPRI
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
         <Wave />
      </div>
    </div>
  );
}

export default Hero;