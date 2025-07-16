import { useState, useRef } from "react";
import { ArrowDown, PauseIcon, PlayIcon } from "../components/Icons.jsx";
import Retreat from "../assets/video/retreat.mp4"

function HeroReW() {
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
        <div className="relative h-screen w-full flex flex-row items-center justify-center text-white">
            <div className="absolute inset-0 " />{/*bg-gradient-to-br from-terracota from-0% via-dorado via-50%  to-terracota */}
            <div className="absolute top-[8vh] z-20 p-12 text-left">
                <h1 className="sectionTitle p-2 md:p-4 uppercase">Retreat e Workshop</h1>
            </div>
            <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 z-10">
                <div className="w-[40vw] h-[60vh] aspect-video rounded-br-full rounded-bl-full relative shadow-xl">
                    <video
                    ref={videoRef}
                    src={Retreat}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-br-full rounded-bl-full "
                    />
                    <button
                    onClick={togglePlay}
                    className="absolute bottom-4 right-4 bg-white bg-opacity-70 hover:bg-opacity-90 text-oscuro rounded-full p-2 shadow-lg transition-all z-30"
                    >
                    {isPlaying ? (
                        <PauseIcon />
                    ) : (
                        <PlayIcon />
                    )}
                    </button>
                </div>
            </div>
            <div className="absolute -bottom-4 z-20 p-12 text-left">
                <p className="subtitle p-2 md:p-4"><span className="uppercase">expand beyond your</span><span className="text-xl md:text-2xl lg:text-3xl italic font-handwriting tracking-wider">self</span></p>
            </div>
            
            <div className="absolute -bottom-2 z-20 flex flex-row items-center justify-center translate-x-1/4 hover:animate-pulse">
                <a href="#uma-retreat">
                    <ArrowDown />
                </a>
            </div>
        </div>
  )
}
export default HeroReW