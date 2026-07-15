import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const OVERLAY =
  'linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.55) 46%,rgba(0,0,0,.74) 100%),' +
  'linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.25) 45%,rgba(0,0,0,.62) 100%)'

/** Dark banner hero for subpages. `title` accepts JSX (use <em> for bold part).
    `eyebrow`, `lede` and `crumb` are optional — omit to render a title-only hero. */
export default function PageHero({ eyebrow, title, lede, crumb, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `${OVERLAY},url("${image}")` }}>
      <div className="wrap">
        {eyebrow && (
          <Reveal as="p" className="eyebrow">
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h1" delay={1}>
          {title}
        </Reveal>
        {lede && (
          <Reveal as="p" delay={2} className="lede">
            {lede}
          </Reveal>
        )}
        {crumb && (
          <Reveal as="p" delay={3} className="crumb">
            <Link to="/">Home</Link> &nbsp;/&nbsp; <span>{crumb}</span>
          </Reveal>
        )}
      </div>
    </section>
  )
}
