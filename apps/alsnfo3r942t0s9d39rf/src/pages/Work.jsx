import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import CtaBand from '../components/CtaBand'
import StatCounter from '../components/StatCounter'
import { IMG, PROJECTS, STATS } from '../data/content'

export default function Work() {
  return (
    <>
      <PageHero
        title={
          <>
            <em>Our Work</em>
            <br />
            Spaces That Stand Out. Built Anywhere.
          </>
        }
        image={IMG.hero}
      />

      <section className="band pad-96 work">
        <div className="wrap">
          <div className="work-grid uniform">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={i % 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap">
          <div className="stats">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        lede="Tell us about your next exhibition and we'll help you turn it into an experience your audience won't forget."
      />
    </>
  )
}
