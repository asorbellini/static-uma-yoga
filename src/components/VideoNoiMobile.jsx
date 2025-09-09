import { useState } from "react";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import NoiMobile from "../assets/video/noiMobile.mp4"

export default function VideoNoiMobile() {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ComponentLoading />
        </div>
      )}
      <video
        src={NoiMobile}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`w-full h-auto object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadedData={handleVideoReady}
        style={{
          filter: 'contrast(1.1) saturate(1.1)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
    </>
  );
}