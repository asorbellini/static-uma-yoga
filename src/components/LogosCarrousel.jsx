import { useRef } from "react";

function LogosCarrousel({ logos, speed = 50, pauseOnHover = true }) {
    const carrouselRef = useRef(null);
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div ref={carrouselRef} className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-claro via-claro/50 to-transparent z-30 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-claro via-claro/50 to-transparent z-30 pointer-events-none" />
            <div className="px-4">
                <div
                    className={`flex items-center gap-8 md:gap-12 lg:gap-16 animate-infinite-scroll ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
                    style={{
                    "--duration": `${speed}s`,
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center h-20 lg:h-24 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                            <img
                            src={logo.src} 
                            alt={logo.name}
                            className="h-full w-auto object-contain max-w-[180px] lg:max-w-[200px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogosCarrousel;