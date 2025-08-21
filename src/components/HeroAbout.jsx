import { useRef, useState } from "react";
import ChiSiamo from "../assets/images/ChiSiamo.png"
import { ArrowDown, PauseIcon, PlayIcon  } from "./Icons";
import Noi from "../assets/video/noi.mp4"

function HeroAbout() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.paused) {
          video.play();
          setIsPlaying(true);
      } else {
          video.pause();
          setIsPlaying(false);
      }
  };
  return (
    <div className="relative w-full h-screen flex flex-row items-center justify-center bg-gradient-to-b to-terracota from-dorado text-white"> 
      <div className="absolute top-0 sm:top-[8vh] z-20 p-12">
        <h1 className="textTitleSection p-2 md:p-4 uppercase">CHI SIAMO</h1>
      </div>
      <div className="absolute z-10 w-full flex justify-center h-screen px-6">
        <div className="h-[80vh] max-w-3xl top-[10vh] aspect-video rounded-3xl overflow-hidden relative flex items-center justify-center">
          <video
            ref={videoRef}
            src={Noi}
            autoPlay
            loop
            muted
            playsInline
            disableRemotePlayback
            className="h-full w-auto object-cover rounded-3xl"/> {/*sm:w-full*/} 
          <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 bg-white bg-opacity-70 hover:bg-opacity-90 text-oscuro rounded-full p-2 shadow-lg transition-all z-30"
          >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
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