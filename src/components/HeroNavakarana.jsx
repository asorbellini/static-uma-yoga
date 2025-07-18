import logoNavakarana from "../assets/images/LogoNavakarana.png"

function HeroNavakarana() {
    return(
            <div className="relative h-[80vh] w-full flex flex-row items-center justify-center text-white" 
                style={{
                background: "linear-gradient(45deg, #581414 0%, #921e1e 25%,  #a33c3c 50%, #b23d3d 75%, #b64c4c 100%)",
            }}> 
                <img src={logoNavakarana} alt="Logo Navakarana" className="absolute top-[40%]"/>
                <div className="absolute top-1/2 z-20 p-12 text-center max-w-pserif">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl rounded font-serif text-white font-medium text-center drop-shadow-2xl uppercase
                    ">NavakaraṆa vinyāsa</h1>
                </div>
                <div className="absolute bottom-0 border-2 border-white rounded hover:border-[#581414] hover:bg-claro transition-all duration-500 px-6 py-3 my-8 flex justify-center items-center text-white hover:text-oscuro max-w-fit">
                    <a href="#about-navakarana">
                        <button className=" text-sm font-semibold tracking-wide justify-items-center">
                            SCOPRI
                        </button>
                    </a>
                </div>
            </div>
    )
}

export default HeroNavakarana