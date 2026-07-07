import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'
import Btn from '../components/Btn'
import WorldMap from '../components/WorldMap'
import ProjectCard from '../components/ProjectCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import CtaBand from '../components/CtaBand'
import { IMG, PROJECTS, CLIENTS } from '../data/content'

/** Splits a line into per-word masked spans for the staggered hero entrance. */
function SplitWords({ text, baseDelay = 0, em = false }) {
  const words = text.split(' ')
  const Word = em ? 'em' : 'span'
  return words.map((w, i) => (
    <span key={i} className="w">
      <Word style={{ '--d': `${(baseDelay + i * 0.07).toFixed(2)}s` }}>{w}{' '}</Word>
    </span>
  ))
}

function Hero() {
  const bgRef = useRef(null)

  // parallax: background layer drifts slower than scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translateY(${(window.scrollY * 0.28).toFixed(1)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div ref={bgRef} className="hero-bg" style={{ '--hero-img': `url("${IMG.hero}")` }} />
      <div className="wrap">
        <div className="hero-inner">
          <Reveal as="p" className="eyebrow">
            Exhibitions · Brand Experiences · Live Events
          </Reveal>
          <h1>
            <SplitWords text="Crafting Impactful" baseDelay={0.15} />
            <br />
            <SplitWords text="Exhibition Experiences" baseDelay={0.35} />
            <br />
            <SplitWords text="Worldwide" baseDelay={0.55} em />
          </h1>
          <Reveal as="p" delay={2} className="lede">
            517 EXHIBITS is an experiential design studio specializing in trade show displays, custom brand
            environments, and live events — from concept to completion.
          </Reveal>
          <Reveal delay={3} className="hero-actions">
            <Btn to="/work" className="btn lg">
              Featured work
            </Btn>
            <Btn to="/about" className="btn lg outline">
              About 517 <span className="arrow" />
            </Btn>
          </Reveal>
          <Reveal delay={3} className="hero-award">
            <span className="best">Best of</span>
            <span className="big">CES</span>
            <span className="year">AWARD 2023</span>
            <span className="sub">Exhibitor</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const SPANS = ['col-7', 'col-5', 'col-5', 'col-7']
const WIDE = [true, false, false, true]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Capability 1: custom events & displays (world map) */}
      <section className="mapsec" id="services">
        <div className="wrap">
          <div className="map-copy">
            <Reveal as="p" className="eyebrow">
              Custom Events &amp; Displays
            </Reveal>
            <Reveal as="h2" delay={1}>
              Custom events and displays to bring your brand to life.
            </Reveal>
            <Reveal as="p" delay={2} className="lede2">
              We work exclusively with your team to craft trade show displays and high-impact events that exhibit your
              brand through innovative production and cutting-edge technology.
            </Reveal>
            <Reveal delay={3}>
              <Btn to="/about" className="btn lg">
                About us
              </Btn>
            </Reveal>
          </div>
          <WorldMap maskId="worldMaskHome" patternId="dotPatternHome" />
        </div>
      </section>

      {/* Capability 2: 360 brand creative */}
      <section className="third-section">
        <Reveal
          className="third-image"
          role="img"
          aria-label="517 EXHIBITS brand creative environment"
          style={{ backgroundImage: `url("${IMG.cap2}")` }}
        />
        <div className="third-copy">
          <Reveal delay={1} className="third-copy-inner">
            <h2 className="third-title">360° brand creative and design.</h2>
            <p className="third-desc">
              In addition to our key work in trade show displays, 517 EXHIBITS provides full-service experiential
              support, brand creative, and event production to a diverse set of clients around the world.
            </p>
            <Btn to="/services" className="orange-btn">
              Our services
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* Featured work */}
      <section className="band work" id="work">
        <div className="wrap">
          <div className="sec-head">
            <Reveal as="h2">Featured work</Reveal>
            <Reveal as="p" delay={1}>
              A selection of immersive exhibition environments we've designed, built and delivered for global brands.
            </Reveal>
          </div>
          <div className="work-grid">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.title} project={p} span={SPANS[i]} wide={WIDE[i]} delay={i % 2} />
            ))}
          </div>
          <Reveal className="work-foot">
            <Btn to="/work" className="btn lg ghost" arrow>
              View all work
            </Btn>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="band" id="about">
        <div className="wrap">
          <div className="split">
            <Reveal className="split-copy">
              <p className="eyebrow">About 517</p>
              <h3>We turn creative vision into immersive experiences.</h3>
              <p>
                At 517 EXHIBITS, we bring a global perspective and meticulous execution to every project — supporting
                brands from concept to completion. We believe every space should tell a compelling story, and we obsess
                over the details that make that story unforgettable.
              </p>
              <p>
                Our multidisciplinary team of designers, fabricators and producers works as one, so your exhibition is
                delivered on brief, on budget, and on the day it matters most.
              </p>
              <div className="hero-actions" style={{ marginTop: 30 }}>
                <Btn to="/contact" className="btn">
                  Work with us
                </Btn>
              </div>
            </Reveal>
            <Reveal delay={1} className="split-media">
              <img src={IMG.about} alt="517 EXHIBITS team crafting an exhibition environment" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials + client logo marquee */}
      <section className="tsec">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="section-title">Testimonials</h2>
            <div className="title-line" />
            <p className="section-subtitle">See what our clients have to say about us.</p>
          </Reveal>

          <TestimonialCarousel />

          <Reveal className="client-marquee" aria-label="Client logos">
            <div className="client-track">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <div key={i} className={`client-logo ${c.cls}`} aria-hidden={i >= CLIENTS.length}>
                  {c.node}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to get started?"
        lede="Tell us about your next exhibition and we'll help you turn it into an experience your audience won't forget."
      />
    </>
  )
}
