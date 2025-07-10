import CircularButton from "./CircularButton";
import { ArrowDown } from "./Icons";

function Hero() {
  return (
    <div className="relative h-screen w-full flex flex-row items-end justify-center text-white">
      <div className="absolute inset-0 bg-[url('/images/homebg1.png')] bg-center bg-cover" /> {/*r */}
      <div className="relative z-10 p-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl p-2 md:p-4 font-serif
          ">¡BENVENUTI A UMĀ!</h1>
          <p className="text-lg md:text-xl pb-4 font-sans font-normal drop-shadow-2xl">Uno spazio sacro di crescita ed evoluzione personale che unisce e presenta i nostri progetti e percorsi yoga e in cui yu possa riconoscerti e sentirti a casa.</p>
      </div>
      {/* <CircularButton />  ver si lo ponemos */}
      <div className="absolute z-20 flex flex-row items-center justify-center hover:animate-pulse">
          <a href="#uma-summary"> {/* La sección es provisoria */}
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default Hero;