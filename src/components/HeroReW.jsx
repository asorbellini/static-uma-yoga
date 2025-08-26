import { ArrowDown } from "../components/Icons.jsx";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import React, { Suspense } from "react";

const VideoRetreat = React.lazy(() => import("./VideoRetreat.jsx"));
function HeroReW() {
    return (
        <div className="relative h-screen w-full flex flex-row items-center justify-center text-white">
            <div className="absolute inset-0 " />{/*bg-gradient-to-br from-terracota from-0% via-dorado via-50%  to-terracota */}
            <div className="absolute top-0 sm:top-[8vh] z-20 p-12 text-left">
                <h1 className="textTitleSection p-2 md:p-4 uppercase">Retreat e Workshop</h1>
            </div>
            <div className="absolute top-[15vh] sm:top-[20vh] left-1/2 -translate-x-1/2 z-10 w-full flex justify-center px-6 sm:px-0">
                <div className="h-[70vh] w-auto sm:h-auto sm:w-[90vw] sm:max-w-3xl aspect-video rounded-3xl overflow-hidden relative shadow-xl">
                <Suspense fallback={<ComponentLoading />}>
                    <VideoRetreat />
                </Suspense>
                </div>
            </div>
            <div className="absolute bottom-[1%] z-20 p-12 text-center"> {/* -bottom-6 sm:-bottom-10  */}
                <p className="title p-2"><span className="uppercase">expand beyond your</span><span className="text-3xl lg:text-4xl italic font-handwriting tracking-wider items-center">self</span></p>
            </div>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-row items-center justify-center hover:animate-pulse">
                <a href="#uma-retreat">
                    <ArrowDown />
                </a>
            </div>
        </div>
  )
}
export default HeroReW