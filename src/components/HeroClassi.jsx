import cosaFacciamo2 from "../assets/images/CosaFacciamo2.png"
import { ArrowDown } from "../components/Icons.jsx";

function HeroClassi() {
    return (
        <div className="relative h-[90vh] w-full flex flex-row items-center justify-center text-white">
            <div className=" z-20">
                    <img
                    src={cosaFacciamo2}
                    alt="`Cosa Facciamo 2"
                    className="w-[40vw] h-[50vh] xl:h-[60vh] object-cover rounded-br-full rounded-tl-full shadow-lg" />
            </div>
            <div className="absolute inset-0  bg-gradient-to-br from-[#a66c5b] from-0% via-[#d4af7f] via-50%  to-[#a66c5b] to-90%" />
            <div className="relative z-10 p-12 text-left">
                <h1 className="text-2xl md:text-5xl/4 p-2 md:p-4 rounded font-quicksand font-bold
                ">LE CLASSI DI UMĀ</h1>
            </div>
            
            <div className="absolute bottom-0 z-20 flex flex-row items-center justify-center hover:animate-pulse">
                <a href="#classi">
                    <ArrowDown />
                </a>
            </div>
        </div>
  )
}
export default HeroClassi