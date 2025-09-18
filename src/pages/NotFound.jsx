import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BothFeets, BodyHeart, Road, Spiral, Wave } from "../components/Icons.jsx";
import { LoadingFootPrints } from "../components/LoadingFootPrints.jsx";

function NotFound() {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  console.log(pathname)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-dvh flex flex-col justify-evenly bg-gradient-to-tl from-terracota via-terracota to-dorado px-6 md:px-16 relative">
        <div className="absolute top-0 right-0 w-full bg-black/30 h-full z-10" />
        <div className="flex items-center justify-center z-20">
            <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto">
                <div className="flex items-center justify-center relative ">
                    <div className="flex items-center relative">
                        <BothFeets 
                        className="size-24 md:size-28 lg:size-32 xl:size-36 transition-all duration-300" 
                        fillColor="#ffffff" 
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Spiral 
                        className="size-28 md:size-32 lg:size-36 xl:size-44 transition-all duration-300" 
                        fillColor="#ffffff"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <BodyHeart 
                        className="size-28 md:size-32 lg:size-36 xl:size-44 transition-all duration-300" 
                        fillColor="#ffffff"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Road 
                        className="size-28 md:size-32 lg:size-36 xl:size-44 transition-all duration-300" 
                        fillColor="#ffffff" 
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-row pb-8 sm:pb-12 md:pb-16 justify-end z-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="textTitleSection text-white mb-4 sm:mb-6 text-center">Non è stato trovato nessun risultato per <span className="italic text-white/50">{pathname}</span></h2>
                <h2 className="textTitleSection text-white mb-8 sm:mb-16 text-center">Verrai reindirizzato alla HOME...</h2>
                <div className="flex z-20 justify-center items-center">
                    <LoadingFootPrints 
                    size="small"
                    color='#EDE8DA'
                    />
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
            <Wave />
        </div>
    </div>
  );
}

export default NotFound;
