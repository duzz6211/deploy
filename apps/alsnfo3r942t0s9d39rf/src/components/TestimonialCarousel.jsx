import { useCallback, useEffect, useRef, useState } from 'react'
import Rv from './Reveal'
import { TS } from '../data/content'

const AM = 6000

export default function Tc() {
  const [ix, setIx] = useState(0)
  const [lv, setLv] = useState(false)
  const hv = useRef(false)
  const tx = useRef(null)

  const gT = useCallback((i) => {
    setLv(true)
    setTimeout(() => {
      setIx((i + TS.length) % TS.length)
      setLv(false)
    }, 220)
  }, [])

  useEffect(() => {
    const iid = setInterval(() => {
      if (!hv.current) gT(ix + 1)
    }, AM)
    return () => clearInterval(iid)
  }, [ix, gT])

  const oK = (e) => {
    if (e.key === 'ArrowLeft') gT(ix - 1)
    if (e.key === 'ArrowRight') gT(ix + 1)
  }
  const oTs = (e) => {
    tx.current = e.touches[0].clientX
  }
  const oTe = (e) => {
    if (tx.current == null) return
    const dx = e.changedTouches[0].clientX - tx.current
    if (Math.abs(dx) > 40) gT(ix + (dx < 0 ? 1 : -1))
    tx.current = null
  }

  const cr = TS[ix]

  return (
    <Rv
      delay={1}
      className="testimonial-area"
      tabIndex={0}
      role="region"
      aria-label="Testimonials"
      onKeyDown={oK}
      onMouseEnter={() => (hv.current = true)}
      onMouseLeave={() => (hv.current = false)}
      onTouchStart={oTs}
      onTouchEnd={oTe}
    >
      <button className="arrow-btn prev" type="button" aria-label="Previous testimonial" onClick={() => gT(ix - 1)}>
        &larr;
      </button>

      <article className={`testimonial-card${lv ? ' is-leaving' : ''}`}>
        <p className="quote">{cr.quote}</p>
        <p className="person">{cr.person}</p>
        <p className="project">{cr.project}</p>
      </article>

      <button className="arrow-btn next" type="button" aria-label="Next testimonial" onClick={() => gT(ix + 1)}>
        &rarr;
      </button>

      <div className="tdots" aria-label="Testimonial pagination">
        {TS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`tdot${i === ix ? ' active' : ''}`}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => gT(i)}
          />
        ))}
      </div>
    </Rv>
  )
}
