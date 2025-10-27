import { InstagramIcon, WhatsAppIcon } from "./Icons";
import UmaLogo from "./Logo";
import { BothFeets, Spiral, BodyHeart, Road } from "./Icons";

function Footer() {
  return (
    <footer className="bg-dorado/60 p-4 ">
      <div className="flex flex-col px-2 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
          <div className="flex-1 flex flex-row items-center justify-center space-x-2">
            <BothFeets 
              className="size-6 md:size-8" 
              fillColor="#2c2c2c" 
            />
            <Spiral 
              className="size-8 md:size-10" 
              fillColor="#2c2c2c"
            />
            <BodyHeart 
              className="size-8 md:size-10" 
              fillColor="#2c2c2c"
            />
            <Road 
              className="size-8 md:size-10" 
              fillColor="#2c2c2c" 
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <h3 className="text-oscuro font-semibold text-sm uppercase tracking-wider h-6 flex items-top">
              Link Utili
            </h3>
            <div className="grid grid-cols-4 space-x-2 justify-center items-center">
              <a 
                href="/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oscuro hover:text-terracota text-center transition-colors duration-300 text-sm font-normal hover:underline"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oscuro hover:text-terracota text-center transition-colors duration-300 text-sm font-normal hover:underline"
              >
                Condizioni d’uso
              </a>
              <a 
                href="/press-e-media"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oscuro hover:text-terracota text-center transition-colors duration-300 text-sm font-normal hover:underline"
              >
                Press e Media
              </a>
              <a 
                href="/contatti"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-oscuro hover:text-terracota text-center transition-colors duration-300 text-sm font-normal hover:underline"
              >
                Contatti
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-end">
            <h3 className="text-oscuro font-semibold text-sm uppercase tracking-wider h-6 flex text-center">
              Seguici
            </h3>
            <div className="flex justify-center space-x-2">
              <a 
                href="https://www.instagram.com/uma.retreats/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Segui UMĀ su Instagram"
                className="group p-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <InstagramIcon fillColor="#2c2c2c"/>
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vb9vXMHBvvsZAz9TUt1u" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Segui UMĀ sul suo canale WhatsApp"
                className="group p-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                <WhatsAppIcon fillColor="#2c2c2c"/>
              </a>
            </div>
          </div>
        </div>
        <span className="w-[90vw] h-px bg-terracota/50 my-4" />
        <div className="flex items-center justify-center">
            <p className="text-oscuro text-sm font-normal leading-relaxed text-center">
              ©{new Date().getFullYear()} UMĀ Yoga Project - All rights reserved | Site by <a 
                href="https://samportafolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-terracota transition-colors duration-300 font-medium"
              >
                S.A.M.
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
