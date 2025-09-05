import React, { Suspense, useState, useEffect } from "react";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import { Wave } from "../components/Icons.jsx";

const VideoRetreat = React.lazy(() => import("./VideoRetreat.jsx"));
const VideoRetreatMobile = React.lazy(() => import("./VideoRetreatMobile.jsx"))

function HeroReW() {
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
        <div className="relative min-h-dvh w-full max-h-dvh flex flex-col items-center justify-center sm:justify-evenly bg-gradient-to-tr from-terracota to-dorado p-4">
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"/> 
            <div className="flex items-center justify-center z-20 pt-16 md:pt-20">
                <h1 className="textTitleSection uppercase text-center text-white">
                    RETREAT & WORKSHOP
                </h1>
            </div>
            <div className="flex-1 flex items-center justify-center px-6 md:px-16 w-full z-20">
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
                    {mobile ? <VideoRetreatMobile /> : <VideoRetreat />}
                </Suspense>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center z-30 w-full pb-10 md:pb-12 lg:pb-18">
                <h2 className="title p-2 text-white"><span className="uppercase">expand beyond your</span><span className="text-3xl lg:text-4xl italic font-handwriting tracking-wider items-center">self</span></h2>
                <a 
                    href="#uma-retreat"
                    aria-label="Vai alla sezione successiva"
                    className="btn-scopri group group-hover:*"
                >
                    <button className="textButton">
                    SCOPRI
                    </button>
          </a>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                <Wave />
            </div>
        </div>
  )
}
export default HeroReW