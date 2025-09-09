
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId)
      if (element) {
        // Scroll hacia el elemento
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
        
        // Evento cuando termina el scroll automático
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('scrollToTopComplete', {
            detail: { type: 'element', elementId }
          }))
        }, 800) // Tiempo suficiente para que termine el scroll
        
        return true
      }
      return false
    }

    const scrollToTop = () => {
      // Forzar scroll inmediato sin animación al top
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      // Restaurar smooth scrolling después de un breve delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
      
      // Evento cuando termina el scroll automático al top
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('scrollToTopComplete', {
          detail: { type: 'top' }
        }))
      }, 200) // Tiempo para que termine el scroll al top
    }

    if (hash) {
      // Remover el # del hash para obtener el ID del elemento
      const elementId = hash.substring(1)
      
      // Intentar hacer scroll al elemento
      if (scrollToElement(elementId)) {
        return
      }
      
      // Si el elemento no existe inmediatamente, esperar un poco más
      const timeoutId = setTimeout(() => {
        if (!scrollToElement(elementId)) {
          // Si después del timeout tampoco existe, hacer scroll al top
          scrollToTop()
        }
      }, 300)

      // Cleanup del timeout si el componente se desmonta
      return () => clearTimeout(timeoutId)
    } else {
      // No hay hash, hacer scroll al top
      scrollToTop()
    }
  }, [pathname, hash])

  return null
}


export default ScrollToTopOnRouteChange
