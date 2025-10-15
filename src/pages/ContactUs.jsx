import { BothFeets, BodyHeart, Road, Spiral } from "../components/Icons.jsx"
import ContactForm from "../components/ContactForm.jsx"

function ContactUs() {
    return(
        <div className="min-h-dvh w-full">
            <div className="relative min-h-dvh w-full flex flex-col justify-center items-center text-white bg-gradient-to-br from-dorado to-verdeBosque py-16" >
                <div className="relative w-full">
                    <div className="absolute w-full h-full flex justify-center items-center z-10 opacity-20"> 
                        <div className="grid grid-cols-4 gap-10 md:gap-12 lg:gap-16 items-center justify-items-center mx-auto">
                            <div className="flex items-center justify-center animate-pulse">
                                <BothFeets 
                                className="size-32 md:size-36 lg:size-40 xl:size-44 transition-all duration-300" 
                                fillColor="#ffffff" 
                                />
                            </div>
                            <div className="flex items-center justify-center animate-pulse">
                                <Spiral 
                                    className="size-36 md:size-40 lg:size-44 xl:size-48 transition-all duration-300" 
                                    fillColor="#ffffff"
                                />
                            </div>
                            <div className="flex items-center justify-center animate-pulse">
                                <BodyHeart 
                                    className="size-36 md:size-40 lg:size-44 xl:size-48 transition-all duration-300" 
                                    fillColor="#ffffff"
                                />
                            </div>
                            <div className="flex items-center justify-center animate-pulse">
                                <Road 
                                    className="size-36 md:size-40 lg:size-44 xl:size-48 transition-all duration-300" 
                                    fillColor="#ffffff" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="z-30 px-12 py-4 md:py-8">
                        <h1 className="textTitleSection tracking-wider uppercase py-4 text-white drop-shadow-title">Contatti </h1>
                        <p className="textDetail font-normal text-center text-white drop-shadow-text">Hai una domanda? Scrivici pure qui sotto.<br />Promesso: niente risposte automatiche, solo persone vere.</p>
                    </div>
                </div> 
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs