import { useEffect, useState } from 'react'

function useInViewport(targetRef, options = {}) {
  const { root = null, rootMargin = '0px', threshold = 0.2 } = options
  const [isInViewport, setIsInViewport] = useState(false)

  useEffect(() => {
    const target = targetRef.current
    if (!target) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(Boolean(entry?.isIntersecting))
      },
      { root, rootMargin, threshold },
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [root, rootMargin, targetRef, threshold])

  return isInViewport
}

export default useInViewport
