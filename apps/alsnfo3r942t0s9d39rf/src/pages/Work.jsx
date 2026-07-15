import Ph from '../components/PageHero'
import Pc from '../components/ProjectCard'
import Cb from '../components/CtaBand'
import Sc from '../components/StatCounter'
import { IM, PJ, STA } from '../data/content'

export default function Wk() {
  return (
    <>
      <Ph
        title={
          <>
            <em>Our Work</em>
            <br />
            Spaces That Stand Out. Built Anywhere.
          </>
        }
        image={IM.hero}
      />

      <section className="band pad-96 work">
        <div className="wrap">
          <div className="work-grid uniform">
            {PJ.map((p, i) => (
              <Pc key={p.title} project={p} delay={i % 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap">
          <div className="stats">
            {STA.map((s) => (
              <Sc key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <Cb
        title="Have a project in mind?"
        lede="Tell us about your next exhibition and we'll help you turn it into an experience your audience won't forget."
      />
    </>
  )
}
