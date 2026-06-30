import { useEffect } from 'react'

export function useInstagramEmbed(active) {
  useEffect(() => {
    if (!active) return

    const process = () => {
      if (window.instgrm) window.instgrm.Embeds.process()
    }

    if (window.instgrm) {
      process()
      return
    }

    const existing = document.querySelector('script[src*="instagram.com/embed.js"]')
    if (existing) {
      existing.addEventListener('load', process)
      return () => existing.removeEventListener('load', process)
    }

    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = process
    document.body.appendChild(script)
  }, [active])
}
