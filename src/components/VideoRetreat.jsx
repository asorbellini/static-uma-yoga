import { useState } from "react";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import Retreat from "../assets/video/retreat.mp4"

export default function VideoRetreat() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ComponentLoading />
        </div>
      )}
      <video
        src={Retreat}
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
      />
    </>
  );
}
