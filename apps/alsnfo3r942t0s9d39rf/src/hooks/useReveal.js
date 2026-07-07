import { useEffect, useRef } from 'react'

let io = null
function getObserver() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
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

/** Adds the shared scroll-reveal IntersectionObserver to the returned ref. */
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    getObserver().observe(el)
    return () => io && io.unobserve(el)
  }, [])
  return ref
}
