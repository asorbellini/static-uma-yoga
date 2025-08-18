
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}


export default ScrollToTopOnRouteChange
