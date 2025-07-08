import { InstagramIcon } from "./Icons";
import UmaLogo from "./Logo";

function Footer() {
  return (
    <footer className="bg-white text-center py-6 px-4 text-sm text-oscuro">
      <div className="flex flex-row">
        <div className="flex-1">
          <UmaLogo colorFill='#5c7c5c'classname="w-16 h-16"/>
        </div>
        <div className="flex-1">
          <h1 className="text-lg uppercase underline">Link Utili</h1>
          <a href="/retreat-e-workshop" className="hover:text-oscuro/80">
            <p>Retreat e Workshop</p>
          </a>
          <a href="/contatti" className="hover:text-oscuro/80">
            <p>Contatti</p>
          </a>
        </div>
        <div className="flex-1">
          <h1 className="text-lg uppercase underline w-">Seguici su</h1>
          <a href="https://www.instagram.com/uma.retreats/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center mt-2">
            <InstagramIcon />
          </a>
        </div>

      </div>
      <p className="px-12 text-center">
         {new Date().getFullYear()} UMĀ Yoga Retreats - All rights reserved || Site by <a href="https://samportafolio.vercel.app/">S.A.M.</a>
      </p>
    </footer>
  );
}

export default Footer;
