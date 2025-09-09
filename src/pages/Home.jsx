
import Hero from "../components/Hero.jsx"
import NewsLetter from "../components/NewsLetter.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"
import UmaSummary from "../components/UmaSummary.jsx"

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <ScrollToTop />
      <UmaSummary />
      <NewsLetter />
    </div>
  )
}

export default Home