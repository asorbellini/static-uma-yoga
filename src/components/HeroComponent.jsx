
import { useState } from "react"
import { Wave } from "./Icons.jsx"

function HeroComponent({background, mainColor, logo, title, subtitle = null}) {
    const [hovered, setHovered] = useState(false)
    return(
            <div className="relative min-h-[65dvh] md:min-h-[70dvh] w-full flex flex-col items-center justify-center py-4" 
                style={{background: background }}>
                    <div className="mt-16">
                        <img src={logo} alt={`Logo ${title}`} className="h-28"/>
                    </div> 
                    <div className="py-4 px-8 md:px-12 text-center max-w-pserif">
                        <h1 className="textTitleSection tracking-wider uppercase text-white drop-shadow-title">{title}</h1>
                    </div>
                    { subtitle &&
                        <div className="pb-4 px-8 md:px-12 text-center">
                            <h2 className="subtitle text-center text-white drop-shadow-title">{subtitle}</h2>
                        </div>
                    }
                    <a href={`${title === "navakaraṆa vinyāsa" ? "#about-navakarana-vinyasa" : (title == "FORMAZIONE DI NAVAKARAṆA VINYĀSA" ? "#about-formazioni" : "#about-anubhuti")}`} className="btn-scopri"
                        style={{borderColor: hovered ? mainColor : undefined}}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                        <button className="textButton justify-items-center z-30">
                            SCOPRI
                        </button>
                    </a>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                        <Wave />
                    </div>
            </div>
    )
}

export default HeroComponent