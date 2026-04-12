import { useEffect } from 'react'

function useViewportVideo(videoRef, options = {}) {
  const { root = null, rootMargin = '160px 0px', threshold = 0.2 } = options

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      return undefined
    }

    const playVideo = async () => {
      try {
        await video.play()
      } catch {
        // Ignore autoplay failures; the browser may require a user gesture.
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return
        }

        if (entry.isIntersecting) {
          playVideo()
          return
        }

        video.pause()
      },
      { root, rootMargin, threshold },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [root, rootMargin, threshold, videoRef])
}

export default useViewportVideo
