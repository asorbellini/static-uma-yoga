import { useEffect, useRef } from 'react'

export function useRevealOnScroll(ref, { threshold = 0.3, rootMargin = '0px 0px -10% 0px', onReveal }) {
  const didInitialCheck = useRef(false)
  const revealed = useRef(false)
  const isWaitingForInitialScroll = useRef(false)
  const scrollCompleteReceived = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Función para manejar el scroll automático completado
    const handleScrollComplete = () => {
      scrollCompleteReceived.current = true
      isWaitingForInitialScroll.current = false
      
      // Forzar una nueva verificación del observer después del scroll automático
      setTimeout(() => {
        if (el && !revealed.current) {
          const rect = el.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0
          if (isVisible) {
            revealed.current = true
            onReveal?.()
          }
        }
      }, 100)
    }

    // Escuchar el evento de scroll automático completado
    window.addEventListener('scrollToTopComplete', handleScrollComplete)

    const observer = new IntersectionObserver(([entry]) => {
      // La 1ª notificación refleja el estado al montar → ignorarla
      if (!didInitialCheck.current) {
        didInitialCheck.current = true
        // Marcar que estamos esperando scroll automático inicial
        isWaitingForInitialScroll.current = true
        return
      }

      // Si estamos esperando scroll automático inicial Y no hemos recibido el evento de completado
      if (isWaitingForInitialScroll.current && !scrollCompleteReceived.current) {
        return
      }

      // Disparar cuando entra realmente (no visible → visible)
      if (entry.isIntersecting && !revealed.current) {
        revealed.current = true
        onReveal?.()
        observer.unobserve(entry.target)
      }
    }, { threshold, rootMargin })

    observer.observe(el)
    
    // Timeout de seguridad: si no recibimos el evento en 2 segundos, activar normalmente
    const safetyTimeout = setTimeout(() => {
      if (isWaitingForInitialScroll.current) {
        isWaitingForInitialScroll.current = false
        scrollCompleteReceived.current = true
      }
    }, 1000)
    
    return () => {
      observer.disconnect()
      window.removeEventListener('scrollToTopComplete', handleScrollComplete)
      clearTimeout(safetyTimeout)
    }
  }, [ref, threshold, rootMargin, onReveal])
}
