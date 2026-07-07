import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { IMG, COMPANY } from '../data/content'

const INITIAL = { name: '', email: '', phone: '', show: '', booth: '', budget: '', req: '', hear: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value })
    if (errors[k]) setErrors({ ...errors, [k]: undefined })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email.'
    return errs
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    // 실제 전송 API가 준비되면 여기서 fetch로 교체
    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL)
    }, 900)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let's build something <em>unforgettable</em>.
          </>
        }
        lede="Tell us about your next exhibition, trade show display or brand experience — our team will be in touch to talk through how we can help."
        crumb="Contact"
        image={IMG.hero}
      />

      <section className="band pad-96" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Tell us about yourself.</h2>
              <p>Share a few details about your project and our team will be in touch to talk through how we can help.</p>
              <div className="contact-info">
                <a href={COMPANY.koreaHq.telHref}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                  Tel {COMPANY.koreaHq.tel}
                </a>
                <a href={COMPANY.website} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" />
                  </svg>
                  {COMPANY.websiteLabel}
                </a>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    <strong>{COMPANY.koreaHq.label}</strong>
                    <br />
                    {COMPANY.koreaHq.address}
                  </span>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    <strong>{COMPANY.usa.label}</strong>
                    <br />
                    {COMPANY.usa.address}
                  </span>
                </div>
              </div>

              <div className="hours">
                <h4>Office hours</h4>
                <div className="row">
                  Monday – Friday <span>9:00 – 18:00</span>
                </div>
                <div className="row">
                  Saturday <span>By appointment</span>
                </div>
                <div className="row">
                  Sunday <span>Closed</span>
                </div>
              </div>
            </Reveal>

            <Reveal as="form" delay={1} onSubmit={onSubmit} noValidate>
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" value={form.name} onChange={set('name')} required />
                {errors.name && <span className="err">{errors.name}</span>}
              </div>
              <div className={`field${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} required />
                {errors.email && <span className="err">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="Phone number" value={form.phone} onChange={set('phone')} />
              </div>
              <div className="field">
                <label htmlFor="show">Show name</label>
                <input id="show" type="text" placeholder="e.g. CES 2026" value={form.show} onChange={set('show')} />
              </div>
              <div className="field">
                <label htmlFor="booth">Booth dimensions</label>
                <input id="booth" type="text" placeholder="e.g. 20 x 20 ft" value={form.booth} onChange={set('booth')} />
              </div>
              <div className="field">
                <label htmlFor="budget">Budget</label>
                <select id="budget" value={form.budget} onChange={set('budget')}>
                  <option value="">Select a range</option>
                  <option>Under $50k</option>
                  <option>$50k – $100k</option>
                  <option>$100k – $250k</option>
                  <option>$250k+</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="req">Specific booth requirements</label>
                <textarea
                  id="req"
                  placeholder="Tell us about your goals, timeline and any must-haves…"
                  value={form.req}
                  onChange={set('req')}
                />
              </div>
              <div className="field full">
                <label htmlFor="hear">How did you hear about us?</label>
                <input id="hear" type="text" placeholder="Referral, search, social…" value={form.hear} onChange={set('hear')} />
              </div>
              <div className="field full">
                <button
                  type="submit"
                  className={`btn lg${status === 'sending' ? ' is-sending' : ''}`}
                  style={{ width: '100%' }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </div>
              {status === 'sent' && (
                <p className="form-status" role="status">
                  Message sent ✓ — we'll be in touch shortly.
                </p>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
