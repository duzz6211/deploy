import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import Reveal from '../components/Reveal'
import Btn from '../components/Btn'
import WorldMap from '../components/WorldMap'
import StatCounter from '../components/StatCounter'
import { IMG, STATS, VALUES } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About 517"
        title={
          <>
            We turn creative vision into <em>immersive experiences</em>.
          </>
        }
        lede="517 EXHIBITS is an experiential design studio specializing in trade show displays, custom brand environments and live events — from concept to completion."
        crumb="About"
        image={IMG.aboutHero}
      />

      {/* Story */}
      <section className="band pad-96">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-copy">
              <p className="eyebrow">Our story</p>
              <h2>Built on craft, obsessed with detail.</h2>
              <p>
                At 517 EXHIBITS, we bring a global perspective and meticulous execution to every project — supporting
                brands from concept to completion. We believe every space should tell a compelling story, and we obsess
                over the details that make that story unforgettable.
              </p>
              <p>
                Our multidisciplinary team of designers, fabricators and producers works as one, so your exhibition is
                delivered on brief, on budget, and on the day it matters most.
              </p>
              <div style={{ marginTop: 30 }}>
                <Btn to="/services" className="btn">
                  Our services
                </Btn>
              </div>
            </Reveal>
            <Reveal delay={1} className="split-media">
              <img src={IMG.about} alt="517 EXHIBITS team crafting an exhibition environment" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="band pad-96 alt">
        <div className="wrap">
          <div className="stats">
            {STATS.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="band pad-96">
        <div className="wrap">
          <Reveal className="sec-head-c">
            <div className="title-line" />
            <p className="eyebrow">What drives us</p>
            <h2>The principles behind every build.</h2>
            <p>Three values that shape how we design, fabricate and deliver — on every floor, in every city.</p>
          </Reveal>
          <div className="cards">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i} className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {v.icon}
                  </svg>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach (world map) */}
      <section className="mapsec alt">
        <div className="wrap">
          <div className="map-copy">
            <Reveal as="p" className="eyebrow">
              Global reach
            </Reveal>
            <Reveal as="h2" delay={1}>
              A partner wherever your brand shows up.
            </Reveal>
            <Reveal as="p" delay={2} className="lede2">
              From Las Vegas to Milan, Berlin to Dubai, we design, build and manage exhibitions across the world — so
              your brand looks its best on every floor.
            </Reveal>
            <Reveal delay={3}>
              <Btn to="/contact" className="btn lg">
                Work with us
              </Btn>
            </Reveal>
          </div>
          <WorldMap maskId="worldMaskAbout" patternId="dotPatternAbout" />
        </div>
      </section>

      <CtaBand
        title="Let's create something together."
        lede="Tell us about your next exhibition and we'll help you turn it into an experience your audience won't forget."
        label="Get in touch"
      />
    </>
  )
}
