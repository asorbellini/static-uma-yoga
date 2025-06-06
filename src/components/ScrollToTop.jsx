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
            className={`flex fixed bottom-2 right-2 z-50 sm:w-16 w-10 sm:h-16 h-10 rounded-full items-center justify-center shadow-lg hover:animate-bounce transition-all duration-1000 bg-[#aa935c] ${isVisible ? "translate-x-0 opacity-100" : "translate-y-20 opacity-0"}`}
            aria-label="Volver arriba"
        >
            <ArrowUp />
        </button>
    );
};

export default ScrollToTop;