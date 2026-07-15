import { Link } from 'react-router-dom'
import Rv from './Reveal'

const OV =
  'linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.55) 46%,rgba(0,0,0,.74) 100%),' +
  'linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.25) 45%,rgba(0,0,0,.62) 100%)'

export default function Ph({ eyebrow, title, lede, crumb, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `${OV},url("${image}")` }}>
      <div className="wrap">
        {eyebrow && (
          <Rv as="p" className="eyebrow">
            {eyebrow}
          </Rv>
        )}
        <Rv as="h1" delay={1}>
          {title}
        </Rv>
        {lede && (
          <Rv as="p" delay={2} className="lede">
            {lede}
          </Rv>
        )}
        {crumb && (
          <Rv as="p" delay={3} className="crumb">
            <Link to="/">Home</Link> &nbsp;/&nbsp; <span>{crumb}</span>
          </Rv>
        )}
      </div>
    </section>
  )
}
