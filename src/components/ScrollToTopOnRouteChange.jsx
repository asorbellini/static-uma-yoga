
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      // Forzar scroll inmediato sin animación
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // Restaurar smooth scrolling después de un breve delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    }
  }, [pathname, hash])

  return null
}


export default ScrollToTopOnRouteChange
