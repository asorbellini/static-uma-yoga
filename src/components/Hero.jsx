import CircularButton from "./CircularButton";
import { ArrowDown, BodyHeart, LeftFootPrint, RightFootPrint, Road, Spiral } from "./Icons";

function Hero() {
  return (
    <div className="h-[100dvh] max-h-dvh w-full flex flex-col items-center justify-evenly text-white bg-gradient-to-tl from-terracota via-terracota to-dorado px-6 md:px-16">
{/*       <div className="relative inset-0 items-center justify-center pt-10 md:pt-20"> */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 items-center justify-items-center overflow-hidden">
          <div className="flex items-center">
            <LeftFootPrint className="w-16 h-16 md:w-32 md:h-32 translate-x-2 md:translate-x-6 translate-y-2 rotate-12" fillColor="#ffffff" />
            <RightFootPrint className="w-16 h-16 md:w-32 md:h-32 md:-translate-x-6 -translate-y-2 -rotate-12" fillColor="#ffffff" />
          </div>
          <div className="flex items-center justify-center">
            <Spiral className="w-32 h-32 md:w-64 md:h-64" fillColor="#ffffff"/>
          </div>
          <div className="flex items-center justify-center">
            <BodyHeart className="w-32 h-32 md:w-64 md:h-64 z-50" fillColor="#ffffff" />
          </div>
          <div className="flex items-center justify-center">
            <Road className="w-32 h-32 md:w-64 md:h-64" fillColor="#ffffff" />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="z-10 text-center">
              <h1 className="welcomeTitle p-2 md:p-4">BENVENUTI A UMĀ</h1>
              <p className="subtitle text-lg lg:text-xl font-light text-center sm:pb-2">Umā è un movimento. Uno spazio in cui il <span className="italic">corpo</span> diventa un <span className="italic">percorso</span>, il respiro si trasforma in saggezza e la comunità si crea attraverso l’ <span className="italic">esperienza condivisa</span>.</p>
              <p className="font-sans text-lg lg:text-xl font-light drop-shadow-title sm:pb-4">Esploriamo, ci trasformiamo, ci <span className="font-bold">expandiamo</span> - oltre i limiti, oltre le storie, <span className="font-bold">oltre il sé</span>.</p>
          </div>
        </div>
          <div className="justify-self-center">
              <a 
                href="#uma-summary" 
                aria-label="Vai alla sezione successiva"
                className="btn-scopri"
              >
                <button className="textButton">
                    SCOPRI
                </button>
              </a>
          </div>
      {/* <div className="absolute left-1/2 -translate-x-1/2 z-20 sm:flex sm:w-full flex-row items-center justify-center hover:animate-pulse animate-pulse lg:animate-none">
          <a 
            href="#uma-summary" 
            aria-label="Vai alla sezione successiva"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
          >
              <ArrowDown />
          </a>
      </div> */}
    </div>
  );
}

export default Hero;