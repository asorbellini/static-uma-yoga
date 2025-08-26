import { useState } from "react";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import Noi from "../assets/video/noi.mp4"

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
        src={Noi}
        autoPlay
        loop
        muted
        playsInline
        disableRemotePlayback
        className={`h-full w-auto object-cover rounded-3xl transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadedData={() => setIsLoading(false)}
      />
    </>
  );
}