import { useState } from 'react'
import Rv from './Reveal'
import St from './SectionTitle'
import { CO } from '../data/content'

const IN = { name: '', email: '', show: '', booth: '', req: '' }

export default function Cs() {
  const [fm, setFm] = useState(IN)
  const [er, setEr] = useState({})
  const [su, setSu] = useState('idle')

  const s2 = (k) => (e) => {
    setFm({ ...fm, [k]: e.target.value })
    if (er[k]) setEr({ ...er, [k]: undefined })
  }

  const vd = () => {
    const es = {}
    if (!fm.name.trim()) es.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fm.email)) es.email = 'Please enter a valid email.'
    return es
  }

  const oSub = (e) => {
    e.preventDefault()
    const es = vd()
    setEr(es)
    if (Object.keys(es).length) return
    setSu('sending')
    setTimeout(() => {
      setSu('sent')
      setFm(IN)
    }, 900)
  }

  return (
    <>
      <St id="contact">Contact</St>
      <section className="band pad-96 alt">
        <div className="wrap">
          <div className="contact-grid">
            <Rv className="contact-copy">
              <h2>Tell us about yourself.</h2>
              <p>
                Share a few details about your project and our team will be in touch to talk through
                how we can help.
              </p>
              <div className="contact-info">
                <a href={CO.office.telHref}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  Tel {CO.office.tel}
                </a>
                <a href={CO.website} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
                  </svg>
                  {CO.websiteLabel}
                </a>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    {CO.office.address}
                    <br />
                    {CO.office.language}
                  </span>
                </div>
              </div>
            </Rv>

            <Rv as="form" delay={1} onSubmit={oSub} noValidate>
              <div className={`field${er.name ? ' has-error' : ''}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={fm.name}
                  onChange={s2('name')}
                  required
                />
                {er.name && <span className="err">{er.name}</span>}
              </div>
              <div className={`field${er.email ? ' has-error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={fm.email}
                  onChange={s2('email')}
                  required
                />
                {er.email && <span className="err">{er.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="show">Show name</label>
                <input
                  id="show"
                  type="text"
                  placeholder="e.g. CES 2026"
                  value={fm.show}
                  onChange={s2('show')}
                />
              </div>
              <div className="field">
                <label htmlFor="booth">Booth dimensions</label>
                <input
                  id="booth"
                  type="text"
                  placeholder="e.g. 20 x 20 ft"
                  value={fm.booth}
                  onChange={s2('booth')}
                />
              </div>
              <div className="field full">
                <label htmlFor="req">Specific booth requirements</label>
                <textarea
                  id="req"
                  placeholder="Tell us about your goals, timeline and any must-haves…"
                  value={fm.req}
                  onChange={s2('req')}
                />
              </div>
              <div className="field full">
                <button
                  type="submit"
                  className={`btn lg${su === 'sending' ? ' is-sending' : ''}`}
                  style={{ width: '100%' }}
                  disabled={su === 'sending'}
                >
                  {su === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </div>
              {su === 'sent' && (
                <p className="form-status" role="status">
                  Message sent ✓ — we'll be in touch shortly.
                </p>
              )}
            </Rv>
          </div>
        </div>
      </section>
    </>
  )
}
