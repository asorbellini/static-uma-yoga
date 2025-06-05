import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UmaLogo from "./Logo";

const navItems = [{'item':'CHI SIAMO', 'url':"/about"},
  {'item':'CLASSI', 'url':"/classes"},
  {'item':'NAVAKARANA VINYASA', 'url':"/navakarana-vinyasa"},
  {'item':'RETREAT E WORKSHOP', 'url':"/retreat-e-workshop"},
  {'item':'CONTATTI', 'url':"/contact-us"}
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-lg py-3 md:py-4" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-light tracking-wider text-neutral-200">
          <NavLink to="/">
              <UmaLogo />
            {/* <span className="hidden sm:inline">UMĀ YOGA</span>
            <span className="sm:hidden">UMĀ</span> */}
          </NavLink>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className="text-xs xl:text-sm font-light tracking-wide text-neutral-200 hover:text-neutral-500 transition-colors duration-300 relative group"
              >
                {item.item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-neutral-200 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } bg-transparent backdrop-blur-md border-t border-stone-200/50`}
      >
        <ul className="container mx-auto px-4 sm:px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.url}
                className="block text-sm font-light tracking-wide text-neutral-200 hover:text-neutral-400 transition-colors duration-300 py-2"
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