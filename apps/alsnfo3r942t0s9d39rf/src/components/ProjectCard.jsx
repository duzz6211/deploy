import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import useTilt from '../hooks/useTilt'

/**
 * Work-grid card with 3D tilt + cursor spotlight.
 * Default: scroll-reveal entrance. `animateIn`: immediate card-in animation
 * (used when the Work page filter re-renders the grid).
 */
export default function ProjectCard({ project, span = 'col-6', wide = false, delay = 0, animateIn = false }) {
  const revealRef = useReveal()
  const tiltRef = useTilt()
  const setRefs = (el) => {
    revealRef.current = el
    tiltRef.current = el
  }

  const cls = [
    'proj',
    span,
    wide ? 'wide' : '',
    animateIn ? 'card-in' : 'reveal',
    !animateIn && delay ? `d${delay}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link ref={setRefs} className={cls} to="/contact">
      <img src={project.img} alt={`${project.title} exhibition project`} />
      <div className="veil" />
      <div className="spot" />
      <div className="meta">
        <div className="cat">{project.cat}</div>
        <h3>{project.title}</h3>
        <span className="go">
          View case study{' '}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
