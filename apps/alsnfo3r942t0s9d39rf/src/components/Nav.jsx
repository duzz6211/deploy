import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asset/logo/517_logo_1.svg'

/* The site is one page: every menu entry is an anchor into it. The /work page is
   reached only through the "View more" button in the Work teaser. */
const LINKS = [
  { hash: '#home', label: 'Home' },
  { hash: '#work', label: 'Work' },
  { hash: '#about', label: 'About' },
  { hash: '#contact', label: 'Contact' },
]

function Brand({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick}>
      <img className="logo-img" src={logo} alt="517 EXHIBITS" />
    </Link>
  )
}

export default function Nav() {
  const { pathname, hash } = useLocation()
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
  // on the home page with no hash, the hero is what you are looking at
  const isActive = (h) => pathname === '/' && (hash === h || (!hash && h === '#home'))

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Brand />
          <div className="nav-right">
            <nav className="navlinks">
              {LINKS.map((l) => (
                <Link
                  key={l.hash}
                  to={`/${l.hash}`}
                  className={isActive(l.hash) ? 'active' : undefined}
                >
                  {l.label}
                </Link>
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
            <Link key={l.hash} to={`/${l.hash}`} onClick={close}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/#contact" className="btn lg" onClick={close}>
          Contact us
        </Link>
      </div>
    </>
  )
}
