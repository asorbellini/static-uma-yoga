import { useState } from "react";
import { ComponentLoading } from "./LoadingFootPrints.jsx";
import NoiMobile from "../assets/video/noiMobile.mp4"

export default function VideoNoiMobile() {
  const [isLoading, setIsLoading] = useState(true);
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
        className={`w-full h-auto object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
        onLoadedData={() => setIsLoading(false)}
      />
    </>
  );
}