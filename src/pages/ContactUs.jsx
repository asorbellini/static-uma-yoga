import ContactForm from "../components/ContactForm.jsx"

function ContactUs() {
    return(
        <div className="min-h-dvh w-full">
            <div className="relative min-h-dvh w-full flex flex-col justify-center items-center text-white bg-gradient-to-br from-dorado to-verdeBosque py-16" > 
                <div className="z-20 px-12 py-4 md:py-8">
                    <h1 className="textTitleSection tracking-wider uppercase py-4 text-white ">Contatti </h1>
                    <p className="textDetail max-w-3xl text-center text-white ">Hai delle domande? Vuoi maggiori informazioni sui nostri servizi? <br />Compila il modulo di contatto qui sotto. </p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs