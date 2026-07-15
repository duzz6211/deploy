import Bn from './Btn'
import Rv from './Reveal'

const Ai = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export default function Cb({ title, lede, label = 'Start a project', to = '/#contact' }) {
  return (
    <section className="cta">
      <div className="wrap">
        <Rv as="h2">{title}</Rv>
        <Rv as="p" delay={1}>
          {lede}
        </Rv>
        <Rv delay={2}>
          <Bn to={to} className="btn lg">
            {label} <Ai />
          </Bn>
        </Rv>
      </div>
    </section>
  )
}
