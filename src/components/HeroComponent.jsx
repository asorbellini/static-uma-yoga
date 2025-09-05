
import { useState } from "react"

function HeroComponent({background, mainColor, logo, title}) {
    const [hovered, setHovered] = useState(false)
    return(
            <div className="relative h-[60vh] w-full flex flex-col items-center justify-center" 
                style={{background: background }}>
                    <div className="mt-16">
                        <img src={logo} alt={`Logo ${title}`} className="h-28"/>
                    </div> 
                <div className="py-4 px-8 md:px-12 text-center max-w-pserif">
                    <h1 className="textTitleSection tracking-wider uppercase text-white drop-shadow-title">{title}</h1>
                </div>
                <a href={`${title === "navakaraṆa vinyāsa" ? "#about-navakarana-vinyasa" :"#about-anubhuti"}`} className="btn-scopri"
                    style={{borderColor: hovered ? mainColor : undefined}}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <button className="textButton justify-items-center">
                        SCOPRI
                    </button>
                </a>
            </div>
    )
}

export default HeroComponent