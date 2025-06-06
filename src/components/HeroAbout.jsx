
import { ArrowDown } from "./Icons";

function HeroAbout() {
  return (
    <div className="relative h-[90vh] w-full flex flex-row items-center justify-center text-white bg-gradient-to-tr from-[#ccbe9d] to-[#9c8e6e]">
      <div className="absolute flex items-center align-middle">
        <img src="/images/aboutbg.png" alt="prueba" className=""/>
      </div>
      <div className="relative z-10 p-12 text-center">
          <h2 className="text-2xl md:text-5xl/4 p-2 md:p-4 rounded font-quicksand
          ">CHI SIAMO</h2>
          <p className="text-base md:text-xl p-2 md:p-4 rounded">Uno spazio sacro di crescita ed evoluzione personale che unisce e presenta i nostri progetti e percorsi yoga e in cui yu possa riconoscerti e sentirti a casa.</p>
      </div>

      <div className="absolute z-20 flex flex-row items-center justify-center hover:animate-pulse">
          <a href="#"> {/* La sección es provisoria */}
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default HeroAbout;