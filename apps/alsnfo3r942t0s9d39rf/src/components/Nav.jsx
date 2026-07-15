import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asset/logo/517_logo_1.svg'

const LK = [
  { hash: '#home', label: 'Home' },
  { hash: '#work', label: 'Work' },
  { hash: '#about', label: 'About' },
  { hash: '#contact', label: 'Contact' },
]

function Bd({ onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick}>
      <img className="logo-img" src={logo} alt="517 EXHIBITS" />
    </Link>
  )
}

export default function Nv() {
  const { pathname, hash } = useLocation()
  const [sc, setSc] = useState(false)
  const [op, setOp] = useState(false)

  useEffect(() => {
    const oS = () => setSc(window.scrollY > 60)
    oS()
    window.addEventListener('scroll', oS, { passive: true })
    return () => window.removeEventListener('scroll', oS)
  }, [])

  useEffect(() => {
    document.body.style.overflow = op ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [op])

  const cl = () => setOp(false)
  const iA = (h) => pathname === '/' && (hash === h || (!hash && h === '#home'))

  return (
    <>
      <header className={`nav${sc ? ' scrolled' : ''}`}>
        <div className="wrap">
          <Bd />
          <div className="nav-right">
            <nav className="navlinks">
              {LK.map((l) => (
                <Link
                  key={l.hash}
                  to={`/${l.hash}`}
                  className={iA(l.hash) ? 'active' : undefined}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <button className="burger" aria-label="Open menu" onClick={() => setOp(true)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${op ? ' open' : ''}`}>
        <div className="mm-head">
          <Bd onClick={cl} />
          <button className="mm-close" aria-label="Close menu" onClick={cl}>
            &times;
          </button>
        </div>
        <nav>
          {LK.map((l) => (
            <Link key={l.hash} to={`/${l.hash}`} onClick={cl}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/#contact" className="btn lg" onClick={cl}>
          Contact us
        </Link>
      </div>
    </>
  )
}
