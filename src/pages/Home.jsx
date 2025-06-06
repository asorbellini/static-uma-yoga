
import Hero from "../components/Hero.jsx"
import Header from "../components/Header.jsx"
import Gallery from "../components/Gallery.jsx"
import Contact from "../components/Contact.jsx"
import NewSetter from "../components/NewSetter.jsx"
import Footer from "../components/Footer.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <ScrollToTop />
      <Gallery />
      <Contact  />
      <NewSetter />
      <Footer />
    </div>
  )
}

export default Home