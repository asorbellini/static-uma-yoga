import { InstagramIcon, WhatsAppIcon } from "./Icons";
import UmaLogo from "./Logo";

function Footer() {
  return (
    <footer className="bg-dorado/55 text-center p-4 text-sm">
      <div className="flex sm:flex-row flex-col-reverse items-center space-y-3">
        <div className="hidden sm:flex sm:basis-1/4 justify-center items-center">
            <UmaLogo colorFill='#2E5E55'classname="w-12 h-12"/>
        </div>
        <div className="basis-2/4">
          <p className="text-center text-[#2E5E55] font-normal">
            ©{new Date().getFullYear()} UMĀ Yoga Project - All rights reserved || <a href="/privacy-e-cookie-policy" target="_blank" className="hover:text-terracota">Privacy e Cookie Policy</a> || <a href="https://samportafolio.vercel.app/" target="_blank" className="hover:text-terracota">Site by S.A.M.</a>
          </p>
        </div>
        <div className="basis-1/4">
          <p className="uppercase underline text-[#2E5E55] font-normal">Seguici su</p>
          <div className="flex justify-center items-center space-x-2">
              <a 
                href="https://www.instagram.com/uma.retreats/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Segui UMĀ su Instagram"
              >
                <InstagramIcon fillColor="#2E5E55"/>
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vb9vXMHBvvsZAz9TUt1u " 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Segui UMĀ sul suo canale WhatsApp"
              >
                <WhatsAppIcon fillColor="#2E5E55"/>
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
