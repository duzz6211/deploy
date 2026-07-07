import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import CtaBand from '../components/CtaBand'
import StatCounter from '../components/StatCounter'
import Reveal from '../components/Reveal'
import { IMG, PROJECTS, FILTERS, STATS } from '../data/content'

/* Grid span pattern for the full 12-photo gallery / filtered layouts.
   Rows: 7+5 / 5+7 / 4+4+4 / 7+5 / 4+4+4 — wide slots (0,3,7) line up with landscape photos. */
const FULL_PATTERN = [
  { span: 'col-7', wide: true },
  { span: 'col-5', wide: false },
  { span: 'col-5', wide: false },
  { span: 'col-7', wide: true },
  { span: 'col-4', wide: false },
  { span: 'col-4', wide: false },
  { span: 'col-4', wide: false },
  { span: 'col-7', wide: true },
  { span: 'col-5', wide: false },
  { span: 'col-4', wide: false },
  { span: 'col-4', wide: false },
  { span: 'col-4', wide: false },
]

function spanFor(i, total) {
  if (total >= 7) return FULL_PATTERN[i % FULL_PATTERN.length]
  // filtered views: alternate wide/tall pairs
  return i % 2 === 0 ? { span: 'col-7', wide: true } : { span: 'col-5', wide: false }
}

export default function Work() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.filter === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={
          <>
            Exhibitions that <em>move people</em>.
          </>
        }
        lede="A selection of immersive environments we've designed, built and delivered for global brands — from trade show floors to flagship brand experiences."
        crumb="Work"
        image={IMG.hero}
      />

      <section className="band pad-96 work">
        <div className="wrap">
          <Reveal className="filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`pill${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </Reveal>

          {/* key on filter re-mounts the grid so cards replay their entrance */}
          <div className="work-grid" key={filter}>
            {visible.map((p, i) => {
              const { span, wide } = spanFor(i, visible.length)
              return (
                <ProjectCard
                  key={p.title}
                  project={p}
                  span={span}
                  wide={wide}
                  delay={i % 2}
                  animateIn={filter !== 'All'}
                />
              )
            })}
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
