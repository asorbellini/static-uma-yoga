import ContactForm from "../components/ContactForm.jsx"
import Footer from "../components/Footer.jsx"

function ContactUs() {
    return(
        <div className="min-h-screen w-full">
            {/* Hero */}
            <div className="relative min-h-screen w-full flex flex-col justify-center items-center text-white bg-gradient-to-br from-dorado to-verdeBosque py-16" > 
                <div className="z-20 px-12 py-8">
                    <h1 className="textTitleSection uppercase py-4">Contatti </h1>
                    <p className="textDetail max-w-3xl text-center">Hai delle domande? Vuoi maggiori informazioni sui nostri servizi? Compila il modulo di contatto qui sotto e ti risponderemo al più presto. Oppure qui sotto trovi i nostri contatti Instagram.</p>
                </div>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs