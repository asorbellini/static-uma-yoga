import CircularButton from "./CircularButton";
import { ArrowDown } from "./Icons";

function Hero() {
  return (
    <div className="relative min-h-screen sm:min-h-screen w-full flex flex-row items-end justify-center text-white">
      {/* Movile */}
      <div className="block sm:hidden absolute inset-0 bg-terracota">
        <img src="/images/homebg1.png" alt="BgHero" className="w-full object-contain object-center" />
      </div>

      {/* Desktop & Tablet */}
      <div className="hidden sm:block absolute inset-0 bg-[url('/images/homebg1.png')] bg-center bg-cover" />
      <div className="relative z-10 px-6 pb-12 md:p-12 items-center text-center">
          <h1 className="welcomeTitle p-2 md:p-4">BENVENUTI A UMĀ</h1>
          <p className="subtitle text-lg lg:text-xl font-light text-center sm:pb-2">Umā è un movimento. Uno spazio in cui il <span className="italic">corpo</span> diventa un <span className="italic">percorso</span>, il respiro si trasforma in saggezza e la comunità si crea attraverso l’ <span className="italic">esperienza condivisa</span>.</p>
          <p className="font-sans text-lg lg:text-xl font-light drop-shadow-title sm:pb-4">Esploriamo, ci trasformiamo, ci <span className="font-bold">expandiamo</span> - oltre i limiti, oltre le storie, <span className="font-bold">oltre il sé</span>.</p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 z-20 sm:flex sm:w-full flex-row items-center justify-center hover:animate-pulse animate-pulse lg:animate-none">
          <a 
            href="#uma-summary" 
            aria-label="Vai alla sezione successiva"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
          >
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default Hero;