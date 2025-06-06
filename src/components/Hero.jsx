import CircularButton from "./CircularButton";
import { ArrowDown } from "./Icons";

function Hero() {
  return (
    <div className="relative h-[80vh] flex flex-row items-end justify-center text-white">
      <div className="absolute inset-0 bg-[url('/images/homebg1.png')] bg-cover bg-center" />
      <div className="relative z-10 p-12">
          <h2 className="text-5xl font-quicksand p-4 rounded">Benvenuto</h2>
      </div>
      {/* <CircularButton />  ver si lo ponemos */}
      <div className="absolute z-20 flex flex-row items-center justify-center hover:animate-bounce">
          <a href="#gallery"> {/* La sección es provisoria */}
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default Hero;