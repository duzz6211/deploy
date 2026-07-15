import { useEffect, useRef, useState } from 'react'

export default function uc(tg, du = 1600) {
  const rf = useRef(null)
  const [v, setV] = useState(0)
  const sd = useRef(false)

  useEffect(() => {
    const el = rf.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(tg)
      return
    }
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (!e.isIntersecting || sd.current) return
          sd.current = true
          io.unobserve(el)
          const t0 = performance.now()
          const tk = (nw) => {
            const p = Math.min((nw - t0) / du, 1)
            const ed = 1 - Math.pow(1 - p, 3)
            setV(Math.round(tg * ed))
            if (p < 1) requestAnimationFrame(tk)
          }
          requestAnimationFrame(tk)
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [tg, du])

  return [rf, v]
}
