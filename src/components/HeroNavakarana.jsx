import logoNavakarana from "../assets/images/logoNavakarana.png"

function HeroNavakarana() {
    return(
            <div className="relative h-[60vh] w-full flex flex-row items-center justify-center text-white" 
                style={{
                background: "linear-gradient(45deg, #581414 0%, #921e1e 25%,  #a33c3c 50%, #b23d3d 75%, #b64c4c 100%)",
            }}> 
                <img src={logoNavakarana} alt="Logo Navakarana" className="absolute top-[40%]"/>
                <div className="absolute top-1/2 z-20 p-12 text-center">
                    <h1 className="text-2xl md:text-5xl p-2 md:p-4 rounded font-quicksand font-semibold uppercase
                    ">NavakaraṆa vinyāsa</h1>
                </div>
            </div>
    )
}

export default HeroNavakarana