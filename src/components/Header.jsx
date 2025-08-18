import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import UmaLogo from "./Logo.jsx";
import { MenuAndCloseIcon } from "./Icons.jsx";

const useActiveSection = () => {
    const location = useLocation()
    const [activeSeccion, setActiveSeccion] = useState(null)
    useEffect(()=>{
      const path = location.pathname;
      const section = path || ''
      setActiveSeccion(section)
    }, [location])
    return activeSeccion
}


const navItems = [{'name':'Home', 'url':"/"},
  {'name':'Chi siamo', 'url':"/chi-siamo"},
  {'name':'Retreat e workshop', 'url':"/retreat-e-workshop"},
  {'name':'Navakaraṇa vinyāsa', 'url':"/navakarana-vinyasa"},
  {'name':'Anubhūti', 'url':"/anubhuti"},
  {'name':'Contatti', 'url':"/contatti"}
]
/* {'name':'Classi', 'url':"/classi"}, */

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSeccion = useActiveSection()
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 30)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-verdeBosque bg-opacity-40 backdrop-blur-xl shadow-lg " : "bg-transparent py-2 md:py-3"
      }`}
    >
      <nav className="w-full mx-auto flex flex-row justify-between items-center px-2 md:px-4">
        {/* Logo */}
        <div>
          <NavLink to="/">
              <UmaLogo classname="w-12 h-12 md:w-16 md:h-16"/>
          </NavLink>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex md:flex-row md:text-center md:items-center">
          {navItems.map((item, index) => (
            <li key={index} className="md:px-2 lg:px-4">
              <NavLink
                to={item.url}
                className="md:text-xs lg:text-sm font-serif tracking-wider text-white uppercase transition-colors duration-300 relative group"
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${activeSeccion === `${item.url}` ? "w-full": ""}`} />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <MenuAndCloseIcon isMobileMenuOpen={isMobileMenuOpen} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "min-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } bg-transparent backdrop-blur-xl border-t border-white/50`}
        role="navigation"
        aria-label="Menu mobile"
      >
        <ul className="w-full px-4">
          {navItems.map((item, index) => (
            <li key={index} className="py-2">
              <NavLink
                to={item.url}
                className="relative inline-block text-base font-serif tracking-wide text-white transition-colors duration-300 py-2 uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ${(isMobileMenuOpen && activeSeccion === `${item.url}`) ? "w-full": ""}`} />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header