import { useEffect, useRef } from 'react'

/** 3D tilt + cursor spotlight (sets --mx/--my CSS vars) for cards. */
export default function useTilt(maxDeg = 5) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    let raf = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
        el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
        const rx = ((0.5 - py) * maxDeg * 2).toFixed(2)
        const ry = ((px - 0.5) * maxDeg * 2).toFixed(2)
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.015)`
        el.style.transition = 'transform .12s ease-out'
      })
    }
    const leave = () => {
      cancelAnimationFrame(raf)
      el.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1)'
      el.style.transform = ''
    }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [maxDeg])
  return ref
}
