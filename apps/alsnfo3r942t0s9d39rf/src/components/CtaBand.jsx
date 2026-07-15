import Btn from './Btn'
import Reveal from './Reveal'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

/** Dark full-width CTA band shared across pages. */
export default function CtaBand({ title, lede, label = 'Start a project', to = '/#contact' }) {
  return (
    <section className="cta">
      <div className="wrap">
        <Reveal as="h2">{title}</Reveal>
        <Reveal as="p" delay={1}>
          {lede}
        </Reveal>
        <Reveal delay={2}>
          <Btn to={to} className="btn lg">
            {label} <ArrowIcon />
          </Btn>
        </Reveal>
      </div>
    </section>
  )
}
