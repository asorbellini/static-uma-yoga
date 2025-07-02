
import HeroAbout from "../components/HeroAbout";
import ScrollToTop from "../components/ScrollToTop";
import AboutUmaSummary from "../components/AboutUmaSummary";
import ToClasses from "../components/ToClasses"
import Footer from "../components/Footer"

const Members = [
    {name: "Alba Muzzarelli", slug:"alba-muzzarelli"},
    {name: "Diletta Muzzarelli", slug:"diletta-muzzarelli"},
    {name: "Tiziano Sorbellini", slug:"tiziano-sorbellini"}
  ]

function About() {
  return (
    <div className="min-h-screen w-full">
      <HeroAbout />
      <ScrollToTop />
      <AboutUmaSummary />
      <ToClasses />
      <Footer />
    </div>
  );
}

export default About;
