import { InstagramIcon, WhatsAppIcon } from "./Icons";
import UmaLogo from "./Logo";

function Footer() {
  return (
    <footer className="bg-dorado/60 text-center p-4 text-sm">
      <div className="flex sm:flex-row flex-col-reverse items-center space-y-3">
        <div className="hidden sm:flex sm:basis-1/5 justify-center items-center">
            <UmaLogo colorFill='#2c2c2c'classname="w-12 h-12"/>
        </div>
        <div className="basis-2/5">
          <p className="text-center text-oscuro font-normal">
            ©{new Date().getFullYear()} UMĀ Yoga Project - All rights reserved || <a href="/privacy-e-cookie-policy" target="_blank" className="hover:text-terracota">Privacy e Cookie Policy</a> || <a href="https://samportafolio.vercel.app/" target="_blank" className="hover:text-terracota">Site by S.A.M.</a>
          </p>
        </div>
        <div className="basis-1/5">
          <p className="uppercase underline text-oscuro font-normal">LINK UTILI</p>
          <div className="flex flex-col justify-center items-center space-x-2">
            <a href="/press-e-media" className="btn-secondary hover:text-verdeBosque">
              <p className="textButton">PRESS</p>
            </a>
            <a href="/contatti" className="btn-secondary hover:text-verdeBosque">
              <p className="textButton">CONTATTI</p>
            </a>
          </div>
        </div>
        <div className="basis-1/5">
          <p className="uppercase underline text-oscuro font-normal">Seguici su</p>
          <div className="flex justify-center items-center space-x-2">
              <a 
                href="https://www.instagram.com/uma.retreats/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Segui UMĀ su Instagram"
              >
                <InstagramIcon fillColor="#2c2c2c"/>
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vb9vXMHBvvsZAz9TUt1u " 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Segui UMĀ sul suo canale WhatsApp"
              >
                <WhatsAppIcon fillColor="#2c2c2c"/>
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
