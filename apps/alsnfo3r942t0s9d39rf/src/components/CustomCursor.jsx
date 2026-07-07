import { useEffect, useRef } from 'react'

/**
 * Trailing cursor ring (mix-blend difference). Grows over links/buttons.
 * Desktop pointer devices only — hidden via CSS on touch.
 */
export default function CustomCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    let x = -100
    let y = -100
    let cx = -100
    let cy = -100
    let raf = 0

    const loop = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      el.style.left = `${cx.toFixed(1)}px`
      el.style.top = `${cy.toFixed(1)}px`
      raf = requestAnimationFrame(loop)
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      el.classList.remove('is-hidden')
      const interactive = e.target.closest('a, button, .pill, input, select, textarea')
      el.classList.toggle('is-active', !!interactive)
    }
    const onLeave = () => el.classList.add('is-hidden')

    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <div ref={ref} className="cursor-ring is-hidden" aria-hidden="true" />
}
