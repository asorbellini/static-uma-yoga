
import HeroAbout from "../components/HeroAbout";
import ScrollToTop from "../components/ScrollToTop";
import AboutUmaSummary from "../components/AboutUmaSummary";
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"


function About() {
  return (
    <div className="min-h-screen w-full">
      <ScrollToTop />
      <HeroAbout />
      <AboutUmaSummary />
      <ToRetreateWorkshop />
    </div>
  );
}

export default About;
