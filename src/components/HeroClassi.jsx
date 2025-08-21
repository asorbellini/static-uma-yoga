import cosaFacciamo2 from "../assets/images/Cosafacciamo2.png"
import { ArrowDown } from "../components/Icons.jsx";

function HeroClassi() {
    return (
        <div className="relative h-[90vh] w-full flex flex-row items-center justify-center text-white">
            <div className="absolute inset-0  bg-gradient-to-br from-terracota from-0% via-dorado via-50%  to-terracota to-90%" />
            <div className="absolute top-[12.5%] z-20 p-12 text-left">
                <h1 className="text-2xl md:text-5xl p-2 md:p-4 rounded font-serif font-semibold
                ">LE CLASSI DI UMĀ</h1>
            </div>
            <div className="absolute top-1/4 left-1/3 z-10">
                    <img
                    src={cosaFacciamo2}
                    alt="`Cosa Facciamo 2"
                    className="w-[40vw] h-[60vh] object-cover rounded-br-full rounded-tl-full shadow-lg" />
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-row items-center justify-center hover:animate-pulse">
                <a href="#classi">
                    <ArrowDown />
                </a>
            </div>
        </div>
  )
}
export default HeroClassi