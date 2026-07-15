import { Link } from 'react-router-dom'
import logo from '../../asset/logo/517_logo_2.svg'
import { COMPANY } from '../data/content'

const SOCIALS = [
  {
    label: 'Instagram',
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'Facebook',
    path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: 'LinkedIn',
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: 'Vimeo',
    path: (
      <path d="M22 7c-.2 1.9-1.5 4.5-4 7.8-2.5 3.4-4.7 5.1-6.4 5.1-1.1 0-2-1-2.7-3-.5-1.8-1-3.6-1.4-5.4-.6-2-1.2-3-1.9-3-.1 0-.6.3-1.3.9L3 8.1c1-.9 1.9-1.7 2.9-2.6C7 4.4 7.9 4 8.5 4c1.5-.2 2.4.9 2.7 3 .4 2.3.6 3.7.8 4.3.4 1.9.9 2.8 1.4 2.8.4 0 1-.6 1.8-1.9.8-1.2 1.2-2.2 1.3-2.8.1-1.2-.4-1.8-1.3-1.8-.5 0-.9.1-1.4.3 1-3 2.7-4.5 5.3-4.4 1.9.1 2.8 1.3 2.7 3.7z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand">
              <img className="logo-img" src={logo} alt="517 EXHIBITS" />
            </div>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <Link to="/work">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <div className="foot-col">
            <address>{COMPANY.office.address}</address>
            <a href={COMPANY.office.telHref}>Tel {COMPANY.office.tel}</a>
            <a href={COMPANY.website} target="_blank" rel="noreferrer">
              {COMPANY.websiteLabel}
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <small>
            © 2026 WhiteFox Inc. All rights reserved. ·{' '}
            <a href="#" style={{ textDecoration: 'underline' }}>
              Privacy Policy
            </a>
          </small>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
