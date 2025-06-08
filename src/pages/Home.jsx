
import Hero from "../components/Hero.jsx"
import Header from "../components/Header.jsx"
import NewSetter from "../components/NewSetter.jsx"
import Footer from "../components/Footer.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"
import UmaSummary from "../components/UmaSummary.jsx"

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <ScrollToTop />
      <UmaSummary />
      <NewSetter />
      <Footer />
    </div>
  )
}

export default Home