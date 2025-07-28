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
          <h1 className="welcomeTitle p-2 md:p-4">¡BENVENUTI A UMĀ!</h1>
          <p className="font-sans text-lg md:text-xl font-normal drop-shadow-text sm:pb-4">Uno spazio sacro di crescita ed evoluzione personale che unisce e presenta i nostri progetti e percorsi yoga e in cui yu possa riconoscerti e sentirti a casa.</p>
      </div>
      {/* <CircularButton />  ver si lo ponemos */}
      <div className="absolute z-20 sm:flex flex-row items-center justify-center hover:animate-pulse">
          <a href="#uma-summary" aria-label="Sezione successiva"> {/* La sección es provisoria */}
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default Hero;