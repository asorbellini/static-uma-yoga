import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react";
// import Classes from "./pages/Classes.jsx"
import Header from "./components/Header.jsx"
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange.jsx"
import { PageLoading } from "./components/LoadingFootPrints.jsx"
import Footer from "./components/Footer.jsx"
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const MemberDetail = lazy(() => import("./pages/MemberDetail.jsx"));
const NavakaranaVinyasa = lazy(() => import("./pages/NavakaranaVinyasa.jsx"));
const Anubhuti = lazy(() => import("./pages/Anubhuti.jsx"));
const RetreateWorkshop = lazy(() => import("./pages/RetreateWorkshop.jsx"));
const ReW = lazy(() => import("./pages/ReWDetail.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));
const Press = lazy(() => import("./pages/Press.jsx"));
const FormazioniNavakaranaVinyasa = lazy(() => import("./pages/Formazioni.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"))

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <Router>
        <ScrollToTopOnRouteChange />
        <Header />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<About />}/>
            <Route path="/chi-siamo/:memberName" element={<MemberDetail />}/>
            <Route path="/navakarana-vinyasa" element={<NavakaranaVinyasa />} />
            <Route path="/anubhuti" element={<Anubhuti />} />
            <Route path="/retreat-e-workshop" element={<RetreateWorkshop />} />
            <Route path="/:type/:slug" element={<ReW />} />
            <Route path="/contatti" element={<ContactUs />} />  
            <Route path="/press-e-media" element={<Press />} /> 
            <Route path="/formazioni-navakarana-vinyasa" element={<FormazioniNavakaranaVinyasa />} /> 
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
