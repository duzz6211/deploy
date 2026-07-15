import { useEffect, useRef } from 'react'

export default function um(sg = 0.28) {
  const rf = useRef(null)
  useEffect(() => {
    const el = rf.current
    if (!el) return
    if (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    const mv = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * sg
      const y = (e.clientY - r.top - r.height / 2) * sg
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
    }
    const lv = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', mv)
    el.addEventListener('mouseleave', lv)
    return () => {
      el.removeEventListener('mousemove', mv)
      el.removeEventListener('mouseleave', lv)
    }
  }, [sg])
  return rf
}
