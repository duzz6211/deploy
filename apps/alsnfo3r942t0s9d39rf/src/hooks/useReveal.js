import { useEffect, useRef } from 'react'

let io = null
function gO() {
  if (!io) {
    io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )
  }
  return io
}

export default function ur() {
  const rf = useRef(null)
  useEffect(() => {
    const el = rf.current
    if (!el) return
    gO().observe(el)
    return () => io && io.unobserve(el)
  }, [])
  return rf
}
