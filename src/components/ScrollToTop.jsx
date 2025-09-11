import { useState, useEffect } from "react";
import { ArrowUp } from "./Icons.jsx";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        window.history.pushState(null, "", window.location.pathname)
    };

    return (
        <button
            onClick={scrollToTop}
            className={`flex fixed bottom-2 right-2 z-50 w-10 md:w-12 h-10 md:h-12 rounded-full items-center justify-center shadow-lg hover:animate-pulse transition-all duration-1000 bg-verdeBosque opacity-80 ${isVisible ? "translate-x-0 opacity-100" : "translate-y-20 opacity-0"}`}
            aria-label="Volver arriba"
        >
            <ArrowUp className={"h-6 w-6 md:h-10 md:w-10"} stroke="#ffffff"/>
        </button>
    );
};

export default ScrollToTop;