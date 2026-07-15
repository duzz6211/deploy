import { Link } from 'react-router-dom'
import ur from '../hooks/useReveal'
import ut from '../hooks/useTilt'

export default function Pc({
  project: pj,
  span: sp = 'col-6',
  wide: wd = false,
  delay: dl = 0,
  animateIn: ai = false,
}) {
  const rr = ur()
  const tr = ut()
  const setR = (el) => {
    rr.current = el
    tr.current = el
  }

  const c = [
    'proj',
    sp,
    wd ? 'wide' : '',
    ai ? 'card-in' : 'reveal',
    !ai && dl ? `d${dl}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link ref={setR} className={c} to="/contact">
      <img src={pj.img} alt={`${pj.title} exhibition project`} />
      <div className="veil" />
      <div className="spot" />
      <div className="meta">
        <div className="cat">{pj.cat}</div>
        <h3>{pj.title}</h3>
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
