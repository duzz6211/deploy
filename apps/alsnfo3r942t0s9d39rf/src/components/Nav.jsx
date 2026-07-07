import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOGO } from '../data/content'

const LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick}>
      <img className="logo-img" src={LOGO} alt="517 EXHIBITS" />
    </Link>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Brand />
          <div className="nav-right">
            <nav className="navlinks">
              {LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mm-head">
          <Brand onClick={close} />
          <button className="mm-close" aria-label="Close menu" onClick={close}>
            &times;
          </button>
        </div>
        <nav>
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={close}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn lg" onClick={close}>
          Contact us
        </Link>
      </div>
    </>
  )
}
