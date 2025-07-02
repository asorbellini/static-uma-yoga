
import Footer from "../components/Footer.jsx"
import HeroClassi from "../components/HeroClassi.jsx";
import ClassiSection from "../components/ClassiSection.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import ToRetreateWorkshop from "../components/ToRetreateWorkshop.jsx"

function Classes() {
  return (
    <div className="min-h-screen w-full">
        <HeroClassi />
        <ScrollToTop />
        <ClassiSection />
        <ToRetreateWorkshop />
        <Footer />
    </div>
  );
}

export default Classes;