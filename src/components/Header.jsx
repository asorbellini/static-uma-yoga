import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UmaLogo from "./Logo";


const useActiveSection = () => {
    const location = useLocation()
    const [activeSecction, setActiveSeccion] = useState(null)
    useEffect(()=>{
      const path = location.pathname;
      const section = path || ''
      setActiveSeccion(section)
    }, [location])
    return activeSecction
}


const navItems = [{'name':'Chi siamo', 'url':"/chi-siamo"},
  {'name':'Classi', 'url':"/classi"},
  {'name':'Navakaraṇa vinyāsa', 'url':"/navakarana-vinyasa"},
  {'name':'Anubhūti', 'url':"/anubhuti"},
  {'name':'Retreat e workshop', 'url':"/retreat-e-workshop"},
  {'name':'Contatti', 'url':"/contatti"}
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSecction = useActiveSection()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-transparent backdrop-blur-xl shadow-lg py-2 md:py-3" : "bg-transparent py-2 md:py-3"
      }`}
    >
      <nav className="w-full mx-auto px-4 sm:px-6 flex flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <NavLink to="/">
              <UmaLogo />
            {/* <span className="hidden sm:inline">UMĀ YOGA</span>
            <span className="sm:hidden">UMĀ</span> */}
          </NavLink>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex flex-row space-x-6 xl:space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className="uppercase text-xs md:text-sm xl:text-base font-medium tracking-wide text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${activeSecction === `${item.url}` ? "w-full": ""}`}></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-neutral-200 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } bg-transparent backdrop-blur-md border-t border-stone-200/50`}
      >
        <ul className="w-full mx-auto px-4 sm:px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className="block text-base font-medium tracking-wide text-white hover:text-white transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header