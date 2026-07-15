import { Link } from 'react-router-dom'
import um from '../hooks/useMagnetic'

const Ai = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Bn({ to, href, className = 'btn', arrow = false, children, ...rest }) {
  const rf = um()
  const ct = (
    <>
      {children}
      {arrow && <Ai />}
    </>
  )
  if (to)
    return (
      <Link ref={rf} to={to} className={className} {...rest}>
        {ct}
      </Link>
    )
  if (href)
    return (
      <a ref={rf} href={href} className={className} {...rest}>
        {ct}
      </a>
    )
  return (
    <button ref={rf} className={className} {...rest}>
      {ct}
    </button>
  )
}
