import React, { useState, useEffect, Suspense } from "react";
import { ArrowDown, Wave } from "./Icons.jsx";
import { ComponentLoading } from "./LoadingFootPrints.jsx";

const VideoNoi = React.lazy(() => import("./VideoNoi.jsx"));
const VideoNoiMobile = React.lazy(() => import("./VideoNoiMobile.jsx"));

function HeroAbout() {
  const [mobile, setMobile] = useState(false)
  const [tablet, setTablet] = useState(false)
  
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setMobile(width < 768)
      setTablet(width >= 768 && width < 1024)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])
  
  return (
    <div className="relative w-full h-screen max-h-dvh flex flex-col items-center justify-evenly bg-gradient-to-t from-terracota to-dorado text-white"> 
      <div className="flex items-center justify-center z-20 pt-16 md:pt-20">
        <h1 className="textTitleSection uppercase text-center">
          CHI SIAMO
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 md:px-16 w-full">
        <div className={`
          relative flex items-center justify-center rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl sm:shadow-2xl
          ${mobile 
            ? 'w-auto max-w-sm aspect-[9/16] max-h-[70vh]' 
            : tablet
              ? 'w-full max-w-2xl sm:max-w-3xl aspect-video max-h-[50vh]'
              : 'w-auto max-w-3xl md:max-w-4xl lg:max-w-5xl aspect-video max-h-[60vh]'
          }
        `}>
          <Suspense fallback={<ComponentLoading />}>
            {mobile ? <VideoNoiMobile /> : <VideoNoi />}
          </Suspense>
        </div>
      </div>
      <div className="flex items-center justify-center z-20 w-full pb-10 md:pb-12 lg:pb-18">
        <a 
          href="#about-uma-summary" 
          aria-label="Vai alla sezione successiva"
          className="translate-x-1/4"
        >
          <ArrowDown />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <Wave />
      </div>
    </div>
  );
}

export default HeroAbout;