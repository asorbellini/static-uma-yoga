
import Hero from "../components/Hero.jsx"
import NewSetter from "../components/NewSetter.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"
import UmaSummary from "../components/UmaSummary.jsx"

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <ScrollToTop />
      <UmaSummary />
      <NewSetter />
    </div>
  )
}

export default Home