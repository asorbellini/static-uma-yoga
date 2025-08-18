import { useEffect, useRef } from 'react'

export function useRevealOnScroll(ref, { threshold = 0.3, rootMargin = '0px 0px -10% 0px', onReveal }) {
  const didInitialCheck = useRef(false)
  const revealed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      // La 1ª notificación refleja el estado al montar → ignorarla
      if (!didInitialCheck.current) {
        didInitialCheck.current = true
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
    return () => observer.disconnect()
  }, [ref, threshold, rootMargin, onReveal])
}
