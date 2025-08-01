import { InstagramIcon } from "./Icons";
import UmaLogo from "./Logo";

function Footer() {
  return (
    <footer className="bg-claro text-center p-4 text-sm text-oscuro">
      <div className="flex sm:flex-row flex-col-reverse items-center space-y-3">
        <div className="hidden sm:flex sm:basis-1/4 justify-center items-center">
            <UmaLogo colorFill='#21524C'classname="w-12 h-12"/>
        </div>
        <div className="basis-2/4">
          <p className="text-center text-[#21524C]">
            ©{new Date().getFullYear()} UMĀ Yoga Project - All rights reserved || <a href="/privacy-e-cookie-policy" target="_blank" className="hover:text-terracota">Privacy e Cookie Policy</a> || <a href="https://samportafolio.vercel.app/">Site by S.A.M.</a>
          </p>
        </div>
        <div className="basis-1/4">
          <p className="uppercase underline text-[#21524C]">Siguici su</p>
          <a href="https://www.instagram.com/uma.retreats/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center">
            <InstagramIcon fillColor="#21524C"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
