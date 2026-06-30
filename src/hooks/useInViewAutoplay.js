import { useEffect, useRef, useState } from 'react'

export function useInViewAutoplay(threshold = 0.6) {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isInView) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isInView])

  return { ref, videoRef, isInView }
}
