import { InstagramIcon } from "./Icons";
import UmaLogo from "./Logo";

function Footer() {
  return (
    <footer className="bg-claro text-center p-4 text-sm text-oscuro">
      <div className="flex sm:flex-row flex-col items-center space-y-2">
        <div className="basis-1/4">
          <UmaLogo colorFill='#2c2c2c'classname="w-16 h-16"/>
        </div>
        <div className="basis-2/4">
          <p className="text-center text-[#2c2c2c]">
            ©{new Date().getFullYear()} UMĀ Yoga Retreats - All rights reserved || Site by <a href="https://samportafolio.vercel.app/">S.A.M.</a>
          </p>
        </div>
        <div className="basis-1/4">
          <p className="uppercase underline">Siguici su</p>
          <a href="https://www.instagram.com/uma.retreats/" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center mt-2">
            <InstagramIcon fillColor="#2c2c2c"/>
          </a>
        </div>

      </div>
      
    </footer>
  );
}

export default Footer;
