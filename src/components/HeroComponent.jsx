
import { useState } from "react"
import { getSlug } from "../constants"

function HeroComponent({background, mainColor, logo, title}) {
    const [hovered, setHovered] = useState(false)
    return(
            <div className="relative h-[60vh] w-full flex flex-col items-center justify-center text-white" 
                style={{background: background }}> 
                <img src={logo} alt={`Logo ${title}`} className=""/>
                <div className="py-4 px-8 md:p-12 text-center max-w-pserif">
                    <h1 className="textTitleSection tracking-wider uppercase">{title}</h1>
                </div>
                <a href={`#about-${getSlug(title)}`} className="btn-scopri"
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