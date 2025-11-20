import { useState } from "react";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import Noi from "../assets/video/noi_optimized.mp4"

export default function VideoNoi() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ComponentLoading />
        </div>
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadedData={() => setIsLoading(false)}
        style={{
          filter: 'contrast(1.1) saturate(1.1)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        controls={false}
      >
        <source src={Noi} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </>
  );
}