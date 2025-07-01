
import Header from "../components/Header";

import NewSetter from "../components/NewSetter.jsx"
import Footer from "../components/Footer.jsx"
import HeroClassi from "../components/HeroClassi.jsx";
import ClassiSection from "../components/ClassiSection.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Classes() {
  return (
    <div className="min-h-screen w-full">
        <Header />
        <HeroClassi />
        <ScrollToTop />
        <ClassiSection />
        <NewSetter />
        <Footer />
    </div>
  );
}

export default Classes;