import { Link } from 'react-router-dom'
import useMagnetic from '../hooks/useMagnetic'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

/**
 * Magnetic button. Renders a router <Link> (to), plain <a> (href) or <button>.
 * `arrow` appends the shared arrow icon.
 */
export default function Btn({ to, href, className = 'btn', arrow = false, children, ...rest }) {
  const ref = useMagnetic()
  const content = (
    <>
      {children}
      {arrow && <ArrowIcon />}
    </>
  )
  if (to)
    return (
      <Link ref={ref} to={to} className={className} {...rest}>
        {content}
      </Link>
    )
  if (href)
    return (
      <a ref={ref} href={href} className={className} {...rest}>
        {content}
      </a>
    )
  return (
    <button ref={ref} className={className} {...rest}>
      {content}
    </button>
  )
}
