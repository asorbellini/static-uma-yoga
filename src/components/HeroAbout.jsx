import React, { Suspense } from "react";
import { ArrowDown } from "./Icons.jsx";
import { ComponentLoading } from "./LoadingFootPrints.jsx";

const VideoNoi = React.lazy(() => import("./VideoNoi.jsx"));

function HeroAbout() {
  return (
    <div className="relative w-full h-screen flex flex-row items-center justify-center bg-gradient-to-b to-terracota from-dorado text-white"> 
      <div className="absolute top-0 sm:top-[8vh] z-20 p-12">
        <h1 className="textTitleSection p-2 md:p-4 uppercase">CHI SIAMO</h1>
      </div>
      <div className="absolute z-10 w-full flex justify-center h-screen px-6">
        <div className="h-[80vh] max-w-3xl top-[10vh] aspect-video rounded-3xl overflow-hidden relative flex items-center justify-center">
          <Suspense fallback={<ComponentLoading />}>
              <VideoNoi />
          </Suspense>
        </div>
      </div>
      <div className="py-2 z-20 absolute -bottom-2 left-1/2 -translate-x-1/2 items-center justify-center hover:animate-pulse animate-pulse md:animate-none flex flex-row">
          <a href="#about-uma-summary">
              <ArrowDown />
          </a>
      </div>
    </div>
  );
}

export default HeroAbout;