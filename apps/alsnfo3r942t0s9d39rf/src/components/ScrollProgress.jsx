import { useEffect, useRef } from 'react'

export default function Sp() {
  const rf = useRef(null)
  useEffect(() => {
    let ra = 0
    const up = () => {
      const el = rf.current
      if (!el) return
      const mx = document.documentElement.scrollHeight - window.innerHeight
      const p = mx > 0 ? window.scrollY / mx : 0
      el.style.transform = `scaleX(${p.toFixed(4)})`
    }
    const oS = () => {
      cancelAnimationFrame(ra)
      ra = requestAnimationFrame(up)
    }
    up()
    window.addEventListener('scroll', oS, { passive: true })
    window.addEventListener('resize', oS)
    return () => {
      cancelAnimationFrame(ra)
      window.removeEventListener('scroll', oS)
      window.removeEventListener('resize', oS)
    }
  }, [])
  return <div ref={rf} className="scroll-progress" aria-hidden="true" />
}
