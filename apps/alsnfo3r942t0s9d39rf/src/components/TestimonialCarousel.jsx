import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/content'

const AUTOPLAY_MS = 6000

/**
 * Testimonial carousel — autoplay (paused on hover), arrows, dots,
 * keyboard arrows and touch swipe.
 */
export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const hovering = useRef(false)
  const touchX = useRef(null)

  const goTo = useCallback((i) => {
    setLeaving(true)
    setTimeout(() => {
      setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length)
      setLeaving(false)
    }, 220)
  }, [])

  // autoplay, paused while hovered
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) goTo(index + 1)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [index, goTo])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goTo(index - 1)
    if (e.key === 'ArrowRight') goTo(index + 1)
  }
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  const t = TESTIMONIALS[index]

  return (
    <Reveal
      delay={1}
      className="testimonial-area"
      tabIndex={0}
      role="region"
      aria-label="Testimonials"
      onKeyDown={onKeyDown}
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="arrow-btn prev" type="button" aria-label="Previous testimonial" onClick={() => goTo(index - 1)}>
        &larr;
      </button>

      <article className={`testimonial-card${leaving ? ' is-leaving' : ''}`}>
        <p className="quote">{t.quote}</p>
        <p className="person">{t.person}</p>
        <p className="project">{t.project}</p>
      </article>

      <button className="arrow-btn next" type="button" aria-label="Next testimonial" onClick={() => goTo(index + 1)}>
        &rarr;
      </button>

      <div className="tdots" aria-label="Testimonial pagination">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`tdot${i === index ? ' active' : ''}`}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </Reveal>
  )
}
