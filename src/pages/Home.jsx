
import Hero from "../components/Hero"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Contact from "../components/Contact"
import NewSetter from "../components/NewSetter.jsx"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop.jsx"

function Home() {
  return (
    <div className="min-h-screen">
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