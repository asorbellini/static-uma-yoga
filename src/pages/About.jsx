
import HeroAbout from "../components/HeroAbout";
import ScrollToTop from "../components/ScrollToTop";
import AboutUmaSummary from "../components/AboutUmaSummary";
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"
import Footer from "../components/Footer"


function About() {
  return (
    <div className="min-h-screen w-full">
      <HeroAbout />
      <ScrollToTop />
      <AboutUmaSummary />
      <ToRetreateWorkshop />
      <Footer />
    </div>
  );
}

export default About;
