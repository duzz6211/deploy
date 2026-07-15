import { useEffect, useRef } from 'react'

export default function ut(mx = 5) {
  const rf = useRef(null)
  useEffect(() => {
    const el = rf.current
    if (!el) return
    if (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    let ra = 0
    const mv = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      cancelAnimationFrame(ra)
      ra = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
        el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
        const rx = ((0.5 - py) * mx * 2).toFixed(2)
        const ry = ((px - 0.5) * mx * 2).toFixed(2)
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`
        el.style.transition = 'transform .12s ease-out'
      })
    }
    const lv = () => {
      cancelAnimationFrame(ra)
      el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)'
      el.style.transform = ''
    }
    el.addEventListener('mousemove', mv)
    el.addEventListener('mouseleave', lv)
    return () => {
      cancelAnimationFrame(ra)
      el.removeEventListener('mousemove', mv)
      el.removeEventListener('mouseleave', lv)
    }
  }, [mx])
  return rf
}
